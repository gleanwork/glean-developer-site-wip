// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar

import React from 'react';
import GleanSearch from '@site/src/components/GleanSearch';

export default function SearchBar(): React.ReactElement {
  return <GleanSearch />;
} 