// /js/script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Logic (Existing) ---
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // --- Active Page Link Logic (Existing) ---
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


    // --- Theme Toggle Logic (NEW) ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.textContent = '☀️'; // Sun icon for dark mode
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.textContent = '🌙'; // Moon icon for light mode
            localStorage.setItem('theme', 'light');
        }
    };

    // Check for saved theme in localStorage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    // Event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

});