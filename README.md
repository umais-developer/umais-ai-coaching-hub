# Umais Siddiqui - AI Coaching Website

A modern, responsive website for AI coaching featuring embedded YouTube video tutorials with an interactive carousel.

## Features

✨ **Modern Design**
- Beautiful gradient backgrounds and smooth animations
- Responsive layout that works on all devices
- Dark mode support
- Accessibility-first approach

🎥 **Video Carousel**
- Embedded YouTube video player
- Horizontal scrolling carousel with smooth animations
- Touch/swipe support for mobile devices
- Keyboard navigation (arrow keys)
- Auto-responsive video grid (3 columns on desktop, 2 on tablet, 1 on mobile)

📱 **Responsive Layout**
- Mobile-first design approach
- Bootstrap 5 framework for reliable components
- Optimized for all screen sizes
- Touch-friendly interface

🎨 **Sections**
- **Hero Section**: Eye-catching landing area with call-to-action
- **Video Carousel**: Featured tutorial videos with easy navigation
- **About Section**: Information about the instructor
- **Contact Section**: Contact form and social media links
- **Navigation**: Sticky navbar with smooth scrolling

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with animations and gradients
- **JavaScript**: Interactive carousel and form handling
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icon library
- **YouTube Embed API**: For video integration

## File Structure

```
├── index.html          # Main landing page
├── style.css           # Custom styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── .nojekyll           # GitHub Pages configuration
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment
```

## How to Customize

### Adding Videos
1. Open `index.html`
2. Find the video card sections (around line 80)
3. Replace the YouTube video IDs in the `src` attributes:
   ```html
   <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"></iframe>
   ```
4. Update the video title and description

### Updating Content
- **Hero Text**: Edit the text in the hero section (lines 44-52)
- **About Section**: Update the about content (lines 186-207)
- **Contact Email**: Update the email link (line 234)
- **Social Links**: Add your social media URLs (lines 280-290)

### Styling
- Color scheme is defined in `style.css` using CSS variables:
  - `--primary-color`: Main brand color
  - `--accent-color`: Highlight/accent color
  - `--dark-color`: Text and dark elements
  - `--light-color`: Background colors

## Carousel Navigation

Users can navigate the video carousel in multiple ways:

- **Arrow Buttons**: Click the left/right arrows on the carousel
- **Keyboard**: Use arrow keys (← →) to navigate
- **Touch/Swipe**: Swipe left/right on mobile devices
- **Scroll**: Directly scroll within the carousel area
- **Mouse**: Drag to scroll on desktop (native behavior)

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions.

### Initial Setup
1. The `deploy.yml` workflow is configured to:
   - Build the website when changes are pushed
   - Deploy to GitHub Pages on the `gh-pages` branch

2. GitHub Pages Settings:
   - Source: GitHub Actions
   - Branch: gh-pages (auto-created)

### Manual Deployment
To deploy manually:
```bash
git add .
git commit -m "Update website"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Checkout the code
2. Deploy to GitHub Pages
3. Make the site live at `https://username.github.io/umais-ai-coaching-hub/`

## Performance Optimizations

- Lazy loading for videos (improves initial load time)
- Smooth scrolling with native browser APIs
- Optimized CSS animations
- Minimal JavaScript overhead
- Bootstrap CDN for reliable delivery

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Reduced motion support for animations

## License

© 2024 Umais Siddiqui. All rights reserved.

## Contact

For inquiries or support, please reach out through the contact form on the website or email umais@example.com.

---

**Built with ❤️ using HTML, CSS, JavaScript, and Bootstrap**
