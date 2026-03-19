# Lindsay Gullon — Portfolio

A modern, animated personal portfolio website for **Lindsay Gullon**, a Computer Science student at UC San Diego. Built with React, TypeScript, and Framer Motion.

🌐 **Live site:** [lindsay-website.vercel.app](https://lindsay-website.vercel.app)

---

## Features

- **Animated UI** — Framer Motion stagger-in effects, scroll-triggered reveals, hover lifts, and accordion transitions
- **Dark glassmorphism design** — CSS custom properties, gradient system, backdrop-blur cards
- **Responsive layout** — Fully mobile-friendly with a hamburger navigation menu
- **Interactive Transcript viewer** — Expandable per-term accordions with grade badges and cumulative GPA banner
- **Resume download** — One-click PDF download directly from the Hero section
- **Cover Letter** — Styled document card with template placeholders

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, stats, CTA buttons, resume download |
| **About** | Bio, highlights, campus illustration |
| **Education** | UCSD & high school cards with GPA and coursework |
| **Skills** | Categorized skill pills with hover interactions |
| **Experience** | ESB.AI Lab AI/computer vision research role |
| **Projects** | Game jam games (itch.io) and Udemy courses |
| **Transcript** | Full official UCSD academic record by term |
| **Cover Letter** | Customizable internship application template |
| **Contact** | Email, LinkedIn, itch.io, phone |

## Tech Stack

| | |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build tool** | Vite 5 |
| **Animation** | Framer Motion 11 |
| **Styling** | CSS Modules + CSS custom properties |
| **Fonts** | Inter (UI) · Fira Code (monospace) |
| **Hosting** | Vercel (free tier) |

## Project Structure

```
src/
├── App.tsx                        # Root — assembles all sections
├── main.tsx                       # React DOM entry point
├── index.css                      # Global design tokens and utility classes
├── vite-env.d.ts                  # SVG / CSS Module type declarations
├── assets/images/                 # SVG illustrations + avatar photo
│   ├── avatar.jpg
│   ├── ucsd-campus.svg
│   ├── game-blink.svg
│   ├── game-mage.svg
│   └── ai-lab.svg
├── data/                          # Typed data layer (sourced from PDFs)
│   ├── resumeData.ts
│   ├── transcriptData.ts
│   └── coverLetterData.ts
└── components/
    ├── Navbar/
    ├── Hero/
    ├── About/
    ├── Education/
    ├── Skills/
    ├── Experience/
    ├── Projects/
    ├── Transcript/
    ├── CoverLetter/
    ├── Contact/
    └── Footer/

public/
└── Lindsay_Gullon_Resume.pdf      # Served as static asset for download
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check + production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

The site is deployed on **Vercel**. To redeploy after changes:

```bash
# Build, commit, push — Vercel auto-deploys from GitHub
git add -A
git commit -m "your message"
git push origin main
```

Or trigger a manual deploy:

```bash
npx vercel deploy --prod --yes
```

---

*Portfolio content sourced from Resume.pdf, OfficialTranscript.pdf, and SampleCoverLetter.pdf.*
