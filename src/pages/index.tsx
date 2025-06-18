import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useEffect, useRef } from 'react';
import Card from '@site/src/components/Card';
import CardGroup from '@site/src/components/CardGroup';
import GleanSearch from '@site/src/components/GleanSearch';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title} Documentation
        </Heading>
        <p className="hero__subtitle">
          Explore our Guides and API Reference to get the most out of the Glean Platform.
        </p>
      </div>
    </header>
  );
}

function HomepageCards() {
  return (
    <div className="container margin-top--lg">
      <div className="text-center margin-bottom--lg">
        <h2>Choose a topic below or <Link to="/docs/getting-started">Get Started</Link></h2>
      </div>
      <CardGroup cols={3}>
        <Card
          title="Quick Start"
          icon="quickstart"
          href="/docs/guides/indexing/quickstart/setup-datasource"
        >
          Make your first API call in minutes
        </Card>
        <Card
          title="API Reference"
          icon="code"
          href="/docs/api/indexing-api/glean-api"
        >
          Integrate and scale using our API
        </Card>
        <Card
          title="Embed Glean"
          icon="agents"
          href="/docs/guides/web-sdk/overview"
        >
          Embed Glean in your website
        </Card>
        <Card
          title="MCP"
          icon="agents"
          href="./mcp"
        >
          Connect Glean to AI models with MCP
        </Card>
        <Card
          title="Glean Docs"
          icon="guides"
          href="https://docs.glean.com"
        >
          Go to the Official Glean Docs
        </Card>
        <Card
          title="Solutions"
          icon="agents"
          href="/docs/solutions"
          arrow={true}
        >
          Prebuilt Glean Solutions for Enterprise
        </Card>
      </CardGroup>
    </div>
  );
}

declare global {
  interface Window {
    EmbeddedSearch?: {
      renderChat: (container: HTMLElement, config: any) => void;
      createGuestAuthProvider: (config: { backend: string }) => {
        getAuthToken: () => Promise<string>;
      };
    };
  }
}

export default function Home(): ReactNode {

  return (
    <Layout>
      <HomepageHeader />
      <GleanSearch />
      <main>
        <HomepageCards />
      </main>
    </Layout>
  );
}