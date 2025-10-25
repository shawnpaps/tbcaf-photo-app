# TBCAF 2025 - SEO & Deployment Guide

## 🎯 SEO Optimization Checklist

### ✅ Completed SEO Enhancements

#### 1. **Meta Tags** (index.html)
- ✅ Primary meta tags (title, description, keywords)
- ✅ Open Graph tags for Facebook sharing
- ✅ Twitter Card tags for Twitter sharing
- ✅ Geographic tags for local SEO
- ✅ Theme colors for mobile browsers
- ✅ iOS web app tags

#### 2. **Structured Data** (JSON-LD)
- ✅ Event schema for TBCAF 2025
- ✅ WebApplication schema for photo gallery
- ✅ Organization schema
- ✅ Offer schema for contest

#### 3. **Favicons & Icons**
- ✅ SVG favicon (scalable, small file size)
- ✅ Apple touch icon
- ✅ TBCAF logo SVG
- ✅ Theme color for mobile browsers

#### 4. **SEO Files**
- ✅ robots.txt - Search engine crawler rules
- ✅ sitemap.xml - Site structure for search engines
- ✅ manifest.json - PWA configuration

#### 5. **Performance & Accessibility**
- ✅ Lazy loading images
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ ARIA labels where needed
- ✅ Responsive design (mobile-first)

---

## 🚀 Pre-Deployment Checklist

### 1. Update URLs in Files
Replace placeholder URLs with your actual domain:

**Files to update:**
- `client/index.html` - Update all instances of domain
- `client/public/sitemap.xml` - Update lastmod dates and URLs
- `client/public/robots.txt` - Update sitemap URL

**Find and replace:**
```bash
# Example domain (update to your actual domain)
OLD: https://www.tampabaycoffeeandartfestival.com
NEW: https://your-actual-domain.com
```

### 2. Environment Variables
Create `.env` file in `client/` directory:

```env
VITE_API_URL=your-api-url
VITE_SITE_URL=https://your-actual-domain.com
```

### 3. Update Sitemap Dates
In `client/public/sitemap.xml`, update all `<lastmod>` dates to deployment date:

```xml
<lastmod>2025-01-15</lastmod>  <!-- Update this -->
```

---

## 📊 SEO Keywords & Content Strategy

### Primary Keywords
- Tampa Bay Coffee Festival
- Tampa Bay Art Festival
- TBCAF 2025
- Coffee roasters Tampa
- Local artists Tampa Bay

### Secondary Keywords
- Tampa coffee events
- Art festival Florida
- Win free coffee Tampa
- Tampa Bay local events
- Coffee and art festival

### Content Highlights
1. **37 Local Artists** - Showcased with images
2. **16 Coffee Roasters** - With website links
3. **14 Sponsors** - Community supporters
4. **Photo Contest** - Win free coffee for a year

---

## 🔍 Search Console Setup

### Google Search Console
1. Verify ownership via HTML tag (add to index.html):
```html
<meta name="google-site-verification" content="your-verification-code" />
```

2. Submit sitemap:
   - Go to Google Search Console
   - Navigate to Sitemaps
   - Submit: `https://your-domain.com/sitemap.xml`

### Bing Webmaster Tools
1. Verify ownership
2. Submit sitemap: `https://your-domain.com/sitemap.xml`
3. Submit URL inspection for key pages

---

## 📱 Social Media Optimization

### Facebook/Instagram Sharing
- **Image**: `/tbcaf-logo.svg` (1200x630px recommended)
- **Title**: "TBCAF 2025 Photo Gallery | Tampa Bay Coffee & Art Festival"
- **Description**: "Share your festival photos and win free coffee!"

### Twitter Sharing
- **Card Type**: Summary Large Image
- **Image**: `/tbcaf-logo.svg`
- **Handle**: Add your Twitter handle in index.html

### Test Social Sharing
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

---

## 🎨 Image Optimization

### Current Images
All images are loaded from external source:
```
https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/
```

### Recommendations
1. **Lazy Loading**: ✅ Already implemented
2. **WebP Format**: Consider converting to WebP for better compression
3. **CDN**: Consider using a CDN for faster global delivery
4. **Image Sitemap**: Already included in sitemap.xml

---

## 📈 Analytics Setup

### Google Analytics 4
Add to `index.html` before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Recommended Tracking Events
- Photo submissions
- Tab switches (Artists, Roasters, Vendors, Sponsors)
- External link clicks (roaster/sponsor websites)
- Share button clicks

---

