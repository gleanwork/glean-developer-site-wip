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
  docSidebar: [
    {
      type: "category",
      label: "Get Started",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "get-started/home",
          label: "Home",
        },
        {
          type: "doc",
          id: "get-started/key-terms",
          label: "Key Terms",
        },
        {
          type: "doc",
          id: "get-started/rate-limits",
          label: "Rate Limits",
        },
        {
          type: "link",
          href: "/changelog",
          label: "Changelog",
        },
        {
          type: "link",
          href: "https://community.glean.com",
          label: "Community",
        }
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "guides/agents/agents",
          label: "Agents",
        },
        {
          type: "doc",
          id: "guides/mcp/mcp",
          label: "MCP",
        },
        {
          type: "doc",
          id: "guides/langchain/langchain",
          label: "LangChain",
        }
      ]
    },
    {
      type: "category",
      label: "Client API",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api-info/client/getting-started",
          label: "Getting Started",
        },
        {
          type: "category",
          label: "Authentication",
          items: [
            {
              type: "doc",
              id: "api-info/client/authentication/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api-info/client/authentication/glean-issued",
              label: "Glean Issued Tokens",
            },
            {
              type: "doc",
              id: "api-info/client/authentication/oauth",
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
              id: "api-info/client/examples/chatbot",
              label: "Chatbot",
            },
            {
              type: "doc",
              id: "api-info/client/examples/nvidia-enterprise-kb-chatbot",
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
              id: "api-info/client/search/filtering-results",
              label: "Filtering Results",
            },
            {
              type: "doc",
              id: "api-info/client/search/datasource-filters",
              label: "Datasource Filters",
            },
            {
              type: "doc",
              id: "api-info/client/search/faceted-filters",
              label: "Faceted Filtering",
            }
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Client API Reference",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Activity",
          items: [
            {
              type: "doc",
              id: "api/client-api/activity/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/activity/report-document-activity",
              label: "Report document activity",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/activity/report-client-activity",
              label: "Report client activity",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          items: [
            {
              type: "doc",
              id: "api/client-api/authentication/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/authentication/create-auth-token",
              label: "Create authentication token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Agents",
          items: [
            {
              type: "doc",
              id: "api/client-api/agents/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/agents/get-agent",
              label: "Retrieve an agent",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/agents/get-agent-schemas",
              label: "List an agent's schemas",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/agents/search-agents",
              label: "Search agents",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/agents/create-and-stream-run",
              label: "Create an agent run and stream the response",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/agents/create-and-wait-run",
              label: "Create an agent run and wait for the response",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Answers",
          items: [
            {
              type: "doc",
              id: "api/client-api/answers/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/answers/listanswers",
              label: "List answers",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/answers/createanswer",
              label: "Create answer",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/answers/getanswer",
              label: "Get answer",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/answers/editanswer",
              label: "Edit answer",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api/client-api/answers/deleteanswer",
              label: "Delete answer",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Announcements",
          items: [
            {
              type: "doc",
              id: "api/client-api/announcements/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/announcements/createannouncement",
              label: "Create announcement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/announcements/updateannouncement",
              label: "Update announcement",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api/client-api/announcements/deleteannouncement",
              label: "Delete announcement",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Chat",
          items: [
            {
              type: "doc",
              id: "api/client-api/chat/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/chat/chat",
              label: "Create chat",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/chat/chat-stream",
              label: "Stream chat",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/chat/listchats",
              label: "List chats",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/chat/getchat",
              label: "Get chat",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/chat/deletechats",
              label: "Delete chats",
              className: "api-method delete",
            },
            {
              type: "doc",
              id: "api/client-api/chat/deleteallchats",
              label: "Delete all chats",
              className: "api-method delete",
            },
            {
              type: "doc",
              id: "api/client-api/chat/getchatapplication",
              label: "Get chat application",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/chat/uploadchatfiles",
              label: "Upload chat files",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/chat/getchatfiles",
              label: "Get chat files",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/chat/deletechatfiles",
              label: "Delete chat files",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Collections",
          items: [
            {
              type: "doc",
              id: "api/client-api/collections/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/collections/listcollections",
              label: "List collections",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/collections/createcollection",
              label: "Create collection",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/collections/getcollection",
              label: "Get collection",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/collections/editcollection",
              label: "Edit collection",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api/client-api/collections/deletecollection",
              label: "Delete collection",
              className: "api-method delete",
            },
            {
              type: "doc",
              id: "api/client-api/collections/addcollectionitems",
              label: "Add collection items",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/collections/editcollectionitem",
              label: "Edit collection item",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api/client-api/collections/deletecollectionitem",
              label: "Delete collection item",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Entities",
          items: [
            {
              type: "doc",
              id: "api/client-api/entities/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/entities/listentities",
              label: "List entities",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/entities/people",
              label: "Get people",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Governance",
          items: [
            {
              type: "doc",
              id: "api/client-api/governance/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/governance/get-policy",
              label: "Gets specified policy",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/governance/update-policy",
              label: "Updates an existing policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/governance/list-policies",
              label: "Lists policies",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/governance/create-policy",
              label: "Creates new policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/governance/download-policy-csv",
              label: "Downloads violations CSV for policy",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/governance/create-report",
              label: "Creates new one-time report",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/client-api/governance/download-report-csv",
              label: "Downloads violations CSV for report",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/governance/get-report-status",
              label: "Fetches report run status",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/governance/get-doc-visibility",
              label: "Fetches documents visibility",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/governance/set-doc-visibility",
              label: "Hide or unhide docs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Summarize",
          items: [
            {
              type: "doc",
              id: "api/client-api/summarize/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/summarize/summarize-documents",
              label: "Summarize documents",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: [
            {
              type: "doc",
              id: "api/client-api/tools/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/client-api/tools/list-available-tools",
              label: "List available tools",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/client-api/tools/execute-the-specified-tool",
              label: "Execute the specified tool",
              className: "api-method post",
            },
          ],
        },
        {
          type: "link",
          href: "https://developers.glean.com/oas/indexing",
          label: "OpenAPI Spec",
        },
      ]
    },
    {
      type: "category",
      label: "Indexing API",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Getting Started",
          items: [
            {
              type: "doc",
              id: "api-info/indexing/getting-started/setup-datasource",
              label: "Setup Datasource",
            },
            {
              type: "doc",
              id: "api-info/indexing/getting-started/index-documents",
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
              id: "api-info/indexing/authentication/managing-tokens",
              label: "Managing Tokens",
            },
            {
              type: "doc",
              id: "api-info/indexing/authentication/token-rotation",
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
              id: "api-info/indexing/datasource/custom-properties",
              label: "Custom Properties",
            },
            {
              type: "doc",
              id: "api-info/indexing/datasource/test-datasource",
              label: "Test Datasource",
            },
            {
              type: "doc",
              id: "api-info/indexing/datasource/category",
              label: "Category",
            },
            {
              type: "doc",
              id: "api-info/indexing/datasource/rendering-search-results",
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
              id: "api-info/indexing/documents/activity",
              label: "Activity",
            },
            {
              type: "doc",
              id: "api-info/indexing/documents/permissions",
              label: "Permissions",
            },
            {
              type: "doc",
              id: "api-info/indexing/documents/bulk-indexing",
              label: "Bulk Indexing",
            },
            {
              type: "doc",
              id: "api-info/indexing/documents/bulk-upload-model",
              label: "Bulk Upload Model",
            },
            {
              type: "doc",
              id: "api-info/indexing/documents/document-model",
              label: "Document Model",
            },
            {
              type: "doc",
              id: "api-info/indexing/documents/supported-mimetypes",
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
              id: "api-info/indexing/debugging/datasource-config",
              label: "Datasource Config",
            },
            {
              type: "doc",
              id: "api-info/indexing/debugging/datasource-status",
              label: "Datasource Status",
            },
            {
              type: "doc",
              id: "api-info/indexing/debugging/datasource-document",
              label: "Datasource Document",
            },
            {
              type: "doc",
              id: "api-info/indexing/debugging/datasource-user",
              label: "Datasource User",
            },
            {
              type: "doc",
              id: "api-info/indexing/debugging/document-access",
              label: "Document Access",
            },
            {
              type: "doc",
                id: "api-info/indexing/debugging/document-count",
              label: "Document Count",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Indexing API Reference",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Datasources",
          items: [
            {
              type: "doc",
              id: "api/indexing-api/datasources-overview",
              label: "Overview",
            },
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
          items: [
            {
              type: "doc",
              id: "api/indexing-api/documents-overview",
              label: "Overview",
            },
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
          items: [
            {
              type: "doc",
              id: "api/indexing-api/people-overview",
              label: "Overview",
            },
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
          items: [
            {
              type: "doc",
              id: "api/indexing-api/permissions-overview",
              label: "Overview",
            },
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
          items: [
            {
              type: "doc",
              id: "api/indexing-api/authentication-overview",
              label: "Overview",
            },
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
              id: "api/indexing-api/troubleshooting-overview",
              label: "Overview",
            },
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
              id: "api/indexing-api/shortcuts-overview",
              label: "Overview",
            },
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
      ]
    },
    {
      type: "category",
      label: "Libraries",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Web SDK",
          items: [
            {
              type: "doc",
              id: "libraries/web-sdk/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "libraries/web-sdk/3rd-party-cookies",
              label: "Third-Party Cookie Management",
            },
            {
              type: "category",
              label: "Components",
              items: [
                {
                  type: "doc",
                  id: "libraries/web-sdk/components/chat",
                  label: "Glean Chat",
                },
                {
                  type: "doc",
                  id: "libraries/web-sdk/components/autocomplete",
                  label: "Autocomplete",
                },
                {
                  type: "doc",
                  id: "libraries/web-sdk/components/modal-search",
                  label: "Modal Search",
                },
                {
                  type: "doc",
                  id: "libraries/web-sdk/components/sidebar",
                  label: "Sidebar",
                },
                {
                  type: "doc",
                  id: "libraries/web-sdk/components/recommendations",
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
                  id: "libraries/web-sdk/guides/react",
                  label: "React",
                },
                {
                  type: "doc",
                  id: "libraries/web-sdk/guides/zendesk",
                  label: "Zendesk",
                },
                {
                  type: "doc",
                  id: "libraries/web-sdk/guides/lumapps",
                  label: "Lumapps",
                },
                {
                  type: "doc",
                  id: "libraries/web-sdk/guides/brightspot",
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
        {
          type: "doc",
          id: "libraries/api-clients",
          label: "API Clients",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "link",
          href: "https://github.com/gleanwork/glean-developer-site/discussions",
          label: "Discussions",
        },
        {
          type: "link",
          href: "https://github.com/gleanwork/glean-developer-site/issues/new?template=bug_report.md",
          label: "Bug Report",
        },
        {
          type: "link",
          href: "https://github.com/gleanwork/glean-developer-site/issues/new?template=feature_request.md",
          label: "Request a Feature",
        },
        {
          type: "link",
          href: "https://support.glean.com/hc/en-us",
          label: "Support",
        },
        {
          type: "link",
          href: "https://status.glean.com/",
          label: "Status",
        },
      ],
    },
  ],
};

export default sidebars;