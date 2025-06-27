import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './CarouselSection.module.css';
import ThemedImage from '@theme/ThemedImage';

import 'swiper/css';
import 'swiper/css/pagination';

type CarouselSlide = {
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  codeLanguage?: string;
  codeContent?: string;
  imageUrl?: {
    light: string;
    dark: string;
  };
  imageAlt?: string;
};

const slides: CarouselSlide[] = [
  {
    title: 'Search and Chat with Your Data',
    description:
      "Connect your company data and ship AI-powered chat in minutes. Glean's APIs are permission-aware from day one and scale with your security requirements.",
    bullets: [
      'Search, chat, and automate with Work AI',
      'Permission-aware by default',
      'API Clients for Python, TypeScript, Go, and Java',
    ],
    ctaText: 'Jump to the Chat API',
    ctaHref: '/api/client-api/chat/overview',
    codeLanguage: 'python',
    codeContent: `import os
from glean import Glean, models

with Glean(
    instance='acme',
    api_token=os.getenv('GLEAN_API_TOKEN', ''),
) as g:
    res = g.client.chat.create(
        messages=[
            {
                'fragments': [
                    models.ChatMessageFragment(
                        text='What are the company holidays this year?',
                    )
                ],
            }
        ]
    )`,
  },
  {
    title: 'Run AI Agents',
    description:
      'Run intelligent agents that orchestrate workflows, reason over your enterprise knowledge, and automate complex tasks across your organization.',
    bullets: [
      'Orchestrate multi-step workflows',
      'Reason over enterprise knowledge',
      'Automate complex business processes',
    ],
    ctaText: 'Explore Agent APIs',
    ctaHref: '/api/client-api/agents/overview',
    codeLanguage: 'python',
    codeContent: `import os
from glean import Glean, models

with Glean(
    instance='acme',
    api_token=os.getenv('GLEAN_API_TOKEN', ''),
) as g:
    agent_run = g.client.agents.create_and_stream_run(
        agent_id='sales-assistant',
        messages=[
            {
                'fragments': [
                    models.ChatMessageFragment(
                        text='Generate a sales report for Q4 2024',
                    )
                ],
            }
        ]
    )`,
  },
  {
    title: 'Connect Any Data Source',
    description:
      'Bring any data source into Glean with our powerful indexing APIs. Bulk upload documents, sync in real-time, and define custom properties.',
    bullets: [
      'Bulk document upload and indexing',
      'Real-time data synchronization',
      'Custom properties and metadata',
    ],
    ctaText: 'View Indexing APIs',
    ctaHref: '/api/indexing-api/datasources-overview',
    codeLanguage: 'python',
    codeContent: `import os
from glean import Glean, models

with Glean(
    instance='acme',
    api_token=os.getenv('GLEAN_INDEXING_TOKEN', ''),
) as g:
    document = models.DocumentDefinition(
        id='doc-123',
        title='Q4 Sales Report',
        body='Our Q4 performance exceeded expectations...',
        datasource='internal-docs'
    )
    
    g.indexing.index_document(document=document)`,
  },
  {
    title: 'Instantly connect your MCP clients to Glean',
    description:
      'Connect Claude Desktop, Cursor, and other MCP-compatible clients directly to your Glean instance. Access enterprise search, chat, and knowledge through the Model Context Protocol with zero custom development.',
    bullets: [
      'Connect to Claude Desktop, Cursor, and other MCP hosts',
      'Access enterprise search and chat through MCP',
      'Level up your AI assistants with Glean tools',
    ],
    ctaText: 'Get Started with MCP',
    ctaHref: '/guides/mcp',
    imageUrl: {
      light: '/img/mcp-usage-light.png',
      dark: '/img/mcp-usage-dark.png',
    },
    imageAlt: 'Screenshot showing MCP server integration with AI clients',
  },
];

export default function CarouselSection() {
  return (
    <section
      className={clsx('container', styles.wideContainer, 'margin-vert--l')}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: styles.paginationBullet,
          bulletActiveClass: styles.paginationBulletActive,
        }}
        className={styles.carousel}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="row">
              <div className="col col--5">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <ul>
                  {slide.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
                <Link
                  to={slide.ctaHref}
                  className="button button--primary button--lg"
                >
                  {slide.ctaText}
                </Link>
              </div>
              <div className="col col--7">
                {slide.imageUrl ? (
                  <div className={styles.imageWrap}>
                    <ThemedImage
                      alt={slide.imageAlt}
                      sources={{
                        light: useBaseUrl(slide.imageUrl.light),
                        dark: useBaseUrl(slide.imageUrl.dark),
                      }}
                      className={styles.carouselImage}
                    />
                  </div>
                ) : (
                  <div className={styles.codeWrap}>
                    <CodeBlock language={slide.codeLanguage}>
                      {slide.codeContent}
                    </CodeBlock>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
