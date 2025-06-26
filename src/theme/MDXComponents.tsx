import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Card from '@site/src/components/Card';
import CardGroup from '@site/src/components/CardGroup';
import Frame from '@site/src/components/Frame';
import PageHeader from '@site/src/components/PageHeader';
import {
  Note,
  Warning,
  Info,
  Tip,
  Check,
  Danger,
} from '@site/src/components/Callouts';
import { Tab, Tabs } from '@site/src/components/Tabs';
import { Step, Steps } from '@site/src/components/Steps';
import { AccordionGroup } from '@site/src/components/AccordionGroup';
import { Accordion } from '@site/src/components/Accordion';
import { CodeGroup } from '@site/src/components/CodeGroup';
import { ResponseField } from '@site/src/components/ResponseField';

export default {
  // Reusing the default mapping
  ...MDXComponents,
  Card,
  CardGroup,
  Frame,
  PageHeader,
  Note,
  Warning,
  Info,
  Tip,
  Check,
  Danger,
  Tab,
  Tabs,
  Step,
  Steps,
  AccordionGroup,
  Accordion,
  CodeGroup,
  ResponseField,
};
