// Animated Connecting Dots Background for Hero Section
// Add this to your script.js or create a new file

class ConnectingDots {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Configuration
        this.config = {
            dotCount: options.dotCount || 60,
            dotColor: options.dotColor || '#3D5A3C', // Sage green from your palette
            lineColor: options.lineColor || '#3D5A3C',
            dotRadius: options.dotRadius || 2.5,
            maxDistance: options.maxDistance || 150,
            speed: options.speed || 0.5,
            lineWidth: options.lineWidth || 1.5,
            ...options
        };
        
        this.dots = [];
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createDots();
        this.animate();
    }
    
  resize() {
    this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.canvas.height = this.canvas.parentElement.offsetHeight;
}
    
    createDots() {
        this.dots = [];
        for (let i = 0; i < this.config.dotCount; i++) {
            this.dots.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.speed,
                vy: (Math.random() - 0.5) * this.config.speed,
                radius: this.config.dotRadius
            });
        }
    }
    
    drawDot(dot) {
        this.ctx.beginPath();
        this.ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.config.dotColor;
        this.ctx.fill();
    }
    
    drawLine(dot1, dot2, distance) {
        const opacity = 1 - (distance / this.config.maxDistance);
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.config.lineColor;
        this.ctx.globalAlpha = opacity * 0.6;
        this.ctx.lineWidth = this.config.lineWidth;
        this.ctx.lineCap = 'round';
        
        // Dashed line
        this.ctx.setLineDash([5, 5]);
        this.ctx.moveTo(dot1.x, dot1.y);
        this.ctx.lineTo(dot2.x, dot2.y);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.globalAlpha = 1;
    }
    
    updateDot(dot) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Bounce off edges
        if (dot.x < 0 || dot.x > this.canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > this.canvas.height) dot.vy *= -1;
        
        // Keep within bounds
        dot.x = Math.max(0, Math.min(this.canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(this.canvas.height, dot.y));
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw dots
        this.dots.forEach(dot => {
            this.updateDot(dot);
            this.drawDot(dot);
        });
        
        // Draw connecting lines
        for (let i = 0; i < this.dots.length; i++) {
            for (let j = i + 1; j < this.dots.length; j++) {
                const dx = this.dots[i].x - this.dots[j].x;
                const dy = this.dots[i].y - this.dots[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.config.maxDistance) {
                    this.drawLine(this.dots[i], this.dots[j], distance);
                }
            }
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', () => this.resize());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        // Initialize with your color palette
        new ConnectingDots(canvas, {
            dotCount: 35,
            dotColor: '#7A9B76',  // Change to match your chosen palette
            lineColor: '#7A9B76',
            dotRadius: 2.5,
            maxDistance: 150,
            speed: 0.3,
            lineWidth: 1.5
        });
    }
});
