import React from 'react';
import Link from '@docusaurus/Link';
import { getIcon } from '../Icons';
import styles from './styles.module.css';
import './fontawesome';

interface CardProps {
  title: string;
  icon?: string | React.ReactNode;
  iconStyle?: 'solid' | 'regular' | 'brands';
  iconSet?: 'fontawesome' | 'glean';
  color?: string;
  href?: string;
  horizontal?: boolean;
  img?: string;
  cta?: string;
  arrow?: boolean;
  children?: React.ReactNode;
}

export default function Card({
  title,
  icon,
  iconStyle = 'solid',
  iconSet = 'fontawesome',
  color = '#343CED',
  href,
  horizontal = false,
  img,
  cta,
  arrow = true,
  children,
}: CardProps) {
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === 'string') {
      const iconElement = getIcon(icon, iconSet, iconStyle, { color });

      return (
        <div className={styles.icon} style={{ color }}>
          {iconElement}
        </div>
      );
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
      style={
        {
          '--card-color': color,
        } as React.CSSProperties
      }
    >
      {img && !horizontal && (
        <div className={styles.imageWrapper}>
          <img src={img} alt={title} className={styles.image} />
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
            <svg
              className={styles.arrow}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {cta && (
          <div className={styles.cta}>
            <span className={styles.ctaText}>
              {cta}
              <svg
                className={styles.ctaArrow}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                width="16"
                height="16"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
