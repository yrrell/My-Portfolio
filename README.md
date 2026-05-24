# My Portfolio — Next.js + TypeScript + Tailwind CSS

A professional developer portfolio deployed on Vercel.

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── pages/
│   │   ├── _app.tsx          ← App wrapper, global CSS import
│   │   └── index.tsx         ← Main page (all sections)
│   ├── components/
│   │   ├── Navbar.tsx        ← Sticky nav with smooth scroll
│   │   ├── Hero.tsx          ← Hero with photo, stats, CTAs
│   │   ├── About.tsx         ← Bio + tools grid
│   │   ├── Skills.tsx        ← Animated skill bars
│   │   ├── Projects.tsx      ← KumpuniGo! feature showcase + other projects
│   │   ├── Contact.tsx       ← Contact form
│   │   └── Footer.tsx        ← Footer
│   ├── styles/
│   │   ├── globals.css       ← Tailwind + custom styles + Google Fonts
│   │   └── image/dev_image/
│   │       └── developer.png ← Your graduation photo (source copy)
│   └── image/mockup_image/   ← KumpuniGo mockup source images
│       ├── kumpunigo-hero.png
│       ├── kumpunigo-nearby.png
│       ├── kumpunigo-map.png
│       ├── kumpunigo-community.png
│       ├── kumpunigo-updates.png
│       ├── kumpunigo-antiscam.png
│       ├── kumpunigo-email.png
│       ├── kumpunigo-nationwide.png
│       └── kumpunigo-qr.png
├── public/
│   └── images/               ← Served by Next.js (actual runtime images)
│       ├── developer.png
│       └── mockup/
│           └── kumpunigo-*.png
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🚀 Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## ☁️ Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → Deploy
4. Done! Your portfolio is live.

## ✏️ Customize

- **Your name / email**: Edit `src/components/Navbar.tsx`, `Hero.tsx`, `Contact.tsx`, `Footer.tsx`
- **Stats** (years, projects): Edit `Hero.tsx` → `stats` array
- **Skills %**: Edit `Skills.tsx` → `skills` array
- **Projects**: Edit `Projects.tsx` → add/remove from `slides` or `otherProjects`
- **Social links**: Edit `Hero.tsx` → `socials` array

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Fonts**: Sora + DM Sans + JetBrains Mono (Google Fonts)
- **Images**: Next.js Image component
- **Deployment**: Vercel
