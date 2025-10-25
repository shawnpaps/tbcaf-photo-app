# TBCAF 2025 Vendors Data Extraction Summary

This document summarizes the data extracted from the HTML files and implemented in the VendorsScreen component.

## Extraction Date
2025-01-XX

## Source Files
- `client/vendors.html`
- `client/roasters.html`

## Data Extracted

### Artists (37 total)
All artists have artwork images displayed in the gallery.

1. **Kitten Creations**
2. **Aaron Apsley Artwork**
3. **Absolutely Crafty Ann**
4. **A Crafty Little Freak**
5. **Alysia Ariana Harris**
6. **Artist Jody Goldman**
7. **Brezz Art**
8. **Close the Gap Design**
9. **Darryl Goldman Art**
10. **Diana Rendell**
11. **Elliott Prada**
12. **Elizabeth Desjardins**
13. **Florida Gourd Craft LLC**
14. **Fluid Emotion Artworks**
15. **Forests Within**
16. **Ghostie Gang Art**
17. **Jenni Gregory**
18. **Karol Art 72**
19. **Kiara Q Abstract**
20. **Night Owl Society**
21. **Nora Branson**
22. **Nora Jane Long**
23. **Nova Fro Productions**
24. **Painting with Pixels**
25. **Peintado Art**
26. **Plunder Pottery**
27. **Polk Pottery**
28. **Red Mud Pottery**
29. **Sam's Murals**
30. **Sketchy Stechy**
31. **Soul Speak Studios**
32. **Sunset Henna**
33. **Texture and Tones**
34. **The Coastal Palette**
35. **The Fleurida Collection**
36. **Xclusv Art**

Note: vendors.html shows "More Artists TBA!"

### Coffee Roasters (16 total)
All roasters have announcement graphics and most have websites.

1. **85 Drips** - http://www.85drips.com
2. **Corporate Menace Coffee Co** - https://www.corporatemenace.com/
3. **F'mi Coffee Roasters** - http://treehouseroasters.com
4. **Gasparilla Roasting** - http://www.gasparillaroasting.com
5. **Goggy Dog Coffee** - http://www.groggycoffee.com
6. **Royal Diaspora Coffee Company** - https://royaldiasporacoffee.com/
7. **Small Beanz Coffee Co** - http://www.smallbeanzcoffeeco.com
8. **Tevino Cafe** - http://www.tevinocafe.com
9. **Brisk Coffee** - http://www.ccmcoffee.com
10. **Burundi Coffee and Tea** - https://burundicoffeeandtea.com/
11. **Good Fruit Roasters** - (no website)
12. **Hogg Batch** - http://hoggbatch.com
13. **Latitude Coffee** - https://latitudecoffee.com/
14. **Ragged Coffee** - https://www.raggedcoffee.com
15. **The Brown Bag Coffee Company** - http://thebrownbagcoffee.com
16. **IMUA Coffee Roasters** - https://www.imua.coffee

### Vendors (3 total)
Note: vendors.html shows "More Vendors TBA!" (separate from Artists)

1. **Astercroft**
2. **Graphicschyk Designs**
3. **Year of the Dog T-Shirt Co**

### Sponsors (14 total)

1. **Sumitra Coffee Co** - (no website)
2. **NOM Catering Co** - https://nomcateringco.com
3. **Patio Enclosures** - https://www.patioenclosures.com
4. **Craft Body Scan** - https://craftbodyscan.com
5. **Local Coffee Talk** - https://www.localcoffeetalk.com
6. **Lakeland Linder International Airport** - https://www.flylakeland.com/
7. **Roastar** - https://info.roastar.com/tampacoffee
8. **Libby Designs** - http://libby-designs.com/
9. **Blick Art Materials** - http://www.dickblick.com/
10. **Diaco Law** - https://diacolaw.com/personal-injury-practice-areas/auto-accident-attorneys/
11. **Shark Floor Coatings** - https://sharkfloorcoatings.com/
12. **Quality Craftsmen** - https://www.quality-craftsmen.com
13. **Relentless Merch** - https://relentlessmerch.com
14. **All American Gutter Protection** - https://www.allamericangutterprotection.com

## Logo Assets

All logos are hosted on the TBCAF website at:
`https://tampabayartistfestival.com/uploads/2/1/2/5/21250988/[filename]`

### Logo Naming Patterns
- **Artists**: `[name]-[number].jpg` (gallery images of artwork)
- **Roasters**: `[name]-roaster-announcement-graphic-copy.jpg`
- **Vendors**: `[name]-[number].jpg`
- **Sponsors**: `[name]_orig.png` or `[name]-copy_orig.png`

## Implementation Details

### Component: VendorsScreen.tsx

**Features Implemented:**
- Tabbed interface with four sections: Artists, Roasters, Vendors, Sponsors
- Default tab: Roasters
- Clickable logos that open websites in new tab (when available)
- Responsive grid layout (2 cols mobile, 3 cols tablet, 4 cols desktop)
- Hover effects on all cards
- Image error handling with fallback to text display
- Context-specific messaging for each tab
- "More artists TBA" message on artists tab
- "More vendors TBA" message on vendors tab

**Interface:**
```typescript
interface Vendor {
	name: string;
	logo: string;
	website?: string;
}
```

**Tab State Management:**
- Uses React useState hook
- Type: 'artists' | 'vendors' | 'roasters' | 'sponsors'
- Default: 'roasters'

**Styling:**
- DaisyUI tabs component
- Active tab: amber-500 background
- Glass morphism effects (backdrop-blur)
- Consistent white text with opacity variants

## Notes

1. Some logos may not load if the source website changes or removes them
2. Artists are displayed with gallery images of their artwork (37 total)
3. The vendors list is intentionally short with a "More TBA" message (separate from artists)
4. All roaster logos are square announcement graphics
5. Sponsor logos vary in aspect ratio and may need aspect-aware display
6. One sponsor logo file name (img-7081_orig.png) doesn't indicate the company name
7. Good Fruit Roasters is the only roaster without a website link
8. Artists currently don't have website links in the HTML (only gallery images)

## Future Enhancements

- Consider caching logos locally for faster loading
- Add loading states for images
- Implement search/filter functionality
- Add social media links for artists
- Extract artist websites/social media if available
- Consider adding descriptions for artists, vendors, and sponsors
- Add analytics to track which logos are clicked most
- Implement artist profile pages with more details about their work