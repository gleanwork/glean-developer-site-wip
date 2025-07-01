#!/usr/bin/env node

/**
 * Capitalize language names in x-codeSamples throughout an OpenAPI spec
 * Usage: node capitalize-code-samples.js input.yaml [output.yaml]
 */

const fs = require('fs');
const yaml = require('js-yaml');

function capitalizeLanguageName(lang) {
  // Common programming languages and their proper capitalization
  const languageMap = {
    'python': 'Python',
    'java': 'Java',
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'go': 'Go',
    'ruby': 'Ruby',
    'php': 'PHP',
    'csharp': 'C#',
    'cpp': 'C++',
    'c': 'C',
    'rust': 'Rust',
    'swift': 'Swift',
    'kotlin': 'Kotlin',
    'scala': 'Scala',
    'shell': 'Shell',
    'bash': 'Bash',
    'curl': 'cURL'
  };
  
  return languageMap[lang.toLowerCase()] || lang.charAt(0).toUpperCase() + lang.slice(1);
}

function processCodeSamples(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  // If this object has x-codeSamples, process them
  if (obj['x-codeSamples'] && Array.isArray(obj['x-codeSamples'])) {
    obj['x-codeSamples'].forEach(sample => {
      if (sample.lang) {
        const oldLang = sample.lang;
        sample.lang = capitalizeLanguageName(sample.lang);
        if (oldLang !== sample.lang) {
          console.log(`   ${oldLang} → ${sample.lang}`);
        }
      }
    });
  }

  // Recursively process all nested objects and arrays
  Object.values(obj).forEach(value => {
    if (Array.isArray(value)) {
      value.forEach(item => processCodeSamples(item));
    } else if (typeof value === 'object') {
      processCodeSamples(value);
    }
  });
}

function capitalizeCodeSamples(inputFile, outputFile) {
  try {
    console.log(`📖 Reading ${inputFile}...`);
    const fileContent = fs.readFileSync(inputFile, 'utf8');
    const apiSpec = yaml.load(fileContent);

    console.log('🔤 Processing x-codeSamples...');
    processCodeSamples(apiSpec);

    const output = outputFile || inputFile;
    console.log(`💾 Writing to ${output}...`);
    
    fs.writeFileSync(output, yaml.dump(apiSpec, {
      noRefs: true,
      lineWidth: -1
    }));

    console.log('✅ Done! Language names have been capitalized.');

  } catch (error) {
    console.error('❌ Error processing file:', error.message);
    process.exit(1);
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.log('Usage: node capitalize-code-samples.js <input.yaml> [output.yaml]');
    console.log('');
    console.log('Examples:');
    console.log('  node capitalize-code-samples.js api.yaml');
    console.log('  node capitalize-code-samples.js api.yaml api-updated.yaml');
    console.log('');
    console.log('If output file is not specified, the input file will be updated in place.');
    process.exit(1);
  }

  const inputFile = args[0];
  const outputFile = args[1];
  
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    process.exit(1);
  }

  capitalizeCodeSamples(inputFile, outputFile);
}

module.exports = { capitalizeCodeSamples, capitalizeLanguageName };