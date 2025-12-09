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
        console.log('CV data loaded:', cvData);
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
    console.log('Education container:', container);
    if (!container) {
        console.error('No s\'ha trobat #education-list');
        return;
    }
    
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
                        <span>${item.title[lang]}</span>
                        <br>
                        <i>${item.institution[lang]}</i>
                    </div>
                </div>
            </article>
        </li>
    `).join('');
    
    container.innerHTML = html;
    console.log('Education rendered');
}

// Generar HTML per experiència
function renderExperience(experienceData, lang) {
    const container = document.querySelector('#experience-list');
    console.log('Experience container:', container);
    if (!container) {
        console.error('No s\'ha trobat #experience-list');
        return;
    }
    
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
                        <br>
                        <p>${item.description[lang]}</p>
                        <i>${item.location}</i>
                    </div>
                </div>
            </article>
        </li>
    `).join('');
    
    container.innerHTML = html;
    console.log('Experience rendered');
}

// Renderitzar tot el CV
function renderCV(lang) {
    console.log('renderCV called, cvData:', cvData);
    if (!cvData) {
        console.error('No hi ha dades del CV');
        return;
    }
    const activeLang = lang || getCurrentLanguage();
    console.log('Rendering with language:', activeLang);
    renderEducation(cvData.education, activeLang);
    renderExperience(cvData.experience, activeLang);
}

// Inicialitzar el renderitzat del CV
async function initCVRenderer() {
    console.log('initCVRenderer called');
    await loadCVData();
    if (cvData) {
        const lang = getCurrentLanguage();
        renderCV(lang);
    } else {
        console.error('Failed to load CV data');
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
