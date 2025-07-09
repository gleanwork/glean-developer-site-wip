#!/usr/bin/env bash
# check-links.sh – crawl every <loc> in a sitemap (or sitemap‑index) with lychee
set -euo pipefail

SITEMAP_URL="${1:-https://developers.glean.com/sitemap.xml}"

tmp_dir="$(mktemp -d)"
url_list="${tmp_dir}/urls.txt"

# ── Fetch sitemap and extract all <loc> elements, namespace‑agnostic ──────────
if command -v xmllint >/dev/null 2>&1; then
  curl -sSL "$SITEMAP_URL" |
    xmllint --xpath "//*[local-name()='loc']/text()" - |
    tr ' ' '\n' |
    grep -E '^https?://' \
      >"$url_list"
else
  curl -sSL "$SITEMAP_URL" |
    python3 - "$url_list" <<'PY'
import sys, pathlib, xml.etree.ElementTree as ET
root = ET.fromstring(sys.stdin.read())
locs  = root.findall(".//{*}loc")
with pathlib.Path(sys.argv[1]).open("w") as f:
    for loc in locs:
        if loc.text and loc.text.startswith(("http://", "https://")):
            f.write(loc.text.strip() + "\n")
PY
fi

# ── Drop nested sitemaps so we check only page URLs ───────────────────────────
grep -vE '\.xml(\.gz)?$' "$url_list" >"${url_list}.pages"
mv "${url_list}.pages" "$url_list"

# ── Run lychee (file passed POSITIONALLY) ─────────────────────────────────────
lychee --verbose "$url_list"

rm -rf "$tmp_dir"
