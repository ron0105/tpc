/**
 * TPC Pharma & Chemicals - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Set active nav link based on current URL
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(link => {
    // Basic check for active state
    if (link.getAttribute('href') === currentPath.split('/').pop() || 
        (currentPath.endsWith('/') && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Basic Form Validation for Contact Page
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation logic
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = 'var(--color-error)';
        } else {
          field.style.borderColor = 'var(--color-gray-300)';
        }
      });
      
      if (isValid) {
        // In a real scenario, this would send data to a backend.
        // For now, show a success message.
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
          submitBtn.textContent = 'Message Sent Successfully';
          submitBtn.style.backgroundColor = 'var(--color-success)';
          contactForm.reset();
          
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
          }, 3000);
        }, 1000);
      }
    });
  }
});
