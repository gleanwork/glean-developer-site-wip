import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import { Steps, Step } from '@site/src/components/Steps';
import { Tabs } from '@site/src/components/Tabs';
import Card from '@site/src/components/Card';
import CardGroup from '@site/src/components/CardGroup';
import { ResponseField } from '@site/src/components/ResponseField';
import Frame from '@site/src/components/Frame';
import { GleanIconRegistry } from '@site/src/components/Icons';

export default {
  // Reusing the default mapping
  ...MDXComponents,
  Steps,
  Step,
  Tabs,
  Card,
  CardGroup,
  ResponseField,
  Frame,
  ...GleanIconRegistry,
};
