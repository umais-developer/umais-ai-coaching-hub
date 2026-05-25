// Video Carousel Functionality
const videosContainer = document.querySelector('.videos-container');

function scrollVideos(direction) {
    if (!videosContainer) return;

    const scrollAmount = 400;
    const newScrollPosition = videosContainer.scrollLeft + (scrollAmount * direction);

    videosContainer.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        scrollVideos(-1);
    } else if (e.key === 'ArrowRight') {
        scrollVideos(1);
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

if (videosContainer) {
    videosContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    videosContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            scrollVideos(1); // Swiped left, scroll right
        } else {
            scrollVideos(-1); // Swiped right, scroll left
        }
    }
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Simple form validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        this.reset();
    });
}

// Smooth scroll for navigation links
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

// Navbar collapse on link click
const navbarLinks = document.querySelectorAll('.navbar-nav a');
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarToggle.click();
        }
    });
});

// Intersection Observer for fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe video cards for fade-in effect
document.querySelectorAll('.video-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Scroll position restoration
window.addEventListener('load', () => {
    // Restore scroll position if user was scrolling videos
    const savedScrollPosition = sessionStorage.getItem('videosScrollPosition');
    if (savedScrollPosition && videosContainer) {
        videosContainer.scrollLeft = parseInt(savedScrollPosition);
    }
});

window.addEventListener('beforeunload', () => {
    // Save scroll position
    if (videosContainer) {
        sessionStorage.setItem('videosScrollPosition', videosContainer.scrollLeft);
    }
});

// Add active class to navbar links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add hover effect to carousel buttons
document.querySelectorAll('.carousel-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-50%) scale(1.15)';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(-50%)';
    });
});

// Lazy load videos (optional performance improvement)
const lazyVideos = document.querySelectorAll('iframe');

if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (!iframe.src && iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                }
                videoObserver.unobserve(iframe);
            }
        });
    });

    lazyVideos.forEach(video => {
        videoObserver.observe(video);
    });
}

// Console welcome message
console.log('%c🚀 Welcome to Umais Siddiqui AI Coaching!', 'font-size: 20px; font-weight: bold; color: #ff6b6b;');
console.log('%cExplore our latest AI and Machine Learning tutorials.', 'font-size: 14px; color: #667eea;');
