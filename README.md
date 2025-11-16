# Pràctica 1 - HTML + CSS

## Descripció
Aquesta pràctica correspon al primer repte de l'assignatura de Frontend, centrada en el desenvolupament d'una pàgina web utilitzant HTML i CSS pur.

👉 [Enllaç Demo](https://georginats.github.io/uoc-pac1/)

## Objectius
- Aplicar els coneixements bàsics d'HTML5
- Implementar estils CSS seguint les millors pràctiques
- Crear una estructura web semànticament correcta
- Desenvolupar un disseny responsive
- Complir amb els estàndards d'accessibilitat web

## Estructura del projecte
```
practica1/
├── index.html          # Pàgina principal
├── cv.html            # Pàgina del CV
├── css/               # Fulls d'estil organitzats per components
│   ├── styles.css     # Fitxer principal amb imports i estils globals
│   ├── hero.css       # Estils per la secció hero
│   ├── about.css      # Estils per la secció about me
│   ├── projects.css   # Estils per la secció de projectes
│   ├── contact.css    # Estils per formularis de contacte
│   └── responsive.css # Media queries i adaptacions responsive
├── img/               # Imatges del projecte
└── assets/            # Recursos addicionals
```

## Requisits tècnics
- HTML5 semàntic
- CSS3 pur (sense frameworks)
- Disseny responsive
- Compatibilitat amb navegadors moderns
- Validació W3C
- Accessibilitat segons pautes WCAG

## Tecnologies utilitzades
- HTML5 semàntic
- CSS3 amb arquitectura modular
- CSS nested syntax per organització d'estils
- CSS custom properties (variables) per tematització
- CSS @import per estructura modular
- Flexbox/Grid per layout avançat
- CSS animations amb animation-timeline
- Media queries per responsive design

## Instal·lació i ús
1. Clona aquest repositori:
   ```bash
   git clone [URL-del-repositori]
   ```

2. Navega al directori del projecte:
   ```bash
   cd practica1
   ```

3. Obre `index.html` al teu navegador web favorit o utilitza un servidor local:
   ```bash
   # Amb Node.js (http-server)
   npx http-server
   ```

## Validació
- [x] Validació HTML W3C (amb petites millores pendents)
- [x] Validació CSS W3C 
- [ ] Test d'accessibilitat WCAG complet
- [x] Test responsive en diferents dispositius

### Millores d'accessibilitat pendents:
- [ ] Estructura jeràrquica de headings (h1 → h2 → h3)
- [ ] Text alternatiu descriptiu per enllaços
- [ ] Landmarks ARIA per navegació
- [ ] Verificació de contrast de colors
- [ ] Focus indicators visibles per teclat

## Arquitectura CSS
El projecte utilitza una arquitectura CSS modular i escalable:

### Fitxer principal (styles.css)
- Imports de tots els mòduls CSS
- Variables globals (CSS custom properties)
- Reset i estils base
- Estils globals per etiquetes HTML

### Mòduls per components
- **hero.css**: Estils per la secció d'introducció
- **about.css**: Estils per la presentació personal amb efectes visuals
- **projects.css**: Estils per la galeria de projectes
- **contact.css**: Estils per formularis i secció de contacte
- **responsive.css**: Media queries centralitzades

### Avantatges d'aquesta arquitectura
- 🔧 **Mantenibilitat**: Cada component té el seu propi fitxer
- 🚀 **Escalabilitat**: Fàcil afegir nous components
- 📖 **Llegibilitat**: Codi organitzat i fàcil de trobar
- 🔄 **Reutilització**: Components independents i modulars
- 🎯 **Debugging**: Problemes localitzats per component

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