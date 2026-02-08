function showPage(pageId) {
    // 1. Esconder todas as seções
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // 2. Mostrar a seção desejada
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
        // Scroll para o topo suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 3. Atualizar o link ativo no menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Verifica se o onclick desse link aponta para a pagina atual
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });

    // 4. Fechar menu mobile se estiver aberto
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('mobile-active');
}

function toggleMobileMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('mobile-active');
}

// Inicializar na Home
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
