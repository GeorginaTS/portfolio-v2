// Configuració
const DEFAULT_LANGUAGE = 'ca';
const STORAGE_KEY = 'preferredLanguage';
let currentTranslations = {};
let currentLang = DEFAULT_LANGUAGE;

// Funció per carregar traduccions
async function loadTranslations(lang) {
    try {
        const response = await fetch(`./translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`No s'ha pogut carregar ${lang}.json`);
        }
        currentTranslations = await response.json();
        currentLang = lang;
        return currentTranslations;
    } catch (error) {
        console.error('Error carregant traduccions:', error);
        // Si falla, carrega l'idioma per defecte
        if (lang !== DEFAULT_LANGUAGE) {
            return loadTranslations(DEFAULT_LANGUAGE);
        }
    }
}

// Funció per obtenir valor aniuat del JSON
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Funció per aplicar traduccions
function applyTranslations() {
    // Actualitzar tots els elements amb data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(currentTranslations, key);
        
        if (translation) {
            // Si és un input/textarea, actualitzar placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'BUTTON') {
                element.textContent = translation;
            } else {
                // Comprovar si la traducció conté HTML
                if (translation.includes('<')) {
                    element.innerHTML = translation;
                } else {
                    // Per altres elements, mantenir HTML intern si existeix
                    const hasHTML = element.querySelector('img, span[data-i18n], br');
                    if (hasHTML) {
                        // Només actualitzar nodes de text directes
                        element.childNodes.forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                                node.textContent = translation;
                            }
                        });
                    } else {
                        element.textContent = translation;
                    }
                }
            }
        }
    });

    // Actualitzar atribut lang del HTML
    document.documentElement.lang = currentLang;
}

// Funció per canviar idioma
async function changeLanguage(lang) {
    await loadTranslations(lang);
    applyTranslations();
    localStorage.setItem(STORAGE_KEY, lang);
    
    // Actualitzar el select
    const select = document.getElementById('languageSelect');
    if (select) {
        select.value = lang;
    }
    
    // Notificar al CV renderer si existeix
    if (window.cvRenderer && window.cvRenderer.renderCV) {
        window.cvRenderer.renderCV(lang);
    }
    
    // Notificar al projects renderer si existeix
    if (window.projectsRenderer && window.projectsRenderer.renderAllProjects) {
        window.projectsRenderer.renderAllProjects(lang);
    }
}

// Inicialitzar quan es carrega la pàgina
document.addEventListener('DOMContentLoaded', async () => {
    // Obtenir idioma guardat o usar per defecte
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
    
    // Carregar traduccions inicials
    await changeLanguage(savedLang);
    
    // Afegir event listener al select
    const select = document.getElementById('languageSelect');
    if (select) {
        select.value = savedLang;
        select.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
});

// Fer disponible globalment
window.i18n = {
    changeLanguage,
    getCurrentLang: () => currentLang,
    getTranslation: (key) => getNestedTranslation(currentTranslations, key)
};
