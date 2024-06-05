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
});