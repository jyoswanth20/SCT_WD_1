// Target the navigation bar
const navbar = document.getElementById('navbar');

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
    // Check if the page is scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});