# El Honesto Parra (`@elhonestoparra`) — Sitio Web Oficial (NexoWebs Demo)

Sitio web modular desarrollado aplicando el sistema de diseño **UI/UX Pro Max** (`design-system/el-honesto-parra/MASTER.md`), centrado en la sección **Sobre Nosotros** y preparado para integrar el **Landing Page** del equipo en una misma página (`index.html`) lista para **GitHub Pages**.

---

## Estructura del Proyecto

```text
├── index.html                               # Página unificada (Espacio Landing Page + Sobre Nosotros completo)
├── css/
│   └── styles.css                           # Variables CSS, tokens de diseño UI/UX Pro Max y estilos responsivos
├── js/
│   └── main.js                              # Menú móvil accesible y estado de horario en vivo (Zona horaria Chile)
└── design-system/
    └── el-honesto-parra/
        └── MASTER.md                        # Fuente de verdad del sistema de diseño generado con UI/UX Pro Max
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

## Información Real Incluida (`@elhonestoparra`)

- **Dirección**: Río Los Baños #459, Puente Alto, Región Metropolitana.
- **Especialidades**:
  - **Hamburguesas Caseras**: *La Americana* (aros de cebolla, cheddar, tocino y BBQ) y *La Pobre* (queso fundido, aros de cebolla y huevos fritos).
  - **Papas Fritas Cargadas**: *La Suprema* (cheddar, tocino y tomate), *La Mediterránea* y salchipapas.
  - **Clásicos del Bajón**: Pollo frito, hot dogs, sándwiches y empanadas de queso.
- **Horario de atención**: Lunes a Domingo de 17:30 a 23:30 hrs.
- **Contacto y Pedidos**:
  - WhatsApp / Teléfono: `+56 9 7688 1140`
  - Delivery: Directo y vía Rappi.
  - Instagram: [@elhonestoparra](https://www.instagram.com/elhonestoparra/?hl=es)
