import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import {
  SearchIcon,
  ChatIcon,
  DocumentIcon,
  IndexingIcon,
  AgentIcon,
  KnowledgeIcon,
  SecurityIcon,
  DatasourceIcon,
  ApiIcon,
  IntegrationIcon,
  AnalyticsIcon,
  McpIcon,
  LangchainIcon,
} from './GleanIcons';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

export const GleanIconRegistry = {
  search: SearchIcon,
  chat: ChatIcon,
  document: DocumentIcon,
  indexing: IndexingIcon,
  agent: AgentIcon,
  knowledge: KnowledgeIcon,
  security: SecurityIcon,
  datasource: DatasourceIcon,
  api: ApiIcon,
  integration: IntegrationIcon,
  analytics: AnalyticsIcon,
  mcp: McpIcon,
  langchain: LangchainIcon,
} as const;

export type GleanIconName = keyof typeof GleanIconRegistry;

interface IconComponentProps extends IconProps {
  name: string;
  iconStyle?: 'solid' | 'regular' | 'brands';
  iconSet?: 'fontawesome' | 'glean';
}

export function getIcon(
  iconName: string,
  iconSet: 'fontawesome' | 'glean' = 'fontawesome',
  iconStyle: 'solid' | 'regular' | 'brands' = 'solid',
  props?: IconProps
): React.ReactNode {
  if (iconSet === 'glean') {
    const GleanIconComponent = GleanIconRegistry[iconName as GleanIconName];
    if (GleanIconComponent) {
      return <GleanIconComponent {...props} />;
    }
    console.warn(`Glean icon "${iconName}" not found. Available icons:`, Object.keys(GleanIconRegistry));
    return null;
  }

  const prefixMap = {
    solid: 'fas' as IconPrefix,
    regular: 'far' as IconPrefix,
    brands: 'fab' as IconPrefix,
  };

  const prefix = prefixMap[iconStyle];

  return (
    <FontAwesomeIcon 
      icon={[prefix, iconName as IconName]} 
      style={{ 
        width: props?.width, 
        height: props?.height,
        color: props?.color 
      }}
      className={props?.className}
    />
  );
}

export function Icon({ 
  name, 
  iconSet = 'fontawesome', 
  iconStyle = 'solid', 
  ...props 
}: IconComponentProps) {
  return getIcon(name, iconSet, iconStyle, props) as React.ReactElement;
}

export * from './GleanIcons'; 