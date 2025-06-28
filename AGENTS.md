# AGENTS Instructions

This repository contains a Docusaurus website built with Node.js and Yarn.

## Environment
- Node.js version 22.16.0
- Yarn version 4.9.2

Use `yarn install` to install dependencies locally. The CI workflow runs
`yarn install --immutable` to guarantee reproducible installs.

## Programmatic Checks
- Run `yarn build` to ensure the site builds successfully. The CI workflow installs dependencies with the `--immutable` flag and then runs this command.
- Formatting is handled by Prettier. Run `yarn format` to apply the project's style (single quotes and trailing commas).

No other automated tests are defined.

## Content Guidelines
- Prefer built-in Docusaurus components when creating pages or examples.
  Custom React components should only be added when a built-in component
  cannot achieve the desired result.
