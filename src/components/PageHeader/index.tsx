import type React from "react"
import "./styles.module.css"

interface PageHeaderProps {
  title: string
  description?: string
  icon?: string | React.ReactNode
}

export default function PageHeader({ title, description, icon }: PageHeaderProps) {
  const renderIcon = () => {
    if (!icon) return null

    if (typeof icon === "string") {
      return <span className="page-header__icon-text">{icon}</span>
    }

    return <div className="page-header__icon">{icon}</div>
  }

  return (
    <div className="page-header">
      <div className="page-header__label">
        {renderIcon()}
      </div>
      <h1 className="page-header__title">{title}</h1>
      {description && <p className="page-header__description">{description}</p>}
    </div>
  )
}
