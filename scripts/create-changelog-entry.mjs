#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';
import slugify from 'slugify';
import chalk from 'chalk';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHANGELOG_DIR = path.join(__dirname, '..', 'changelog', 'entries');
const TEMPLATE_FILE = path.join(__dirname, 'templates', 'changelog-entry.md');

const PRIMARY_TAGS = [
  'Client API',
  'Indexing API', 
  'API Clients',
  'Agent Interop Toolkit',
  'Glean Indexing SDK',
  'langchain-glean',
  'MCP'
];

const SECONDARY_TAGS = [
  'Feature',
  'Enhancement', 
  'Bug Fix',
  'Breaking',
  'Security',
  'Deprecation',
  'Documentation'
];

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function createSlug(title) {
  return slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g
  });
}

function generateFilename(title) {
  const date = getCurrentDate();
  const slug = createSlug(title);
  let filename = `${date}-${slug}.md`;
  let counter = 1;
  
  while (fs.existsSync(path.join(CHANGELOG_DIR, filename))) {
    filename = `${date}-${slug}-${counter}.md`;
    counter++;
  }
  
  return filename;
}

function formatTags(primaryTag, secondaryTags) {
  const allTags = [primaryTag, ...secondaryTags];
  return allTags.map(tag => `"${tag}"`).join(', ');
}

function replaceTemplateVariables(template, variables) {
  let result = template;
  for (const [key, value] of Object.entries(variables)) {
    const placeholder = `{{${key}}}`;
    result = result.replace(new RegExp(placeholder, 'g'), value);
  }
  return result;
}

async function promptUser() {
  console.log(chalk.cyan('✨ Creating a new changelog entry...\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Entry title:',
      validate: (input) => {
        if (!input.trim()) {
          return 'Title is required';
        }
        if (input.length > 100) {
          return 'Title should be less than 100 characters';
        }
        return true;
      }
    },
    {
      type: 'list',
      name: 'primaryTag',
      message: 'Select primary component:',
      choices: PRIMARY_TAGS
    },
    {
      type: 'checkbox',
      name: 'secondaryTags',
      message: 'Select change types (space to select, enter to continue):',
      choices: SECONDARY_TAGS
    },
    {
      type: 'editor',
      name: 'summary',
      message: 'Brief summary (appears on main changelog page):',
      validate: (input) => {
        if (!input.trim()) {
          return 'Summary is required';
        }
        return true;
      }
    },
    {
      type: 'confirm',
      name: 'addDetailedContent',
      message: 'Add detailed content?',
      default: false
    }
  ]);

  if (answers.addDetailedContent) {
    const detailedAnswer = await inquirer.prompt([
      {
        type: 'editor',
        name: 'detailedContent',
        message: 'Detailed content (appears after "Read more"):',
        default: `## Additional Details

Add more detailed information here, such as:
- Code examples
- Migration guides  
- Links to documentation
- Breaking change details`
      }
    ]);
    answers.detailedContent = detailedAnswer.detailedContent;
  } else {
    answers.detailedContent = `## Additional Details

Add more detailed information here, such as:
- Code examples
- Migration guides
- Links to documentation
- Breaking change details`;
  }

  return answers;
}

async function createChangelogEntry() {
  try {
    // Ensure directories exist
    fs.mkdirSync(CHANGELOG_DIR, { recursive: true });
    fs.mkdirSync(path.dirname(TEMPLATE_FILE), { recursive: true });

    // Create template if it doesn't exist
    if (!fs.existsSync(TEMPLATE_FILE)) {
      const defaultTemplate = `---
title: "{{TITLE}}"
tags: [{{TAGS}}]
---

{{SUMMARY}}

{/* truncate */}

{{DETAILED_CONTENT}}`;
      fs.writeFileSync(TEMPLATE_FILE, defaultTemplate);
    }

    // Get user input
    const answers = await promptUser();
    
    // Generate filename
    const filename = generateFilename(answers.title);
    const filepath = path.join(CHANGELOG_DIR, filename);
    
    // Read template
    const template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');
    
    // Replace template variables
    const variables = {
      TITLE: answers.title,
      TAGS: formatTags(answers.primaryTag, answers.secondaryTags),
      SUMMARY: answers.summary.trim(),
      DETAILED_CONTENT: answers.detailedContent.trim()
    };
    
    const content = replaceTemplateVariables(template, variables);
    
    // Write file
    fs.writeFileSync(filepath, content);
    
    console.log(chalk.green(`\n✅ Created: ${path.relative(process.cwd(), filepath)}`));
    console.log(chalk.yellow('📝 Next steps:'));
    console.log(chalk.yellow('  • Run: yarn generate:changelog (to update data)'));
    console.log(chalk.yellow('  • Run: yarn start (to see changes locally)'));
    
  } catch (error) {
    console.error(chalk.red('❌ Error creating changelog entry:'), error.message);
    process.exit(1);
  }
}

createChangelogEntry(); 