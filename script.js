
// finanSheet - JavaScript
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll('.fade-in-on-scroll');

    elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Animação de Scroll para Seções
document.querySelector('#sobre').classList.add('fade-in-on-scroll');
document.querySelector('#destaques').classList.add('fade-in-on-scroll');
document.querySelector('#planilha').classList.add('fade-in-on-scroll');
document.querySelector('#depoimentos').classList.add('fade-in-on-scroll');

// JS: Animação de destaque
const benefitCards = document.querySelectorAll('.benefit-card');

benefitCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
window.addEventListener("scroll", () => {
    const menu = document.querySelector(".fixed-menu");
    if (window.scrollY > 50) {
        menu.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    } else {
        menu.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    }
});

