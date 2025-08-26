# GitHub Pages Deployment Guide

## Prerequisites
- Your code must be in a GitHub repository
- GitHub repository should be public (or you need GitHub Pro for private repos)

## Setup Steps

### 1. Push your code to GitHub
```bash
# If you haven't initialized git yet:
git init
git add .
git commit -m "Initial commit: Keith Print Painting website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/keith-print-painting.git
git push -u origin main
```

### 2. Deploy to GitHub Pages
```bash
# Run the deployment command
npm run deploy
```

This command will:
- Build your React app (`npm run build`)
- Deploy the `dist` folder to the `gh-pages` branch
- GitHub Pages will automatically serve from this branch

### 3. Configure GitHub Pages (if needed)
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select "Deploy from a branch"
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### 4. Access Your Site
Your site will be available at:
```
https://YOUR_USERNAME.github.io/keith-print-painting/
```

## Important Notes

- **Base URL**: The site is configured with `/keith-print-painting/` as the base URL
- **Repository Name**: If you want a different URL, rename your repository and update the `base` in `vite.config.js`
- **Custom Domain**: You can set up a custom domain in GitHub Pages settings if desired
- **Updates**: Run `npm run deploy` anytime you want to update the live site

## Troubleshooting

### Assets Not Loading
If images or styles aren't loading, make sure:
1. The `base: '/keith-print-painting/'` in `vite.config.js` matches your repository name
2. All asset paths in your code are relative (starting with `/` or `./`)

### 404 Errors
- GitHub Pages can take a few minutes to update after deployment
- Make sure the `gh-pages` branch was created successfully
- Check that GitHub Pages is enabled in repository settings

### Build Errors
If `npm run deploy` fails:
1. Run `npm run build` first to check for build errors
2. Fix any linting or compilation issues
3. Try the deploy command again

## Deployment Workflow
1. Make changes to your code
2. Test locally with `npm run dev`
3. Build and deploy with `npm run deploy`
4. Check your live site at the GitHub Pages URL