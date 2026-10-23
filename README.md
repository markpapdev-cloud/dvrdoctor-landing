# DVR Doctor — rebuilt landing page

Drop-in replacement for the homepage at dvrdoctor.com. Plain HTML/CSS/JS, no build step.

```
index.html   page
styles.css  styles
app.js      before/after sliders, example tabs, "email me the link", click tracking
media/      before/after frames (originals + 720/1080 px sizes)
assets/     icon.png, logo-dark-sm.png
```

## Deploying

Copy these files over the current homepage files. `releases.html` and `/web/` are linked as
they are today, so those pages stay as they are. Keep `media/` filenames: the originals
are the same files the live site already serves.

## Before it goes live (TODOs in index.html)

1. **Gumroad tier links.** Both price buttons point at the product page with a UTM tag.
   Replace each with that variant's direct checkout link so buyers don't pick the tier twice.
2. **Chase Momo.** "As featured by Chase Momo" is plain text; link it to the video.
3. **Refunds.** The FAQ promises the 14-day money-back guarantee shown on Gumroad.
   Add how to claim it.
4. **Example frames.** Confirm the after images are unedited app output. Their alt text on the
   old site said "Illustration".
5. **SmartScreen screenshot.** Optional: add an image of the warning box to the heads-up panel.
6. **Gumroad listing.** Rename the store and logo to DVR Doctor, and change the Pro line to say
   the highlights extractor is coming (the page now says "free when it ships").

## Tracking

Every CTA has a `data-track` name (`hero_buy`, `buy_standard`, `buy_pro`, `download_windows`, ...).
`app.js` sends them to Cloudflare Zaraz (`zaraz.track`) when Zaraz is turned on for the zone;
otherwise it does nothing. Turn on Zaraz (Cloudflare dashboard → Zaraz) to see which
buttons get clicked. Gumroad links carry `utm_source=dvrdoctor.com&utm_content=<placement>`.

## Checked locally (2026-10-23)

- No horizontal scroll at 375 px, no console errors, no broken images.
- axe-core 4.10.2 (WCAG 2.2 AA): 0 violations.
- Lighthouse 12.2.1 mobile: performance 0.84, accessibility 1.0, LCP 3.4 s, TBT 0 ms, CLS 0
  (live site: 0.57 / 0.96, LCP 4.9 s, TBT 720 ms). Served from a local Python server with no
  compression or cache headers; Cloudflare adds those in production.
