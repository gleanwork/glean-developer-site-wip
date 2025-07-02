---
title: "Run agent API bug fix in client libraries"
categories: ["API"]
---

We fixed a bug that caused [Run Agent Wait for Output](https://developers.glean.com/client/api/agents/create-run-wait-for-output)
(`/agents/run/wait`) to return empty responses when used with the API Client
libraries.

{/* truncate */}

We also fixed a bug that produced non-SSE compliant output when
using the [Run Agent Stream Output](https://developers.glean.com/client/api/agents/create-run-stream-output)
(`/agents/run/stream`) endpoint. 