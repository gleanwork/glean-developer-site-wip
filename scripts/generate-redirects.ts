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
    console.log('🔍 Parsing sitemap files...');

    const oldPaths = await parseSitemap('old-developer-sitemap.xml');
    const newPaths = await parseSitemap('new-developer-sitemap.xml');

    console.log(
      `📊 Found ${oldPaths.length} old paths and ${newPaths.length} new paths`,
    );

    console.log('\n🔗 Finding best matches...');
    const redirects: Array<Redirect> = [];

    for (const oldPath of oldPaths) {
      const bestMatch = findBestMatch(oldPath, newPaths);

      if (bestMatch) {
        redirects.push({
          from: oldPath,
          to: bestMatch,
        });
      }
    }

    console.log(
      `\n✅ Generated ${redirects.length} redirects out of ${oldPaths.length} old paths`,
    );

    const redirectsJson = JSON.stringify(redirects, null, 2);
    fs.writeFileSync('redirects.json', redirectsJson);

    console.log('📝 Saved redirects to redirects.json');

    console.log('\n📋 Sample redirects:');
    redirects.slice(0, 10).forEach((redirect) => {
      console.log(`  ${redirect.from} -> ${redirect.to}`);
    });
  } catch (error) {
    console.error('❌ Error generating redirects:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  generateRedirects();
}
