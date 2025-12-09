# Personal Portfolio - Georgina Tomas

## 📋 Description
Multilingual personal portfolio developed with modern web technologies. Showcases my projects, skills, and professional experience as a Full-stack Developer.

👉 **[Live Demo](https://georginats.github.io/portfolio-v2/)**

## ✨ Key Features

- 🌍 **Multilingual**: Full support for Catalan, Spanish, and English
- 📱 **Responsive**: Adaptive design for all devices
- ⚡ **Performance**: Fast loading with modular JavaScript
- 🎨 **Modern**: Clean and elegant interface
- 📬 **Contact Form**: Integrated with Formspree
- ♿ **Accessible**: Meets web accessibility standards
- 🔄 **Scalable**: JSON-based architecture for easy updates

## 🛠️ Technologies Used

### Frontend
- **HTML5** semantic markup
- **CSS3** with modular architecture
  - CSS custom properties (variables)
  - Flexbox and Grid Layout
  - Media queries for responsive design
  - Animations and transitions
- **JavaScript ES6+**
  - Async/await
  - Fetch API
  - LocalStorage
  - DOM manipulation
  - Custom i18n system

### External Services
- **Formspree** - Contact form management
- **GitHub Pages** - Hosting

## 📁 Project Structure

```
portfolio-v2/
├── index.html              # Main page
├── cv.html                 # Resume page
├── css/                    # Modular stylesheets
│   ├── styles.css          # Main styles and imports
│   ├── cv.css              # CV-specific styles
│   ├── hero.css            # Hero section
│   ├── projects.css        # Projects gallery
│   ├── contact.css         # Contact form
│   ├── language-selector.css
│   └── responsive.css      # Centralized media queries
├── js/                     # Modular JavaScript
│   ├── i18n.js            # Internationalization system
│   ├── cv-renderer.js     # Dynamic CV rendering
│   ├── projects-renderer.js # Projects rendering
│   └── contact-form.js    # Form handling
├── data/                   # Structured data
│   ├── cv-data.json       # Education and experience
│   └── projects.json      # Projects with translations
├── translations/           # Translation files
│   ├── ca.json            # Catalan
│   ├── es.json            # Spanish
│   └── en.json            # English
├── img/                    # Images and visual resources
│   ├── projects/
│   └── icons/
└── README.md
```

## 🎯 Features

### Internationalization System (i18n)
- Real-time language switching without reload
- Language preference persistence with LocalStorage
- Translations organized in JSON files
- Support for HTML within translations

### Dynamic Rendering
- **CV**: Education and experience loaded from JSON
- **Projects**: Dynamic gallery with structured data
- Automatic updates on language change

### Contact Form
- HTML5 validation
- Formspree integration
- Multilingual success/error messages
- Anti-spam protection

## 🚀 Installation and Usage

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GeorginaTS/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Start a local server:**
   ```bash
   # Option 1: With Python
   python -m http.server 8000
   
   # Option 2: With Node.js
   npx http-server
   
   # Option 3: With VS Code Live Server
   # Right-click index.html > Open with Live Server
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### Customization

#### Add a new project:
Edit `data/projects.json`:
```json
{
  "id": "new-project",
  "image": "./img/projects/new-project.png",
  "title": {
    "ca": "Nom del projecte",
    "es": "Nombre del proyecto",
    "en": "Project name"
  },
  "description": {
    "ca": "Descripció...",
    "es": "Descripción...",
    "en": "Description..."
  },
  "technologies": ["React", "Node.js"],
  "demoUrl": "https://...",
  "repoUrl": "https://github.com/..."
}
```

#### Update education/experience:
Edit `data/cv-data.json`

#### Modify translations:
Edit files in `translations/`

## 🎨 CSS Architecture

### Modular Organization
- **styles.css**: Global variables, reset, base styles
- **Specific modules**: Each section has its own CSS file
- **responsive.css**: Centralized media queries

### Custom CSS Variables
```css
:root {
  --primary-color: #2c3e50;
  --accent-color: #3498db;
  --text-color: #333;
  --bg-color: #fff;
  /* ... */
}
```

## 📱 Responsive Design

Main breakpoints:
- **Desktop**: > 768px
- **Tablet**: 720px - 768px
- **Mobile**: < 600px
- **Small mobile**: < 420px

## 🔧 Modular JavaScript

### i18n.js
- Translation management
- Dynamic language switching
- LocalStorage persistence

### cv-renderer.js
- CV data loading
- Dynamic HTML generation
- i18n system synchronization

### projects-renderer.js
- Projects gallery rendering
- Language change updates

### contact-form.js
- Form submission handling
- Validation and visual feedback
- Formspree integration

## 📬 Contact

- **LinkedIn**: [linkedin.com/in/georgina-tomas](https://www.linkedin.com/in/georgina-tomas/)
- **GitHub**: [github.com/GeorginaTS](https://github.com/GeorginaTS)
- **Email**: Through the portfolio contact form

## 📄 License

© 2025 Georgina Tomas. All rights reserved.

---

⭐ If you liked this project, leave a star on the repository!

## Navegadors compatibles
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Metodologia de desenvolupament
- Desenvolupament mobile-first
- Arquitectura CSS modular amb separació per components
- Ús de CSS nested syntax per millor organització
- Variables CSS personalitzades per consistència visual
- Imports CSS per estructura escalable
- Animacions modernes amb CSS animation-timeline
- Codi net i ben documentat amb comentaris descriptius
- Commits semàntics per historial clar

## Criteris d'avaluació
Segons l'enunciat del projecte, s'avaluaran els següents aspectes:
- Correcció del codi HTML i CSS
- Implementació del disseny proposat
- Funcionalitat responsive
- Accessibilitat web
- Qualitat del codi
- Documentació del projecte

## Lliurament
- **Data límit**: 16/11/2025
- **Format**: Repositori Git amb codi font
- **Documentació**: README.md i comentaris en codi

## Recursos útils
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C Validator](https://validator.w3.org/)
- [Can I Use](https://caniuse.com/)
- [WAVE Accessibility Checker](https://wave.webaim.org/)

## Autor
**Nom**: Georgina Tomàs
**Email**: georginats.dev@gmail.com 
**Assignatura**: Frontend - UOC  
**Curs**: 2025

## Llicència
Aquest projecte forma part de la formació acadèmica a la UOC i està destinat únicament per a fins educatius.

---

*Última actualització: Novembre 2025*