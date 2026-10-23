# DVR Doctor homepage: a redesign idea

Hi okyproxd and foxyonfireyt! 👋

I saw you on Chase Momo's channel and really like DVR Doctor. I work on websites, so I made a
version of your homepage that I think could help more visitors buy a key. It uses your own
footage, prices and wording.

**Live preview:** https://markpapdev-cloud.github.io/dvrdoctor-landing/

It's yours to use however you like: copy the whole thing, take one section, or ignore it.
No need to credit me. Nothing here is on your real site.

## The 6 biggest changes, and why

1. **Your reviews and guarantee are now on the homepage.** Your Gumroad page has 28 five-star
   ratings, a 14-day money-back guarantee and a shout-out to Chase Momo, but your site didn't
   show any of that. People trust a $5 download from a new app much more when they can see
   other pilots liked it and that they can get a refund.

2. **The headline says what it fixes.** "FPV DVR Cleanup for everything and anything FPV" is now
   "Make analog DVR look like you flew digital", followed by the exact glitches it removes
   (rainbow streaks, color tears, HDZero breakup).

3. **Each price has its own buy button.** Before, people picked Standard or Pro on your site, then
   had to pick again on Gumroad. Now "Get Standard" and "Get Pro" are separate buttons. To finish
   this, swap in each version's own Gumroad checkout link (see the to-do list below).

4. **Phone visitors get something that works.** Lots of people find you from YouTube on their
   phone, but "Try it free" downloads a computer app and "Clean online" needs a Pro key. Now
   there's an "Email yourself the download link" box, so they can try it later on their computer.

5. **The Windows and Mac warnings are explained up front.** Since the app isn't signed yet,
   Windows and macOS show a scary warning the first time. A short "heads-up" box tells people what
   to click before they see it, so they don't think something is wrong.

6. **Less to scroll past.** The Kickstarter button that didn't go anywhere yet, the "Another tool:
   nothing to announce yet" card and some extra menu links are gone, so the page goes straight
   from "what it does" to "proof" to "price".

It also loads faster on phones (smaller images) and passes an accessibility check, which makes
it easier to read and use with a keyboard or screen reader.

## If you use it: quick to-do list

Search `index.html` for `TODO` and `PREVIEW ONLY` to find each spot.

- [ ] Delete the yellow "Unofficial redesign" banner and the `noindex` line (both marked `PREVIEW ONLY`).
- [ ] Put each version's direct Gumroad checkout link on the "Get Standard" and "Get Pro" buttons.
- [ ] Link "As featured by Chase Momo" to the video.
- [ ] In the FAQ, say how someone asks for a refund.
- [ ] Check the before/after pictures are real app output (your old site's image descriptions said "Illustration").
- [ ] Optional: make your Gumroad page match the site (same name and logo), and change the Pro
      description to say the highlights extractor is "coming soon".

---

## Technical notes

Plain HTML/CSS/JS like your current site, so no build step is needed.

```
index.html   the page
styles.css   styles
app.js       before/after sliders, example tabs, "email me the link", click tracking
media/       your before/after frames (originals plus smaller 720/1080 px copies for phones)
assets/      icon.png, logo-dark-sm.png (smaller copy of your logo)
```

To use it, copy these files over your current homepage files. The Download and Clean online
links point to your existing `releases.html` and `/web/` pages, so they only work on
dvrdoctor.com, not in the preview.

**Click tracking (optional):** each main button has a `data-track` name such as `hero_buy`,
`buy_pro` or `download_windows`. If you turn on Cloudflare Zaraz for your site, `app.js` sends
those clicks there, so you can see which buttons people use. If you don't, it does nothing.

**Checked on 2026-10-23 (local copy):**
- No sideways scrolling on a 375 px phone, no console errors, no broken images.
- axe-core accessibility check: 0 problems.
- Lighthouse on mobile: speed score 0.84, accessibility 1.0. Your current site scores 0.57 and 0.96.
