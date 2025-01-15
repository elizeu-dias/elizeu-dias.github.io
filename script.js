// Loader
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader-overlay');
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }, 1300); // Aumentado para 1300ms para compensar o fade-in mais longo
});

// Efeito de fade ao scroll
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-section');

    const fadeInOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        fadeInOnScroll.observe(element);
    });
});

// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de contato com validação
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        if (isValid) {
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        }
    });
}

// Header scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu Hamburguer
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Alterna o ícone entre hamburguer e X
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Força o scroll para o topo ao recarregar a página
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Também garante que a página comece no topo após o carregamento
window.onload = function() {
    window.scrollTo(0, 0);
};
