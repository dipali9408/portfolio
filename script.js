// Toggle nav for small screens
document.getElementById('navToggle').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('show');
});

// Smooth scroll behavior (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
