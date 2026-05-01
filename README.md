# Gold Key Realty — Website

**Ken Stulik | Gold Key Realty**
Site: goldkeyrealtygrp.com
GitHub: github.com/goldkeyrealtygrp

---

## What This Is

A fully custom real estate website built with:
- **Astro** (free, open-source static site framework)
- **Tailwind CSS** (styling with GKR brand tokens)
- **Netlify** (recommended hosting — free tier)
- **Lofty CRM** integration points throughout

---

## Setup Instructions (Step by Step)

### Step 1 — Install Node.js (one time only)
1. Go to https://nodejs.org
2. Download and install the **LTS version** (the left button)
3. Restart your computer after installing

### Step 2 — Put This Project On Your Computer
You should have received this as a `.zip` file.
1. Unzip the folder somewhere easy to find (like your Desktop or Documents)
2. The folder will be called `gold-key-realty`

### Step 3 — Open in GitHub Desktop
1. Download GitHub Desktop from https://desktop.github.com if you haven't
2. In GitHub Desktop: **File → Add Local Repository**
3. Point it to the `gold-key-realty` folder
4. Click **"Publish repository"** to push it to github.com/goldkeyrealtygrp

### Step 4 — Connect to Netlify (auto-deploys forever after this)
1. Go to https://app.netlify.com and sign up with your GitHub account
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → find the `gold-key-realty` repo
4. Build settings will auto-detect. Click **Deploy**
5. Once deployed, go to **Domain settings** → add `goldkeyrealtygrp.com`
6. Follow Netlify's instructions to update your DNS (they walk you through it)

### Step 5 — Preview Locally (optional)
If you want to see the site on your own computer before publishing:
1. Open **Terminal** (Mac) or **Command Prompt** (Windows)
2. Type: `cd Desktop/gold-key-realty` (adjust path as needed)
3. Type: `npm install` (once, downloads dependencies)
4. Type: `npm run dev`
5. Open http://localhost:4321 in your browser

---

## Making Updates

After initial setup, every change is:
1. Edit files in the `gold-key-realty` folder
2. Open GitHub Desktop → you'll see the changed files listed
3. Write a short description (e.g. "Updated contact phone number")
4. Click **Commit to main**
5. Click **Push origin**
6. Netlify automatically rebuilds and deploys in ~60 seconds ✅

---

## Lofty Integration — What You Need To Do

Several pages have placeholder comments like:
`<!-- Paste your Lofty widget embed code here -->`

To complete each integration:

### Home Valuation Widget (on /sell and homepage)
1. Log in to Lofty → Website → Widgets → Home Valuation
2. Copy the embed code
3. Paste it into `src/pages/sell.astro` where the placeholder comment is

### Market Snapshot Widget (/index.astro)
1. Lofty → Website → Widgets → Market Snapshot
2. Copy embed → paste into the `<section>` marked "Market Snapshot Widget"

### Chat Widget (base layout footer)
1. Lofty → Website → Chat Widget
2. Copy the `<script>` tag
3. In `src/layouts/BaseLayout.astro`, find the comment `<!-- Paste your Lofty chat script tag here -->`
4. Paste your script tag there

### Contact Form
The contact form at `/contact` is currently a static HTML form.
Replace it with your Lofty contact form widget for CRM lead capture.

---

## Swapping Placeholder Photos

All photos currently use Unsplash links. To use real property or team photos:
1. Add your photo files to the `/public/images/` folder
2. Change the `src="https://images.unsplash.com/..."` to `src="/images/your-photo.jpg"`

**Team photos to replace:**
- Ken's photo: in `src/pages/about.astro` (search for "560250097")
- Alex's photo: in `src/pages/about.astro` (search for "519085360")

**Hero photo:**
- In `src/pages/index.astro`, search for "600596542815"
- Replace with a high-resolution photo of a GKR listing or a Northern Virginia home

**Logo files to add to /public/images/:**
- `gkr-logo-white.png` — logo on dark backgrounds (nav)
- `gkr-logo-navy.png` — logo on light backgrounds
- `og-default.jpg` — 1200×630px image for social sharing

---

## Brand Colors (for reference)
| Name     | Hex       |
|----------|-----------|
| Navy     | #1B2A3B   |
| Gold     | #C9A84C   |
| Gold dark| #B8972E   |
| Cream    | #F5F2EC   |

---

## Site Structure

```
gold-key-realty/
├── public/
│   ├── favicon.svg
│   └── images/         ← put your photos here
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   ← nav, footer, SEO — shared across all pages
│   ├── pages/
│   │   ├── index.astro        ← homepage
│   │   ├── buy.astro          ← buyer search page
│   │   ├── sell.astro         ← seller landing page
│   │   ├── about.astro        ← Ken + Alex bio page
│   │   ├── areas.astro        ← Alexandria, Fairfax, PW County
│   │   ├── contact.astro      ← contact form + info
│   │   └── 404.astro          ← not found page
│   └── styles/
│       └── global.css         ← brand system, component classes
├── astro.config.mjs            ← Astro configuration
├── tailwind.config.mjs         ← brand tokens (colors, fonts, spacing)
└── package.json
```

---

## Questions?

Contact Alex Trahan, Director of Technology, for any technical support.

