window.addEventListener("DOMContentLoaded", () => {
    // Animação de Scroll
    window.addEventListener("scroll", () => {
        const elements = document.querySelectorAll('.fade-in-on-scroll');
        elements.forEach((element) => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('visible');
            }
        });

        // Mudança no menu ao rolar a página
        const menu = document.querySelector(".fixed-menu");
        if (menu) {
            if (window.scrollY > 50) {
                menu.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            } else {
                menu.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
            }
        }
    });

    // Animação de Scroll para as seções corretas
    const sections = ['#detalhes', '#destaques', '#planilha-em-acao', '#contato'];
    sections.forEach(section => {
        const elem = document.querySelector(section);
        if (elem) {
            elem.classList.add('fade-in-on-scroll');
        }
    });

    // Animação de destaque para os cartões de benefício
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
