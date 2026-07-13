# 🌿 Menta Print — Diseño que respira

Landing page oficial de **Menta Print**, un estudio creativo boutique especializado en productos impresos personalizados, mercancía de marca y kits para eventos.

Sitio: [https://mentaprint.mx](https://mentaprint.mx)

---

## 📁 Estructura del proyecto

```
/
├── index.html              # Página principal
├── package.json            # Dependencias y scripts
├── package-lock.json       # (autogenerado por npm install)
├── README.md               # Este archivo
├── robots.txt              # Instrucciones para crawlers
├── sitemap.xml             # Mapa del sitio
├── manifest.webmanifest    # PWA manifest
├── netlify.toml            # Configuración de Netlify
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
├── .gitignore              # Archivos ignorados por Git
│
├── favicon/                # Favicons (SVG, PNG, ICO)
│
├── css/
│   ├── input.css           # Directivas de Tailwind
│   ├── styles.css          # Estilos globales
│   └── animations.css      # Animaciones personalizadas
│
├── dist/
│   └── output.css          # CSS compilado (autogenerado)
│
├── js/
│   ├── app.js              # Punto de entrada, lógica general
│   ├── interactions.js     # Cursor, parallax, scroll
│   └── components.js       # Componentes reutilizables
│
├── assets/
│   ├── logo/               # Logotipos
│   ├── icons/              # Íconos SVG
│   ├── illustrations/      # Ilustraciones
│   ├── images/             # Fotografías
│   └── social/             # Imágenes para redes (OG, Twitter)
│
└── .vscode/
    └── settings.json       # Configuración de VS Code
```

---

## 🚀 Instalación

### Requisitos

- **Node.js** 18 o superior ([descargar](https://nodejs.org))
- **npm** 9 o superior (viene con Node.js)

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/menta-print.git
cd menta-print

# 2. Instala dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🎨 Comandos de Tailwind

| Comando            | Descripción                                        |
| ------------------ | -------------------------------------------------- |
| `npm run tw:watch` | Compila Tailwind en modo observador (desarrollo)   |
| `npm run tw:build` | Compila y minifica Tailwind para producción        |
| `npm run dev`      | Ejecuta `tw:watch` + servidor local en puerto 3000 |
| `npm run build`    | Build completo de producción                       |
| `npm run clean`    | Limpia la carpeta `dist/`                          |

---

## 🛠️ Modo desarrollo

```bash
npm run dev
```

Esto ejecuta dos procesos en paralelo:

1. **Tailwind CSS** observando cambios en `css/input.css` y `index.html`.
2. **Serve** sirviendo el proyecto en `http://localhost:3000`.

Cualquier cambio en los archivos se reflejará automáticamente.

---

## 📦 Build de producción

```bash
npm run build
```

Esto genera `dist/output.css` minificado, listo para subir a cualquier hosting estático.

---

## 🌐 Despliegue en Netlify

### Opción A: Desde GitHub (recomendada)

1. Sube el proyecto a un repositorio de GitHub.
2. Entra a [app.netlify.com](https://app.netlify.com).
3. Clic en **"Add new site" → "Import an existing project"**.
4. Selecciona tu repositorio.
5. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `.` (raíz del proyecto)
6. Clic en **"Deploy site"**.

El archivo `netlify.toml` ya incluye la configuración óptima de headers, redirects y caché.

### Opción B: Con Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 🌐 Despliegue en GitHub Pages

1. Instala la dependencia de gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Agrega este script a `package.json`:

```json
"deploy": "npm run build && gh-pages -d ."
```

3. Ejecuta:

```bash
npm run deploy
```

4. En GitHub, ve a **Settings → Pages** y selecciona la rama `gh-pages`.

> ⚠️ Recuerda ajustar las rutas de los assets si tu sitio se sirve desde un subdirectorio (ej. `/menta-print/`).

---

## 🧩 Arquitectura del código

### JavaScript

- **`app.js`** — Punto de entrada. Inicializa loader, navegación, tema, menú móvil, FAQ, back-to-top y delega a los demás módulos.
- **`interactions.js`** — Cursor personalizado, parallax de blobs, animaciones al hacer scroll (IntersectionObserver).
- **`components.js`** — Datos y renderizado de productos, portafolio, testimonios y preguntas frecuentes.

### CSS

- **`input.css`** — Directivas de Tailwind (`@tailwind base/components/utilities`) y configuración del tema.
- **`styles.css`** — Estilos globales, scrollbar, glassmorphism, masonry, focus states.
- **`animations.css`** — Keyframes de blobs, float, fade-up, marquee, pulse de WhatsApp, etc.

---

## 📝 Licencia

Todos los derechos reservados © 2026 Menta Print.

---

## ✉️ Contacto

- **Email:** [hola@mentaprint.mx](mailto:hola@mentaprint.mx)
- **Instagram:** [@mentaprint](https://instagram.com/mentaprint)
- **WhatsApp:** [+52 1 55 5555 5555](https://wa.me/5215555555555)

---

<p align="center">
  <em>Hecho con 🌿 y con intención en México.</em>
</p>
```

---