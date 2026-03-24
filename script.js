/*

*/


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
        }, 1000); // Delay to allow the page to load before animating the hero name up
    }

    const subtitle_div = document.querySelector('.subtitle-div');
    if (subtitle_div) {
        subtitle_div.style.opacity = '0';
        subtitle_div.style.transform = ANIMATION_TRANSFORM_SUBTITLE;
        subtitle_div.style.transition = ANIMATION_TRANSITION;
        setTimeout(() => {
            subtitle_div.style.opacity = '1';
            subtitle_div.style.transform = ANIMATION_TRANSFORM_UP;
        }, 1500); // Delay to allow the hero name animation to finish before animating the subtitle up
    }
}
/*
 * Animate section_headers and project-items when they enter the viewport.
 */
function animateSectionHeadersOnView() {
    const headers = document.querySelectorAll('.section_headers, .project-item, .about-content, .WhoIAm-content');
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


// Initialize animations when the DOM content is loaded
window.addEventListener('DOMContentLoaded', animateHeroNameOnView);
window.addEventListener('DOMContentLoaded', animateSectionHeadersOnView);
