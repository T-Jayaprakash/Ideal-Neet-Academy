// MAIN JAVASCRIPT - IDEAL NEET ACADEMY

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INITIALIZE LUCIDE ICONS
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. STICKY NAVBAR LOGIC
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. MOBILE MENU TOGGLE
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon between menu and x
            const icon = navToggle.querySelector('i, svg');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            if (window.lucide) window.lucide.createIcons();
        });
    }

    // 4. ANIMATED COUNTERS (Achievements)
    const stats = document.querySelectorAll('.stat-number');
    const statsSection = document.getElementById('achievements');
    let started = false;

    const startCounters = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const increment = target / 50; 
            let count = 0;

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    stat.innerText = Math.ceil(count) + (target > 50 ? '+' : '+');
                    setTimeout(updateCount, 20);
                } else {
                    stat.innerText = target + (target > 50 ? '+' : '+');
                }
            };
            updateCount();
        });
    };

    // Intersection Observer for Counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                startCounters();
                started = true;
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        observer.observe(statsSection);
    }

    // 5. SPA ROUTING
    const router = () => {
        let path = window.location.pathname;
        if (path === '/' || path === '/index.html') path = '/home';
        
        // Find target id from path (replace leading slash)
        const targetId = path.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Scroll smoothly to target section
            setTimeout(() => {
                const navbarHeight = document.getElementById('navbar').offsetHeight || 80;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 50); // slight delay to ensure layout is ready
        }
    };

    // Intercept internal link clicks to use pushState
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        
        // Route only internal absolute paths (e.g. /home, /features)
        if (href && href.startsWith('/') && anchor.target !== '_blank') {
            e.preventDefault();
            window.history.pushState(null, '', href);
            router();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Reset toggle icon
                const icon = navToggle.querySelector('i, svg');
                if (icon) icon.setAttribute('data-lucide', 'menu');
                if (window.lucide) window.lucide.createIcons();
            }
        }
    });

    // Listen to browser Back/Forward navigation
    window.addEventListener('popstate', router);

    // Initial load
    router();

    // 6. GALLERY SECTION - Video Control Logic
    const reels = document.querySelectorAll('.reel-container');
    
    // Mute/Unmute Toggle
    reels.forEach(reel => {
        const video = reel.querySelector('video');
        const muteBtn = reel.querySelector('.mute-toggle');
        const icon = muteBtn.querySelector('i');

        muteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            video.muted = !video.muted;
            
            // Update icon
            if (video.muted) {
                muteBtn.innerHTML = '<i data-lucide="volume-x"></i>';
            } else {
                muteBtn.innerHTML = '<i data-lucide="volume-2"></i>';
            }
            if (window.lucide) window.lucide.createIcons();
        });
    });

    // Auto-play on Intersection
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (entry.isIntersecting) {
                video.play().catch(error => console.log("Auto-play prevented:", error));
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.6 });

    reels.forEach(reel => videoObserver.observe(reel));

    // 7. FORM SUBMISSION TO WHATSAPP
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Extract values using querySelector since no IDs are present
            const name = contactForm.querySelector('input[type="text"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const course = contactForm.querySelector('select').value;
            const message = contactForm.querySelector('textarea').value;
            
            let whatsappText = `Hi, I want to get in touch!\n\n`;
            whatsappText += `*Name:* ${name}\n`;
            whatsappText += `*Phone:* ${phone}\n`;
            if (email) whatsappText += `*Email:* ${email}\n`;
            whatsappText += `*Course:* ${course}\n\n`;
            if (message) whatsappText += `*Message:* ${message}`;
            
            const encodedText = encodeURIComponent(whatsappText);
            window.open(`https://wa.me/917358603244?text=${encodedText}`, '_blank');
            
            contactForm.reset();
        });
    }

    // 8. HERO TRANSITIONS (Background & Typing)
    const bgContainer = document.querySelector('.hero-bg-container');
    const typeTarget = document.getElementById('type-target');
    
    if (bgContainer && typeTarget) {
        const bgAssets = [
            { type: 'image', src: '/src/assets/hero_bg.png' },
            { type: 'image', src: '/src/image-video/img1.jpeg' },
            { type: 'video', src: '/src/image-video/vid1.mp4' },
            { type: 'video', src: '/src/image-video/vid2.mp4' },
            { type: 'video', src: '/src/image-video/vid3.mp4' }
        ];

        const typingSentences = [
            "Trichy's Affordable NEET Academy",
            "Trichy's Leading NEET Academy",
            "Best Result Oriented Coaching"
        ];

        let currentAssetIdx = 0;
        let sentenceIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        // Background Carousel Logic
        function updateBackground() {
            const asset = bgAssets[currentAssetIdx];
            bgContainer.innerHTML = '';
            
            const bgItem = document.createElement('div');
            bgItem.className = 'hero-bg-item active';
            
            if (asset.type === 'video') {
                const video = document.createElement('video');
                video.src = asset.src;
                video.autoplay = true;
                video.muted = true;
                video.playsInline = true;
                video.style.width = '100%';
                video.style.height = '100%';
                video.style.objectFit = 'cover';
                video.onended = () => {
                    currentAssetIdx = (currentAssetIdx + 1) % bgAssets.length;
                    updateBackground();
                };
                bgItem.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = asset.src;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                bgItem.appendChild(img);
                
                setTimeout(() => {
                    currentAssetIdx = (currentAssetIdx + 1) % bgAssets.length;
                    updateBackground();
                }, 5000);
            }
            bgContainer.appendChild(bgItem);
        }

        // Typing Effect Logic
        function type() {
            const currentSentence = typingSentences[sentenceIdx];
            const typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIdx < currentSentence.length) {
                typeTarget.textContent += currentSentence.charAt(charIdx);
                charIdx++;
                setTimeout(type, typingSpeed);
            } else if (isDeleting && charIdx > 0) {
                typeTarget.textContent = currentSentence.substring(0, charIdx - 1);
                charIdx--;
                setTimeout(type, typingSpeed);
            } else if (!isDeleting && charIdx === currentSentence.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000);
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                sentenceIdx = (sentenceIdx + 1) % typingSentences.length;
                setTimeout(type, 500);
            }
        }

        updateBackground();
        type();
    }
});
