import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';
import CodeBlock from '@theme/CodeBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faCode, 
  faDatabase, 
  faRocket, 
  faPuzzlePiece, 
  faBook,
  faPlay,
  faGears,
  faLifeRing
} from '@fortawesome/free-solid-svg-icons';
import McpIcon from '../Icons/McpIcon';
import Card from '../Card';
import CarouselSection from '../CarouselSection';
import { GLEAN_BRAND_COLORS } from '../../utils/brandColors';

type Feature = {
  title: string;
  body: string;
  href: string;
  icon: React.ReactNode;
  color?: string;
};

export default function Home() {
  const features: Feature[] = [
    {
      title: 'Build AI Agents',
      body:
        'Create and orchestrate intelligent agents that reason over enterprise knowledge and automate work.',
      href: '/agents/overview',
      icon: <FontAwesomeIcon icon={faRobot} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    },
    {
      title: 'Leverage Your Data',
      body:
        'Use Glean\'s APIs and client libraries to search, chat, and embed Work AI in your own apps.',
      href: '/guides/data',
      icon: <FontAwesomeIcon icon={faCode} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    },
    {
      title: 'Create Connectors',
      body: 'Bring any source into Glean with our connector framework and indexing API.',
      href: '/connectors/overview',
      icon: <FontAwesomeIcon icon={faDatabase} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    }
  ];

  const exploreFeatures: Feature[] = [
    {
      title: 'Quick-start Guides',
      body: 'Short tutorials to get you building in minutes.',
      href: '/get-started/quickstart',
      icon: <FontAwesomeIcon icon={faRocket} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    },
    {
      title: 'Sample Agents',
      body: 'Explore ready-made agents you can adapt for your organization.',
      href: '/agents/examples',
      icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    },
    {
      title: 'SDK Reference',
      body: 'Embed search and chat components in any web app.',
      href: '/web-sdk/overview',
      icon: <FontAwesomeIcon icon={faBook} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    },
    {
      title: 'API Documentation',
      body: 'Complete reference for all Glean APIs and endpoints.',
      href: '/api/client-api',
      icon: <FontAwesomeIcon icon={faGears} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    },
    {
      title: 'Live Examples',
      body: 'Interactive demos and code samples you can run immediately.',
      href: '/guides/examples',
      icon: <FontAwesomeIcon icon={faPlay} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    },
    {
      title: 'Support',
      body: 'Get help from our team and community resources.',
      href: '/support',
      icon: <FontAwesomeIcon icon={faLifeRing} />,
      color: GLEAN_BRAND_COLORS.PRIMARY_BLUE
    }
  ];

  return (
    <>
      {/* Top Banner */}
      <section className={styles.topBanner}>
        <div className={clsx('container', styles.wideContainer)}>
          <div className='row'>
            <div className='col'>
              <h3 className={clsx(styles.bannerTitle, 'text-white', 'font-mono', 'font-bold', 'text-lg')}>Work AI for all</h3>
              <p className={styles.bannerSubtitle}>
                Build on the Work AI platform connected to all your data. Find, create, and automate anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Carousel Section */}
      <CarouselSection />

      {/* Feature Cards */}
      <section className={clsx('container', styles.wideContainer, 'margin-vert--l')}>
        <div className='row'>
          {features.map((f) => (
            <div key={f.title} className='col col--4 margin-vert--md'>
              <div className={styles.featureCard}>
                <Card
                  title={f.title}
                  icon={f.icon}
                  href={f.href}
                  color={f.color}
                >
                  {f.body}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get started, learn, and explore */}
      <section className={clsx('container', styles.wideContainer, 'margin-vert--l')}>
        <h2>Get started, learn, and explore</h2>
        <p className='margin-bottom--lg'>
          Essential resources to help you prototype quickly, study working examples, and embed Glean wherever you build.
        </p>
        <div className='row'>
          {exploreFeatures.map((f) => (
            <div key={f.title} className='col col--4 margin-vert--md'>
              <div className={styles.featureCard}>
                <Card
                  title={f.title}
                  icon={f.icon}
                  href={f.href}
                  color={f.color}
                >
                  {f.body}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MCP highlight */}
      <section className={clsx('margin-vert--l', styles.mcpSection)}>
        <div className={clsx('container', styles.wideContainer)}>
          <div className='row'>
            <div className='col col--6'>
              <h2>Model Context Protocol (MCP)</h2>

              <p>
                Secure, two‑way connections between AI models and enterprise
                data.
              </p>

              <ul>
                <li>Expose Glean search capabilities directly to AI assistants.</li>
                <li>
                  Build agents that can safely reason over your organization's
                  knowledge.
                </li>
                <li>
                  Create seamless workflows between Glean and other MCP‑compatible
                  tools.
                </li>
              </ul>

              <Link
                className='button button--primary button--lg'
                to='/mcp/overview'
              >
                Learn more about Glean's MCP integration
              </Link>
            </div>

            <div className={clsx('col col--6', styles.mcpIconContainer)}>
              <McpIcon width={128} height={128} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
