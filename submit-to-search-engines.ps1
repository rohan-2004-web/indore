# Comprehensive SEO Indexing PowerShell Script for Saumya Kapoor - Indore Escort Service
# This script submits sitemaps to all major search engines for immediate indexing

Write-Host "🚀 Starting comprehensive SEO indexing submission..." -ForegroundColor Green

# Primary domain and sitemap
$DOMAIN = "saumyakapoor.in"
$SITEMAP_URL = "https://$DOMAIN/sitemap.xml"
$HOMEPAGE_URL = "https://$DOMAIN"

Write-Host "📍 Domain: $DOMAIN" -ForegroundColor Cyan
Write-Host "🗺️ Sitemap: $SITEMAP_URL" -ForegroundColor Cyan

# 1. Google Search Console Sitemap Ping
Write-Host "`n1️⃣ Submitting to Google Search Console..." -ForegroundColor Yellow
try {
    $googleResponse = Invoke-WebRequest -Uri "https://www.google.com/ping?sitemap=$SITEMAP_URL" -UseBasicParsing -Method Get
    Write-Host "Google Response: $($googleResponse.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "Google submission error: $($_.Exception.Message)" -ForegroundColor Red
}

# 2. Bing Webmaster Tools Sitemap Submission  
Write-Host "2️⃣ Submitting to Bing Webmaster Tools..." -ForegroundColor Yellow
try {
    $bingResponse = Invoke-WebRequest -Uri "https://www.bing.com/ping?sitemap=$SITEMAP_URL" -UseBasicParsing -Method Get
    Write-Host "Bing Response: $($bingResponse.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "Bing submission error: $($_.Exception.Message)" -ForegroundColor Red
}

# 3. IndexNow API Submission (Microsoft & Yandex)
Write-Host "3️⃣ Submitting via IndexNow API..." -ForegroundColor Yellow
$indexNowBody = @{
    host = $DOMAIN
    key = "saumyakapoor-indexnow-key"
    keyLocation = "https://$DOMAIN/saumyakapoor-indexnow-key.txt"
    urlList = @(
        "$HOMEPAGE_URL",
        "$HOMEPAGE_URL/services",
        "$HOMEPAGE_URL/locations", 
        "$HOMEPAGE_URL/gallery",
        "$HOMEPAGE_URL/about",
        "$HOMEPAGE_URL/contact",
        "$HOMEPAGE_URL/services/indore-escorts",
        "$HOMEPAGE_URL/services/call-girl",
        "$HOMEPAGE_URL/services/vip-escorts",
        "$HOMEPAGE_URL/services/celebrity-escorts",
        "$HOMEPAGE_URL/services/college-girls",
        "$HOMEPAGE_URL/locations/vijay-nagar",
        "$HOMEPAGE_URL/locations/ab-road",
        "$HOMEPAGE_URL/locations/palasia",
        "$HOMEPAGE_URL/locations/bhawar-kuan",
        "$HOMEPAGE_URL/locations/saket"
    )
} | ConvertTo-Json

try {
    $indexNowResponse = Invoke-WebRequest -Uri "https://api.indexnow.org/indexnow" -Method Post -Body $indexNowBody -ContentType "application/json" -UseBasicParsing
    Write-Host "IndexNow Response: $($indexNowResponse.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "IndexNow submission error: $($_.Exception.Message)" -ForegroundColor Red
}

# 4. Your Internal Fast-Index API
Write-Host "4️⃣ Triggering internal fast-index API..." -ForegroundColor Yellow
$fastIndexBody = @{ action = "submit-all" } | ConvertTo-Json
try {
    $fastIndexResponse = Invoke-WebRequest -Uri "$HOMEPAGE_URL/api/fast-index" -Method Post -Body $fastIndexBody -ContentType "application/json" -UseBasicParsing
    Write-Host "Internal Fast-Index Response: $($fastIndexResponse.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "Internal fast-index error: $($_.Exception.Message)" -ForegroundColor Red
}

# 5. Yandex Webmaster Sitemap Submission
Write-Host "5️⃣ Submitting to Yandex..." -ForegroundColor Yellow
try {
    $yandexResponse = Invoke-WebRequest -Uri "https://webmaster.yandex.com/ping?sitemap=$SITEMAP_URL" -UseBasicParsing -Method Get
    Write-Host "Yandex Response: $($yandexResponse.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "Yandex submission error: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n✅ SEO Indexing submission completed!" -ForegroundColor Green
Write-Host "📊 Expected indexing improvements within 24-48 hours" -ForegroundColor Cyan
Write-Host "🔍 Monitor Google Search Console for indexing status" -ForegroundColor Cyan
Write-Host "📈 Track rankings for: 'Indore escort service', 'Call girls Indore', 'Escorts in Indore'" -ForegroundColor Cyan

# Display current sitemap status
Write-Host "`n📋 Checking current sitemap..." -ForegroundColor Yellow
try {
    $sitemapContent = Invoke-WebRequest -Uri $SITEMAP_URL -UseBasicParsing
    $urlCount = ([regex]::Matches($sitemapContent.Content, '<loc>')).Count
    Write-Host "Total URLs in sitemap: $urlCount" -ForegroundColor Green
} catch {
    Write-Host "Error checking sitemap: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n🎯 Key pages submitted for priority indexing:" -ForegroundColor Cyan
Write-Host "  • Homepage: $HOMEPAGE_URL"
Write-Host "  • Services: $HOMEPAGE_URL/services" 
Write-Host "  • Locations: $HOMEPAGE_URL/locations"
Write-Host "  • Top service pages: indore-escorts, call-girl, vip-escorts"
Write-Host "  • Top location pages: vijay-nagar, ab-road, palasia"

Write-Host "`n💡 Next steps:" -ForegroundColor Green
Write-Host "  1. Monitor indexing in Google Search Console (24-48 hours)"
Write-Host "  2. Check rankings for target keywords (7-14 days)" 
Write-Host "  3. Submit additional pages as they're created"
Write-Host "  4. Run this script weekly for optimal SEO maintenance"

Write-Host "`n🔧 To run this script again:" -ForegroundColor Magenta
Write-Host "  PowerShell -ExecutionPolicy Bypass -File .\submit-to-search-engines.ps1"