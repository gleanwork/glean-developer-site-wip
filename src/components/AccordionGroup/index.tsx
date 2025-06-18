import type { ReactNode } from "react"
import styles from "./styles.module.css"

interface AccordionGroupProps {
  children: ReactNode
}

export function AccordionGroup({ children }: AccordionGroupProps) {
  return <div className={styles.accordionGroup}>{children}</div>
}
