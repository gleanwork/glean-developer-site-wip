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
      links: [
        {
          title: 'More',
          items: [
            {
              label: "GitHub",
              href: "https://github.com/gleanwork/glean-developer-site"
            },
            {
              "label": "Status",
              "href": "https://status.glean.com"
            },
            {
              "label": "Support",
              "href": "https://support.glean.com"
            },
            {
              "label": "Open Glean",
              "href": "https://app.glean.com"
            }
          ],
        },
        {
          title: "Product",
          items: [
            {
              label: "Work AI Platform",
              href: "https://www.glean.com/product/overview"
            },
            {
              label: "Workplace Search",
              href: "https://www.glean.com/product/workplace-search-ai"
            },
            {
              label: "Assistant",
              href: "https://www.glean.com/product/assistant"
            },
            {
              label: "Agents",
              href: "https://www.glean.com/product/ai-agents"
            },
            {
              label: "Data Analysis",
              href: "https://www.glean.com/product/data-analysis"
            },
            {
              label: "AI Governance",
              href: "https://www.glean.com/product/governance"
            },
            {
              label: "Prompt Library",
              href: "https://www.glean.com/prompt-library"
            },
            {
              label: "Knowledge Management",
              href: "https://www.glean.com/product/knowledge-management"
            },
            {
              label: "Work Hub",
              href: "https://www.glean.com/product/work-hub"
            },
            {
              label: "Connectors",
              href: "https://www.glean.com/connectors"
            },
            {
              label: "Security",
              href: "https://www.glean.com/security"
            }
          ]
        },
        {
          title: "Solutions",
          items: [
            {
              label: "All Teams",
              href: "https://www.glean.com/solutions/all-teams"
            },
            {
              label: "Engineering",
              href: "https://www.glean.com/solutions/engineering"
            },
            {
              label: "Sales",
              href: "https://www.glean.com/solutions/sales"
            },
            {
              label: "Support",
              href: "https://www.glean.com/solutions/support"
            },
            {
              label: "People",
              href: "https://www.glean.com/solutions/people"
            },
            {
              label: "Knowledge Management",
              href: "https://www.glean.com/solutions/knowledge-management"
            },
            {
              label: "Retail",
              href: "https://www.glean.com/industries/retail"
            },
            {
              label: "Financial Services",
              href: "https://www.glean.com/industries/financial-services"
            },
            {
              label: "Enterprise Search Software",
              href: "https://www.glean.com/enterprise-search-software"
            }
          ]
        },
        {
          title: "Resources",
          items: [
            {
              label: "Resources Center",
              href: "https://www.glean.com/resources"
            },
            {
              label: "Product Videos",
              href: "https://www.glean.com/resources/product-videos"
            },
            {
              label: "Guides",
              href: "https://www.glean.com/resources/guides"
            },
            {
              label: "Customer Stories",
              href: "https://www.glean.com/resources/customer-stories"
            },
            {
              label: "Blog",
              href: "https://www.glean.com/blog"
            },
            {
              label: "Webinars",
              href: "https://www.glean.com/webinars"
            },
            {
              label: "Developers",
              href: "https://developers.glean.com/"
            },
            {
              label: "Help Center",
              href: "https://help.glean.com/en/"
            }
          ]
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "https://www.glean.com/about"
            },
            {
              label: "Careers",
              href: "https://www.glean.com/careers"
            },
            {
              label: "Newsroom",
              href: "https://www.glean.com/press"
            },
            {
              label: "Referrals",
              href: "https://www.glean.com/refer-friend"
            },
            {
              label: "Partners",
              href: "https://www.glean.com/partners"
            }
          ]
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Glean, Inc.`,
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
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        siteTitle: 'Glean Developer',
        siteDescription: 'Glean Developer',
        depth: 2,
        content: {
          includePages: true,
          enableLlmsFullTxt: true,
        }
      }
    ],
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        indexDocs: true,
        hashed: true
      }
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
