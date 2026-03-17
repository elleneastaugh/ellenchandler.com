// ==========================================
// Smooth scrolling for navigation links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// Mobile menu toggle
// ==========================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// ==========================================
// Navbar background on scroll
// ==========================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// Contact form handling
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Get the submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Here you would normally send the data to a backend
        // For now, we'll simulate a submission
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // For demo purposes, we'll just log to console
            console.log('Form submitted:', formData);
            
            // Show success message
            submitBtn.textContent = '✓ Message Sent!';
            submitBtn.style.background = '#4CAF50';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
            // In a real implementation, you would use a service like:
            // - Formspree (https://formspree.io/)
            // - EmailJS (https://www.emailjs.com/)
            // - Netlify Forms (if hosting on Netlify)
            // - Your own backend API
            
        } catch (error) {
            console.error('Error submitting form:', error);
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.style.background = '#f44336';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

// ==========================================
// Intersection Observer for animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==========================================
// Add dynamic year to footer
// ==========================================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-content p');
if (footerText) {
    footerText.textContent = footerText.textContent.replace('2024', currentYear);
}

// ==========================================
// Resume download functionality
// ==========================================
const resumeLinks = document.querySelectorAll('a[download]');
resumeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // If you don't have a resume file yet, prevent default
        // and show a message
        if (!link.href || link.href === window.location.href) {
            e.preventDefault();
            alert('Resume will be available soon! Please check back later or contact me directly.');
        }
        // Once you have a resume, update the href to point to your resume file
        // Example: link.href = 'path/to/your-resume.pdf';
    });
});
