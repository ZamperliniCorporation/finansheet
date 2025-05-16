window.addEventListener('DOMContentLoaded', () => {
  const siteTitle = document.querySelector('.site-title');
  // Adiciona a classe para fazer o fade-in
  setTimeout(() => {
    siteTitle.classList.add('visible');
  }, 200); // pequeno delay para suavizar
});

// Mostrar "Quem Somos" com efeito fade-in no scroll
window.addEventListener('scroll', () => {
  const section = document.querySelector('.quem-somos-section');
  if (!section) return;

  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight * 0.85) {
    section.classList.add('visible');
  }
});


let slideIndex = 0;

function mudarSlide(direcao) {
  const slides = document.querySelectorAll('.slide');
  slideIndex += direcao;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
  });
}


const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const slider = document.querySelector('.servicos-content > div');
const slides = document.querySelectorAll('.servico-item');

let index = 0;

function showSlide(i) {
  if (i < 0) {
    index = slides.length - 1;
  } else if (i >= slides.length) {
    index = 0;
  } else {
    index = i;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}

btnPrev.addEventListener('click', () => showSlide(index - 1));
btnNext.addEventListener('click', () => showSlide(index + 1));

// Inicializa
showSlide(index);

document.addEventListener("scroll", () => {
  const fadeIns = document.querySelectorAll(".fade-in");
  const triggerBottom = window.innerHeight * 0.85;

  fadeIns.forEach((fadeIn) => {
    const rect = fadeIn.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      fadeIn.classList.add("visible");
    }
  });
});


function revealOnScroll() {
  const sections = document.querySelectorAll('.funcionalidades.reveal, .quem-somos.reveal');

  sections.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    const revealPoint = 150; // distância do topo para ativar a animação

    if (elementTop < windowHeight - revealPoint) {
      // Mostrar título e os parágrafos separadamente
      const titulo = section.querySelector('h2');
      const paragrafos = section.querySelectorAll('p');

      titulo.classList.add('visible');

      paragrafos.forEach((p, index) => {
        setTimeout(() => {
          p.classList.add('visible');
        }, 150 * (index + 1)); // efeito sequencial com delay
      });
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
