# MacMoment Portfolio

A high-tech, terminal-inspired developer portfolio showcasing plugin development expertise and web engineering skills.

![Portfolio Preview](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Tailwind-blue)
![Status](https://img.shields.io/badge/Status-Ready%20for%20Deploy-success)

## 🚀 Features

- **Multi-Page Portfolio**: Professional page-based navigation with smooth transitions
- **Terminal-Inspired Design**: Authentic command-line aesthetic with monospace fonts and animations
- **Interactive Code Snippets**: Expandable Java/Go code examples from real plugin projects
- **Professional Metrics**: Project cards displaying performance stats and technology stacks
- **Animated Page Transitions**: Smooth fade effects when navigating between pages
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Fast loading and smooth animations

## 📦 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom terminal theme
- **UI Components**: Shadcn/UI component library
- **Icons**: Lucide React + React Icons
- **Build Tool**: Vite
- **Backend**: Express.js (for development only)

## 🛠️ Local Development

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone this repository:
```bash
git clone https://github.com/MacMoment/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5000`

## 📤 Deploy to GitHub Pages

This portfolio is optimized for GitHub Pages deployment with hash-based routing for seamless navigation.

### Quick Deploy (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MacMoment portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

3. **Automatic Deployment**
   - The `.github/workflows/deploy.yml` file is already configured
   - Every push to `main` branch will automatically deploy your site
   - You can also manually trigger deployment from the Actions tab

4. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   - Navigation uses hash-based routing (e.g., `/#/about`, `/#/projects`)
   - All routes work without additional server configuration

### Custom Domain Setup (Optional)

1. **Add CNAME file**
   ```bash
   echo "yourdomain.com" > client/public/CNAME
   git add client/public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records for GitHub Pages IPs

3. **Enable in GitHub**
   - Settings → Pages → Custom domain
   - Enter your domain and save
   - Enable "Enforce HTTPS"

### Manual Build & Deploy

If you prefer manual deployment:

```bash
npx vite build
```

Then deploy the `dist/public/` folder contents to any static hosting provider.

### Important Notes

- ✅ **Hash Routing**: The app uses hash-based routing (`/#/page`) which works on GitHub Pages without additional configuration
- ✅ **No Jekyll**: A `.nojekyll` file is included to prevent GitHub from processing the site with Jekyll
- ✅ **Static Site**: This portfolio is 100% static HTML/CSS/JS - no server required
- ✅ **Automatic Deployment**: GitHub Actions automatically builds and deploys on every push to main

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

- **Contact Details**: `client/src/components/ContactSection.tsx`
  - Update Discord handle, email, and GitHub username

- **Bio & Stats**: `client/src/components/AboutSection.tsx`
  - Modify bio text and statistics

- **Projects**: `client/src/components/ProjectsSection.tsx`
  - Update project descriptions, code snippets, and images
  - Add or remove project cards as needed

- **Skills**: `client/src/components/SkillsSection.tsx`
  - Adjust skill levels and categories

- **Testimonials**: `client/src/components/TestimonialsSection.tsx`
  - Replace with real client testimonials

### Theme Customization

Modify colors in `client/src/index.css`:
- Light mode colors: `:root` section
- Dark mode colors: `.dark` section
- Terminal green accent: `--primary` variables

## 📁 Project Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Header.tsx           # Navigation bar
│   │   │   ├── PageTransition.tsx   # Page transition effects
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectCard.tsx      # Individual project display
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Landing page
│   │   │   ├── About.tsx            # About page
│   │   │   ├── Projects.tsx         # Projects showcase
│   │   │   ├── Skills.tsx           # Skills & tech stack
│   │   │   ├── Testimonials.tsx     # Client testimonials
│   │   │   └── Contact.tsx          # Contact information
│   │   ├── index.css          # Tailwind + custom animations
│   │   └── App.tsx
│   └── index.html
├── attached_assets/           # Images and static assets
├── server/                    # Dev server only
├── package.json
└── vite.config.ts
```

## 🔧 Build Configuration

The portfolio uses Vite for building. The production build:
- Outputs to `dist/public/`
- Minifies JavaScript and CSS
- Optimizes images and assets
- Generates source maps

## 📝 License

This project is open source and available under the MIT License.

## 💬 Contact

- **Discord**: @MacMoment
- **Email**: contact@macmoment.dev
- **GitHub**: github.com/MacMoment

---

Built with ⚡ by MacMoment
