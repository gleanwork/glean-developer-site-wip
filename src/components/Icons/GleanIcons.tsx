import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

export function SearchIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.5 2A8.5 8.5 0 0 1 19 10.5a8.46 8.46 0 0 1-1.99 5.45l4.52 4.52a1 1 0 0 1-1.41 1.42l-4.52-4.52A8.46 8.46 0 0 1 10.5 19A8.5 8.5 0 1 1 10.5 2Zm0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"/>
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10zm8 18h-7c-1.3 0-2.58-.3-3.75-.85L6 20l.85-3.25C6.3 15.58 6 14.3 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6v7z"/>
      <circle cx="9" cy="13" r="1"/>
      <circle cx="13" cy="13" r="1"/>
      <circle cx="17" cy="13" r="1"/>
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
    </svg>
  );
}

export function IndexingIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/>
      <path d="M20 14l-4 4-2-2 1.41-1.41L17 16.17l2.59-2.58L20 14z"/>
    </svg>
  );
}

export function AgentIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V14.5L9.5 16C9.1 16.4 9.1 17.1 9.5 17.5L10.5 18.5C10.9 18.9 11.6 18.9 12 18.5L13.5 17L15 18.5C15.4 18.9 16.1 18.9 16.5 18.5L17.5 17.5C17.9 17.1 17.9 16.4 17.5 16L16 14.5V11C17.1 11 18 10.1 18 9H21Z"/>
      <circle cx="12" cy="20" r="2"/>
    </svg>
  );
}

export function KnowledgeIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      <circle cx="12" cy="12" r="1.5"/>
    </svg>
  );
}

export function SecurityIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.7C16,17.4 15.4,18 14.7,18H9.2C8.6,18 8,17.4 8,16.8V12.8C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
    </svg>
  );
}

export function DatasourceIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 3C16.42 3 20 4.79 20 7S16.42 11 12 11 4 9.21 4 7 7.58 3 12 3M4 9V12C4 14.21 7.58 16 12 16S20 14.21 20 12V9C20 11.21 16.42 13 12 13S4 11.21 4 9M4 14V17C4 19.21 7.58 21 12 21S20 19.21 20 17V14C20 16.21 16.42 18 12 18S4 16.21 4 14"/>
    </svg>
  );
}

export function ApiIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.5 12c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7-.76 1.7-1.7 1.7-1.7-.76-1.7-1.7z"/>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

export function IntegrationIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12C7,9.58 8.72,7.56 11,7.1V3H13V7.1C15.28,7.56 17,9.58 17,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
      <path d="M3,12C3,7.58 6.58,4 11,4V2C5.48,2 1,6.48 1,12S5.48,22 11,22V20C6.58,20 3,16.42 3,12Z"/>
      <path d="M21,12C21,16.42 17.42,20 13,20V22C18.52,22 23,17.52 23,12S18.52,2 13,2V4C17.42,4 21,7.58 21,12Z"/>
    </svg>
  );
}

export function AnalyticsIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,15H12V6H16M10,15H6V9H10M4,2H20A1,1 0 0,1 21,3V21A1,1 0 0,1 20,22H4A1,1 0 0,1 3,21V3A1,1 0 0,1 4,2Z"/>
    </svg>
  );
}

export function McpIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z"/>
      <path d="M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z"/>
    </svg>
  );
} 