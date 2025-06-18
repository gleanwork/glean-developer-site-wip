"use client"

import { useState, Children, isValidElement, type ReactNode } from "react"
import { Copy, Maximize } from "lucide-react"
import styles from "./styles.module.css"

interface CodeGroupProps {
  children: ReactNode
}

export function CodeGroup({ children }: CodeGroupProps) {
  const codeElements = Children.toArray(children).filter(isValidElement)
  const [activeTab, setActiveTab] = useState(0)

  if (codeElements.length === 0) {
    return null
  }

  const getFilename = (element: any) => {
    // Try to get filename from various possible sources
    return (
      element.props?.filename ||
      element.props?.title ||
      element.props?.["data-filename"] ||
      `Code ${codeElements.indexOf(element) + 1}`
    )
  }

  const getCodeContent = (element: any) => {
    // Extract text content from the element
    if (typeof element.props?.children === "string") {
      return element.props.children
    }
    // For more complex structures, try to extract text
    return element.props?.children?.toString() || ""
  }

  const handleCopy = () => {
    const activeElement = codeElements[activeTab]
    const codeContent = getCodeContent(activeElement)
    navigator.clipboard.writeText(codeContent)
  }

  const handleMaximize = () => {
    console.log("Maximize code view")
  }

  return (
    <div className={styles.codeGroup}>
      <div className={styles.tabBar}>
        {codeElements.map((element, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${index === activeTab ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {getFilename(element)}
          </button>
        ))}
        <div className={styles.actions}>
          <button className={styles.actionButton} onClick={handleCopy} aria-label="Copy code">
            <Copy size={18} />
          </button>
          <button className={styles.actionButton} onClick={handleMaximize} aria-label="Maximize code view">
            <Maximize size={18} />
          </button>
        </div>
      </div>
      <div className={styles.codeContainer}>
        {codeElements.map((element, index) => (
          <div
            key={index}
            className={`${styles.codeBlockWrapper} ${index === activeTab ? styles.activeCodeBlock : ""}`}
          >
            <div className={styles.codeContent}>{element}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
