# Your Portfolio Website

A warm, whimsical portfolio website for advertising professionals.

## 🎨 Features

- **Responsive Design** - Looks great on all devices
- **Smooth Animations** - Engaging scroll effects and transitions
- **Contact Form** - Ready to connect with visitors
- **Modern Stack** - Built with clean HTML, CSS, and JavaScript
- **Easy to Customize** - Well-organized code with CSS variables

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub account if you don't have one
2. Create a new repository called `username.github.io` (replace username with your GitHub username)
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select "main" branch and save
6. Your site will be live at `https://username.github.io`

### Option 2: Netlify (Easiest)

1. Create a Netlify account at netlify.com
2. Drag and drop your website folder into Netlify
3. Your site is live! (You can add a custom domain later)

### Option 3: Vercel

1. Create a Vercel account at vercel.com
2. Connect your GitHub repo or drag and drop files
3. Deploy!

## ✏️ Customization Guide

### 1. Personal Information

**In `index.html`, replace:**
- `Your Name` - Your actual name (appears in multiple places)
- `your.email@example.com` - Your email address
- `https://linkedin.com/in/yourprofile` - Your LinkedIn URL
- `YN` in the logo - Your initials
- Agency names in the About section
- Project details in the Work section
- Skills descriptions

### 2. Colors & Branding

**In `styles.css`, edit the CSS variables (lines 6-11):**
```css
--color-primary: #E85D3D;     /* Main brand color */
--color-secondary: #F7B267;   /* Accent color */
--color-accent: #FF9B71;      /* Additional accent */
```

Use a color picker tool to find your perfect palette!

### 3. Fonts

The site uses:
- **DM Serif Display** for headlines (elegant, warm)
- **Cabinet Grotesk** for body text (modern, readable)

To change fonts:
1. Visit [Google Fonts](https://fonts.google.com)
2. Choose your fonts
3. Replace the `<link>` in `index.html` (around line 8)
4. Update CSS variables in `styles.css`:
```css
--font-display: 'YourDisplayFont', serif;
--font-body: 'YourBodyFont', sans-serif;
```

### 4. Adding Your Photo

Replace the placeholder in the About section:
```html
<div class="placeholder-image">Your Photo Here</div>
```

With:
```html
<img src="path/to/your-photo.jpg" alt="Your Name">
```

### 5. Adding Projects

Copy this block in the Work section and customize:
```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/project-image.jpg" alt="Project name">
    </div>
    <div class="project-content">
        <div class="project-meta">
            <span class="project-client">Brand Name</span>
            <span class="project-year">2024</span>
        </div>
        <h3>Project Title</h3>
        <p>Description of the project...</p>
        <div class="project-tags">
            <span class="tag">Strategy</span>
            <span class="tag">Campaign</span>
        </div>
    </div>
</div>
```

### 6. Contact Form Setup

The form currently logs to console. To make it work:

**Option A: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update the form in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms**
If hosting on Netlify, just add `netlify` attribute:
```html
<form name="contact" netlify>
```

**Option C: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their JavaScript integration guide
3. Update `script.js` with their code

### 7. Adding Your Resume

1. Save your resume as `resume.pdf`
2. Place it in the same folder as `index.html`
3. Update resume links in `index.html`:
```html
<a href="resume.pdf" download>Download Resume</a>
```

## 📱 Testing

Before going live:
- Test on different screen sizes (use browser dev tools)
- Check all links work
- Test contact form
- Verify resume download
- Check mobile menu works
- Test in different browsers (Chrome, Firefox, Safari)

## 🎯 SEO Tips

Add these to `<head>` in `index.html`:
```html
<meta name="description" content="Your name - Brand Strategist with X years experience in advertising">
<meta name="keywords" content="brand strategy, advertising, creative strategy, your name">
<meta property="og:title" content="Your Name - Brand Strategist">
<meta property="og:description" content="Your elevator pitch here">
<meta property="og:image" content="path/to/share-image.jpg">
```

## 🔧 Troubleshooting

**Fonts not loading?**
- Check internet connection
- Verify Google Fonts link is correct

**Contact form not working?**
- Make sure you've set up Formspree/Netlify Forms
- Check browser console for errors

**Site not responsive?**
- Clear browser cache
- Check viewport meta tag is present

## 📚 Learning Resources

- [HTML/CSS Basics](https://www.w3schools.com/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [CSS Tricks](https://css-tricks.com/)

## 🎨 Design Inspiration

- [Awwwards](https://www.awwwards.com/)
- [Behance](https://www.behance.net/)
- [Dribbble](https://dribbble.com/)

## 💡 Next Steps with Claude Code

Once you're comfortable with the basics, use Claude Code to:
- Add a blog section
- Integrate with a CMS
- Add case study pages
- Implement advanced animations
- Connect to analytics
- Add a projects filter/search

Install Claude Code and run it in your project folder to get help with any of these!

## 📝 License

This template is free to use for your personal portfolio. Customize it and make it yours!

---

**Need help?** The code is well-commented and organized. Each section is clearly labeled!
