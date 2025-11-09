# 🚀 Quick Start Guide - MacMoment Portfolio

## Ready to Deploy in 3 Steps!

Your portfolio is **production-ready** and optimized for GitHub Pages. Follow these simple steps:

---

## Step 1: Push to GitHub (2 minutes)

```bash
# Initialize git (if needed)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: MacMoment portfolio"

# Set main branch
git branch -M main

# Add your GitHub repo (CREATE IT FIRST on github.com)
# Replace YOUR_USERNAME and YOUR_REPO with your actual details
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push everything
git push -u origin main
```

---

## Step 2: Enable GitHub Pages (1 minute)

1. Open your repository on GitHub
2. Go to **Settings** → **Pages** (left sidebar)
3. Under **Source**, select: **GitHub Actions**
4. That's it! ✅

The workflow file (`.github/workflows/deploy.yml`) is already included - no extra setup needed!

---

## Step 3: Wait & Visit (2-3 minutes)

1. Go to the **Actions** tab in your repo
2. Watch the deployment workflow run
3. Once complete, visit: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

**Your portfolio is now live!** 🎉

---

## 🎨 Customization Tips

Before deploying, you might want to update:

### 1. Contact Information
**File:** `client/src/components/ContactSection.tsx`
- Discord handle
- Email address  
- GitHub username

### 2. Projects & Code Snippets
**File:** `client/src/components/ProjectsSection.tsx`
- Project descriptions
- Code examples
- Status labels
- Images (replace in `attached_assets/stock_images/`)

### 3. Skills & Levels
**File:** `client/src/components/SkillsSection.tsx`
- Skill percentages
- Technology categories

### 4. About Section
**File:** `client/src/components/AboutSection.tsx`
- Bio text
- Statistics

### 5. Testimonials
**File:** `client/src/components/TestimonialsSection.tsx`
- Replace mock testimonials with real ones

---

## 📦 What's Included

✅ Complete responsive portfolio  
✅ Dark/light theme toggle  
✅ Interactive code snippets  
✅ Smooth animations  
✅ GitHub Actions deployment  
✅ SEO meta tags  
✅ Production build optimized  

---

## 🔄 Updating Later

After initial deployment, just push changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions will automatically rebuild and deploy!

---

## 🌐 Custom Domain (Optional)

Want to use `macmoment.dev` instead of GitHub's URL?

1. **In GitHub:** Settings → Pages → Add your domain
2. **In DNS:** Add A records pointing to GitHub's IPs (see `DEPLOYMENT_GUIDE.md`)
3. **Enable HTTPS** in GitHub Pages settings

---

## 📁 Files Overview

- **README.md** - Full documentation
- **DEPLOYMENT_GUIDE.md** - Detailed deployment instructions
- **QUICK_START.md** - This file (fastest way to deploy)
- **.github/workflows/deploy.yml** - Auto-deployment configuration
- **client/src/** - All your portfolio code
- **dist/public/** - Production build (created by `npm run build`)

---

## 🆘 Troubleshooting

**Build failed?**
```bash
npm run build
# Check for errors locally first
```

**Site not loading?**
- Verify GitHub Pages is enabled
- Check Actions tab for deployment status
- Wait 2-3 minutes after push

**Need help?**
- Check README.md for full documentation
- Review DEPLOYMENT_GUIDE.md for common issues

---

## 💡 Pro Tips

- Test locally: `npm run dev` → http://localhost:5000
- Build locally: `npm run build` to verify before pushing
- All images go in `attached_assets/` folder
- Theme colors in `client/src/index.css`

---

**Ready? Let's deploy!** 🚀

Just follow Step 1 → Step 2 → Step 3 above, and your portfolio will be live in under 5 minutes!
