# Isah Aruna — Portfolio

A fast, mobile-responsive developer portfolio built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
```
This generates a static export in the `out/` folder (configured via `output: 'export'` in `next.config.js`).

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Tailwind directives + custom styles
│   ├── layout.tsx       # Root layout with metadata/SEO
│   └── page.tsx         # Main portfolio page (all sections)
├── public/
│   └── profile.jpg      # Your profile photo (add this!)
├── next.config.js       # Next.js config (static export)
├── tailwind.config.ts   # Tailwind theme + marquee animation
├── postcss.config.js    # PostCSS setup
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## 📝 Important Notes

1. **Profile Photo**: Add your profile image to `public/profile.jpg`. The About section references `/profile.jpg`. If your image has a different name or path, update the `<img src="...">` in `app/page.tsx`.

2. **CV Download**: The "Download CV" button links to `/cv.pdf`. Add your CV to `public/cv.pdf` or change the `href` in the Hero section.

3. **Static Export**: The project is configured for static export (`output: 'export'`). This means:
   - No server-side rendering at runtime
   - Perfect for Vercel, Netlify, GitHub Pages, etc.
   - Images are unoptimized (required for static export)

## 🎨 Customization

All content is in `app/page.tsx`. Search for these sections:
- `NAV_LINKS` — navigation items
- `STATS` — hero statistics
- `SKILLS` — skill groups
- `SERVICES` — service cards
- `PROJECTS` — project links
- `LOCAL_SEO_PROJECTS` — local SEO subsection
- `EXPERIENCE` — work history timeline
- `WORKFLOW` — process steps
- `CERTS` — certifications

## 📞 Contact

- Email: arunaisah47@gmail.com
- Phone: +234 813 733 7937
- LinkedIn: [linkedin.com/in/arunaisah](https://linkedin.com/in/arunaisah)
- GitHub: [github.com/Hm2025](https://github.com/Hm2025)
