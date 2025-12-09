// cv-renderer.js - Genera dinàmicament les seccions del CV
let cvData = null;

// Carregar dades del CV
async function loadCVData() {
    try {
        const response = await fetch('./data/cv-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        cvData = await response.json();
        return cvData;
    } catch (error) {
        console.error('Error carregant dades del CV:', error);
        return null;
    }
}

// Obtenir idioma actual
function getCurrentLanguage() {
    return localStorage.getItem('preferredLanguage') || 'ca';
}

// Generar HTML per educació
function renderEducation(educationData, lang) {
    const container = document.querySelector('#education-list');
    if (!container) return;
    
    const html = educationData.map(item => `
        <li>
            <article>
                <div>
                    <div class="point"></div>
                    <div class="line"><span></span></div>
                </div>
                <div>
                    <h5>${item.year}</h5>
                    <div>
                    <h6>${item.title[lang]}</h6>
                        <p>${item.description[lang]}</p>
                        <i>${item.institution[lang]}</i>
                    </div>
                </div>
            </article>
        </li>
    `).join('');
    
    container.innerHTML = html;
}

// Generar HTML per experiència
function renderExperience(experienceData, lang) {
    const container = document.querySelector('#experience-list');
    if (!container) return;
    
    const html = experienceData.map(item => `
        <li>
            <article>
                <div>
                    <div class="point"></div>
                    <div class="line"><span></span></div>
                </div>
                <div>
                    <h5>${item.years}</h5>
                    <div>
                        <h6>${item.title[lang]}</h6>
                        <p>${item.description[lang]}</p>
                        <i>${item.location}</i>
                    </div>
                </div>
            </article>
        </li>
    `).join('');
    
    container.innerHTML = html;
}

// Renderitzar tot el CV
function renderCV(lang) {
    if (!cvData) return;
    const activeLang = lang || getCurrentLanguage();
    renderEducation(cvData.education, activeLang);
    renderExperience(cvData.experience, activeLang);
}

// Inicialitzar el renderitzat del CV
async function initCVRenderer() {
    await loadCVData();
    if (cvData) {
        const lang = getCurrentLanguage();
        renderCV(lang);
    }
}

// Executar quan el DOM estigui llest
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCVRenderer);
} else {
    initCVRenderer();
}

// Fer disponible globalment
window.cvRenderer = {
    renderCV,
    initCVRenderer
};
