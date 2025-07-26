// Example: Smooth scroll to sections (optional enhancement)
document.querySelectorAll('nav a')?.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Example: Highlight section on scroll (optional enhancement)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    sections.forEach(section => {
        if (section.offsetTop <= scrollPos + 60 && (section.offsetTop + section.offsetHeight) > scrollPos + 60) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });
});
