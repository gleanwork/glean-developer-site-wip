import type React from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import ChangelogEntries from './ChangelogEntries'
import type { ChangelogEntry } from '../../types/changelog'
import styles from './ChangelogList.module.css'

interface ChangelogListProps {
  entries: Array<ChangelogEntry>
  categories: Array<string>
}

export default function ChangelogList({ entries, categories }: ChangelogListProps): React.ReactElement {
  const tabItems = [
    <TabItem key="all" value="all" label="All" default>
      <ChangelogEntries entries={entries} />
    </TabItem>,
    ...categories.map((category) => (
      <TabItem 
        key={category} 
        value={category} 
        label={category}
      >
        <ChangelogEntries 
          entries={entries.filter((entry) => entry.categories.includes(category))} 
        />
      </TabItem>
    ))
  ]

  return (
    <div className={styles.changelogList}>
      <Tabs>
        {tabItems}
      </Tabs>
    </div>
  )
} 