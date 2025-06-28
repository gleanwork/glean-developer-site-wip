import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'Glean Developer',
  tagline: 'Dinosaurs are cool',
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
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
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
  } satisfies Preset.ThemeConfig,

  plugins: [
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
              'https://gleanwork.github.io/open-api/specs/final/indexing.yaml',
            outputDir: 'docs/api/indexing-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          activity: {
            specPath: './openapi/split-apis/activity-api.yaml',
            outputDir: 'docs/api/client-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          authentication: {
            specPath: './openapi/split-apis/authentication-api.yaml',
            outputDir: 'docs/api/client-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          agents: {
            specPath: './openapi/split-apis/agents-api.yaml',
            outputDir: 'docs/api/client-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          governance: {
            specPath: './openapi/split-apis/governance-api.yaml',
            outputDir: 'docs/api/client-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          summarize: {
            specPath: './openapi/split-apis/summarize-api.yaml',
            outputDir: 'docs/api/test',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          tools: {
            specPath: './openapi/split-apis/tools-api.yaml',
            outputDir: 'docs/api/test',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
          announcements: {
            specPath: './openapi/split-apis/announcements-api.yaml',
            outputDir: 'docs/api/test',
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
