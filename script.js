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
    const heroName = document.querySelector('.hero-name,.project-hero-header');
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

    const subtitle_div = document.querySelector('.subtitle-div, .project-hero-description');
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
    const headers = document.querySelectorAll('.section_headers, .project-item, .about-content, .WhoIAm_AsADesigner, .WhoIAm_AsATeamPlayer, .project-role-and-software-skills,.project-description, .project-details-description, .project-details-image');
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

function animateProjectItemOnHover() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        const handleEnter = () => {
            item.style.transform = 'translate(0, -5px)'; // Lift the item up on hover/focus
            item.style.transition = 'transform 0.3s ease';
        };
        
        const handleLeave = () => {
            item.style.transform = 'translate(0, 0)'; // Return to original position on mouse leave/blur
            item.style.transition = 'transform 0.3s ease';
        };
        
        item.addEventListener('mouseenter', handleEnter);
        item.addEventListener('focus', handleEnter);
        item.addEventListener('mouseleave', handleLeave);
        item.addEventListener('blur', handleLeave);
    });
}

window.addEventListener('DOMContentLoaded', animateProjectItemOnHover);


// Initialize animations when the DOM content is loaded
window.addEventListener('DOMContentLoaded', animateHeroNameOnView);
window.addEventListener('DOMContentLoaded', animateSectionHeadersOnView);
