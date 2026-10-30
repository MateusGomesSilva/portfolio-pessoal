/**
 * MAIN ENTRY SCRIPT
 * Radian Portfolio - Mateus Gomes (Desenvolvedor Web)
 */

import { initNavigation } from './navigation.js';
import { initContactForm } from './form.js';
import { initProjectsModal } from './projects-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation & mobile drawer
  initNavigation();

  // Initialize contact form validation
  initContactForm();

  // Initialize projects detail modal
  initProjectsModal();

  // Header scroll appearance
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
