# FontAwesome Icon Reference

Quick reference for commonly used icons and their correct `iconStyle` values.

## Common Icon Styles

### Brands Icons (`iconStyle="brands"`)
These represent company/brand logos and social media platforms:

```jsx
// Social & Platforms
<Card icon="github" iconStyle="brands" />
<Card icon="twitter" iconStyle="brands" />
<Card icon="linkedin" iconStyle="brands" />
<Card icon="discord" iconStyle="brands" />
<Card icon="slack" iconStyle="brands" />

// Programming Languages
<Card icon="python" iconStyle="brands" />
<Card icon="js" iconStyle="brands" />        // JavaScript
<Card icon="golang" iconStyle="brands" />    // Go
<Card icon="java" iconStyle="brands" />
<Card icon="react" iconStyle="brands" />
<Card icon="angular" iconStyle="brands" />
<Card icon="vue" iconStyle="brands" />

// Tools & Platforms
<Card icon="npm" iconStyle="brands" />
<Card icon="docker" iconStyle="brands" />
<Card icon="aws" iconStyle="brands" />
<Card icon="google" iconStyle="brands" />
```

### Solid Icons (`iconStyle="solid"` - default)
Most functional/UI icons:

```jsx
// No iconStyle needed (default)
<Card icon="gear" />           // Settings
<Card icon="database" />       // Database
<Card icon="star" />          // Star
<Card icon="heart" />         // Heart
<Card icon="search" />        // Search
<Card icon="user" />          // User
<Card icon="file" />          // File
<Card icon="folder" />        // Folder
<Card icon="lock" />          // Security
<Card icon="chart-bar" />     // Analytics
```

### Regular Icons (`iconStyle="regular"`)
Outline versions of solid icons:

```jsx
<Card icon="star" iconStyle="regular" />      // Outline star
<Card icon="heart" iconStyle="regular" />     // Outline heart
<Card icon="user" iconStyle="regular" />      // Outline user
```

## Quick Fix Guide

### If an icon isn't showing:

1. **Check if it's a brand icon** - Most company/platform logos need `iconStyle="brands"`
2. **Programming languages** - Usually brands: `python`, `js`, `golang`, `java`, etc.
3. **Social platforms** - Always brands: `github`, `twitter`, `linkedin`, etc.
4. **Functional icons** - Usually solid (default): `gear`, `database`, `search`, etc.

### Error Debugging

If you see a missing icon:
1. Open browser dev tools
2. Look for FontAwesome console warnings
3. Try changing `iconStyle` to `"brands"` if it's a company/platform icon

### Finding Icon Names

1. Visit [FontAwesome Icon Library](https://fontawesome.com/icons)
2. Search for your icon
3. Note the style (solid/regular/brands) in the icon details
4. Use the icon name and correct `iconStyle` in your Card 