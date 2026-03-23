# Adding Animated Connecting Dots to Your Hero Section

This creates a dynamic background with dots that move around and connect with dashed lines - perfect for showing you're someone who "connects the dots"!

## Step 1: Add the CSS

Add this to your `styles.css` (or paste at the bottom):

```css
/* Animated Background - Connecting Dots */
.hero-animated-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    opacity: 0.4;
}

.hero-animated-bg canvas {
    display: block;
}

/* Make sure hero content stays on top */
.hero-content {
    position: relative;
    z-index: 2;
}

.scroll-indicator {
    z-index: 2;
}
```

## Step 2: Update Your Hero Section HTML

Add the canvas element inside your hero section, right after the opening `<section>` tag:

```html
<section id="home" class="hero">
    <!-- NEW: Add this canvas -->
    <div class="hero-animated-bg">
        <canvas id="hero-canvas"></canvas>
    </div>
    
    <!-- Your existing content stays the same -->
    <div class="hero-bg-shapes">...</div>
    <div class="container hero-content">...</div>
    <div class="scroll-indicator">...</div>
</section>
```

## Step 3: Add the JavaScript

Create a new file called `connecting-dots.js` in your project folder (same level as `script.js`).

Copy the entire contents of the `connecting-dots.js` file I provided.

## Step 4: Link the JavaScript

Add this before your closing `</body>` tag (after your existing `<script src="script.js"></script>`):

```html
<script src="connecting-dots.js"></script>
```

## Step 5: Upload to GitHub

Upload these files:
- `styles.css` (with the new CSS added)
- `index.html` (with the updated hero section)
- `connecting-dots.js` (new file)

---

## Customization Options

### Change the Colors to Match Your Palette

In `connecting-dots.js`, find this section and update the colors:

```javascript
new ConnectingDots(canvas, {
    dotCount: 35,
    dotColor: '#7A9B76',    // Change this to your primary color
    lineColor: '#7A9B76',   // Change this to your primary color
    dotRadius: 2.5,
    maxDistance: 150,
    speed: 0.3,
    lineWidth: 1.5
});
```

**For each palette:**
- Palette 1 (Sage): `#7A9B76`
- Palette 2 (Forest): `#3D5A3C`
- Palette 3 (Olive): `#818456`
- Palette 4 (Emerald): `#2C7A5B`

### Want More/Fewer Dots?

Change `dotCount: 35` to:
- `dotCount: 25` for subtle
- `dotCount: 50` for busy

### Want Slower/Faster Movement?

Change `speed: 0.3` to:
- `speed: 0.2` for slower, calmer
- `speed: 0.5` for faster, more energetic

### Want Solid Lines Instead of Dashed?

In `connecting-dots.js`, find this line:
```javascript
this.ctx.setLineDash([5, 5]);
```

And change it to:
```javascript
this.ctx.setLineDash([]); // Solid lines
```

### Don't Want the Blob Shapes Anymore?

If the animated dots replace the blobs, you can remove this section from your HTML:
```html
<!-- You can delete this entire section -->
<div class="hero-bg-shapes">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
</div>
```

---

## Troubleshooting

**Canvas appears blank?**
- Check browser console for errors
- Make sure the canvas has an id: `id="hero-canvas"`
- Make sure the script is loading: check Network tab in dev tools

**Dots moving too fast/slow?**
- Adjust the `speed` parameter

**Lines too faint?**
- Increase opacity in CSS: `.hero-animated-bg { opacity: 0.6; }`
- Or increase line opacity in the JavaScript: `opacity * 0.8` instead of `opacity * 0.6`

**Performance issues on mobile?**
- Reduce `dotCount` to 20-25
- Increase `maxDistance` to reduce calculations

---

That's it! Your hero section will now have a dynamic, animated background that reinforces your "connecting the dots" strategist positioning.
