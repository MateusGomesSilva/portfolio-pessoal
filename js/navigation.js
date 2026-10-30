
/**
 * Navegação principal e menu mobile
 */

export function initNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (!menuToggle || !mobileDrawer) {
    console.warn('Menu mobile: botão ou painel não encontrado.');
    return;
  }

  const navLinks = document.querySelectorAll(
    '.site-nav__link, .mobile-nav-drawer__link'
  );

  function toggleMenu(forceState) {
    const isCurrentlyOpen = mobileDrawer.classList.contains('is-open');

    const shouldOpen =
      typeof forceState === 'boolean'
        ? forceState
        : !isCurrentlyOpen;

    menuToggle.classList.toggle('is-active', shouldOpen);
    mobileDrawer.classList.toggle('is-open', shouldOpen);

    menuToggle.setAttribute('aria-expanded', String(shouldOpen));
    menuToggle.setAttribute(
      'aria-label',
      shouldOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );

    mobileDrawer.setAttribute('aria-hidden', String(!shouldOpen));

    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  // Abrir e fechar pelo ícone de menu
  menuToggle.addEventListener('click', () => {
    toggleMenu();
  });

  // Fechar o menu ao selecionar uma seção
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Fechar com a tecla Escape
  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      mobileDrawer.classList.contains('is-open')
    ) {
      toggleMenu(false);
      menuToggle.focus();
    }
  });

  // Garantir que o menu não fique aberto ao voltar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      toggleMenu(false);
    }
  });

  // Estado inicial
  toggleMenu(false);
}
