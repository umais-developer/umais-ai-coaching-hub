# Umais AI Coaching Hub - Project Documentation

## Project Overview

**Umais AI Coaching Hub** is a modern, professional website for AI and machine learning coaching. The site features:

- **Video Carousel**: Interactive horizontal carousel displaying embedded YouTube tutorials
- **Modern Design**: Responsive, gradient-based design with smooth animations
- **Professional Branding**: Modern SVG logo with "Umais AI" branding
- **Custom Domain**: Configured to use \icoaching.umaissiddiqui.com\
- **GitHub Pages**: Deployed automatically via GitHub Actions
- **Contact Section**: Form for inquiries and social media links

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Framework**: Bootstrap 5
- **Icons**: Font Awesome
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Version Control**: Git with feature branches

## Project Structure

`
umais-ai-coaching-hub/
├── index.html              # Main landing page
├── style.css               # Custom styles and animations
├── script.js               # Interactive functionality
├── logo.svg                # Modern SVG logo
├── CNAME                   # Custom domain configuration
├── README.md               # User-facing documentation
├── CLAUDE.md               # This file - AI assistant guidelines
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions deployment workflow
`

## ⚠️ CRITICAL: Git Workflow Rules

### MANDATORY BRANCHING STRATEGY

**These rules MUST be followed for ALL changes:**

### Rule 1: Never Commit Directly to Main
`ash
# ❌ NEVER DO THIS
git add .
git commit -m "changes"
git push origin main

# ✅ ALWAYS DO THIS
git checkout -b feature-name
git add .
git commit -m "description"
git push origin feature-name
gh pr create --title "Title" --body "Description"
gh pr merge <PR_NUMBER> --squash --delete-branch
`

### Rule 2: Always Create a Feature Branch First
Every single change starts with creating a new feature branch from main.

### Rule 3: Always Create a Pull Request
After pushing your branch, create a PR. Never skip this step.

### Rule 4: Always Merge via PR
Use \gh pr merge\ to merge. Never force push to main.

### Rule 5: Branch Naming Convention
Use descriptive, kebab-case names like:
- add-video-carousel
- improve-logo
- fix-mobile-responsive
- make-logo-transparent

### Rule 6: Commit Message Format
Start with \eat:\ or \ix:\ followed by description and optional details.

## GitHub Pages Deployment

The site deploys automatically when changes are pushed to \main\:
- **GitHub Pages URL**: https://umais-developer.github.io/umais-ai-coaching-hub/
- **Custom Domain**: https://aicoaching.umaissiddiqui.com/
- **Deployment Time**: ~30 seconds after merge

## Important Files - Do Not Delete

- \CNAME\ - Contains custom domain, must persist
- \.github/workflows/deploy.yml\ - GitHub Actions workflow
- \logo.svg\ - Current SVG logo
- \index.html\ - Main landing page

## Common Tasks

### Adding a Video
1. \git checkout -b add-video-xyz\
2. Edit \index.html\ - add video card with YouTube ID
3. Commit, push, create PR, merge

### Updating Logo
1. \git checkout -b update-logo\
2. Replace \logo.svg\
3. Test and verify display
4. Create PR and merge

### Updating Content
1. Create feature branch
2. Edit files
3. Test locally
4. Create PR with description
5. Merge via PR

## Testing Checklist

Before creating PR:
- [ ] Page loads correctly
- [ ] All links work
- [ ] Videos play
- [ ] Responsive on mobile
- [ ] Navigation works
- [ ] No console errors
- [ ] Logo displays

## Important URLs

- **Repo**: https://github.com/umais-developer/umais-ai-coaching-hub
- **Live Site**: https://aicoaching.umaissiddiqui.com/
- **GitHub Pages**: https://umais-developer.github.io/umais-ai-coaching-hub/

---

**Last Updated**: May 25, 2026
**Maintained By**: Umais Siddiqui
