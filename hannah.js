document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Event delegation for dropdown toggles
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('dropdown-toggle')) {
            const target = document.querySelector(e.target.dataset.target);

            if (target.style.display === 'block') {
                target.style.display = 'none';
            } else {
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.style.display = 'none';
                });
                target.style.display = 'block';
            }
        }
    });

    // Toggle navigation menu for mobile view
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});