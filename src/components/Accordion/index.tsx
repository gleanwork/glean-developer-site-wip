'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './styles.module.css';

interface AccordionProps {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  icon?: string | ReactNode;
  iconType?:
    | 'regular'
    | 'solid'
    | 'light'
    | 'thin'
    | 'sharp-solid'
    | 'duotone'
    | 'brands';
  children: ReactNode;
}

export function Accordion({
  title,
  description,
  defaultOpen = false,
  icon,
  iconType = 'regular',
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === 'string') {
      // Handle Font Awesome icons
      const iconClass = `fa${iconType === 'regular' ? 'r' : iconType === 'solid' ? 's' : iconType === 'light' ? 'l' : iconType === 'thin' ? 't' : iconType === 'sharp-solid' ? 'ss' : iconType === 'duotone' ? 'd' : 'b'} fa-${icon}`;
      return <i className={iconClass} />;
    }

    // Handle SVG or React components
    return icon;
  };

  return (
    <div className={styles.accordion}>
      <button
        className={styles.accordionHeader}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <div className={styles.accordionHeaderContent}>
          {icon && <div className={styles.accordionIcon}>{renderIcon()}</div>}
          <div className={styles.accordionTitleContainer}>
            <h3 className={styles.accordionTitle}>{title}</h3>
            {description && (
              <p className={styles.accordionDescription}>{description}</p>
            )}
          </div>
        </div>
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        />
      </button>

      <div
        className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}
      >
        <div className={styles.accordionContentInner}>{children}</div>
      </div>
    </div>
  );
}
