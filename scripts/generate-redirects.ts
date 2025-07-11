import fs from 'fs';
import { parseString } from 'xml2js';
import * as levenshtein from 'fast-levenshtein';

interface SitemapUrl {
  loc: Array<string>;
}

interface Sitemap {
  urlset: {
    url: Array<SitemapUrl>;
  };
}

interface Redirect {
  from: string;
  to: string;
}

interface ExistingRedirect {
  source: string;
  destination: string;
}

function extractPath(url: string): string {
  try {
    const urlObj = new URL(url);
    let pathname = urlObj.pathname;

    if (pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    if (pathname === '') {
      pathname = '/';
    }

    return pathname;
  } catch (error) {
    console.warn(`Failed to parse URL: ${url}`);
    return url;
  }
}

function normalizePathForComparison(path: string): string {
  return path
    .toLowerCase()
    .replace(/[^a-z0-9\/\-]/g, '')
    .replace(/\/+/g, '/');
}

function getPathTokens(path: string): Array<string> {
  return path
    .split('/')
    .filter((token) => token.length > 0)
    .map((token) => token.toLowerCase());
}

function calculateTokenOverlap(
  tokens1: Array<string>,
  tokens2: Array<string>,
): number {
  const set1 = new Set(tokens1);
  const set2 = new Set(tokens2);
  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  return union.size > 0 ? intersection.size / union.size : 0;
}

function calculateSimilarity(oldPath: string, newPath: string): number {
  const normalizedOld = normalizePathForComparison(oldPath);
  const normalizedNew = normalizePathForComparison(newPath);

  const levenshteinDistance = levenshtein.get(normalizedOld, normalizedNew);
  const maxLength = Math.max(normalizedOld.length, normalizedNew.length);
  const levenshteinSimilarity =
    maxLength > 0 ? 1 - levenshteinDistance / maxLength : 0;

  const oldTokens = getPathTokens(oldPath);
  const newTokens = getPathTokens(newPath);
  const tokenSimilarity = calculateTokenOverlap(oldTokens, newTokens);

  const combinedScore = levenshteinSimilarity * 0.4 + tokenSimilarity * 0.6;

  return combinedScore;
}

function findBestMatch(
  oldPath: string,
  newPaths: Array<string>,
): string | null {
  let bestMatch = null;
  let bestScore = 0;
  const threshold = 0.3;

  for (const newPath of newPaths) {
    const similarity = calculateSimilarity(oldPath, newPath);

    if (similarity > bestScore && similarity >= threshold) {
      bestScore = similarity;
      bestMatch = newPath;
    }
  }

  console.log(
    `${oldPath} -> ${bestMatch || 'NO MATCH'} (score: ${bestScore.toFixed(3)})`,
  );

  return bestMatch;
}

function compressRedirects(redirects: Array<Redirect>): Array<Redirect> {
  // Create a map for quick lookups
  const redirectMap = new Map<string, string>();
  redirects.forEach(redirect => {
    redirectMap.set(redirect.from, redirect.to);
  });

  // Function to follow redirect chains
  function followChain(start: string, visited = new Set<string>()): string {
    if (visited.has(start)) {
      // Circular reference detected, return the start to avoid infinite loop
      console.warn(`Circular redirect detected: ${Array.from(visited).join(' -> ')} -> ${start}`);
      return start;
    }

    const next = redirectMap.get(start);
    if (!next) {
      return start; // End of chain
    }

    visited.add(start);
    return followChain(next, visited);
  }

  // Compress redirects
  const compressedRedirects: Array<Redirect> = [];
  
  for (const redirect of redirects) {
    const finalDestination = followChain(redirect.to);
    
    compressedRedirects.push({
      from: redirect.from,
      to: finalDestination
    });
  }

  return compressedRedirects;
}

function loadExistingRedirects(): Array<Redirect> {
  try {
    if (!fs.existsSync('mintlify-redirects.json')) {
      return [];
    }

    const content = fs.readFileSync('mintlify-redirects.json', 'utf-8');
    const data = JSON.parse(content);

    // Handle both formats: {source, destination} and {from, to}
    return data.map((item: any) => ({
      from: item.source || item.from,
      to: item.destination || item.to
    }));
  } catch (error) {
    console.warn('Could not load existing redirects:', error);
    return [];
  }
}

async function parseSitemap(filePath: string): Promise<Array<string>> {
  const xmlContent = fs.readFileSync(filePath, 'utf-8');

  return new Promise((resolve, reject) => {
    parseString(xmlContent, (err, result: Sitemap) => {
      if (err) {
        reject(err);
        return;
      }

      try {
        const urls = result.urlset.url.map((urlEntry) => {
          const url = urlEntry.loc[0];
          return extractPath(url);
        });

        resolve(urls);
      } catch (error) {
        reject(error);
      }
    });
  });
}

async function generateRedirects(): Promise<void> {
  try {
    console.log('📥 Loading existing redirects...');
    const existingRedirects = loadExistingRedirects();
    console.log(`Found ${existingRedirects.length} existing redirects`);

    console.log('\n🔍 Parsing sitemap files...');
    const oldPaths = await parseSitemap('old-developer-sitemap.xml');
    const newPaths = await parseSitemap('new-developer-sitemap.xml');

    console.log(
      `📊 Found ${oldPaths.length} old paths and ${newPaths.length} new paths`,
    );

    console.log('\n🔗 Finding best matches...');
    const newRedirects: Array<Redirect> = [];

    // Create a set of existing "from" paths to avoid duplicates
    const existingFromPaths = new Set(existingRedirects.map(r => r.from));

    for (const oldPath of oldPaths) {
      // Skip if we already have a redirect for this path
      if (existingFromPaths.has(oldPath)) {
        console.log(`⏭️  Skipping ${oldPath} (already has redirect)`);
        continue;
      }

      const bestMatch = findBestMatch(oldPath, newPaths);

      if (bestMatch) {
        newRedirects.push({
          from: oldPath,
          to: bestMatch,
        });
      }
    }

    console.log(
      `\n✅ Generated ${newRedirects.length} new redirects out of ${oldPaths.length} old paths`,
    );

    // Combine existing and new redirects
    const allRedirects = [...existingRedirects, ...newRedirects];
    console.log(`📋 Total redirects before compression: ${allRedirects.length}`);

    // Compress redirect chains
    console.log('\n🔄 Compressing redirect chains...');
    const compressedRedirects = compressRedirects(allRedirects);
    
    console.log(`✅ Compressed ${allRedirects.length} redirects to ${compressedRedirects.length}`);

    // Convert back to the original format for consistency
    const finalRedirects = compressedRedirects.map(redirect => ({
      source: redirect.from,
      destination: redirect.to
    }));

    const redirectsJson = JSON.stringify(finalRedirects, null, 2);
    fs.writeFileSync('redirects.json', redirectsJson);

    console.log('📝 Saved compressed redirects to redirects.json');

    console.log('\n📋 Sample final redirects:');
    finalRedirects.slice(0, 10).forEach((redirect) => {
      console.log(`  ${redirect.source} -> ${redirect.destination}`);
    });

    // Show compression statistics
    const compressionStats = allRedirects.length - compressedRedirects.length;
    if (compressionStats > 0) {
      console.log(`\n🎯 Compression eliminated ${compressionStats} redirect chains`);
    }
  } catch (error) {
    console.error('❌ Error generating redirects:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  generateRedirects();
}
