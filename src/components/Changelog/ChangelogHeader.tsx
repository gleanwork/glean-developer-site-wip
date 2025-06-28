import type React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import styles from './ChangelogHeader.module.css'

export default function ChangelogHeader(): React.ReactElement {
  const rssUrl = useBaseUrl('/changelog.xml')
  
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        Changelog
        <a 
          href={rssUrl} 
          className={styles.rssLink}
          title="Subscribe to RSS feed"
          aria-label="Subscribe to RSS feed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faRss} className={styles.rssIcon} />
        </a>
      </h1>
    </div>
  )
} 