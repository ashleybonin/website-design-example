/* smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* fade-in animation */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

/* contact form messages */
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formWarning = document.getElementById('formWarning');
  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      formWarning.style.display = 'none';
      formSuccess.style.display = 'none';

      if (!name || !email || !message) {
          formWarning.style.display = 'block';
          return;
      }

      formSuccess.style.display = 'block';
      
      contactForm.reset();

      setTimeout(() => {
          formSuccess.style.display = 'none';
      }, 3000);
  });
});