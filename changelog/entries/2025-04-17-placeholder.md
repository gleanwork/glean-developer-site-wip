---
slug: debug-endpoints-permission-status
title: Debug Endpoints Permission Status
tags: [Indexing API]
---

- [/debug/\{datasource\}/document](https://developers.glean.com/api-reference/indexing/troubleshooting/beta:-get-document-information) - New response field `permissionIdentityStatus` under `status`: Provides information regarding upload status of users and groups specified in document permissions

{/* truncate */}

- [/debug/\{datasource\}/documents](https://developers.glean.com/api-reference/indexing/troubleshooting/beta:-get-information-of-a-batch-of-documents) - New response field `permissionIdentityStatus` under `status`: Provides information regarding upload status of users and groups specified in document permissions