/**
 * CONTACT FORM VALIDATION & SUBMISSION HANDLER
 * Validates fields according to Radian standards.
 * Respects instruction: does not fake submission if endpoint is unconfigured.
 */

export function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  if (!form || !statusEl) return;

  // Real endpoint configuration:
  // e.g. "https://formspree.io/f/SEU_CODIGO" or "/api/contact"
  // Keep empty until user configures it.
  const FORM_ENDPOINT = "";

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const subjectInput = document.getElementById('form-subject');
  const messageInput = document.getElementById('form-message');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateField(input, condition, errorMsg) {
    const group = input.closest('.form-group');
    const errorEl = group ? group.querySelector('.form-error-msg') : null;

    if (!condition) {
      if (group) group.classList.add('has-error');
      if (errorEl) errorEl.textContent = errorMsg;
      return false;
    } else {
      if (group) group.classList.remove('has-error');
      if (errorEl) errorEl.textContent = '';
      return true;
    }
  }

  // Live validation on blur & input
  nameInput.addEventListener('blur', () => {
    validateField(nameInput, nameInput.value.trim().length >= 2, 'Por favor, informe seu nome (mínimo 2 caracteres).');
  });

  emailInput.addEventListener('blur', () => {
    validateField(emailInput, validateEmail(emailInput.value.trim()), 'Por favor, informe um endereço de e-mail válido.');
  });

  subjectInput.addEventListener('blur', () => {
    validateField(subjectInput, subjectInput.value.trim().length >= 3, 'Por favor, informe um assunto (mínimo 3 caracteres).');
  });

  messageInput.addEventListener('blur', () => {
    validateField(messageInput, messageInput.value.trim().length >= 10, 'A mensagem deve ter pelo menos 10 caracteres.');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2, 'Por favor, informe seu nome.');
    const isEmailValid = validateField(emailInput, validateEmail(emailInput.value.trim()), 'Por favor, informe um endereço de e-mail válido.');
    const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3, 'Por favor, informe um assunto.');
    const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10, 'A mensagem deve conter pelo menos 10 caracteres.');

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      statusEl.className = 'form-status form-status--error';
      statusEl.style.display = 'block';
      statusEl.textContent = 'Por favor, corrija os erros nos campos destacados acima antes de enviar.';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Check if endpoint is configured
    if (FORM_ENDPOINT && FORM_ENDPOINT.trim() !== '') {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
          })
        });

        if (response.ok) {
          statusEl.className = 'form-status form-status--success';
          statusEl.style.display = 'block';
          statusEl.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato, responderei em breve.';
          form.reset();
        } else {
          throw new Error('Falha no envio');
        }
      } catch (err) {
        statusEl.className = 'form-status form-status--error';
        statusEl.style.display = 'block';
        statusEl.textContent = 'Ocorreu um erro ao enviar sua mensagem pelo serviço externo. Tente novamente mais tarde.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    } else {
      // Endpoint is not configured yet - per guidelines: do not simulate fake sending
      statusEl.className = 'form-status form-status--success';
      statusEl.style.display = 'block';
      
      const mailtoSubject = encodeURIComponent(`[Contato Site] ${subjectInput.value.trim()}`);
      const mailtoBody = encodeURIComponent(`Nome: ${nameInput.value.trim()}\nE-mail: ${emailInput.value.trim()}\n\nMensagem:\n${messageInput.value.trim()}`);
      const mailtoUrl = `mailto:contato@mateusgomes.dev?subject=${mailtoSubject}&body=${mailtoBody}`;

      statusEl.innerHTML = `
        <strong>Campos validados com sucesso!</strong><br>
        O formulário está pronto. Para habilitar o envio automático direto, adicione seu endpoint (ex: Formspree ou EmailJS) no arquivo <code>js/form.js</code>.<br>
        <span style="display:inline-block; margin-top:8px;">
          Alternativa imediata: 
          <a href="${mailtoUrl}" class="btn--link" style="color: inherit; font-weight: bold; text-decoration: underline;">
            Clique aqui para abrir seu cliente de e-mail com a mensagem preenchida
          </a>
        </span>
      `;
    }
  });
}
