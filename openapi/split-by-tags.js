#!/usr/bin/env node

/**
 * Split OpenAPI spec by tags into separate complete API files
 * Usage: node split-by-tags.js input.yaml output-directory
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function splitOpenAPIByTags(inputFile, outputDir) {
  try {
    // Read and parse the OpenAPI file
    const fileContent = fs.readFileSync(inputFile, 'utf8');
    const apiSpec = yaml.load(fileContent);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Extract tag information from OpenAPI spec
    const tagInfo = {};
    if (apiSpec.tags) {
      apiSpec.tags.forEach(tag => {
        tagInfo[tag.name] = {
          name: tag.name,
          description: tag.description || tag.name,
          externalDocs: tag.externalDocs
        };
      });
    }

    // Extract all unique tags from paths
    const tags = new Set();
    const taggedPaths = {};
    const usedSchemas = new Set();

    // Group paths by tags
    Object.entries(apiSpec.paths || {}).forEach(([pathName, pathItem]) => {
      Object.entries(pathItem).forEach(([method, operation]) => {
        if (operation.tags && operation.tags.length > 0) {
          operation.tags.forEach(tag => {
            tags.add(tag);
            
            // If tag info not found in spec, create default
            if (!tagInfo[tag]) {
              tagInfo[tag] = {
                name: tag,
                description: tag,
                externalDocs: null
              };
            }
            
            if (!taggedPaths[tag]) {
              taggedPaths[tag] = {};
            }
            
            if (!taggedPaths[tag][pathName]) {
              taggedPaths[tag][pathName] = {};
            }
            
            taggedPaths[tag][pathName][method] = operation;

            // Track used schemas for this tag
            collectUsedSchemas(operation, usedSchemas, tag);
          });
        }
      });
    });

    // Create separate API files for each tag
    tags.forEach(tag => {
      const currentTagInfo = tagInfo[tag];
      
      const taggedAPI = {
        openapi: apiSpec.openapi,
        info: {
          ...apiSpec.info,
          title: currentTagInfo.description || currentTagInfo.name,
          description: `${currentTagInfo.description || tag} operations for ${apiSpec.info.title}`
        },
        servers: apiSpec.servers || [],
        // Include the tag definition in the new API
        tags: [{
          name: currentTagInfo.name,
          description: currentTagInfo.description,
          ...(currentTagInfo.externalDocs && { externalDocs: currentTagInfo.externalDocs })
        }],
        paths: taggedPaths[tag] || {},
        components: {
          ...filterComponentsByTag(apiSpec.components, tag, taggedPaths[tag]),
        }
      };

      // Add security definitions if they exist
      if (apiSpec.components?.securitySchemes) {
        taggedAPI.components.securitySchemes = apiSpec.components.securitySchemes;
      }

      // Create filename from tag description/summary, fallback to tag name
      const displayName = currentTagInfo.description || currentTagInfo.name;
      const filename = displayName.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') // Remove special chars except spaces
        .replace(/\s+/g, '-')        // Replace spaces with hyphens
        .replace(/-+/g, '-')         // Replace multiple hyphens with single
        .replace(/^-|-$/g, '');      // Remove leading/trailing hyphens
      
      const outputPath = path.join(outputDir, `${filename}-api.yaml`);
      
      fs.writeFileSync(outputPath, yaml.dump(taggedAPI, {
        noRefs: true,
        lineWidth: -1
      }));

      console.log(`✅ Created: ${outputPath}`);
      console.log(`   Title: "${displayName}"`);
      console.log(`   Paths: ${Object.keys(taggedPaths[tag] || {}).length}`);
      console.log('');
    });

    // Create index file with all tags info
    const indexFile = {
      tags: Array.from(tags).map(tag => {
        const currentTagInfo = tagInfo[tag];
        const displayName = currentTagInfo.description || currentTagInfo.name;
        const filename = displayName.toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');
        
        // Extract endpoint information for this tag
        const endpoints = [];
        Object.entries(taggedPaths[tag] || {}).forEach(([pathName, pathItem]) => {
          Object.entries(pathItem).forEach(([method, operation]) => {
            endpoints.push({
              method: method.toUpperCase(),
              path: pathName,
              summary: operation.summary || '',
              description: operation.description || '',
              operationId: operation.operationId || ''
            });
          });
        });
        
        return {
          name: tag,
          displayName: displayName,
          description: currentTagInfo.description,
          file: `${filename}-api.yaml`,
          configId: filename.replace(/-/g, '_'), // Suggested config ID for docusaurus
          paths: Object.keys(taggedPaths[tag] || {}).length,
          endpoints: endpoints
        };
      })
    };

    fs.writeFileSync(
      path.join(outputDir, 'split-info.json'), 
      JSON.stringify(indexFile, null, 2)
    );

    console.log(`🎉 Split complete! Created ${tags.size} API files in ${outputDir}`);
    console.log(`📋 See split-info.json for configuration details`);
    console.log(`\n📝 Suggested Docusaurus config:`);
    
    // Print suggested config
    indexFile.tags.forEach(tagInfo => {
      console.log(`  ${tagInfo.configId}: {`);
      console.log(`    specPath: "${outputDir}/${tagInfo.file}",`);
      console.log(`    outputDir: "docs/${tagInfo.configId}",`);
      console.log(`  },`);
    });

  } catch (error) {
    console.error('❌ Error splitting OpenAPI file:', error.message);
    process.exit(1);
  }
}

function collectUsedSchemas(operation, usedSchemas, tag) {
  // Collect schemas from parameters
  if (operation.parameters) {
    operation.parameters.forEach(param => {
      if (param.schema?.$ref) {
        const schemaName = param.schema.$ref.replace('#/components/schemas/', '');
        usedSchemas.add(`${tag}:${schemaName}`);
      }
    });
  }

  // Collect schemas from request body
  if (operation.requestBody?.content) {
    Object.values(operation.requestBody.content).forEach(mediaType => {
      if (mediaType.schema?.$ref) {
        const schemaName = mediaType.schema.$ref.replace('#/components/schemas/', '');
        usedSchemas.add(`${tag}:${schemaName}`);
      }
    });
  }

  // Collect schemas from responses
  if (operation.responses) {
    Object.values(operation.responses).forEach(response => {
      if (response.content) {
        Object.values(response.content).forEach(mediaType => {
          if (mediaType.schema?.$ref) {
            const schemaName = mediaType.schema.$ref.replace('#/components/schemas/', '');
            usedSchemas.add(`${tag}:${schemaName}`);
          }
        });
      }
    });
  }
}

function filterComponentsByTag(components, tag, taggedPaths) {
  if (!components) return {};

  const filteredComponents = {};
  
  // Get all schema references used in this tag's operations
  const usedSchemaRefs = new Set();
  
  Object.values(taggedPaths).forEach(pathItem => {
    Object.values(pathItem).forEach(operation => {
      collectSchemaRefs(operation, usedSchemaRefs);
    });
  });

  // Include only schemas that are referenced
  if (components.schemas && usedSchemaRefs.size > 0) {
    filteredComponents.schemas = {};
    
    // Add directly referenced schemas
    usedSchemaRefs.forEach(ref => {
      const schemaName = ref.replace('#/components/schemas/', '');
      if (components.schemas[schemaName]) {
        filteredComponents.schemas[schemaName] = components.schemas[schemaName];
      }
    });

    // Add nested schema dependencies
    addNestedSchemas(filteredComponents.schemas, components.schemas);
  }

  // Copy other components that might be needed
  ['parameters', 'responses', 'headers', 'examples', 'requestBodies'].forEach(componentType => {
    if (components[componentType]) {
      filteredComponents[componentType] = components[componentType];
    }
  });

  return filteredComponents;
}

function collectSchemaRefs(obj, refs) {
  if (typeof obj !== 'object' || obj === null) return;
  
  if (obj.$ref && obj.$ref.startsWith('#/components/schemas/')) {
    refs.add(obj.$ref);
  }
  
  Object.values(obj).forEach(value => {
    collectSchemaRefs(value, refs);
  });
}

function addNestedSchemas(filteredSchemas, allSchemas) {
  let foundNew = true;
  
  while (foundNew) {
    foundNew = false;
    const currentSchemas = { ...filteredSchemas };
    
    Object.values(currentSchemas).forEach(schema => {
      const nestedRefs = new Set();
      collectSchemaRefs(schema, nestedRefs);
      
      nestedRefs.forEach(ref => {
        const schemaName = ref.replace('#/components/schemas/', '');
        if (allSchemas[schemaName] && !filteredSchemas[schemaName]) {
          filteredSchemas[schemaName] = allSchemas[schemaName];
          foundNew = true;
        }
      });
    });
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length !== 2) {
    console.log('Usage: node split-by-tags.js <input-openapi.yaml> <output-directory>');
    console.log('');
    console.log('Example:');
    console.log('  node split-by-tags.js openapi.yaml ./split-apis/');
    process.exit(1);
  }

  const [inputFile, outputDir] = args;
  
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    process.exit(1);
  }

  splitOpenAPIByTags(inputFile, outputDir);
}

module.exports = { splitOpenAPIByTags };