## 🔐 Security Headers

Add to your server configuration (Nginx/Apache):

### Nginx Example
```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self' https:; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval';" always;
```

---

## 🌐 Deployment Steps

### 1. Build Production Version
```bash
cd client
npm run build
# or
pnpm build
```

### 2. Test Build Locally
```bash
npm run preview
# or
pnpm preview
```

### 3. Deploy to Hosting
Options:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **AWS S3 + CloudFront**: Upload `dist` folder
- **Traditional hosting**: Upload `dist` folder contents

### 4. Post-Deployment Verification
- [ ] Test all pages load correctly
- [ ] Verify favicon appears
- [ ] Test social sharing (Facebook, Twitter)
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Test form submissions
- [ ] Check robots.txt access: `your-domain.com/robots.txt`
- [ ] Check sitemap access: `your-domain.com/sitemap.xml`

---

## 🎯 Local SEO Tips

### Google Business Profile
1. Create/claim listing for "Tampa Bay Coffee & Art Festival"
2. Add photos from the event
3. Post updates about the photo contest
4. Respond to reviews

### Local Directories
Submit to:
- Yelp (Events)
- Eventbrite
- Tampa Bay area event calendars
- Coffee enthusiast forums
- Art community boards

---

## 📝 Content Updates for Better SEO

### Blog Content Ideas (if adding a blog)
1. "Meet the 37 Artists of TBCAF 2025"
2. "16 Local Coffee Roasters You Need to Try"
3. "Behind the Scenes: TBCAF 2025 Photo Highlights"
4. "How to Win Free Coffee for a Year"
5. "Tampa Bay's Coffee Culture: A Deep Dive"

### Social Media Content
- Share artist spotlights
- Feature roaster of the week
- User-generated content from photo submissions
- Contest updates and winners

---

## 🔧 Ongoing Maintenance

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Monitor social media shares
- [ ] Review photo submissions
- [ ] Update contest standings

### Monthly
- [ ] Update sitemap lastmod dates
- [ ] Review analytics data
- [ ] Check broken links
- [ ] Update featured content

### As Needed
- [ ] Add new artists/roasters/vendors
- [ ] Update sponsor logos
- [ ] Refresh meta descriptions
- [ ] Add seasonal content

---

## 📞 Support & Resources

### SEO Tools
- Google Search Console: https://search.google.com/search-console
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Schema Markup Validator: https://validator.schema.org/
- Meta Tags Preview: https://metatags.io/

### Documentation
- Open Graph: https://ogp.me/
- Twitter Cards: https://developer.twitter.com/en/docs/twitter-for-websites/cards
- Schema.org: https://schema.org/
- Web.dev: https://web.dev/

---

## 🎉 Launch Announcement

### Pre-Launch (1 week before)
1. Tease on social media
2. Email newsletter to mailing list
3. Update main website with link
4. Contact local media/bloggers

### Launch Day
1. Post on all social channels
2. Submit to event calendars
3. Share with all participating artists/roasters
4. Send press release to local media

### Post-Launch (ongoing)
1. Share winning photos
2. Feature participant spotlights
3. Update with new content weekly
4. Engage with community submissions

---

## 🏆 Success Metrics

Track these KPIs:
- Photo submissions per week
- Unique visitors
- Social media shares
- Time on site
- Bounce rate
- Mobile vs desktop traffic
- Conversion rate (photo submissions)
- Search engine rankings for target keywords

---

## 📋 Quick Reference

**Domain**: Update all instances in:
- index.html
- sitemap.xml
- robots.txt
- manifest.json

**Images**: All logos/photos served from:
- https://www.tampabaycoffeeandartfestival.com/uploads/...

**Key Files**:
- `/public/robots.txt` - Crawler rules
- `/public/sitemap.xml` - Site structure
- `/public/manifest.json` - PWA config
- `/index.html` - Meta tags & SEO

**Social Sharing**:
- Title: "TBCAF 2025 Photo Gallery | Tampa Bay Coffee & Art Festival"
- Description: "Share your festival photos and win free coffee!"
- Image: `/tbcaf-logo.svg`

---

## ✨ Final Notes

This app is optimized for:
- ⚡ Performance (lazy loading, optimized images)
- 🔍 SEO (comprehensive meta tags, structured data)
- 📱 Mobile (responsive design, PWA features)
- 🎨 User Experience (intuitive navigation, beautiful UI)
- ♿ Accessibility (semantic HTML, ARIA labels)

Good luck with your launch! 🚀☕🎨