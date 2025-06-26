#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'
import { marked } from 'marked'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CHANGELOG_DIR = path.join(__dirname, '..', 'changelog', 'entries')
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'changelog.json')

marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
  mangle: false
})

// Map tags to semantic categories
const TAG_TO_CATEGORY_MAP = {
  'Indexing API': 'API',
  'Client API': 'API', 
  'SDK': 'SDK',
  'Developer Site': 'Documentation',
  'Breaking': 'Breaking',
  'Security': 'Security',
  'Enhancement': 'Enhancement',
  'Bug Fix': 'Bug Fix',
  'Feature': 'Feature',
  'Deprecation': 'Deprecation'
}

function processCategories(tags) {
  const categories = new Set()
  
  for (const tag of tags) {
    if (TAG_TO_CATEGORY_MAP[tag]) {
      categories.add(TAG_TO_CATEGORY_MAP[tag])
    } else {
      // Use the tag itself as a category if no mapping exists
      categories.add(tag)
    }
  }
  
  return Array.from(categories)
}

function markdownToHtml(markdown) {
  return marked(markdown)
}

function processChangelogContent(content) {
  const truncateMarkers = ['{/* truncate */}', '<!-- truncate -->', '<!-- more -->']
  
  for (const marker of truncateMarkers) {
    if (content.includes(marker)) {
      const parts = content.split(marker)
      return {
        summary: markdownToHtml(parts[0].trim()),
        fullContent: markdownToHtml(content.replace(marker, '').trim()),
        hasTruncation: true
      }
    }
  }
  
  const paragraphs = content.split('\n\n')
  if (paragraphs.length > 1) {
    return {
      summary: markdownToHtml(paragraphs[0].trim()),
      fullContent: markdownToHtml(content),
      hasTruncation: true
    }
  } else if (content.length > 200) {
    const truncatedContent = content.substring(0, 200).trim()
    const lastSpaceIndex = truncatedContent.lastIndexOf(' ')
    const cleanTruncation = lastSpaceIndex > 0 ? truncatedContent.substring(0, lastSpaceIndex) : truncatedContent
    
    return {
      summary: markdownToHtml(cleanTruncation + '...'),
      fullContent: markdownToHtml(content),
      hasTruncation: true
    }
  }
  
  return {
    summary: markdownToHtml(content),
    fullContent: markdownToHtml(content),
    hasTruncation: false
  }
}

function parseChangelogEntry(fileName, rawContent) {
  const { data, content } = matter(rawContent)
  
  const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/)
  if (!dateMatch) {
    throw new Error(`Invalid changelog filename format: ${fileName}`)
  }
  
  const [, dateStr, slug] = dateMatch
  const date = new Date(dateStr)
  
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date in filename: ${dateStr}`)
  }
  
  const processedContent = processChangelogContent(content)
  
  const tags = data.tags || []
  const categories = processCategories(tags)
  
  return {
    id: `${dateStr}-${slug}`,
    slug,
    title: data.title,
    date: dateStr,
    tags,
    categories,
    summary: processedContent.summary,
    fullContent: processedContent.fullContent,
    hasTruncation: processedContent.hasTruncation,
    fileName
  }
}

function generateChangelogData() {
  if (!fs.existsSync(CHANGELOG_DIR)) {
    console.error('Changelog entries directory does not exist:', CHANGELOG_DIR)
    return
  }
  
  const files = fs.readdirSync(CHANGELOG_DIR)
    .filter(file => file.endsWith('.md'))
    .sort()
    .reverse()
  
  if (files.length === 0) {
    console.log('No changelog entries found')
    return
  }
  
  const entries = []
  
  files.forEach(fileName => {
    try {
      const filePath = path.join(CHANGELOG_DIR, fileName)
      const content = fs.readFileSync(filePath, 'utf-8')
      const entry = parseChangelogEntry(fileName, content)
      entries.push(entry)
    } catch (error) {
      console.error(`Error parsing changelog entry ${fileName}:`, error)
    }
  })
  
  const allTags = [...new Set(entries.flatMap(entry => entry.tags))].sort()
  const allCategories = [...new Set(entries.flatMap(entry => entry.categories))].sort()
  
  const changelogData = {
    entries,
    tags: allTags,
    categories: allCategories,
    generatedAt: new Date().toISOString(),
    totalEntries: entries.length
  }
  
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
  
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(changelogData, null, 2))
  console.log(`Generated changelog data with ${entries.length} entries`)
}

generateChangelogData() 