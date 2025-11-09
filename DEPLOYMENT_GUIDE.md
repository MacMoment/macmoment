# GitHub Pages Deployment Guide

## Quick Start (5 Minutes)

### Step 1: Create GitHub Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: MacMoment portfolio"

# Create main branch
git branch -M main

# Add your GitHub repository as remote (replace with your details)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**

### Step 3: Verify Deployment

The GitHub Actions workflow is already configured (`.github/workflows/deploy.yml`)!

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Once complete (usually 2-3 minutes), your site will be live!

### Step 4: Access Your Portfolio

Your site will be available at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

## Custom Domain (Optional)

### Using a Custom Domain

1. **In GitHub Settings → Pages**:
   - Enter your custom domain (e.g., `macmoment.dev`)
   - Save

2. **In your DNS provider**:
   
   For apex domain (`macmoment.dev`):
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   ```
   
   For subdomain (`www.macmoment.dev`):
   ```
   CNAME www   YOUR_USERNAME.github.io
   ```

3. **Wait for DNS propagation** (5-60 minutes)

4. **Enable HTTPS** in GitHub Settings → Pages

## Updating Your Portfolio

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and deploy:

```bash
# Make your changes
git add .
git commit -m "Update project details"
git push
```

Your site will update automatically in 2-3 minutes!

## Troubleshooting

### Build Fails

Check the Actions tab for error messages. Common issues:
- Missing dependencies: Run `npm install` locally first
- Build errors: Run `npm run build` locally to test

### Site Not Loading

1. Ensure GitHub Pages is enabled in Settings
2. Check that the workflow completed successfully in Actions tab
3. Verify the source is set to "GitHub Actions" not "Deploy from branch"

### Assets Not Loading

If images or styles aren't loading:
1. Check that all images are in `attached_assets/` directory
2. Verify import paths use `@assets/` alias
3. Clear your browser cache

## Alternative: Manual Deployment

If you prefer not to use GitHub Actions:

```bash
# Build locally
npm run build

# The output is in dist/public/
# Upload these files to any static hosting provider
```

## Need Help?

- Check GitHub Actions logs in the Actions tab
- Verify your repository settings
- Ensure all files are committed and pushed
- Test the build locally with `npm run build`
