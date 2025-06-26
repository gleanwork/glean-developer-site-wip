export interface ChangelogEntry {
  id: string
  slug: string
  title: string
  date: string // ISO date string
  tags: Array<string>
  categories: Array<string> // Processed semantic categories
  summary: string
  fullContent: string
  hasTruncation: boolean
  fileName: string
}

export interface ChangelogData {
  entries: Array<ChangelogEntry>
  tags: Array<string>
  categories: Array<string> // All unique categories for filtering
  generatedAt: string
  totalEntries: number
}

// Map tags to semantic categories
export const TAG_TO_CATEGORY_MAP: Record<string, string> = {
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

export const CATEGORY_COLORS: Record<string, string> = {
  'API': 'primary',
  'SDK': 'info',
  'Documentation': 'secondary',
  'Breaking': 'danger',
  'Security': 'warning',
  'Enhancement': 'success',
  'Bug Fix': 'warning',
  'Feature': 'success',
  'Deprecation': 'secondary'
}

 