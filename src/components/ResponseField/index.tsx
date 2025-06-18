import type { ReactNode } from "react"
import styles from "./styles.module.css"

interface ResponseFieldProps {
  name: string
  type: string
  default?: string
  required?: boolean
  deprecated?: boolean
  pre?: string[]
  post?: string[]
  children: ReactNode
}

export function ResponseField({
  name,
  type,
  default: defaultValue,
  required = false,
  deprecated = false,
  pre = [],
  post = [],
  children,
}: ResponseFieldProps) {
  return (
    <div className={styles.responseField}>
      <div className={styles.fieldHeader}>
        {pre.map((label, index) => (
          <span key={index} className={styles.preLabel}>
            {label}
          </span>
        ))}
        <span className={`${styles.fieldName} ${deprecated ? styles.deprecated : ""}`}>{name}</span>
        {post.map((label, index) => (
          <span key={index} className={styles.postLabel}>
            {label}
          </span>
        ))}
        <span className={styles.fieldType}>{type}</span>
        {required && <span className={styles.requiredLabel}>required</span>}
        {deprecated && <span className={styles.deprecatedLabel}>deprecated</span>}
        {defaultValue && <span className={styles.defaultLabel}>default: {defaultValue}</span>}
      </div>
      <div className={styles.fieldDescription}>{children}</div>
    </div>
  )
}
