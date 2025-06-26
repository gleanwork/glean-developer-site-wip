# Changelog Management Guide

This guide explains how to create and manage changelog entries for the Glean Developer site.

## Directory Structure

All changelog entries are stored in the `changelog/entries/` directory as Markdown files.

## File Naming Convention

Use the following naming pattern for changelog files:
```YYYY-MM-DD-descriptive-slug.md
```

**Examples:**
- `2025-06-17-oauth-remote-mcp.md`
- `2025-05-31-api-reference-updates.md`
- `2025-04-15-new-governance-endpoints.md`

## File Format

Each changelog entry should follow this structure:

```markdown
---
title: "Your Entry Title"
tags: ["Indexing API", "Feature"] # Required: array of tags
---

Brief description of the change that appears on the main changelog page.

{/* truncate */}

## Detailed Information

More detailed information that only appears on the individual entry page.

### Subsections

You can include:
- Code examples
- Links to documentation
- Breaking changes
- Migration guides
```

## Frontmatter Fields

- **title** (required): The display title for the changelog entry
- **tags** (required): Array of tags that get mapped to semantic categories

## Available Tags

The following tags are automatically mapped to semantic categories:

### API Related
- `Indexing API` → **API** category
- `Client API` → **API** category

### SDK Related  
- `SDK` → **SDK** category

### Documentation
- `Developer Site` → **Documentation** category

### Change Types
- `Feature` → **Feature** category
- `Enhancement` → **Enhancement** category
- `Bug Fix` → **Bug Fix** category
- `Breaking` → **Breaking** category
- `Security` → **Security** category
- `Deprecation` → **Deprecation** category

Tags not in the above list will be used as-is for category names.

## Truncation

Use one of the following markers to separate content:
- `{/* truncate */}` (recommended for MDX compatibility)
- `<!-- truncate -->`
- `<!-- more -->`

Content **before** the marker appears on the main changelog page, while content **after** the marker only appears on individual entry pages.

If no truncate marker exists, the system will automatically truncate content using these fallback rules:
1. First paragraph only (if multiple paragraphs exist)
2. First 200 characters with word boundary truncation (if content is very long)

## Best Practices

1. **Keep summaries concise** - The pre-truncate content should be 1-3 sentences
2. **Use descriptive titles** - Make it clear what the change is about
3. **Choose appropriate tags** - Use multiple tags when relevant, focusing on the primary API/feature affected
4. **Include relevant links** - Link to documentation, GitHub issues, or related resources
5. **Add dates consistently** - Use YYYY-MM-DD format in filenames
6. **Write for developers** - Assume your audience is technical

## Examples

See the existing entries in `changelog/entries/` for examples of well-formatted changelog entries.

## Build Integration

The changelog system is integrated into the build process:

1. **Development**: Run `npm run generate:changelog` to process entries
2. **Production**: The `npm run build` command automatically generates changelog data
3. **Hot Reloading**: Changes to entries are reflected immediately during development

## Publishing

Once you save a new markdown file in the `changelog/entries/` directory and run the build command, it will automatically appear on the changelog page with proper categorization and timeline formatting. 