// Navegação dos botões do menu

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

    // Notícias → link externo
// Notícias → abrir em nova aba
const navNoticias = document.getElementById('nav-noticias');
if (navNoticias) {
  navNoticias.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link, se for um
    // Abre a URL em uma nova aba/janela (o segundo argumento '_blank' faz isso)
    window.open('https://nuclic.ufc.br/pt/category/noticias', '_blank');
  });
}

// Ensino → abrir em nova aba
const navEnsino = document.getElementById('nav-ensino');
if (navEnsino) {
  navEnsino.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link, se for um
    // Abre a URL em uma nova aba/janela (o segundo argumento '_blank' faz isso)
    window.open('https://nuclic.ufc.br/pt/celula-robotica', '_blank');
  });
}

});
