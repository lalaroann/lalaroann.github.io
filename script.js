// Select the hamburger menu button
const hamburgerMenu = document.querySelector('.hamburger-menu');
// Select the navigation links container
const navLinks = document.querySelector('.nav_list');

// Add click event listener to the hamburger menu button
hamburgerMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation links container
    navLinks.classList.toggle('active');
});

// Animation variables for reuse
const ANIMATION_TRANSITION = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
const ANIMATION_TRANSFORM_DOWN = 'translateY(40px)';
const ANIMATION_TRANSFORM_UP = 'translateY(0)';
const ANIMATION_TRANSFORM_SUBTITLE = 'translateY(20px)';

function animateHeroNameOnView() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        // Start hidden and moved down
        heroName.style.opacity = '0';
        heroName.style.transform = ANIMATION_TRANSFORM_DOWN;
        heroName.style.transition = ANIMATION_TRANSITION;
        // Only show when animating up
        setTimeout(() => {
            heroName.style.opacity = '1';
            heroName.style.transform = ANIMATION_TRANSFORM_UP;
        }, 2000);
    }

    const subtitle_div = document.querySelector('.subtitle-div');
    if (subtitle_div) {
        subtitle_div.style.opacity = '0';
        subtitle_div.style.transform = ANIMATION_TRANSFORM_SUBTITLE;
        subtitle_div.style.transition = ANIMATION_TRANSITION;
        setTimeout(() => {
            subtitle_div.style.opacity = '1';
            subtitle_div.style.transform = ANIMATION_TRANSFORM_UP;
        }, 3000);
    }
}
/*
 * Animate section_headers and project-items when they enter the viewport.
 */
function animateSectionHeadersOnView() {
    const headers = document.querySelectorAll('.section_headers, .project-item');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = ANIMATION_TRANSFORM_UP;
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    headers.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = ANIMATION_TRANSFORM_DOWN;
        header.style.transition = ANIMATION_TRANSITION;
        observer.observe(header);
    });
}

window.addEventListener('DOMContentLoaded', animateHeroNameOnView);
window.addEventListener('DOMContentLoaded', animateSectionHeadersOnView);
