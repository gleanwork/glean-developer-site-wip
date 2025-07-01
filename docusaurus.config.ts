import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import { redirects } from './redirects';

const config: Config = {
  title: 'Glean Developer',
  tagline: 'Documentation for Glean developers',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://gleanwork.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/glean-developer-site-wip/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gleanwork', // Usually your GitHub org/user name.
  projectName: 'glean-developer-site-wip', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          docItemComponent: '@theme/ApiItem',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/glean-developer-logo-light.svg',
    navbar: {
      logo: {
        alt: 'Glean Developer Logo',
        src: 'img/glean-developer-logo-light.svg',
        srcDark: 'img/glean-developer-logo-dark.svg',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['go', 'java'],
    },
    headTags: [
      {
        tagName: 'script',
        attributes: {
          defer: true,
          src: 'https://app.glean.com/embedded-search-latest.min.js',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Glean Developer Changelog',
          href: '/glean-developer-site-wip/changelog.xml',
        },
      },
    ],
    languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
      },
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      }
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      },
    ],
    [
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        siteTitle: 'Glean Developer',
        siteDescription: 'Glean Developer',
        depth: 2,
        content: {
          includePages: true,
          enableLlmsFullTxt: true,
        },
      },
    ],
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        indexDocs: true,
        hashed: true,
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          indexing: {
            specPath:
              './openapi/indexing-capitalized.yaml',
            outputDir: 'docs/api/indexing-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          activity: { // ok
            specPath: './openapi/client/split-apis/activity-api.yaml',
            outputDir: 'docs/api/client-api/activity',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          announcements: { // circular
            specPath: './openapi/client/split-apis/announcements-api.yaml',
            outputDir: 'docs/api/client-api/announcements',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          answers: { // ok
            specPath: './openapi/client/split-apis/answers-api.yaml',
            outputDir: 'docs/api/client-api/answers',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          authentication: { // ok
            specPath: './openapi/client/split-apis/authentication-api.yaml',
            outputDir: 'docs/api/client-api/authentication',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          chat: { // circular
            specPath: './openapi/client/split-apis/chat-api.yaml',
            outputDir: 'docs/api/client-api/chat',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          agents: { // ok
            specPath: './openapi/client/split-apis/agents-api.yaml',
            outputDir: 'docs/api/client-api/agents',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          collections: { // circular
            specPath: './openapi/client/split-apis/collections-api.yaml',
            outputDir: 'docs/api/client-api/collections',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          documents: { // circular
            specPath: './openapi/client/split-apis/documents-api.yaml',
            outputDir: 'docs/api/client-api/documents',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          insights: { // circular
            specPath: './openapi/client/split-apis/insights-api.yaml',
            outputDir: 'docs/api/client-api/insights',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            }, 
          } satisfies OpenApiPlugin.Options,
          messages: { // circular
            specPath: './openapi/client/split-apis/messages-api.yaml',
            outputDir: 'docs/api/client-api/messages',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },    
          } satisfies OpenApiPlugin.Options,
          pins: { // circular
            specPath: './openapi/client/split-apis/pins-api.yaml',
            outputDir: 'docs/api/client-api/pins',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          search: { // circular
            specPath: './openapi/client/split-apis/search-api.yaml',
            outputDir: 'docs/api/client-api/search',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          entities: { // circular
            specPath: './openapi/client/split-apis/entities-api.yaml',
            outputDir: 'docs/api/client-api/entities',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          shortcuts: { // circular
            specPath: './openapi/client/split-apis/shortcuts-api.yaml',
            outputDir: 'docs/api/client-api/shortcuts',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          summarize: { // ok
            specPath: './openapi/client/split-apis/summarize-api.yaml',
            outputDir: 'docs/api/client-api/summarize',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          verification: { // circular
            specPath: './openapi/client/split-apis/verification-api.yaml',
            outputDir: 'docs/api/client-api/verification',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          tools: { // ok
            specPath: './openapi/client/split-apis/tools-api.yaml',
            outputDir: 'docs/api/client-api/tools',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          governance: { // ok
            specPath: './openapi/client/split-apis/governance-api.yaml',
            outputDir: 'docs/api/client-api/governance',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],
};

export default config;
