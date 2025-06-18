#!/usr/bin/env node

/**
 * Split Announcements API into smaller files WITHOUT removing anything
 * This script ONLY splits - it preserves ALL content, schemas, examples, code samples, etc.
 * Usage: node split-announcements.js announcements-api.yaml output-directory
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function splitAnnouncementsAPI(inputFile, outputDir) {
  try {
    const fileContent = fs.readFileSync(inputFile, 'utf8');
    const apiSpec = yaml.load(fileContent);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('📢 Splitting Announcements API (preserving ALL content)...');

    // Define the splits - group operations by functionality
    const operationGroups = {
      'announcements-create': {
        description: 'Create Announcements',
        operations: ['createannouncement'],
        paths: ['/createannouncement']
      },
      'announcements-update': {
        description: 'Update Announcements',
        operations: ['updateannouncement'],
        paths: ['/updateannouncement']
      },
      'announcements-delete': {
        description: 'Delete Announcements',
        operations: ['deleteannouncement'],
        paths: ['/deleteannouncement']
      }
    };

    // Create each focused API file
    Object.entries(operationGroups).forEach(([groupName, groupInfo]) => {
      const groupedAPI = createCompleteGroupedAPI(apiSpec, groupInfo);
      
      const outputPath = path.join(outputDir, `${groupName}-api.yaml`);
      fs.writeFileSync(outputPath, yaml.dump(groupedAPI, {
        noRefs: true,
        lineWidth: -1,
        quotingType: '"',
        forceQuotes: false
      }));

      console.log(`✅ Created: ${outputPath}`);
      console.log(`   Title: "${groupInfo.description}"`);
      console.log(`   Operations: ${groupInfo.operations.length}`);
      console.log(`   Paths: ${groupInfo.paths.length}`);
      
      // Show what was preserved
      const pathsInFile = Object.keys(groupedAPI.paths);
      const schemasInFile = Object.keys(groupedAPI.components?.schemas || {});
      console.log(`   📝 Paths preserved: ${pathsInFile.length}`);
      console.log(`   🔧 Schemas preserved: ${schemasInFile.length}`);
      
      // Check for code samples
      let codeSamplesCount = 0;
      pathsInFile.forEach(pathName => {
        Object.values(groupedAPI.paths[pathName]).forEach(operation => {
          if (operation['x-codeSamples']) {
            codeSamplesCount += operation['x-codeSamples'].length;
          }
        });
      });
      console.log(`   💻 Code samples preserved: ${codeSamplesCount}`);
      console.log('');
    });

    // Create index file with configuration
    const indexFile = {
      splitInfo: {
        originalFile: path.basename(inputFile),
        splitDate: new Date().toISOString(),
        totalGroups: Object.keys(operationGroups).length,
        preservationNote: "ALL content preserved - no data removed, only grouped by operation"
      },
      groups: Object.entries(operationGroups).map(([groupName, groupInfo]) => ({
        configId: groupName.replace(/-/g, '_'),
        name: groupName,
        description: groupInfo.description,
        file: `${groupName}-api.yaml`,
        operations: groupInfo.operations,
        paths: groupInfo.paths
      }))
    };

    fs.writeFileSync(
      path.join(outputDir, 'announcements-split-info.json'),
      JSON.stringify(indexFile, null, 2)
    );

    console.log(`🎉 Split complete! Created ${Object.keys(operationGroups).length} focused API files`);
    console.log(`✨ ALL content preserved: schemas, code samples, examples, extensions, etc.`);
    console.log(`📋 See announcements-split-info.json for configuration details`);
    
    // Print suggested Docusaurus config
    console.log(`\n📝 Suggested Docusaurus config:`);
    indexFile.groups.forEach(group => {
      console.log(`  ${group.configId}: {`);
      console.log(`    specPath: "${outputDir}/${group.file}",`);
      console.log(`    outputDir: "docs/${group.configId}",`);
      console.log(`    sidebarOptions: {`);
      console.log(`      groupPathsBy: "tag",`);
      console.log(`    },`);
      console.log(`  },`);
    });

  } catch (error) {
    console.error('❌ Error splitting Announcements API:', error.message);
    process.exit(1);
  }
}

function createCompleteGroupedAPI(originalAPI, groupInfo) {
  // Start with a COMPLETE copy of the original API
  const groupedAPI = JSON.parse(JSON.stringify(originalAPI));
  
  // Update title and description to reflect the group
  groupedAPI.info = {
    ...originalAPI.info,
    title: groupInfo.description,
    description: `${groupInfo.description} operations for ${originalAPI.info.title}`
  };

  // Keep ALL servers, tags, components - don't remove anything
  // Only filter the paths to include just this group's operations
  const filteredPaths = {};
  
  groupInfo.paths.forEach(pathName => {
    if (originalAPI.paths[pathName]) {
      // Copy the ENTIRE path object with ALL operations, code samples, extensions, etc.
      filteredPaths[pathName] = JSON.parse(JSON.stringify(originalAPI.paths[pathName]));
    }
  });
  
  // Replace paths with filtered ones
  groupedAPI.paths = filteredPaths;

  // Keep ALL components/schemas - don't try to filter them out
  // This ensures we don't break any references and preserve everything
  if (originalAPI.components) {
    groupedAPI.components = JSON.parse(JSON.stringify(originalAPI.components));
  }

  // Keep ANY other top-level properties that might exist
  Object.keys(originalAPI).forEach(key => {
    if (!['info', 'paths', 'components'].includes(key)) {
      groupedAPI[key] = JSON.parse(JSON.stringify(originalAPI[key]));
    }
  });

  return groupedAPI;
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length !== 2) {
    console.log('Usage: node split-announcements.js <announcements-api.yaml> <output-directory>');
    console.log('');
    console.log('This script ONLY splits the API by grouping operations.');
    console.log('It preserves ALL content: schemas, code samples, examples, extensions, etc.');
    console.log('');
    console.log('Example:');
    console.log('  node split-announcements.js announcements-api.yaml ./announcements-split/');
    process.exit(1);
  }

  const [inputFile, outputDir] = args;
  
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    process.exit(1);
  }

  splitAnnouncementsAPI(inputFile, outputDir);
}

module.exports = { splitAnnouncementsAPI };