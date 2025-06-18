import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface CardProps {
  title: string;
  icon?: string | React.ReactNode;
  iconType?: "regular" | "solid" | "light" | "thin" | "sharp-solid" | "duotone" | "brands";
  color?: string;
  href?: string;
  horizontal?: boolean;
  img?: string;
  cta?: string;
  arrow?: boolean;
  children?: React.ReactNode;
}

// Icon mapping for common icons. Later can call api to automatically get icon for the word.
const iconMap: { [key: string]: React.ReactNode } = {
  quickstart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
  ),
    code:(
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
  ),
  guides:(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>
  ),
  comments: (
    <svg viewBox="0 0 122.88 108.31" fill="currentColor" width="24" height="24">
        <path d="M51.46,93.86c12.9,12.44,31.14,16.2,49.38,8.43l15.31,6-5.07-12.06c17-13.63,14-32.35,1.44-45.11A44.05,44.05,0,0,1,107.65,65,51.25,51.25,0,0,1,93.58,81,62.69,62.69,0,0,1,73.92,91a70.44,70.44,0,0,1-22.46,2.9ZM31.58,54.07a3.11,3.11,0,0,1,0-6.21H61.51a3.11,3.11,0,0,1,0,6.21Zm0-17.22a3.11,3.11,0,0,1,0-6.21H74.34a3.11,3.11,0,0,1,0,6.21ZM54.28,0h0C68.81.47,81.8,5.62,91.09,13.59c9.49,8.13,15.17,19.2,14.82,31.27v0C105.54,57,99.19,67.71,89.22,75.28,79.44,82.7,66.15,87.07,51.66,86.65A63.91,63.91,0,0,1,40,85.24a60.48,60.48,0,0,1-9.87-3L6.69,91.44l7.83-18.63A44,44,0,0,1,4,59.5,36.67,36.67,0,0,1,0,41.79C.38,29.7,6.73,19,16.7,11.4,26.48,4,39.78-.4,54.26,0Zm-.15,6.18h-.05C41,5.83,29.14,9.72,20.44,16.32,11.92,22.78,6.5,31.84,6.2,42A30.49,30.49,0,0,0,9.55,56.71,38.76,38.76,0,0,0,20.17,69.47L22,70.93,18.08,80.3l12.08-4.75,1.17.5a55.08,55.08,0,0,0,9.91,3.13,58.52,58.52,0,0,0,10.59,1.29c13,.38,25-3.51,33.66-10.12C94,63.89,99.42,54.84,99.73,44.72v0c.29-10.11-4.56-19.45-12.66-26.4C78.79,11.19,67.16,6.61,54.15,6.21Z"/>
    </svg>
    ),
  agents: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6V2H8"/><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"/><path d="M2 12h2"/><path d="M9 11v2"/><path d="M15 11v2"/><path d="M20 12h2"/></svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.293 7.293-1.414-1.414L17.585 5H13V3h8z"/>
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zM7 9c1.691 0 3 1.309 3 3s-1.309 3-3 3-3-1.309-3-3 1.309-3 3-3z" />
    </svg>
  ),
};

export default function Card({
  title,
  icon,
  iconType = "regular",
  color = "#343CED",
  href,
  horizontal = false,
  img,
  cta,
  arrow = true,
  children,
}: CardProps) {
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "string") {
      const IconComponent = iconMap[icon];
      return IconComponent ? (
        <div className={styles.icon} style={{ color }}>
          {IconComponent}
        </div>
      ) : null;
    }

    return (
      <div className={styles.icon} style={{ color }}>
        {icon}
      </div>
    );
  };

  const cardContent = (
    <div
      className={`${styles.card} ${horizontal ? styles.horizontal : ''} ${href ? styles.clickable : ''}`}
      style={{
        '--card-color': color,
      } as React.CSSProperties}
    >
      {img && !horizontal && (
        <div className={styles.imageWrapper}>
          <img
            src={img}
            alt={title}
            className={styles.image}
          />
        </div>
      )}

      <div className={horizontal ? styles.iconWrapperHorizontal : ''}>
        {renderIcon()}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>{title}</h3>
            {children && <div className={styles.description}>{children}</div>}
          </div>

          {href && arrow && (
            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>

        {cta && (
          <div className={styles.cta}>
            <span className={styles.ctaText}>
              {cta}
              <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href} className={styles.cardLink}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}