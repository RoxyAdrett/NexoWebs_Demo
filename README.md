# Don Chamy (`@donchamy.oficial`) — Sitio Web Oficial (NexoWebs Demo)

Sitio web modular desarrollado aplicando el sistema de diseño **UI/UX Pro Max** (`design-system/don-chamy/MASTER.md`), centrado en la sección **Sobre Nosotros** y preparado para integrar el **Landing Page** del equipo en una misma página (`index.html`) lista para **GitHub Pages**.

---

## Estructura del Proyecto

```text
├── index.html                           # Página unificada (Espacio Landing Page + Sobre Nosotros completo)
├── css/
│   └── styles.css                       # Variables CSS, tokens de diseño UI/UX Pro Max y estilos responsivos
├── js/
│   └── main.js                          # Menú móvil accesible y estado de horario en vivo (Zona horaria Chile)
└── design-system/
    └── don-chamy/
        └── MASTER.md                    # Fuente de verdad del sistema de diseño generado con UI/UX Pro Max
```

---

## Cómo Integrar el Landing Page del Compañero

En `index.html` encontrarás al inicio de `<main>` el bloque delimitado:

```html
<!-- INICIO: BLOQUE RESERVADO PARA EL LANDING PAGE DEL COMPAÑERO -->
<section id="inicio" class="landing-slot">
  ...
</section>
<!-- FIN: BLOQUE RESERVADO PARA LANDING PAGE -->
```

Tu compañero solo debe reemplazar el contenido de `<section id="inicio">` con su **Landing Page**, manteniendo intacta la sección `<section id="sobre-nosotros">` y las subsecciones siguientes (`#pilares`, `#especialidades`, `#ubicacion-horarios`).

---

## Cómo Personalizar Colores, Tipografía e Imágenes

1. **Colores y Tipografía**: Edita las variables en `:root` dentro de `css/styles.css` (`--color-primary`, `--color-accent`, `--color-background`, etc.).
2. **Fotografía del Local / Productos**: En `index.html`, dentro de `.story-showcase-card`, puedes reemplazar el contenedor `.showcase-image-placeholder` por una etiqueta `<img src="tu-foto.jpg" alt="Local Don Chamy en Santa Elvira #3951" />`.

---

## Información Real Incluida (`@donchamy.oficial`)

- **Dirección**: Santa Elvira #3951, Puente Alto, Región Metropolitana.
- **Especialidades**: Completo gigante **"El Misil"** (aprox. 50 cm), As Italiano, churrascos, hamburguesas caseras y papas fritas.
- **Almuerzos / Colaciones**: Lunes a sábado desde las 12:30 hrs.
- **Delivery**: Disponible todos los días.
- **Pedidos (Exclusivo llamada o WhatsApp)**:
  - WhatsApp: `+56 9 8943 3926`
  - Teléfono fijo: `2 2852 3431`
  - Instagram: [@donchamy.oficial](https://www.instagram.com/donchamy.oficial)
