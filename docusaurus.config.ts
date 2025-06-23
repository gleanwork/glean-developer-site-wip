import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Glean Developer',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://aureliawang-glean.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'askscio', // Usually your GitHub org/user name.
  projectName: 'aureliawang-glean.github.io', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
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
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          docItemComponent: "@theme/ApiItem",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/changelog',
          label: 'Changelog',
          position: 'right',
        },
        {
          to: '/community',
          label: 'Community',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/gleanwork/glean-developer-site/discussions',
            },
            {
              label: 'Report a Bug',
              href: 'https://github.com/gleanwork/glean-developer-site/issues/new?template=bug_report.md',
            },
            {
              label: 'Request a Feature',
              href: 'https://github.com/gleanwork/glean-developer-site/issues/new?template=feature_request.md',
            },
            {
              label: 'Support',
              href: 'https://support.glean.com/hc/en-us',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Community',
              to: '/community',
            },
            {
              label: 'Changelog',
              to: '/changelog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    headTags: [
      {
        tagName: 'script',
        attributes: {
          defer: true,
          src: 'https://app.glean.com/embedded-search-latest.min.js',
        },
      },
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'changelog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'changelog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './changelog',
        blogTitle: 'Changelog',
        blogDescription: 'Keep up with our latest changes',
        showReadingTime: false,
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Recent Changes',
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          indexing: {
            specPath: "https://gleanwork.github.io/open-api/specs/final/indexing.yaml",
            outputDir: "docs/api/indexing-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            // markdownGenerators: {
            //   createApiPageMD: (pageData: ApiPageMetadata) => {
            //     const { api, title, description } = pageData;
                
            //     // Check for both x-codeSamples and x-code-samples
            //     const samples = api['x-codeSamples'] || api['x-code-samples'];
                
            //     // Generate code samples section if samples exist
            //     const codeSamples = samples
            //       ? `\n## Code Samples\n\n${samples
            //           .map(sample => (
            //             `### ${sample.label || sample.lang}\n\n\`\`\`${sample.lang}\n${sample.source}\n\`\`\``
            //           ))
            //           .join('\n\n')}`
            //       : '';

            //     return `# ${title}
            //               ${description}
            //               ${codeSamples}
            //               ${pageData.apiDemoPanel}`;
            //   }
            // }
          } satisfies OpenApiPlugin.Options,
          activity: {
            specPath: "./openapi/split-apis/activity-api.yaml",
            outputDir: "docs/api/client-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          authentication: {
            specPath: "./openapi/split-apis/authentication-api.yaml",
            outputDir: "docs/api/client-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          agents: {
            specPath: "./openapi/split-apis/agents-api.yaml",
            outputDir: "docs/api/client-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          governance: {
            specPath: "./openapi/split-apis/governance-api.yaml",
            outputDir: "docs/api/client-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          summarize: {
            specPath: "./openapi/split-apis/summarize-api.yaml",
            outputDir: "docs/api/test",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          tools: {
            specPath: "./openapi/split-apis/tools-api.yaml",
            outputDir: "docs/api/test",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          announcements: {
            specPath: "./openapi/split-apis/announcements-api.yaml",
            outputDir: "docs/api/test",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
