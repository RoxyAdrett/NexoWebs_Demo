# NexoWebs Demo — Rama `ejemplo` (Plantilla Web Gastronómica General)

Esta rama (**`ejemplo`**) contiene la **plantilla base general y personalizable** desarrollada por **NexoWebs**, pensada para mostrar a cualquier restaurante, picada, cafetería o local de comida cómo funcionará su presencia digital profesional con:
1. **`index.html` (Landing Page & Sobre Nosotros)**:
   - Portada / Hero con titular atractivo y propuesta de valor del local.
   - Historia del negocio (**Sobre Nosotros**), tradición culinaria y valores de cocina.
   - Pilares fundamentales del servicio (Calidad, Porciones, Sabor, Delivery).
   - Especialidades destacadas y accesos directos al menú.
   - Ubicación exacta, horarios de atención e indicador en vivo (*Abierto/Cerrado*).
   - Botón directo de contacto a WhatsApp y enlace a Instagram.
2. **`carta.html` (Carta Online Interactiva & Pedidos WhatsApp)**:
   - Menú por categorías (*Platos Principales*, *Acompañamientos*, *Sándwiches*, *Bebidas & Postres*).
   - Modal para personalizar ingredientes, salsas y tamaño de cada plato.
   - Carrito de compras persistente.
   - Generador automático de comanda / recibo con envío directo al **WhatsApp del local** en Pesos Chilenos (CLP) sin intermediarios ni comisiones por venta.
   - Botón *"Personalizar Carta"* para modificar en tiempo real el nombre del negocio, número de WhatsApp o agregar un plato nuevo de muestra.

---

## Dónde se Configuran los Datos de Cada Local

En `js/main.js` se encuentra el objeto central de configuración:

```javascript
const DEFAULT_STORE_CONFIG = {
  brandName: '[NOMBRE DE TU LOCAL]',
  tagline: '[Tu Especialidad o Slogan Culinario]',
  instagram: '@[tu_instagram]',
  address: '[Calle y Número #123, Comuna, Ciudad]',
  whatsappNumber: '56912345678', // Número de WhatsApp oficial para recibir pedidos
  currencySymbol: '$',
  deliveryFee: 2000 // Costo de envío en CLP
};
```

Y en `index.html` los textos con corchetes `[EJEMPLO]` indican con total claridad dónde va:
- `[NOMBRE DE TU LOCAL]`: Título y nombre comercial.
- `[HISTORIA DE TU LOCAL]`: Sección "Sobre Nosotros" con el origen del restaurante y cita del dueño.
- `[PILARES DE SERVICIO]`: Las 4 fortalezas que distinguen al negocio.
- `[ESPECIALIDADES]`: Las 3 líneas principales de preparaciones.
- `[HORARIOS Y CONTACTO]`: Días, horas, teléfono y mapa de Google Maps.

---

## Cómo Ejecutar Localmente en tu PC

Para probar la página en tu navegador de forma local:

```bash
# Iniciar un servidor local rápido con Python:
python -m http.server 8080
```

Luego abre en tu navegador:
- Página Principal (Landing + Sobre Nosotros): **http://localhost:8080/index.html**
- Carta Digital Interactiva: **http://localhost:8080/carta.html**


---

## Licencia y Derechos de Autor

Copyright &copy; 2026 **NexoWebs**. Todos los derechos reservados.

El código fuente de este proyecto se exhibe únicamente con fines demostrativos y de muestra. Queda expresamente prohibida su copia, distribución o comercialización por parte de terceros sin previa autorización escrita de NexoWebs.
