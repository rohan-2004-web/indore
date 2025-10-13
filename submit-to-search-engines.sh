#!/bin/bash

# Comprehensive SEO Indexing Script for Saumya Kapoor - Indore Escort Service
# This script submits sitemaps to all major search engines for immediate indexing

echo "🚀 Starting comprehensive SEO indexing submission..."

# Primary domain and sitemap
DOMAIN="saumyakapoor.in"
SITEMAP_URL="https://$DOMAIN/sitemap.xml"
HOMEPAGE_URL="https://$DOMAIN"

echo "📍 Domain: $DOMAIN"
echo "🗺️ Sitemap: $SITEMAP_URL"

# 1. Google Search Console Sitemap Ping
echo -e "\n1️⃣ Submitting to Google Search Console..."
curl -X GET "https://www.google.com/ping?sitemap=$SITEMAP_URL" \
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
  --silent --output /dev/null --write-out "Google Response: %{http_code}\n"

# 2. Bing Webmaster Tools Sitemap Submission
echo -e "2️⃣ Submitting to Bing Webmaster Tools..."
curl -X GET "https://www.bing.com/ping?sitemap=$SITEMAP_URL" \
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
  --silent --output /dev/null --write-out "Bing Response: %{http_code}\n"

# 3. IndexNow API Submission (Microsoft & Yandex)
echo -e "3️⃣ Submitting via IndexNow API..."
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"$DOMAIN\",
    \"key\": \"saumyakapoor-indexnow-key\",
    \"keyLocation\": \"https://$DOMAIN/saumyakapoor-indexnow-key.txt\",
    \"urlList\": [
      \"$HOMEPAGE_URL\",
      \"$HOMEPAGE_URL/services\",
      \"$HOMEPAGE_URL/locations\",
      \"$HOMEPAGE_URL/gallery\",
      \"$HOMEPAGE_URL/about\",
      \"$HOMEPAGE_URL/contact\",
      \"$HOMEPAGE_URL/services/indore-escorts\",
      \"$HOMEPAGE_URL/services/call-girl\",
      \"$HOMEPAGE_URL/services/vip-escorts\",
      \"$HOMEPAGE_URL/services/celebrity-escorts\",
      \"$HOMEPAGE_URL/services/college-girls\",
      \"$HOMEPAGE_URL/locations/vijay-nagar\",
      \"$HOMEPAGE_URL/locations/ab-road\",
      \"$HOMEPAGE_URL/locations/palasia\",
      \"$HOMEPAGE_URL/locations/bhawar-kuan\",
      \"$HOMEPAGE_URL/locations/saket\"
    ]
  }" \
  --silent --output /dev/null --write-out "IndexNow Response: %{http_code}\n"

# 4. DuckDuckGo Sitemap Submission
echo -e "4️⃣ Submitting to DuckDuckGo..."
curl -X GET "https://duckduckgo.com/ping?sitemap=$SITEMAP_URL" \
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
  --silent --output /dev/null --write-out "DuckDuckGo Response: %{http_code}\n"

# 5. Yandex Webmaster Sitemap Submission
echo -e "5️⃣ Submitting to Yandex..."
curl -X GET "https://webmaster.yandex.com/ping?sitemap=$SITEMAP_URL" \
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
  --silent --output /dev/null --write-out "Yandex Response: %{http_code}\n"

# 6. Additional Search Engine Submissions
echo -e "6️⃣ Additional search engines..."

# Submit to Yahoo (via Bing)
curl -X GET "https://search.yahoo.com/ping?sitemap=$SITEMAP_URL" \
  --silent --output /dev/null --write-out "Yahoo Response: %{http_code}\n"

echo -e "\n✅ SEO Indexing submission completed!"
echo "📊 Expected indexing improvements within 24-48 hours"
echo "🔍 Monitor Google Search Console for indexing status"
echo "📈 Track rankings for: 'Indore escort service', 'Call girls Indore', 'Escorts in Indore'"

# Display current sitemap status
echo -e "\n📋 Current sitemap contains:"
curl -s "$SITEMAP_URL" | grep -o '<loc>[^<]*</loc>' | wc -l | xargs echo "Total URLs:"

echo -e "\n🎯 Key pages submitted for priority indexing:"
echo "  • Homepage: $HOMEPAGE_URL"
echo "  • Services: $HOMEPAGE_URL/services"
echo "  • Locations: $HOMEPAGE_URL/locations"
echo "  • Top service pages: indore-escorts, call-girl, vip-escorts"
echo "  • Top location pages: vijay-nagar, ab-road, palasia"

echo -e "\n💡 Next steps:"
echo "  1. Monitor indexing in Google Search Console (24-48 hours)"
echo "  2. Check rankings for target keywords (7-14 days)"
echo "  3. Submit additional pages as they're created"
echo "  4. Run this script weekly for optimal SEO maintenance"