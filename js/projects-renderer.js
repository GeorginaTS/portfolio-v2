// projects-renderer.js - Genera dinàmicament la secció de projectes
let projectsData = null;

// Carregar dades dels projectes
async function loadProjectsData() {
    try {
        const response = await fetch('./data/projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        projectsData = await response.json();
        return projectsData;
    } catch (error) {
        console.error('Error carregant dades dels projectes:', error);
        return null;
    }
}

// Obtenir idioma actual
function getCurrentLanguage() {
    return localStorage.getItem('preferredLanguage') || 'ca';
}

// Obtenir traduccions dels botons
function getButtonTranslations(lang) {
    const translations = {
        ca: { demo: 'Demo', viewCode: 'Codi' },
        es: { demo: 'Demo', viewCode: 'Código' },
        en: { demo: 'Demo', viewCode: 'Code' }
    };
    return translations[lang] || translations.ca;
}

// Generar HTML per projectes
function renderProjects(projects, lang) {
    const container = document.querySelector('#projects ul');
    if (!container) return;

    const btnText = getButtonTranslations(lang);
    
    const html = projects.map(project => `
        <li>
            <article>
                <img src="${project.image}" alt="${project.title[lang]}">
                <div class="project-content">
                    <h3>${project.title[lang]}</h3>
                    <p>${project.description[lang]}</p>
                    <ul>
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-links">
                    <a href="${project.demoUrl}" target="_blank" class="btn-primary">${btnText.demo} <img src="./img/icons/open-external-svgrepo-com.svg" alt="Live Demo"></a>
                    <a href="${project.repoUrl}" target="_blank" class="btn-secondary"><img src="./img/icons/code-alt-svgrepo-com.svg" alt="View code"> ${btnText.viewCode}</a>
                </div>
            </article>
        </li>
    `).join('');
    
    container.innerHTML = html;
}

// Renderitzar tots els projectes
function renderAllProjects(lang) {
    if (!projectsData) return;
    const activeLang = lang || getCurrentLanguage();
    renderProjects(projectsData, activeLang);
}

// Inicialitzar el renderitzat dels projectes
async function initProjectsRenderer() {
    await loadProjectsData();
    if (projectsData) {
        const lang = getCurrentLanguage();
        renderAllProjects(lang);
    }
}

// Executar quan el DOM estigui llest
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectsRenderer);
} else {
    initProjectsRenderer();
}

// Fer disponible globalment
window.projectsRenderer = {
    renderAllProjects,
    initProjectsRenderer
};
