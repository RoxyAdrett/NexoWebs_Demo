# El Honesto Parra (`@elhonestoparra`) — Sitio Web Oficial & Carta Online (NexoWebs Demo)

Sitio web nativo modular desarrollado aplicando el sistema de diseño **UI/UX Pro Max** (`design-system/el-honesto-parra/MASTER.md`), estructurado en dos páginas independientes:
1. **`index.html`**: Sitio inicial e información oficial del local (**Hero**, **Sobre Nosotros**, **Pilares**, **Especialidades** y **Ubicación y Horarios**).
2. **`carta.html`**: Carta interactiva independiente con personalizador de ingredientes/salsas, precios en **Pesos Chilenos (CLP)** y **generador de recibo directo a WhatsApp**.

---

## Estructura del Proyecto

```text
├── index.html                               # Sitio inicial + Información del local (Sobre Nosotros, Pilares, Especialidades, Horarios)
├── carta.html                               # Página exclusiva de la Carta Interactiva + Carrito + Recibo por WhatsApp (CLP)
├── css/
│   └── styles.css                           # Variables CSS, tokens de diseño UI/UX Pro Max, Container Queries y Top-Layer Dialogs
├── js/
│   └── main.js                              # Motor de catálogo, carrito persistente, recibo WhatsApp, enlaces profundos (?cat / ?item) y horario en vivo
└── design-system/
    └── el-honesto-parra/
        └── MASTER.md                        # Fuente de verdad del sistema de diseño generado con UI/UX Pro Max
```

---

## Enlaces Profundos hacia la Carta (`carta.html`)

Desde `index.html` o redes sociales puedes enlazar directamente a categorías o productos específicos de `carta.html`:
- `carta.html?cat=burgers` — Filtra automáticamente **Hamburguesas Caseras**.
- `carta.html?cat=papas` — Filtra automáticamente **Papas Supremas & Bajón**.
- `carta.html?cat=clasicos` — Filtra automáticamente **Pollo Frito & Clásicos**.
- `carta.html?item=hamburguesa-la-americana` — Abre directamente el personalizador de **La Americana**.

---

## Información Real Incluida (`@elhonestoparra`)

- **Dirección**: Río Los Baños #459, Puente Alto, Región Metropolitana.
- **Especialidades**:
  - **Hamburguesas Caseras**: *La Americana* (aros de cebolla, cheddar, tocino y BBQ) y *La Pobre* (queso fundido, aros de cebolla y huevos fritos).
  - **Papas Fritas Cargadas**: *La Suprema* (cheddar, tocino y tomate), *La Mediterránea* y salchipapas.
  - **Clásicos del Bajón**: Pollo frito, hot dogs, sándwiches y empanadas de queso.
- **Horario de atención**: Lunes a Domingo de 17:30 a 23:30 hrs (Zona horaria `America/Santiago`).
- **Contacto y Pedidos**:
  - WhatsApp / Teléfono: `+56 9 7688 1140`
  - Delivery: Directo en Puente Alto y vía Rappi.
  - Instagram: [@elhonestoparra](https://www.instagram.com/elhonestoparra/?hl=es)
