document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
window.addEventListener('resize', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const windowWidth = window.innerWidth;

    galleryItems.forEach(item => {
      item.style.width = windowWidth * 0.8 + 'px'; // Adjust the factor (0.8) as needed
    });
  });
