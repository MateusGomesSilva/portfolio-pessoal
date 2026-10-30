/**
 * PROJECTS DETAIL MODAL CONTROLLER
 * Opens rich editorial detail modal for each project with placeholder guides.
 */

const projectDetails = {
  'institucionais': {
    title: 'Portfólio e Sites Institucionais',
    category: 'Desenvolvimento Web • Sites Institucionais',
    year: '2024',
    image: 'https://images.squarespace-cdn.com/content/v1/6661cc8350300d6c8b3895a8/1717685381950-7S7IELS3BW9HYVS3IG9J/Radian-CulturalCenter-1.jpg',
    tags: ['HTML5 Semântico', 'CSS3 Moderno', 'JavaScript ES6+', 'Performance & Core Web Vitals', 'Design Responsivo'],
    description: 'Criação e estruturação de websites institucionais completos com foco em identidade de marca, alto padrão estético editorial, velocidade de carregamento e compatibilidade multiplataforma.',
    context: 'Projetado para apresentar marcas e profissionais com clareza e autoridade. Implementa estruturas semânticas, acessibilidade WCAG e boas práticas de SEO para motores de busca.',
    placeholderNotice: 'Este espaço representa a categoria de Portfólio e Sites Institucionais. Pode ser facilmente customizado com screenshots reais dos seus trabalhos, descrição do cliente e links para demonstração.'
  },
  'landing-pages': {
    title: 'Landing Pages e Interfaces Digitais',
    category: 'UI/UX Design • Frontend • Conversão',
    year: '2023',
    image: 'https://images.squarespace-cdn.com/content/v1/6661cc8350300d6c8b3895a8/1717685381956-HLZXN895KDHPA5FJFWDX/Radian-Greenspacing-1.jpg',
    tags: ['Landing Pages', 'Micro-interações', 'Mobile First', 'CSS Grid & Flexbox', 'Otimização de Conversão'],
    description: 'Desenvolvimento de páginas de pouso (landing pages) com alto impacto visual, hierarquia tipográfica precisa, transições sutis e navegação fluída em telas de qualquer dimensão.',
    context: 'Focado em guiar a atenção do visitante até as ações principais, com tempos de resposta imediatos, formulários integrados e arquitetura pensada para engajamento.',
    placeholderNotice: 'Este espaço representa a categoria de Landing Pages e Interfaces Digitais. Substitua este conteúdo pelas suas landing pages reais ou estudos de caso de conversão.'
  },
  'academicos': {
    title: 'Projetos Acadêmicos e Soluções Tecnológicas',
    category: 'Full Stack • Arquitetura & Algoritmos',
    year: '2022',
    image: 'https://images.squarespace-cdn.com/content/v1/6661cc8350300d6c8b3895a8/1717685381961-ZXD1YI55WPE941BXMMED/Radian-FloatHouse-1.jpg',
    tags: ['Consumo de APIs REST', 'Lógica Estruturada', 'Git & GitHub', 'Clean Code', 'Bancos de Dados'],
    description: 'Construção de aplicações e soluções computacionais voltadas para a resolução de desafios técnicos, integração de dados dinâmicos e organização modular de código.',
    context: 'Representa a base analítica, acadêmica e contínua em engenharia e desenvolvimento de software, abrangendo boas práticas, componentização e testes de usabilidade.',
    placeholderNotice: 'Este espaço representa a categoria de Projetos Acadêmicos e Soluções Tecnológicas. Insira aqui seus repositórios no GitHub, monografias ou sistemas desenvolvidos.'
  }
};

export function initProjectsModal() {
  const backdrop = document.getElementById('project-modal');
  if (!backdrop) return;

  const modalImg = backdrop.querySelector('.modal-image');
  const modalTitle = backdrop.querySelector('.modal-title');
  const modalCategory = backdrop.querySelector('.modal-category');
  const modalYear = backdrop.querySelector('.modal-year');
  const modalTags = backdrop.querySelector('.modal-tag-list');
  const modalDesc = backdrop.querySelector('.modal-description');
  const modalContext = backdrop.querySelector('.modal-context');
  const modalNotice = backdrop.querySelector('.modal-notice-text');
  const closeBtn = backdrop.querySelector('.modal-close');

  function openModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalYear.textContent = data.year;
    modalDesc.textContent = data.description;
    modalContext.textContent = data.context;
    modalNotice.textContent = data.placeholderNotice;

    // render tags
    modalTags.innerHTML = '';
    data.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'badge badge--pill';
      span.textContent = t;
      modalTags.appendChild(span);
    });

    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  // Bind trigger buttons
  document.querySelectorAll('[data-open-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-open-project');
      openModal(id);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-active')) {
      closeModal();
    }
  });
}
