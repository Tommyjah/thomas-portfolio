# Thomas Debebe — Portfolio Website & Next.js Template

> A premium, modern **portfolio website** for a **Full-Stack Developer & AI Product Builder**. Dark & light themes, flip-card projects, animated skill bars, typing hero, and a luxury credentials section. Clean, fast, responsive — and easily reusable as a **developer portfolio template**.

![Next.js](https://img.shields.io/badge/Next.js%2016-black?logo=next.js&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38bdf8?logo=tailwindcss&style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&style=flat-square)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

**Live demo:** your-vercel-url.vercel.app — **Portfolio for: AI developer, full-stack engineer, machine learning engineer, data analyst** — built for recruiters, freelance clients, and job applications.

---

## ✨ Features

- 🌗 **Dark mode / light mode** with one-click toggle, persisted in `localStorage`
- ⌨️ **Animated typing hero** that cycles through roles & specialties
- 🃏 **3D flip-card projects** — hover to flip: image, stack & status on the front; full description + live link on the back
- 📊 **Animated skill bars** — fill to percentage on scroll (Next.js, React, TypeScript, Python, AI/ML, Supabase, cloud)
- 🏅 **Verified credentials list** — numbered badges with real verification links
- 🧠 **Soft skills & virtual experience** section (Forage: EA, Deloitte, Accenture)
- ✨ **Particle background + ambient glow** animations
- 🎨 **Glassmorphism cards**, gradient accents, smooth scroll-reveal animations
- 📱 **100% responsive** — hamburger mobile menu, mobile-first breakpoints
- 🚀 **Blazing fast** — zero heavy runtime dependencies, inline SVG icons, App Router + Turbopack

## 🛠 Built With

| Purpose | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS](https://tailwindcss.com) + custom CSS variables |
| Animations | Pure CSS (keyframes) + IntersectionObserver scroll reveals |
| Hosting | [Vercel](https://vercel.com) — auto-deploy from GitHub |

**Why this stack?** Next.js gives SEO-ready server rendering and one-command Vercel deploys; Tailwind keeps styling instant and consistent; zero extra dependencies means it installs and builds in seconds.

## 🚀 Getting Started

```bash
# clone or download, then:
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build && npm start
```

## 📂 Project Structure

```
├── public/
│   └── profile.jpg         # ← replace with your photo
└── src/app/
    ├── layout.tsx          # root layout + SEO metadata
    ├── globals.css         # themes, animations, all styles (CSS variables)
    └── page.tsx            # the whole portfolio in one file
```

## 🎨 Customize in Minutes (Template Mode)

All content is plain data arrays at the top of `src/app/page.tsx`:

| What to change | Array to edit |
|---|---|
| Name, roles, hero text | `phrases`, hero JSX |
| Projects | `projects` (title, description, tech, link, image, metrics) |
| Skills & levels | `skillGroups` |
| Experience | `experience` |
| Certifications | `certifications` |
| Soft skills & Forage | `softSkills`, `virtualExperiences` |

Theme colors (accent, background, text) are **CSS variables** in `src/app/globals.css` — change `--accent` once and the whole site updates.

## ☁️ Deploy to Vercel (Free)

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Done — every `git push` auto-redeploys

## 📬 Connect with Me

- **LinkedIn:** [linkedin.com/in/thomas-debebe](https://linkedin.com/in/thomas-debebe)
- **GitHub:** [github.com/Tommyjah](https://github.com/Tommyjah)
- **Email:** tomiti2552@gmail.com
- **Location:** Addis Ababa, Ethiopia (open to remote)

## 📄 License

MIT — free to use, remix, and sell. A credit link back is appreciated 🤝

---

**Keywords:** Next.js portfolio · developer portfolio template · React portfolio website · TypeScript portfolio · Tailwind portfolio · AI developer portfolio · full-stack developer resume website · personal website template · dark mode portfolio · responsive portfolio · Vercel deploy
