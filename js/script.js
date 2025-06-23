// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const body = document.body;

    // Define os novos caminhos SVG para os ícones de sol, lua e pesquisa
    // Ícone do Sol (para modo claro) - Mais limpo e com raios distintos
    const sunIconPath = "M12 2.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zM12 20a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 01.5-.5zM4.05 4.05a.5.5 0 01.707 0l1.061 1.061a.5.5 0 11-.707.707L4.05 4.757a.5.5 0 010-.707zM19.95 19.95a.5.5 0 01.707 0l1.061 1.061a.5.5 0 11-.707.707L19.95 20.657a.5.5 0 010-.707zM2.5 12a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM20 12a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H20.5a.5.5 0 01-.5-.5zM4.05 19.95a.5.5 0 010 .707l1.061 1.061a.5.5 0 11-.707-.707L4.05 19.243a.5.5 0 010-.707zM19.95 4.05a.5.5 0 01.707 0l1.061 1.061a.5.5 0 11-.707.707L19.95 4.757a.5.5 0 010-.707zM12 7a5 5 0 100 10 5 5 0 000-10z";
    // Ícone da Lua (para modo escuro) - Crescente simples e nítida
    const moonIconPath = "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z";
    // Ícone de Pesquisa - Lupa mais tradicional e limpa
    const searchIconPath = "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 22.5 22.5 20 15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z";


    // --- Funcionalidade de Pesquisa com Redirecionamento ---
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            // Abre o link em uma nova guia
            window.open(`https://freedium.cfd/${encodeURIComponent(query)}`, '_blank');
        }
    };

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    searchButton.addEventListener('click', performSearch);

    // --- Funcionalidade de Modo Escuro ---
    // Função para aplicar o tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            darkModeIcon.innerHTML = `<path d="${moonIconPath}" />`; // Altera para ícone da lua
        } else {
            body.classList.remove('dark-mode');
            darkModeIcon.innerHTML = `<path d="${sunIconPath}" />`; // Altera para ícone do sol
        }
    };

    // Verifica a preferência do usuário no localStorage ao carregar a página
    const currentTheme = localStorage.getItem('theme');
    applyTheme(currentTheme || 'light'); // Aplica o tema salvo ou o padrão 'light'

    darkModeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Salva a nova preferência
    });
});
