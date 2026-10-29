// Fluent Design Reveal Effect
document.addEventListener('DOMContentLoaded', function() {
    // Add reveal effect to navigation links
    const navLinks = document.querySelectorAll('.greedy-nav .visible-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Convert to percentage for CSS custom properties
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            this.style.setProperty('--mouse-x', xPercent + '%');
            this.style.setProperty('--mouse-y', yPercent + '%');
        });
        
        link.addEventListener('mouseleave', function() {
            // Reset to center when mouse leaves
            this.style.setProperty('--mouse-x', '50%');
            this.style.setProperty('--mouse-y', '50%');
        });
    });
    
    // Add reveal effect to other elements with reveal-effect class
    const revealElements = document.querySelectorAll('.reveal-effect');
    
    revealElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            this.style.setProperty('--mouse-x', xPercent + '%');
            this.style.setProperty('--mouse-y', yPercent + '%');
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.setProperty('--mouse-x', '50%');
            this.style.setProperty('--mouse-y', '50%');
        });
    });
    
    // Add smooth scrolling for better user experience
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
    
    // Add subtle scroll effect to navigation
    let ticking = false;
    
    function updateNavigation() {
        const scrolled = window.pageYOffset;
        const navigation = document.querySelector('.masthead');
        
        if (navigation) {
            if (scrolled > 50) {
                navigation.style.background = 'rgba(255, 255, 255, 0.95)';
                navigation.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.15)';
            } else {
                navigation.style.background = 'rgba(255, 255, 255, 0.85)';
                navigation.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
            }
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavigation);
            ticking = true;
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in effect
    const fadeElements = document.querySelectorAll('.page__content, .sidebar, .archive');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}); 