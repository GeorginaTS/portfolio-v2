# Sistema Multiidioma (i18n)

Aquest projecte implementa un sistema de traducció multiidioma utilitzant JavaScript pur i fitxers JSON.

## Idiomes Disponibles

- **Català (CA)** - Idioma per defecte
- **Espanyol (ES)**
- **Anglès (EN)**

## Estructura de Fitxers

```
practica1/
 translations/
    ca.json      # Traduccions en català
    es.json      # Traduccions en espanyol
    en.json      # Traduccions en anglès
 js/
    i18n.js      # Sistema de gestió de traduccions
 css/
     language-selector.css  # Estils del selector d idiomes
```

## Com Funciona

### 1. Fitxers JSON de Traducció

Cada fitxer JSON conté totes les traduccions organitzades per seccions:

```json
{
  "nav": {
    "curriculum": "Curriculum",
    "skills": "Skills",
    ...
  },
  "hero": {
    "title": "Georgina Tomas",
    ...
  }
}
```

### 2. Atributs data-i18n

Els elements HTML que s han de traduir tenen l atribut `data-i18n`:

```html
<h1 data-i18n="hero.title">Georgina Tomas</h1>
<span data-i18n="nav.curriculum">Curriculum</span>
```

### 3. Classe I18n (i18n.js)

Gestiona:
- Càrrega dels fitxers JSON
- Actualització del contingut de la pàgina
- Persistència de l idioma seleccionat (localStorage)
- Canvi d idioma dinàmic

### 4. Selector d Idioma

Botons al header que permeten canviar l idioma:

```html
<div class="language-selector">
  <a href="#" class="lang-link" data-lang="ca">CA</a>
  <a href="#" class="lang-link" data-lang="es">ES</a>
  <a href="#" class="lang-link" data-lang="en">EN</a>
</div>
```

## Funcionalitats

 Canvi d idioma instantani sense recarregar la pàgina
 Persistència de l idioma seleccionat (localStorage)
 Idioma per defecte: Català
 Actualització automàtica de:
   - Navegació
   - Contingut de seccions
   - Formularis (labels i placeholders)
   - Footer

## Ús

1. **Canvi manual d idioma:** Clic als botons CA/ES/EN
2. **Idioma guardat:** L idioma es manté entre sessions
3. **Afegir noves traduccions:**
   - Editar els fitxers JSON a `translations/`
   - Afegir atribut `data-i18n` als elements HTML
   - Actualitzar el mètode `updatePage()` a `i18n.js`

## Exemple d Ús

```javascript
// Accedir al sistema de traducció
const currentLang = window.i18n.currentLang; // 'ca', 'es', o 'en'

// Canviar idioma programàticament
window.i18n.changeLanguage('en');

// Obtenir una traducció
const text = window.i18n.t('nav.curriculum');
```

## Avantatges

-  No requereix frameworks externs
-  Fàcil d ampliar amb nous idiomes
-  Mantenible i organitzat
-  Compatible amb tots els navegadors moderns
-  Millora l accessibilitat i SEO

---

**Última actualització:** Desembre 2025
