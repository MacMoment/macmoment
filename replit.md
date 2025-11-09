# MacMoment Portfolio

## Project Overview

A terminal-inspired developer portfolio showcasing MacMoment's expertise in Minecraft plugin development and web engineering. Built with React, TypeScript, and Tailwind CSS, featuring an authentic command-line aesthetic with interactive code snippets and smooth animations.

## Recent Changes (November 9, 2025)

- ✅ Multi-page architecture with dedicated routes for each section
- ✅ Professional navigation header with terminal-style links
- ✅ Smooth page transition animations (fade effects)
- ✅ 6 featured projects with professional metrics and code snippets
- ✅ Removed all emojis for professional appearance
- ✅ Terminal-inspired UI with green matrix theme
- ✅ Interactive project cards with expandable code snippets
- ✅ Animated skill bars with clean terminal aesthetic
- ✅ Dark/light mode toggle integrated in header
- ✅ GitHub Pages deployment configuration

## Project Purpose

Static portfolio website for MacMoment to showcase:
- **Featured Projects**: MacAC (Anti-Cheat), MacRefunds (Discord Integration), Lighting Show Importer
- **Technical Skills**: Java, Spigot API, Discord JDA, React, TypeScript
- **Client Testimonials**: Showcasing successful project deliveries
- **Contact Information**: Discord (@MacMoment), Email (contact@macmoment.dev)

## Architecture

**Frontend-Only Application**
- Single-page React application
- No backend APIs required (static content)
- No database needed (portfolio showcase)
- Optimized for GitHub Pages deployment

**Key Technologies:**
- React 18 + TypeScript
- Tailwind CSS with custom terminal theme
- Shadcn/UI components
- Vite build system
- Express.js (development server only)

## Project Structure

```
portfolio/
├── client/src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx              # Navigation bar
│   │   ├── PageTransition.tsx      # Page transition wrapper
│   │   ├── HeroSection.tsx         # Animated hero with typing effect
│   │   ├── AboutSection.tsx        # Bio and statistics
│   │   ├── ProjectsSection.tsx     # Featured project cards
│   │   ├── SkillsSection.tsx       # Tech stack visualization
│   │   ├── TestimonialsSection.tsx # Client feedback
│   │   ├── ContactSection.tsx      # Contact methods
│   │   ├── TerminalWindow.tsx      # Terminal UI wrapper
│   │   ├── ProjectCard.tsx         # Individual project display with metrics
│   │   ├── SkillBar.tsx            # Animated skill meter
│   │   ├── TestimonialCard.tsx     # Client testimonial
│   │   └── ThemeToggle.tsx         # Dark/light mode switch
│   ├── pages/                      # Multi-page structure
│   │   ├── Home.tsx                # Landing page (hero)
│   │   ├── About.tsx               # About page
│   │   ├── Projects.tsx            # Projects showcase
│   │   ├── Skills.tsx              # Skills page
│   │   ├── Testimonials.tsx        # Testimonials page
│   │   └── Contact.tsx             # Contact page
│   └── index.css                   # Custom terminal theme + animations
├── attached_assets/         # Project images
├── .github/workflows/       # GitHub Pages deployment
└── README.md               # Documentation
```

## Design System

**Terminal Theme:**
- Primary Color: Matrix green (#10b981 variants)
- Background: Dark blue-grays for authenticity
- Typography: JetBrains Mono, Fira Code (monospace)
- Animations: Typing effects, cursor blink, skill bar fills

**Key Features:**
- Monospace-first typography
- Terminal window frames with control dots
- Command-line prompts throughout
- Subtle glow effects on primary text
- Smooth scroll-triggered animations

## Deployment

**GitHub Pages Setup:**
1. Push to GitHub repository
2. Enable GitHub Pages with GitHub Actions
3. Automatic deployment on every push to `main`
4. Live at: `https://USERNAME.github.io/REPO/`

**Build Command:** `npm run build`  
**Output Directory:** `dist/public/`

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## Development

**Local Development:**
```bash
npm install
npm run dev
# Visit http://localhost:5000
```

**Testing:**
- All interactive elements have `data-testid` attributes
- Theme toggle persists to localStorage
- Code snippets expand/collapse on click
- Smooth scroll navigation to sections

## Customization

To personalize for other developers:
1. Update contact info in `ContactSection.tsx`
2. Modify projects in `ProjectsSection.tsx`
3. Adjust skills/levels in `SkillsSection.tsx`
4. Replace testimonials in `TestimonialsSection.tsx`
5. Update bio in `AboutSection.tsx`

## User Preferences

**Style:** Terminal/code-inspired aesthetic with calm, professional feel
**Featured Projects:** MacAC, MacRefunds, Lighting Show Importer
**Contact:** @MacMoment (Discord), contact@macmoment.dev (Email)
**Goal:** Ready-to-deploy portfolio for GitHub Pages

## Performance

- Fast initial load with code splitting
- Optimized images via Vite
- Smooth 60fps animations
- Lazy-loaded code snippets
- Minimal JavaScript bundle

## Status

✅ **Production Ready** - Fully functional portfolio ready for GitHub Pages deployment
