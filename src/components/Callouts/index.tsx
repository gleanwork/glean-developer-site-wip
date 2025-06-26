// src/components/Callouts/index.tsx
import type React from 'react';
import {
  LucideInfo,
  AlertTriangle,
  Lightbulb,
  LucideCheck,
  XCircle,
} from 'lucide-react';
import styles from './styles.module.css';

interface CalloutProps {
  children: React.ReactNode;
}

export function Note({ children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles['callout--note']}`}>
      <div className={styles.callout__icon}>
        <LucideInfo />
      </div>
      <div className={styles.callout__content}>{children}</div>
    </div>
  );
}

export function Warning({ children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles['callout--warning']}`}>
      <div className={styles.callout__icon}>
        <AlertTriangle />
      </div>
      <div className={styles.callout__content}>{children}</div>
    </div>
  );
}

export function Info({ children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles['callout--info']}`}>
      <div className={styles.callout__icon}>
        <LucideInfo />
      </div>
      <div className={styles.callout__content}>{children}</div>
    </div>
  );
}

export function Tip({ children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles['callout--tip']}`}>
      <div className={styles.callout__icon}>
        <Lightbulb />
      </div>
      <div className={styles.callout__content}>{children}</div>
    </div>
  );
}

export function Check({ children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles['callout--check']}`}>
      <div className={styles.callout__icon}>
        <LucideCheck />
      </div>
      <div className={styles.callout__content}>{children}</div>
    </div>
  );
}

export function Danger({ children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles['callout--danger']}`}>
      <div className={styles.callout__icon}>
        <XCircle />
      </div>
      <div className={styles.callout__content}>{children}</div>
    </div>
  );
}
