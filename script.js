// Smooth Scroll to Section
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Scroll Reveal Animation
  let timeout;
  window.addEventListener("scroll", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      document.querySelectorAll("section").forEach((section) => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          section.classList.add("reveal");
        }
      });
    }, 50); // 50ms delay after scrolling stops
  });
  
  // Show/Hide Back to Top Button
  window.addEventListener("scroll", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  // Scroll to the top when button is clicked
  document.getElementById("scrollToTop").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  
 