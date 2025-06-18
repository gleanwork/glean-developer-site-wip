import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  guides: [
    {
      type: "doc",
      id: "guides/getting-started",
      label: "Getting Started",
    },
    {
      type: "category",
      label: "Index Data",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "guides/indexing/overview",
          label: "Overview",
        },
        {
          type: "category",
          label: "Quickstart",
          items: [
            {
              type: "doc",
              id: "guides/indexing/quickstart/setup-datasource",
              label: "Setup Datasource",
            },
            {
              type: "doc",
              id: "guides/indexing/quickstart/index-documents",
              label: "Index Documents",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          items: [
            {
              type: "doc",
              id: "guides/indexing/authentication/managing-tokens",
              label: "Managing Tokens",
            },
            {
              type: "doc",
              id: "guides/indexing/authentication/token-rotation",
              label: "Token Rotation",
            },
          ],
        },
        {
          type: "category",
          label: "Datasource",
          items: [
            {
              type: "doc",
              id: "guides/indexing/datasource/custom-properties",
              label: "Custom Properties",
            },
            {
              type: "doc",
              id: "guides/indexing/datasource/test-datasource",
              label: "Test Datasource",
            },
            {
              type: "doc",
              id: "guides/indexing/datasource/category",
              label: "Category",
            },
            {
              type: "doc",
              id: "guides/indexing/datasource/rendering-search-results",
              label: "Rendering Search Results",
            },
          ],
        },
        {
          type: "category",
          label: "Documents",
          items: [
            {
              type: "doc",
              id: "guides/indexing/documents/activity",
              label: "Activity",
            },
            {
              type: "doc",
              id: "guides/indexing/documents/permissions",
              label: "Permissions",
            },
            {
              type: "doc",
              id: "guides/indexing/documents/bulk-indexing",
              label: "Bulk Indexing",
            },
            {
              type: "doc",
              id: "guides/indexing/documents/bulk-upload-model",
              label: "Bulk Upload Model",
            },
            {
              type: "doc",
              id: "guides/indexing/documents/document-model",
              label: "Document Model",
            },
            {
              type: "doc",
              id: "guides/indexing/documents/supported-mimetypes",
              label: "Supported MIME Types",
            },
          ],
        },
        {
          type: "category",
          label: "Debugging",
          items: [
            {
              type: "doc",
              id: "guides/indexing/debugging/datasource-config",
              label: "Datasource Config",
            },
            {
              type: "doc",
              id: "guides/indexing/debugging/datasource-status",
              label: "Datasource Status",
            },
            {
              type: "doc",
              id: "guides/indexing/debugging/datasource-document",
              label: "Datasource Document",
            },
            {
              type: "doc",
              id: "guides/indexing/debugging/datasource-user",
              label: "Datasource User",
            },
            {
              type: "doc",
              id: "guides/indexing/debugging/document-access",
              label: "Document Access",
            },
            {
              type: "doc",
              id: "guides/indexing/debugging/document-count",
              label: "Document Count",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Search & Chat",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "guides/client/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "guides/client/quickstart",
          label: "Quickstart",
        },
        {
          type: "category",
          label: "Authentication",
          items: [
            {
              type: "doc",
              id: "guides/client/authentication/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "guides/client/authentication/glean-issued",
              label: "Glean Issued Tokens",
            },
            {
              type: "doc",
              id: "guides/client/authentication/oauth",
              label: "OAuth",
            },
          ],
        },
        {
          type: "category",
          label: "Examples",
          items: [
            {
              type: "doc",
              id: "guides/client/examples/chatbot",
              label: "Chatbot",
            },
            {
              type: "doc",
              id: "guides/client/examples/nvidia-enterprise-kb-chatbot",
              label: "Agentic AI With NVIDIA NIM",
            },
          ],
        },
        {
          type: "category",
          label: "Search",
          items: [
            {
              type: "doc",
              id: "guides/client/search/filtering-results",
              label: "Filtering Results",
            },
            {
              type: "doc",
              id: "guides/client/search/datasource-filters",
              label: "Datasource Filters",
            },
            {
              type: "doc",
              id: "guides/client/search/faceted-filters",
              label: "Faceted Filtering",
            }
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "guides/client/governance",
      label: "Governance APIs",
    },
    {
      type: "category",
      label: "Web SDK",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "guides/web-sdk/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "guides/web-sdk/3rd-party-cookies",
          label: "Third-Party Cookie Management",
        },
        {
          type: "category",
          label: "Components",
          items: [
            {
              type: "doc",
              id: "guides/web-sdk/components/chat",
              label: "Glean Chat",
            },
            {
              type: "doc",
              id: "guides/web-sdk/components/autocomplete",
              label: "Autocomplete",
            },
            {
              type: "doc",
              id: "guides/web-sdk/components/modal-search",
              label: "Modal Search",
            },
            {
              type: "doc",
              id: "guides/web-sdk/components/sidebar",
              label: "Sidebar",
            },
            {
              type: "doc",
              id: "guides/web-sdk/components/recommendations",
              label: "Recommendations",
            },
          ],
        },
        {
          type: "category",
          label: "Guides",
          items: [
            {
              type: "doc",
              id: "guides/web-sdk/guides/react",
              label: "React",
            },
            {
              type: "doc",
              id: "guides/web-sdk/guides/zendesk",
              label: "Zendesk",
            },
            {
              type: "doc",
              id: "guides/web-sdk/guides/lumapps",
              label: "Lumapps",
            },
            {
              type: "doc",
              id: "guides/web-sdk/guides/brightspot",
              label: "Brightspot",
            },
          ],
        },
        {
          type: "link",
          href: "https://app.glean.com/meta/browser_api/index.html",
          label: "SDK Reference",
        },
      ],
    },
  ],
  apiReference: [
    {
      type: "category",
      label: "Indexing API",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/indexing-api/glean-api",
        },
        {
          type: "category",
          label: "Datasources",
          link: {
            type: "doc",
            id: "api/indexing-api/datasources",
          },
          items: [
            {
              type: "doc",
              id: "api/indexing-api/add-or-update-datasource",
              label: "Add or update datasource",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/get-datasource-config",
              label: "Get datasource config",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Documents",
          link: {
            type: "doc",
            id: "api/indexing-api/documents",
          },
          items: [
            {
              type: "doc",
              id: "api/indexing-api/index-document",
              label: "Index document",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/index-documents",
              label: "Index documents",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/bulk-index-documents",
              label: "Bulk index documents",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/update-document-permissions",
              label: "Update document permissions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/schedules-the-processing-of-uploaded-documents",
              label: "Schedules the processing of uploaded documents",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/delete-document",
              label: "Delete document",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "People",
          link: {
            type: "doc",
            id: "api/indexing-api/people",
          },
          items: [
            {
              type: "doc",
              id: "api/indexing-api/index-employee",
              label: "Index employee",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/bulk-index-employees",
              label: "Bulk index employees",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/schedules-the-processing-of-uploaded-employees-and-teams",
              label: "Schedules the processing of uploaded employees and teams",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/delete-employee",
              label: "Delete employee",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/index-team",
              label: "Index team",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/delete-team",
              label: "Delete team",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/bulk-index-teams",
              label: "Bulk index teams",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Permissions",
          link: {
            type: "doc",
            id: "api/indexing-api/permissions",
          },
          items: [
            {
              type: "doc",
              id: "api/indexing-api/index-user",
              label: "Index user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/bulk-index-users",
              label: "Bulk index users",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/index-group",
              label: "Index group",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/bulk-index-groups",
              label: "Bulk index groups",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/index-membership",
              label: "Index membership",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/bulk-index-memberships-for-a-group",
              label: "Bulk index memberships for a group",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/schedules-the-processing-of-group-memberships",
              label: "Schedules the processing of group memberships",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/delete-user",
              label: "Delete user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/delete-group",
              label: "Delete group",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/delete-membership",
              label: "Delete membership",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/beta-users",
              label: "Beta users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "api/indexing-api/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api/indexing-api/rotate-token",
              label: "Rotate token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Troubleshooting",
          items: [
            {
              type: "doc",
              id: "api/indexing-api/beta-get-datasource-status",
              label: "Beta: Get datasource status\n",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/beta-get-document-information",
              label: "Beta: Get document information\n",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/beta-get-information-of-a-batch-of-documents",
              label: "Beta: Get information of a batch of documents\n",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/beta-get-user-information",
              label: "Beta: Get user information\n",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/check-document-access",
              label: "Check document access",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/get-document-upload-and-indexing-status",
              label: "Get document upload and indexing status",
              className: "menu__list-item--deprecated api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/get-document-count",
              label: "Get document count",
              className: "menu__list-item--deprecated api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/get-user-count",
              label: "Get user count",
              className: "menu__list-item--deprecated api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Shortcuts",
          items: [
            {
              type: "doc",
              id: "api/indexing-api/bulk-index-external-shortcuts",
              label: "Bulk index external shortcuts",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/indexing-api/upload-shortcuts",
              label: "Upload shortcuts",
              className: "api-method post",
            },
          ],
        },
        {
          type: "link",
          href: "https://developers.glean.com/oas/indexing",
          label: "OpenAPI Spec",
        },
      ],
    },
    {
      type: "category",
      label: "Client API",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/client-api/glean-api",
        },
        {
          type: "category",
          label: "Activity",
          link: {
            type: "doc",
            id: "api/client-api/activity"
          },
          items: [
            {
              type: "doc",
              id: "api/client-api/report-document-activity",
              label: "Report document activity",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/report-client-activity",
              label: "Report client activity",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "api/client-api/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api/client-api/create-auth-token",
              label: "Create authentication token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Agents",
          link: {
            type: "doc",
            id: "api/client-api/agents",
          },
          items: [
            {
              type: "doc",
              id: "api/client-api/get-agent",
              label: "Retrieve an agent",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/get-agent-schemas",
              label: "List an agent's schemas",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/search-agents",
              label: "Search agents",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/create-and-stream-run",
              label: "Create an agent run and stream the response",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/create-and-wait-run",
              label: "Create an agent run and wait for the response",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Governance",
          link: {
            type: "doc",
            id: "api/client-api/governance",
          },
          items: [
            {
              type: "doc",
              id: "api/client-api/get-policy",
              label: "Gets specified policy",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/update-policy",
              label: "Updates an existing policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/list-policies",
              label: "Lists policies",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/create-policy",
              label: "Creates new policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/download-policy-csv",
              label: "Downloads violations CSV for policy",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/create-report",
              label: "Creates new one-time report",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/download-report-csv",
              label: "Downloads violations CSV for report",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/get-report-status",
              label: "Fetches report run status",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/get-doc-visibility",
              label: "Fetches documents visibility",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/set-doc-visibility",
              label: "Hide or unhide docs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Summarize",
          link: {
            type: "doc",
            id: "api/client-api/summarize",
          },
          items: [
            {
              type: "doc",
              id: "api/client-api/summarize-documents",
              label: "Summarize documents",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tools",
          link: {
            type: "doc",
            id: "api/client-api/tools",
          },
          items: [
            {
              type: "doc",
              id: "api/client-api/list-available-tools",
              label: "List available tools",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/execute-the-specified-tool",
              label: "Execute the specified tool",
              className: "api-method post",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;