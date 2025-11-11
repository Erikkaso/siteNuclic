document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    const scrollToY = (y) => {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    };

    const scrollToSection = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return;
        const rectTop = el.getBoundingClientRect().top + window.pageYOffset;
        scrollToY(rectTop - headerHeight);
    };

    // Início → topo
    const navInicio = document.getElementById('nav-inicio');
    if (navInicio) {
        navInicio.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToY(0);
        });
    }

    // Sobre Nós → seção "Sobre o Nuclic"
    const navSobre = document.getElementById('nav-sobre');
    if (navSobre) {
        navSobre.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection('#sobre-nos');
        });
    }

    // Notícias → nova aba
    const navNoticias = document.getElementById('nav-noticias');
    if (navNoticias) {
        navNoticias.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://nuclic.ufc.br/pt/category/noticias', '_blank');
        });
    }

    // Ensino → nova aba
    const navEnsino = document.getElementById('nav-ensino');
    if (navEnsino) {
        navEnsino.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://nuclic.ufc.br/pt/celula-robotica', '_blank');
        });
    }

     // Contatos → nova aba
    const navContatos = document.getElementById('nav-contatos');
    if (navContatos) {
        navContatos.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://linktr.ee/nuclic', '_blank');
        });
    }

    // Inicia a galeria / carrossel
    initGalleryCarousel();
});

async function initGalleryCarousel() {
    const track = document.querySelector('.gallery-track');
    const dotsContainer = document.querySelector('.gallery-dots');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    const nextBtn = document.querySelector('.gallery-btn.next');

    if (!track || !dotsContainer || !prevBtn || !nextBtn) return;

    let images = [];

    // Tenta carregar a lista de imagens de /photos/photos.json
    try {
        const res = await fetch('photos/photos.json', { cache: 'no-store' });
        if (res.ok) {
            images = await res.json();
        }
    } catch (err) {
        console.warn('Não foi possível carregar photos.json', err);
    }

    if (!images || !images.length) {
        console.warn('Nenhuma imagem encontrada. Crie /photos/photos.json com a lista de arquivos.');
        return;
    }

    // Monta imagens e dots
    images.forEach((file, index) => {
        const img = document.createElement('img');
        img.src = `photos/${file}`;
        img.alt = `Foto ${index + 1} - Nuclic`;
        img.className = 'gallery-image';
        track.appendChild(img);

        const dot = document.createElement('button');
        dot.className = 'gallery-dot';
        dot.dataset.index = index;
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    let current = 0;
    const total = images.length;

    const updateSlide = (index) => {
        current = (index + total) % total; // loop
        track.style.transform = `translateX(-${current * 100}%)`;

        dotsContainer.querySelectorAll('.gallery-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });
    };

    // Navegação
    prevBtn.addEventListener('click', () => {
        updateSlide(current - 1);
    });

    nextBtn.addEventListener('click', () => {
        updateSlide(current + 1);
    });

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-dot')) {
            const idx = parseInt(e.target.dataset.index, 10);
            if (!isNaN(idx)) updateSlide(idx);
        }
    });

    // Opcional: autoplay (habilite se quiser)
     setInterval(() => updateSlide(current + 1), 6000);
}
