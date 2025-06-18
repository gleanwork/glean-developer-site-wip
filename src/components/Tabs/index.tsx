"use client"

import React, { useState, useEffect, createContext, useContext } from "react"
import styles from "./styles.module.css"

// Context to manage tab state
const TabsContext = createContext<{
  activeTab: string
  setActiveTab: (id: string) => void
  registerTab: (id: string, title: string) => void
  tabsIds: string[]
}>({
  activeTab: "",
  setActiveTab: () => {},
  registerTab: () => {},
  tabsIds: [],
})

interface TabsProps {
  children: React.ReactNode
  defaultTab?: string
}

interface TabProps {
  title: string
  children: React.ReactNode
}

export function Tabs({ children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>("")
  const [tabs, setTabs] = useState<{ [key: string]: string }>({})
  const [tabsIds, setTabsIds] = useState<string[]>([])

  // Register a new tab
  const registerTab = (id: string, title: string) => {
    setTabs((prevTabs) => {
      if (prevTabs[id]) return prevTabs
      return { ...prevTabs, [id]: title }
    })
    setTabsIds((prevIds) => {
      if (prevIds.includes(id)) return prevIds
      return [...prevIds, id]
    })
  }

  // Set the first tab as active by default
  useEffect(() => {
    if (tabsIds.length > 0 && !activeTab) {
      if (defaultTab && tabs[defaultTab]) {
        setActiveTab(defaultTab)
      } else {
        setActiveTab(tabsIds[0])
      }
    }
  }, [tabsIds, activeTab, defaultTab, tabs])

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, registerTab, tabsIds }}>
      <div className={styles.tabs}>
        <div className={styles.tabs__header} role="tablist">
          {tabsIds.map((id) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`tab-panel-${id}`}
              id={`tab-${id}`}
              className={`${styles.tabs__tab} ${activeTab === id ? styles.tabs__tab_active : ''}`}
              onClick={() => setActiveTab(id)}
            >
              {tabs[id]}
            </button>
          ))}
        </div>
        <div className={styles.tabs__content}>{children}</div>
      </div>
    </TabsContext.Provider>
  )
}

export function Tab({ title, children }: TabProps) {
  const { activeTab, registerTab } = useContext(TabsContext)
  const id = React.useId()

  // Register this tab with the parent Tabs component
  useEffect(() => {
    registerTab(id, title)
  }, [id, registerTab, title])

  if (activeTab !== id) {
    return null
  }

  return (
    <div 
      role="tabpanel" 
      id={`tab-panel-${id}`} 
      aria-labelledby={`tab-${id}`} 
      className={styles.tabs__panel}
    >
      {children}
    </div>
  )
}
