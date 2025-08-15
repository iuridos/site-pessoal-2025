// Script do menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-bars');
    mobileMenu.querySelector('i').classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.querySelector('i').classList.add('fa-bars');
            mobileMenu.querySelector('i').classList.remove('fa-times');
        }
    });
});

// Atualizar ano no footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== SCROLL REVEAL CONFIG =====
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        opacity: 0,
        scale: 0.9,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false 
    });

    sr.reveal('.hero-content h1', {});
    sr.reveal('.hero-content h2', { delay: 400 });
    sr.reveal('.hero-content p', { delay: 600, origin: 'bottom' });
    sr.reveal('.hero-content .cta-button', { delay: 800, origin: 'bottom', scale: 1 });
    sr.reveal('.section-title', { origin: 'left', distance: '80px' });
    sr.reveal('.sobre-texto p', { origin: 'left', interval: 200 });
    sr.reveal('.sobre-texto .social-link', { origin: 'bottom', interval: 200, scale: 1 });
    sr.reveal('.sobre-imagem img', { origin: 'right', scale: 1 });
    sr.reveal('.projeto-card', { origin: 'bottom', interval: 200, scale: 1 });
    sr.reveal('.habilidade-categoria', { origin: 'bottom', interval: 150, scale: 1 });
    sr.reveal('.contato-subtitulo', {});
    sr.reveal('.form-group', { origin: 'left', interval: 100 });
    sr.reveal('.contato-form .cta-button', { origin: 'bottom', scale: 1 });
    sr.reveal('.contato-alternativas', { origin: 'bottom', delay: 500, scale: 1 });
} else {
    console.warn('ScrollReveal library not loaded.');
}

// ===== VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====
const contatoForm = document.querySelector('.contato-form');

if (contatoForm) {
    contatoForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let isValid = true;
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const mensagemInput = document.getElementById('mensagem');

        clearErrors();

        if (nomeInput.value.trim() === '') {
            isValid = false;
            showError(nomeInput, 'Por favor, preencha seu nome.');
        }

        if (emailInput.value.trim() === '') {
            isValid = false;
            showError(emailInput, 'Por favor, preencha seu email.');
        } else if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, 'Por favor, insira um email válido.');
        }

        if (mensagemInput.value.trim() === '') {
            isValid = false;
            showError(mensagemInput, 'Por favor, escreva uma mensagem.');
        }

        if (isValid) {
            alert('Mensagem enviada com sucesso! (Simulação)');
            contatoForm.reset(); 
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(inputElement, message) {
    inputElement.classList.add('error-input');
    const formGroup = inputElement.parentElement;
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    formGroup.appendChild(errorElement);
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());
    document.querySelectorAll('.error-input').forEach(input => input.classList.remove('error-input'));
}