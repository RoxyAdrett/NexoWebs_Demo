/**

 * ============================================================================

 * PLANTILLA BASE WEB GASTRONÓMICA - NEXOWEBS DEMO (PEDIDOS A WHATSAPP)

 * Modelo adaptable a cualquier local, restaurante o cafetería

 * ============================================================================

 */



/**

 * CONFIGURACIÓN CENTRAL DE LA PLANTILLA GENERAL (NexoWebs)

 * Reemplaza los siguientes datos por la información real del restaurante o local:

 */

const DEFAULT_STORE_CONFIG = {

  brandName: '[NOMBRE DEL LOCAL]',

  tagline: '[Tu Slogan o Especialidad] · [Tu Ciudad]',

  instagram: '@[tu_instagram]',

  address: '[Dirección de tu Local, Comuna]',

  whatsappNumber: '56972652673', // Número oficial de WhatsApp de NexoWebs (+56 9 7265 2673)

  currencySymbol: '$',

  deliveryFee: 2000 // CLP

};



const CATEGORIES = [

  { id: 'all', name: 'Todo el Menú' },

  { id: 'burgers', name: 'Hamburguesas Caseras' },

  { id: 'papas', name: 'Papas Supremas & Bajón' },

  { id: 'clasicos', name: 'Pollo Frito & Clásicos' },

  { id: 'drinks', name: 'Bebidas & Batidos' }

];



const GLOBAL_SAUCES = [

  'Salsa Especial de la Casa',

  'Mayo Ajo Asado',

  'BBQ Ahumada',

  'Salsa Cheddar Tibia',

  'Mayo Sriracha Picante',

  'Kétchup Clásico'

];



const MENU_ITEMS = [

  {

    id: 'hamburguesa-la-americana',

    name: 'Hamburguesa "La Americana"',

    category: 'burgers',

    price: 7490,

    calories: 820,

    prepMinutes: 12,

    featured: true,

    tags: ['popular'],

    svgType: 'burger',

    description: 'Medallón casero artesanal, aros de cebolla crocantes, queso cheddar fundido, tocino crujiente y salsa BBQ en pan suave.',

    sizes: [

      { id: 'simple', label: 'Simple Casera (180g)', delta: 0 },

      { id: 'doble', label: 'Doble Medallón (360g)', delta: 2500 }

    ],

    baseIngredients: ['Queso Cheddar', 'Aros de Cebolla', 'Tocino Crocante', 'Salsa BBQ'],

    extras: [

      { id: 'extra-cheddar', label: 'Doble Queso Cheddar fundido', price: 1000 },

      { id: 'extra-bacon', label: 'Porción extra de Tocino', price: 1200 },

      { id: 'huevo-plancha', label: 'Huevo frito a la plancha', price: 900 },

      { id: 'papas-acompanamiento', label: 'Sumar Papas Fritas medianas', price: 1900 }

    ]

  },

  {

    id: 'hamburguesa-la-pobre',

    name: 'Hamburguesa "La Pobre"',

    category: 'burgers',

    price: 6990,

    calories: 860,

    prepMinutes: 12,

    featured: true,

    tags: ['popular'],

    svgType: 'burger',

    description: 'El clásico chileno al estilo de la casa: medallón casero, doble huevo frito con yema tierna, aros de cebolla y queso derretido.',

    sizes: [

      { id: 'simple', label: 'Simple Casera', delta: 0 },

      { id: 'doble', label: 'Doble Medallón', delta: 2500 }

    ],

    baseIngredients: ['Doble Huevo Frito', 'Queso Fundido', 'Aros de Cebolla', 'Mayo Casera'],

    extras: [

      { id: 'extra-bacon', label: 'Tocino ahumado crujiente', price: 1200 },

      { id: 'cebolla-caramelizada', label: 'Cebolla caramelizada al wok', price: 800 },

      { id: 'papas-acompanamiento', label: 'Sumar Papas Fritas medianas', price: 1900 }

    ]

  },

  {

    id: 'hamburguesa-clasica-honesta',

    name: 'Clásica Honesta Cheese',

    category: 'burgers',

    price: 6490,

    calories: 680,

    prepMinutes: 10,

    featured: true,

    tags: ['popular'],

    svgType: 'burger',

    description: 'Medallón 100% vacuno sazonado en casa, doble cheddar fundido, lechuga fresca de estación, tomate en rodajas y mayo de la casa.',

    sizes: [

      { id: 'simple', label: 'Simple (160g)', delta: 0 },

      { id: 'doble', label: 'Doble Carne (320g)', delta: 2400 }

    ],

    baseIngredients: ['Doble Cheddar', 'Lechuga Fresca', 'Tomate', 'Mayo de la Casa'],

    extras: [

      { id: 'extra-cheddar', label: 'Extra Queso Cheddar', price: 1000 },

      { id: 'extra-bacon', label: 'Tocino crocante', price: 1200 },

      { id: 'pepinillos', label: 'Pepinillos agridulces', price: 500 }

    ]

  },

  {

    id: 'hamburguesa-doble-smash',

    name: 'Doble Smash Especial de la Casa',

    category: 'burgers',

    price: 8990,

    calories: 940,

    prepMinutes: 12,

    featured: true,

    tags: ['popular', 'nuevo'],

    svgType: 'combo',

    description: 'Doble carne smash con costra caramelizada, cuádruple cheddar americano, tocino en tiras y salsa secreta de la casa.',

    sizes: [

      { id: 'doble', label: 'Doble Smash', delta: 0 },

      { id: 'triple', label: 'Upgrade a Triple Smash', delta: 2500 }

    ],

    baseIngredients: ['Cuádruple Cheddar', 'Tocino en Tiras', 'Cebolla Picada', 'Salsa Secreta'],

    extras: [

      { id: 'extra-cheddar', label: 'Cheddar extra', price: 1000 },

      { id: 'papas-acompanamiento', label: 'Sumar Papas Medianas', price: 1900 }

    ]

  },

  {

    id: 'hamburguesa-diabla-jalapeno',

    name: 'Diabla Crunch Jalapeño',

    category: 'burgers',

    price: 7490,

    calories: 780,

    prepMinutes: 11,

    featured: false,

    tags: ['spicy'],

    svgType: 'burger',

    description: 'Para los valientes: medallón casero, queso pepper jack fundido, rodajas de jalapeños encurtidos, cebolla crispy y mayo sriracha.',

    sizes: [

      { id: 'simple', label: 'Simple Picante', delta: 0 },

      { id: 'doble', label: 'Doble Carne Picante', delta: 2500 }

    ],

    baseIngredients: ['Queso Pepper Jack', 'Jalapeños Encurtidos', 'Cebolla Crispy', 'Mayo Sriracha'],

    extras: [

      { id: 'doble-jalapeno', label: 'Extra Jalapeños', price: 700 },

      { id: 'extra-tocino', label: 'Tocino ahumado', price: 1200 }

    ]

  },

  {

    id: 'hamburguesa-green-veggie',

    name: 'Hamburguesa Plant-Based de la Casa',

    category: 'burgers',

    price: 6990,

    calories: 590,

    prepMinutes: 10,

    featured: false,

    tags: ['veggie'],

    svgType: 'burger',

    description: 'Medallón crocante de hongos y legumbres, palta hass molida, tomate fresco, rúcula seleccionada y mayo ajo suave.',

    sizes: [

      { id: 'con-queso', label: 'Con Queso Danbo Fundido', delta: 0 },

      { id: '100-vegana', label: '100% Vegana (Sin queso / Mayo vegetal)', delta: 500 }

    ],

    baseIngredients: ['Palta Hass Molida', 'Tomate', 'Rúcula Fresca', 'Mayo Ajo Asado'],

    extras: [

      { id: 'extra-palta', label: 'Porción extra de Palta', price: 1200 },

      { id: 'aros-cebolla-extra', label: 'Aros de cebolla dentro', price: 1000 }

    ]

  },

  {

    id: 'papas-la-suprema-xl',

    name: 'Papas Fritas "La Suprema" XL',

    category: 'papas',

    price: 6990,

    calories: 920,

    prepMinutes: 10,

    featured: true,

    tags: ['popular'],

    svgType: 'sides',

    description: 'Bandeja XL de papas fritas doradas y crujientes bañadas en salsa de queso cheddar fundido, lluvia de tocino crocante y tomate fresco picado.',

    sizes: [

      { id: 'mediana', label: 'Porción Grande', delta: 0 },

      { id: 'familiar-xl', label: 'Bandeja Familiar XL (Para 3-4)', delta: 2500 }

    ],

    baseIngredients: ['Salsa Cheddar Fundido', 'Lluvia de Tocino Crocante', 'Tomate Fresco Picado'],

    extras: [

      { id: 'jalapenos', label: 'Rodajas de Jalapeño picante', price: 700 },

      { id: 'carne-picada', label: 'Carne casera picada encima', price: 2000 }

    ]

  },

  {

    id: 'papas-la-mediterranea',

    name: 'Papas Fritas "La Mediterránea"',

    category: 'papas',

    price: 6490,

    calories: 780,

    prepMinutes: 9,

    featured: false,

    tags: ['nuevo'],

    svgType: 'sides',

    description: 'Papas fritas con aceitunas seleccionadas, toque de orégano campestre, salsa alioli de hierbas frescas y abundante queso fundido.',

    sizes: [

      { id: 'individual', label: 'Porción Normal', delta: 0 },

      { id: 'doble', label: 'Porción Doble', delta: 2000 }

    ],

    baseIngredients: ['Aceitunas Sevillanas', 'Orégano', 'Queso Fundido', 'Salsa Alioli Hierbas'],

    extras: [

      { id: 'extra-queso', label: 'Doble Queso fundido', price: 1000 }

    ]

  },

  {

    id: 'salchipapas-especial',

    name: 'Salchipapas Especiales (Compartir)',

    category: 'papas',

    price: 5490,

    calories: 810,

    prepMinutes: 8,

    featured: true,

    tags: ['popular'],

    svgType: 'sides',

    description: 'Generosa porción de papas fritas rústicas combinadas con rodajas de vienesas premium doradas al wok y salsas a elección.',

    sizes: [

      { id: 'mediana', label: 'Porción Normal', delta: 0 },

      { id: 'xl', label: 'Porción XL Super Bajón', delta: 2200 }

    ],

    baseIngredients: ['Papas Fritas Rústicas', 'Vienesas Premium Doradas'],

    extras: [

      { id: 'cheddar-fundido', label: 'Bañar con Cheddar Fundido', price: 1200 },

      { id: 'huevo-frito', label: 'Huevo frito arriba', price: 900 }

    ]

  },

  {

    id: 'aros-de-cebolla',

    name: 'Aros de Cebolla Crispy (10 u.)',

    category: 'papas',

    price: 3990,

    calories: 460,

    prepMinutes: 7,

    featured: false,

    tags: ['veggie'],

    svgType: 'sides',

    description: '10 aros de cebolla morada en rebozado crujiente artesanal con dip de salsa BBQ o salsa de la casa.',

    sizes: [

      { id: '10-unidades', label: '10 Unidades', delta: 0 },

      { id: '16-unidades', label: '16 Unidades', delta: 1500 }

    ],

    baseIngredients: ['Rebozado Crujiente', 'Toque de Sal de Mar'],

    extras: [

      { id: 'dip-cheddar', label: 'Pote extra de Cheddar tibio', price: 1000 }

    ]

  },

  {

    id: 'pollo-frito-box',

    name: 'Pollo Frito Crujiente (Box 6 piezas)',

    category: 'clasicos',

    price: 6990,

    calories: 890,

    prepMinutes: 12,

    featured: true,

    tags: ['popular'],

    svgType: 'chicken',

    description: 'Presas de pollo marinadas 12 horas con especias secretas y rebozado extra crujiente estilo americano. Incluye 2 salsas.',

    sizes: [

      { id: 'box-6', label: 'Box 6 Piezas', delta: 0 },

      { id: 'bucket-10', label: 'Bucket 10 Piezas (Para compartir)', delta: 3000 }

    ],

    baseIngredients: ['Rebozado Crujiente con Especias'],

    extras: [

      { id: 'papas-acompanamiento', label: 'Sumar Papas Medianas', price: 1900 },

      { id: 'salsa-extra', label: 'Pote de Salsa Especial de la Casa', price: 800 }

    ]

  },

  {

    id: 'tenders-pechuga',

    name: 'Tenders 100% Pechuga (Box 6 u.)',

    category: 'clasicos',

    price: 5990,

    calories: 620,

    prepMinutes: 10,

    featured: false,

    tags: [],

    svgType: 'chicken',

    description: 'Tiras de pura pechuga de pollo fileteada y empanizada al momento, ultra tiernas y doradas.',

    sizes: [

      { id: 'box-6', label: 'Box 6 Tenders', delta: 0 },

      { id: 'box-10', label: 'Box 10 Tenders', delta: 2500 }

    ],

    baseIngredients: ['Pechuga Fileteada', 'Empanizado Dorado'],

    extras: [

      { id: 'dip-bbq', label: 'Dip Salsa BBQ', price: 700 }

    ]

  },

  {

    id: 'hot-dog-italiano-gigante',

    name: 'Hot Dog Italiano Gigante',

    category: 'clasicos',

    price: 3490,

    calories: 580,

    prepMinutes: 6,

    featured: true,

    tags: ['popular'],

    svgType: 'burger',

    description: 'Pan copihue tostado, vienesa premium grande, abundante palta hass molida, tomate fresco picado y mayo de la casa.',

    sizes: [

      { id: 'italiano', label: 'Italiano Clásico (Palta, Tomate, Mayo)', delta: 0 },

      { id: 'dinamico', label: 'Dinámico (Italiano + Chucrut + Salsa Verde)', delta: 500 }

    ],

    baseIngredients: ['Palta Hass Molida', 'Tomate Fresco Picado', 'Mayo Casera'],

    extras: [

      { id: 'queso-caliente', label: 'Queso fundido encima', price: 800 }

    ]

  },

  {

    id: 'empanadas-queso-fritas',

    name: 'Empanadas de Queso Fritas (3 u.)',

    category: 'clasicos',

    price: 2990,

    calories: 450,

    prepMinutes: 6,

    featured: false,

    tags: ['veggie'],

    svgType: 'sides',

    description: '3 empanadas de masa casera delgada y crujiente rellenas de abundante queso derretido recién salidas de la freidora.',

    sizes: [

      { id: 'pack-3', label: 'Porción 3 Unidades', delta: 0 },

      { id: 'pack-6', label: 'Porción 6 Unidades', delta: 2500 }

    ],

    baseIngredients: ['Queso Derretido', 'Masa Crujiente'],

    extras: []

  },

  {

    id: 'bebida-500ml',

    name: 'Bebida Línea Coca-Cola 500ml',

    category: 'drinks',

    price: 1990,

    calories: 140,

    prepMinutes: 2,

    featured: false,

    tags: [],

    svgType: 'drink',

    description: 'Servida bien fría: Coca-Cola original, Coca-Cola Zero, Sprite o Fanta 500ml.',

    sizes: [

      { id: 'coca-original', label: 'Coca-Cola Original 500ml', delta: 0 },

      { id: 'coca-zero', label: 'Coca-Cola Zero 500ml', delta: 0 },

      { id: 'sprite', label: 'Sprite 500ml', delta: 0 },

      { id: 'fanta', label: 'Fanta 500ml', delta: 0 }

    ],

    baseIngredients: ['Bien Helada'],

    extras: []

  },

  {

    id: 'bebida-familiar-1500',

    name: 'Bebida Familiar 1.5 Litros',

    category: 'drinks',

    price: 2990,

    calories: 400,

    prepMinutes: 2,

    featured: false,

    tags: [],

    svgType: 'drink',

    description: 'Botella familiar desechable de 1.5L. Ideal para acompañar tus hamburguesas y papas supremas.',

    sizes: [

      { id: 'coca-original-15', label: 'Coca-Cola Original 1.5L', delta: 0 },

      { id: 'coca-zero-15', label: 'Coca-Cola Zero 1.5L', delta: 0 },

      { id: 'sprite-15', label: 'Sprite 1.5L', delta: 0 }

    ],

    baseIngredients: ['Bien Helada'],

    extras: []

  },

  {

    id: 'milkshake-oreo',

    name: 'Milkshake Artesanal Oreo 450ml',

    category: 'drinks',

    price: 3990,

    calories: 540,

    prepMinutes: 5,

    featured: true,

    tags: ['popular', 'veggie'],

    svgType: 'drink',

    description: 'Batido cremoso y espeso preparado con helado artesanal de crema americana, galletas Oreo trituradas y crema chantilly.',

    sizes: [

      { id: 'oreo', label: 'Cookies & Cream Oreo 450ml', delta: 0 },

      { id: 'manjar', label: 'Manjar Artesanal & Crema 450ml', delta: 0 }

    ],

    baseIngredients: ['Crema Chantilly', 'Galleta Triturada'],

    extras: [

      { id: 'extra-oreo', label: 'Doble galleta triturada', price: 600 }

    ]

  }

];



// Formateador en Pesos Chilenos (CLP)

const CLP_FORMATTER = new Intl.NumberFormat('es-CL', {

  style: 'currency',

  currency: 'CLP',

  maximumFractionDigits: 0

});



function formatPrice(amount) {

  return CLP_FORMATTER.format(Math.round(Number(amount) || 0));

}



/* ============================================================================

   ILUSTRACIONES SVG ESCALABLES (Cero emojis estructurales)

   ============================================================================ */

function getCategorySvg(type) {

  switch (type) {

    case 'combo':

      return `

        <svg viewBox="0 0 80 80" class="menu-card__svg" aria-hidden="true">

          <rect x="44" y="14" width="22" height="44" rx="4" fill="#DC2626" />

          <path d="M55 8v8" stroke="#A16207" stroke-width="3" stroke-linecap="round" />

          <path d="M12 42 C12 28, 48 28, 48 42 Z" fill="#D97706" />

          <path d="M10 45 Q20 42 30 45 T50 45" stroke="#16A34A" stroke-width="4" fill="none" stroke-linecap="round" />

          <rect x="11" y="48" width="38" height="7" rx="3.5" fill="#78350F" />

          <rect x="13" y="57" width="34" height="7" rx="3.5" fill="#B45309" />

        </svg>`;

    case 'chicken':

      return `

        <svg viewBox="0 0 80 80" class="menu-card__svg" aria-hidden="true">

          <path d="M22 48 C16 36, 28 20, 44 24 C56 26, 60 38, 52 48 C46 55, 30 56, 22 48 Z" fill="#D97706" />

          <path d="M51 45 L64 56" stroke="#FEF3C7" stroke-width="6" stroke-linecap="round" />

          <circle cx="65" cy="54" r="4" fill="#FEF3C7" />

          <circle cx="62" cy="59" r="4" fill="#FEF3C7" />

          <circle cx="34" cy="36" r="2" fill="#92400E" />

          <circle cx="43" cy="33" r="2" fill="#92400E" />

        </svg>`;

    case 'sides':

      return `

        <svg viewBox="0 0 80 80" class="menu-card__svg" aria-hidden="true">

          <rect x="24" y="14" width="6" height="32" rx="3" fill="#FACC15" />

          <rect x="32" y="10" width="6" height="36" rx="3" fill="#EAB308" />

          <rect x="40" y="12" width="6" height="34" rx="3" fill="#FACC15" />

          <rect x="48" y="16" width="6" height="30" rx="3" fill="#EAB308" />

          <path d="M18 36 H62 L56 66 H24 Z" fill="#DC2626" />

          <path d="M26 48 Q40 54 54 48" stroke="#FEF2F2" stroke-width="3" fill="none" stroke-linecap="round" />

        </svg>`;

    case 'drink':

      return `

        <svg viewBox="0 0 80 80" class="menu-card__svg" aria-hidden="true">

          <path d="M44 10 L50 10 L44 26" stroke="#DC2626" stroke-width="3.5" fill="none" stroke-linecap="round" />

          <path d="M24 28 H56 L52 66 H28 Z" fill="#F87171" />

          <path d="M22 28 Q40 16 58 28 Z" fill="#FEF2F2" />

          <line x1="21" y1="28" x2="59" y2="28" stroke="#DC2626" stroke-width="3" stroke-linecap="round" />

        </svg>`;

    case 'burger':

    default:

      return `

        <svg viewBox="0 0 80 80" class="menu-card__svg" aria-hidden="true">

          <path d="M16 36 C16 18, 64 18, 64 36 Z" fill="#D97706" />

          <circle cx="32" cy="26" r="1.8" fill="#FEF3C7" />

          <circle cx="42" cy="24" r="1.8" fill="#FEF3C7" />

          <circle cx="50" cy="27" r="1.8" fill="#FEF3C7" />

          <path d="M14 40 Q24 36 34 40 T54 40 T66 40" stroke="#16A34A" stroke-width="4" fill="none" stroke-linecap="round" />

          <polygon points="20,43 32,49 42,43" fill="#FACC15" />

          <polygon points="44,43 56,49 62,43" fill="#FACC15" />

          <rect x="15" y="44" width="50" height="9" rx="4.5" fill="#78350F" />

          <rect x="17" y="55" width="46" height="9" rx="4.5" fill="#B45309" />

        </svg>`;

  }

}



/* ============================================================================

   FALLBACKS MODERN WEB GUIDANCE (Animación Top-Layer y Light-Dismiss)

   ============================================================================ */

let supportsDisplayTransition;

function canTransitionDisplay() {

  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;

  if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {

    return false;

  }

  const probe = document.createElement('div');

  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';

  document.body.appendChild(probe);

  getComputedStyle(probe).display;

  probe.style.display = 'none';

  supportsDisplayTransition = getComputedStyle(probe).display === 'block';

  probe.remove();

  return supportsDisplayTransition;

}



function supportsTopLayerExit() {

  return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();

}



async function closeTopLayer(dialogEl) {

  if (!dialogEl || !dialogEl.open) return;



  if (!supportsTopLayerExit()) {

    dialogEl.setAttribute('data-closing', '');

    const animations = dialogEl.getAnimations({ subtree: true });

    if (animations.length > 0) {

      await Promise.race([

        Promise.allSettled(animations.map((a) => a.finished)),

        new Promise((resolve) => setTimeout(resolve, 2000))

      ]);

    }

    if (!dialogEl.hasAttribute('data-closing')) return;

    dialogEl.removeAttribute('data-closing');

  }



  dialogEl.close();

}



function setupDialogEnhancements() {

  const dialogs = document.querySelectorAll('dialog.modal-dialog');

  dialogs.forEach((dialog) => {

    dialog.addEventListener('cancel', (event) => {

      event.preventDefault();

      closeTopLayer(dialog);

    });



    // Fallback para light-dismiss fuera del cuadro de diálogo

    if (!('closedBy' in HTMLDialogElement.prototype)) {

      dialog.addEventListener('click', (event) => {

        if (event.target !== dialog) return;

        const rect = dialog.getBoundingClientRect();

        const isDialogContent =

          rect.top <= event.clientY &&

          event.clientY <= rect.top + rect.height &&

          rect.left <= event.clientX &&

          event.clientX <= rect.left + rect.width;

        if (isDialogContent) return;

        closeTopLayer(dialog);

      });

    }

  });



  document.querySelectorAll('[data-close-dialog]').forEach((btn) => {

    btn.addEventListener('click', () => {

      const targetId = btn.getAttribute('data-close-dialog');

      const dialog = document.getElementById(targetId);

      closeTopLayer(dialog);

    });

  });

}



/* ============================================================================

   ESTADO DE LA APLICACIÓN

   ============================================================================ */

const state = {

  config: loadStoreConfig(),

  menuItems: loadMenuItems(),

  activeCategory: 'all',

  activeTags: new Set(),

  searchQuery: '',

  sortBy: 'featured',

  fulfillmentMode: 'pickup', // 'pickup' | 'delivery'

  cart: loadCart(),

  customizingItem: null,

  customizerQty: 1

};



function loadStoreConfig() {

  try {

    const saved = localStorage.getItem('hp_store_config_v2_clp');

    if (saved) {
      const parsed = JSON.parse(saved);
      // Si el número guardado anteriormente era el placeholder genérico o el de El Honesto Parra, actualizar al oficial de NexoWebs
      if (parsed.whatsappNumber === '56912345678' || parsed.whatsappNumber === '56976881140') {
        parsed.whatsappNumber = DEFAULT_STORE_CONFIG.whatsappNumber;
      }
      return { ...DEFAULT_STORE_CONFIG, ...parsed };
    }

    return { ...DEFAULT_STORE_CONFIG };

  } catch {

    return { ...DEFAULT_STORE_CONFIG };

  }

}



function loadMenuItems() {

  try {

    const savedCustom = localStorage.getItem('hp_custom_dishes_v2_clp');

    const customList = savedCustom ? JSON.parse(savedCustom) : [];

    return [...MENU_ITEMS, ...customList];

  } catch {

    return [...MENU_ITEMS];

  }

}



function loadCart() {

  try {

    const saved = localStorage.getItem('hp_cart_v2_clp');

    return saved ? JSON.parse(saved) : [];

  } catch {

    return [];

  }

}



function saveCart() {

  try {

    localStorage.setItem('hp_cart_v2_clp', JSON.stringify(state.cart));

  } catch {

    // ignorar quota de storage

  }

}



/* ============================================================================

   RENDERIZADO DE CATEGORÍAS Y CARTA INTERACTIVA

   ============================================================================ */

function renderCategories() {

  const bar = document.getElementById('categoryFilterBar');

  if (!bar) return;



  bar.innerHTML = CATEGORIES.map((cat) => {

    const count =

      cat.id === 'all'

        ? state.menuItems.length

        : state.menuItems.filter((item) => item.category === cat.id).length;

    const isPressed = state.activeCategory === cat.id;



    return `

      <button

        type="button"

        class="category-pill"

        data-category="${cat.id}"

        aria-pressed="${isPressed}"

      >

        <span>${cat.name}</span>

        <span class="category-pill__count" aria-hidden="true">${count}</span>

      </button>

    `;

  }).join('');



  bar.querySelectorAll('.category-pill').forEach((btn) => {

    btn.addEventListener('click', () => {

      state.activeCategory = btn.getAttribute('data-category');

      renderCategories();

      renderMenuGrid();

    });

  });

}



function getFilteredMenuItems() {

  const query = state.searchQuery.trim().toLowerCase();



  const filtered = state.menuItems.filter((item) => {

    if (state.activeCategory !== 'all' && item.category !== state.activeCategory) {

      return false;

    }

    if (state.activeTags.size > 0) {

      for (const tag of state.activeTags) {

        if (!item.tags.includes(tag)) return false;

      }

    }

    if (query) {

      const haystack = `${item.name} ${item.description} ${item.baseIngredients.join(' ')}`.toLowerCase();

      if (!haystack.includes(query)) return false;

    }

    return true;

  });



  return filtered.sort((a, b) => {

    if (state.sortBy === 'price-asc') return a.price - b.price;

    if (state.sortBy === 'price-desc') return b.price - a.price;

    return Number(b.featured) - Number(a.featured);

  });

}



function getTagBadgeHtml(tag) {

  const labels = {

    popular: { text: 'Más Pedido', cls: 'badge-tag--popular' },

    spicy: { text: 'Picante', cls: 'badge-tag--spicy' },

    veggie: { text: 'Veggie', cls: 'badge-tag--veggie' },

    nuevo: { text: 'Nuevo', cls: 'badge-tag--nuevo' }

  };

  const info = labels[tag];

  if (!info) return '';

  return `<span class="badge-tag ${info.cls}">${info.text}</span>`;

}



function renderMenuGrid() {

  const grid = document.getElementById('menuGrid');

  const emptyState = document.getElementById('emptyMenuState');

  const counter = document.getElementById('resultsCounter');

  const resetFiltersBtn = document.getElementById('resetFiltersBtn');



  if (!grid) return;



  const items = getFilteredMenuItems();

  const hasActiveFilters =

    state.activeCategory !== 'all' || state.activeTags.size > 0 || state.searchQuery.trim() !== '';



  if (resetFiltersBtn) {

    resetFiltersBtn.hidden = !hasActiveFilters;

  }



  if (counter) {

    counter.textContent =

      items.length === state.menuItems.length

        ? `Mostrando las ${items.length} especialidades de la carta`

        : `Mostrando ${items.length} de ${state.menuItems.length} preparaciones`;

  }



  if (items.length === 0) {

    grid.innerHTML = '';

    if (emptyState) emptyState.hidden = false;

    return;

  }



  if (emptyState) emptyState.hidden = true;

  grid.innerHTML = items

    .map((item) => {

      const badges = item.tags.map(getTagBadgeHtml).join('');

      return `

        <div class="menu-card-wrapper">

          <article class="menu-card" aria-labelledby="title-${item.id}">

            <div class="menu-card__main">

              <div class="menu-card__visual">

                ${getCategorySvg(item.svgType)}

              </div>

              <div class="menu-card__content">

                <div class="menu-card__badges">${badges}</div>

                <h3 id="title-${item.id}" class="menu-card__title">${item.name}</h3>

                <p class="menu-card__desc">${item.description}</p>

                <div class="menu-card__meta">

                  <span>${item.calories} kcal</span>

                  <span aria-hidden="true">•</span>

                  <span>~${item.prepMinutes} min</span>

                </div>

              </div>

            </div>



            <div class="menu-card__footer">

              <div class="menu-card__price">${formatPrice(item.price)}</div>

              <div class="menu-card__actions">

                <button

                  type="button"

                  class="btn btn-ghost btn-sm"

                  data-customize-id="${item.id}"

                  aria-label="Personalizar ${item.name}"

                >

                  <span>Personalizar</span>

                </button>

                <button

                  type="button"

                  class="btn btn-primary btn-sm"

                  data-quick-add="${item.id}"

                  aria-label="Sumar ${item.name} al pedido"

                >

                  <span>+ Agregar</span>

                </button>

              </div>

            </div>

          </article>

        </div>

      `;

    })

    .join('');



  grid.querySelectorAll('[data-customize-id]').forEach((btn) => {

    btn.addEventListener('click', () => openCustomizerModal(btn.getAttribute('data-customize-id')));

  });



  grid.querySelectorAll('[data-quick-add]').forEach((btn) => {

    btn.addEventListener('click', () => quickAddToCart(btn.getAttribute('data-quick-add'), btn));

  });

}



/* ============================================================================

   MODAL DE PERSONALIZACIÓN

   ============================================================================ */

function openCustomizerModal(itemId) {

  const item = state.menuItems.find((m) => m.id === itemId);

  if (!item) return;



  state.customizingItem = item;

  state.customizerQty = 1;

  updateFunnelStep(2);



  const dialog = document.getElementById('customizerDialog');

  const catObj = CATEGORIES.find((c) => c.id === item.category);

  document.getElementById('customizerCategoryBadge').textContent = catObj ? catObj.name : 'Especialidad';

  document.getElementById('customizerTitle').textContent = item.name;

  document.getElementById('customizerDesc').textContent = item.description;

  document.getElementById('customizerNotes').value = '';

  document.getElementById('customizerQtyValue').value = '1';

  document.getElementById('customizerQtyValue').textContent = '1';



  // 1. Tamaños / Versiones

  const sizeContainer = document.getElementById('sizeOptionsContainer');

  sizeContainer.innerHTML = item.sizes

    .map(

      (s, idx) => `

      <label class="option-card">

        <input type="radio" name="customSize" value="${s.id}" data-delta="${s.delta}" data-label="${s.label}" ${idx === 0 ? 'checked' : ''} />

        <span class="option-card__title">${s.label}</span>

        <span class="option-card__delta">${s.delta > 0 ? `+${formatPrice(s.delta)}` : 'Incluido'}</span>

      </label>

    `

    )

    .join('');



  // 2. Ingredientes Base

  const baseFieldset = document.getElementById('baseIngredientsFieldset');

  const baseContainer = document.getElementById('baseIngredientsContainer');

  if (item.baseIngredients && item.baseIngredients.length > 0) {

    baseFieldset.hidden = false;

    baseContainer.innerHTML = item.baseIngredients

      .map(

        (ing) => `

        <label class="check-pill">

          <input type="checkbox" name="baseIng" value="${ing}" checked />

          <span>${ing}</span>

        </label>

      `

      )

      .join('');

  } else {

    baseFieldset.hidden = true;

    baseContainer.innerHTML = '';

  }



  // 3. Toppings y Extras

  const extrasFieldset = document.getElementById('extrasFieldset');

  const extrasContainer = document.getElementById('extrasContainer');

  if (item.extras && item.extras.length > 0) {

    extrasFieldset.hidden = false;

    extrasContainer.innerHTML = item.extras

      .map(

        (ex) => `

        <label class="option-row">

          <span class="option-row__left">

            <input type="checkbox" name="extraItem" value="${ex.id}" data-price="${ex.price}" data-label="${ex.label}" />

            <span>${ex.label}</span>

          </span>

          <span class="option-row__price">+${formatPrice(ex.price)}</span>

        </label>

      `

      )

      .join('');

  } else {

    extrasFieldset.hidden = true;

    extrasContainer.innerHTML = '';

  }



  // 4. Salsas de la Casa

  const saucesContainer = document.getElementById('saucesContainer');

  saucesContainer.innerHTML = GLOBAL_SAUCES.map(

    (sauce, index) => `

      <label class="check-pill">

        <input type="checkbox" name="sauceItem" value="${sauce}" ${index === 0 ? 'checked' : ''} />

        <span>${sauce}</span>

      </label>

    `

  ).join('');



  saucesContainer.querySelectorAll('input[name="sauceItem"]').forEach((checkbox) => {

    checkbox.addEventListener('change', () => {

      const checked = saucesContainer.querySelectorAll('input[name="sauceItem"]:checked');

      if (checked.length > 2) {

        checkbox.checked = false;

      }

    });

  });



  updateCustomizerLivePrice();

  dialog.showModal();

}



function calculateCustomizerUnitPrice() {

  const item = state.customizingItem;

  if (!item) return 0;



  let unitPrice = item.price;

  const form = document.getElementById('customizerForm');

  const selectedSize = form.querySelector('input[name="customSize"]:checked');

  if (selectedSize) {

    unitPrice += Number(selectedSize.getAttribute('data-delta') || 0);

  }



  form.querySelectorAll('input[name="extraItem"]:checked').forEach((extraInput) => {

    unitPrice += Number(extraInput.getAttribute('data-price') || 0);

  });



  return unitPrice;

}



function updateCustomizerLivePrice() {

  const total = calculateCustomizerUnitPrice() * state.customizerQty;

  const priceEl = document.getElementById('customizerLivePrice');

  if (priceEl) {

    priceEl.textContent = formatPrice(total);

  }

}



/* ============================================================================

   CARRITO Y GESTIÓN DE PEDIDOS

   ============================================================================ */

function quickAddToCart(itemId, buttonEl) {

  const item = state.menuItems.find((m) => m.id === itemId);

  if (!item) return;



  const defaultSize = item.sizes[0];

  addItemToCart({

    productId: item.id,

    name: item.name,

    unitPrice: item.price,

    quantity: 1,

    sizeLabel: defaultSize ? defaultSize.label : 'Estándar',

    removedIngredients: [],

    extras: [],

    sauces: [GLOBAL_SAUCES[0]],

    notes: ''

  });



  if (buttonEl) {

    const originalText = buttonEl.innerHTML;

    buttonEl.innerHTML = '<span>¡Agregado!</span>';

    setTimeout(() => {

      buttonEl.innerHTML = originalText;

    }, 900);

  }

}



function addItemToCart(cartEntry) {

  const signature = JSON.stringify({

    productId: cartEntry.productId,

    sizeLabel: cartEntry.sizeLabel,

    removed: cartEntry.removedIngredients.slice().sort(),

    extras: cartEntry.extras.slice().sort(),

    sauces: cartEntry.sauces.slice().sort(),

    notes: cartEntry.notes.trim().toLowerCase()

  });



  const existing = state.cart.find((c) => c.signature === signature);

  if (existing) {

    existing.quantity += cartEntry.quantity;

  } else {

    state.cart.push({

      cartItemId: `ci_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,

      signature,

      ...cartEntry

    });

  }



  saveCart();

  renderCartUI();

}



function updateCartItemQty(cartItemId, delta) {

  const idx = state.cart.findIndex((c) => c.cartItemId === cartItemId);

  if (idx === -1) return;



  state.cart[idx].quantity += delta;

  if (state.cart[idx].quantity <= 0) {

    state.cart.splice(idx, 1);

  }



  saveCart();

  renderCartUI();

}



function getCartTotals() {

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const deliveryFee =

    totalCount > 0 && state.fulfillmentMode === 'delivery' ? Number(state.config.deliveryFee) : 0;

  const grandTotal = subtotal + deliveryFee;

  return { totalCount, subtotal, deliveryFee, grandTotal };

}



function renderCartUI() {

  const { totalCount, subtotal, deliveryFee, grandTotal } = getCartTotals();



  // Badges en Header y Móvil

  const headerCount = document.getElementById('headerCartCount');

  const headerTotal = document.getElementById('headerCartTotal');

  const sidebarCount = document.getElementById('sidebarItemCount');



  if (headerCount) headerCount.textContent = String(totalCount);

  if (headerTotal) headerTotal.textContent = formatPrice(grandTotal);

  if (sidebarCount) sidebarCount.textContent = `${totalCount} ${totalCount === 1 ? 'ítem' : 'ítems'}`;



  // Anuncio para lectores de pantalla

  const liveStatus = document.getElementById('cartLiveStatus');

  if (liveStatus) {

    liveStatus.textContent = `${totalCount} ${totalCount === 1 ? 'producto' : 'productos'} en tu pedido, subtotal ${formatPrice(subtotal)}`;

  }



  // Barra móvil fija

  const mobileBar = document.getElementById('mobileOrderBar');

  if (mobileBar) {

    mobileBar.hidden = totalCount === 0;

    const mobileCount = document.getElementById('mobileBarCount');

    const mobileTotal = document.getElementById('mobileBarTotal');

    if (mobileCount) mobileCount.textContent = `${totalCount} ${totalCount === 1 ? 'ítem' : 'ítems'}`;

    if (mobileTotal) mobileTotal.textContent = formatPrice(grandTotal);

  }



  const listEl = document.getElementById('cartItemsList');

  const checkoutBtn = document.getElementById('checkoutBtn');

  const clearCartBtn = document.getElementById('clearCartBtn');



  if (!listEl) return;



  if (state.cart.length === 0) {

    listEl.innerHTML = `

      <div class="cart-empty">

        Tu pedido está vacío. Elige una de nuestras hamburguesas caseras o papas para comenzar.

      </div>

    `;

    if (checkoutBtn) checkoutBtn.disabled = true;

    if (clearCartBtn) clearCartBtn.hidden = true;

    updateFunnelStep(1);

  } else {

    if (checkoutBtn) checkoutBtn.disabled = false;

    if (clearCartBtn) clearCartBtn.hidden = false;



    listEl.innerHTML = state.cart

      .map((item) => {

        const mods = [];

        if (item.sizeLabel) mods.push(item.sizeLabel);

        if (item.extras.length > 0) mods.push(`+${item.extras.join(', +')}`);

        if (item.removedIngredients.length > 0) mods.push(`Sin: ${item.removedIngredients.join(', ')}`);

        if (item.sauces.length > 0) mods.push(`Salsas: ${item.sauces.join(', ')}`);

        if (item.notes) mods.push(`Nota: "${item.notes}"`);



        return `

          <div class="cart-item">

            <div class="cart-item__top">

              <h4 class="cart-item__name">${item.quantity}x ${item.name}</h4>

              <span class="cart-item__price">${formatPrice(item.unitPrice * item.quantity)}</span>

            </div>

            <p class="cart-item__mods">${mods.join(' • ')}</p>

            <div class="cart-item__controls">

              <div class="mini-qty">

                <button

                  type="button"

                  class="mini-qty__btn"

                  data-cart-minus="${item.cartItemId}"

                  aria-label="Quitar una unidad de ${item.name}"

                >-</button>

                <span aria-hidden="true">${item.quantity}</span>

                <button

                  type="button"

                  class="mini-qty__btn"

                  data-cart-plus="${item.cartItemId}"

                  aria-label="Sumar una unidad de ${item.name}"

                >+</button>

              </div>

            </div>

          </div>

        `;

      })

      .join('');



    listEl.querySelectorAll('[data-cart-minus]').forEach((btn) => {

      btn.addEventListener('click', () => updateCartItemQty(btn.getAttribute('data-cart-minus'), -1));

    });



    listEl.querySelectorAll('[data-cart-plus]').forEach((btn) => {

      btn.addEventListener('click', () => updateCartItemQty(btn.getAttribute('data-cart-plus'), 1));

    });

  }



  renderUpsellSuggestion();



  const subtotalEl = document.getElementById('cartSubtotal');

  const deliveryRow = document.getElementById('deliveryFeeRow');

  const deliveryFeeEl = document.getElementById('cartDeliveryFee');

  const grandTotalEl = document.getElementById('cartGrandTotal');



  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

  if (deliveryRow) deliveryRow.hidden = state.fulfillmentMode !== 'delivery';

  if (deliveryFeeEl) deliveryFeeEl.textContent = formatPrice(state.config.deliveryFee);

  if (grandTotalEl) grandTotalEl.textContent = formatPrice(grandTotal);

}



function renderUpsellSuggestion() {

  const upsellBox = document.getElementById('upsellBox');

  const upsellContent = document.getElementById('upsellContent');

  if (!upsellBox || !upsellContent) return;



  if (state.cart.length === 0) {

    upsellBox.hidden = true;

    return;

  }



  const hasDrink = state.cart.some((c) => {

    const prod = state.menuItems.find((m) => m.id === c.productId);

    return prod && prod.category === 'drinks';

  });



  const hasSides = state.cart.some((c) => {

    const prod = state.menuItems.find((m) => m.id === c.productId);

    return prod && prod.category === 'papas';

  });



  let suggestedItem = null;

  if (!hasDrink) {

    suggestedItem = state.menuItems.find((m) => m.id === 'bebida-500ml');

  } else if (!hasSides) {

    suggestedItem = state.menuItems.find((m) => m.id === 'aros-de-cebolla');

  }



  if (!suggestedItem) {

    upsellBox.hidden = true;

    return;

  }



  upsellBox.hidden = false;

  upsellContent.innerHTML = `

    <div class="upsell-item">

      <span>${suggestedItem.name} (${formatPrice(suggestedItem.price)})</span>

      <button type="button" class="btn btn-secondary btn-sm" id="upsellAddBtn">

        + Sumar

      </button>

    </div>

  `;



  document.getElementById('upsellAddBtn')?.addEventListener('click', () => {

    quickAddToCart(suggestedItem.id);

  });

}



function updateFunnelStep(stepNumber) {

  [1, 2, 3].forEach((num) => {

    const el = document.getElementById(`stepIndicator${num}`);

    if (el) el.classList.toggle('is-current', num === stepNumber);

  });

}



/* ============================================================================

   CHECKOUT MODAL & GENERADOR DE RECIBOS WHATSAPP (CLP)

   ============================================================================ */

function openCheckoutModal() {

  if (state.cart.length === 0) return;



  updateFunnelStep(3);

  const dialog = document.getElementById('checkoutDialog');

  const form = document.getElementById('checkoutForm');

  const confirmedView = document.getElementById('orderConfirmedView');

  const errorSummary = document.getElementById('checkoutErrorSummary');



  if (form) form.hidden = false;

  if (confirmedView) confirmedView.hidden = true;

  if (errorSummary) errorSummary.hidden = true;



  const addressGroup = document.getElementById('deliveryAddressGroup');

  if (addressGroup) addressGroup.hidden = state.fulfillmentMode !== 'delivery';



  const { totalCount, grandTotal } = getCartTotals();

  const preview = document.getElementById('checkoutOrderPreview');

  if (preview) {

    preview.innerHTML = `

      <strong>Modalidad: ${state.fulfillmentMode === 'delivery' ? 'Delivery a Domicilio' : 'Retiro en el Local'}</strong>

      <br />

      <span>${totalCount} ${totalCount === 1 ? 'producto' : 'productos'} • Total a pagar: <strong>${formatPrice(grandTotal)}</strong></span>

    `;

  }



  dialog.showModal();

}



function buildWhatsAppReceipt({ orderId, customerName, address, paymentMethod, comments }) {

  const { subtotal, deliveryFee, grandTotal, totalCount } = getCartTotals();

  const isDelivery = state.fulfillmentMode === 'delivery';

  const dateText = new Intl.DateTimeFormat('es-CL', {

    dateStyle: 'short',

    timeStyle: 'short',

    timeZone: 'America/Santiago'

  }).format(new Date());



  const divider = '------------------------------';



  const itemLines = state.cart.flatMap((item) => {

    const lines = [`*${item.quantity}x ${item.name}* — ${formatPrice(item.unitPrice * item.quantity)}`];

    if (item.sizeLabel) lines.push(`   • Opción: ${item.sizeLabel}`);

    if (item.extras.length) lines.push(`   • Extras: ${item.extras.join(', ')}`);

    if (item.removedIngredients.length) lines.push(`   • Sin: ${item.removedIngredients.join(', ')}`);

    if (item.sauces.length) lines.push(`   • Salsas: ${item.sauces.join(', ')}`);

    if (item.notes) lines.push(`   • Nota cocina: _${item.notes}_`);

    if (item.quantity > 1) lines.push(`   • Unitario: ${formatPrice(item.unitPrice)}`);

    return [...lines, ''];

  });



  return [

    `*NUEVO PEDIDO — ${state.config.brandName.toUpperCase()}*`,

    `Pedido N° ${orderId}`,

    `Fecha: ${dateText} (Chile)`,

    divider,

    `*Cliente:* ${customerName}`,

    `*Modalidad:* ${isDelivery ? 'Delivery a Domicilio' : 'Retiro en el Local'}`,

    ...(isDelivery ? [`*Dirección:* ${address}`] : []),

    `*Método de Pago:* ${paymentMethod}`,

    ...(comments ? [`*Comentarios:* ${comments}`] : []),

    divider,

    `*DETALLE DEL PEDIDO (${totalCount} ${totalCount === 1 ? 'producto' : 'productos'})*`,

    '',

    ...itemLines,

    divider,

    `Subtotal: ${formatPrice(subtotal)}`,

    ...(isDelivery ? [`Envío: ${formatPrice(deliveryFee)}`] : []),

    `*TOTAL A PAGAR: ${formatPrice(grandTotal)}*`,

    divider,

    '_Pedido generado desde la carta online oficial._'

  ].join('\n');

}



function validateAndSubmitCheckout(event) {

  event.preventDefault();



  const nameInput = document.getElementById('customerName');

  const addressInput = document.getElementById('customerAddress');

  const commentsInput = document.getElementById('customerComments');



  const errors = [];



  ['customerNameError', 'customerAddressError'].forEach((id) => {

    const el = document.getElementById(id);

    if (el) el.hidden = true;

  });



  if (!nameInput.value.trim()) {

    errors.push({ fieldId: 'customerName', errorId: 'customerNameError', msg: 'Ingresa tu nombre para identificar el pedido.' });

  }

  if (state.fulfillmentMode === 'delivery' && !addressInput.value.trim()) {

    errors.push({ fieldId: 'customerAddress', errorId: 'customerAddressError', msg: 'Indica tu dirección completa para el delivery.' });

  }



  const errorSummary = document.getElementById('checkoutErrorSummary');

  const errorList = document.getElementById('checkoutErrorList');



  if (errors.length > 0) {

    errors.forEach((err) => {

      const el = document.getElementById(err.errorId);

      if (el) el.hidden = false;

    });

    if (errorList) {

      errorList.innerHTML = errors.map((err) => `<li><a href="#${err.fieldId}">${err.msg}</a></li>`).join('');

    }

    if (errorSummary) {

      errorSummary.hidden = false;

      errorSummary.focus();

    }

    return;

  }



  if (errorSummary) errorSummary.hidden = true;



  const orderId = String(Date.now()).slice(-5);

  const receipt = buildWhatsAppReceipt({

    orderId,

    customerName: nameInput.value.trim(),

    address: addressInput.value.trim(),

    paymentMethod: document.getElementById('paymentMethod').value,

    comments: commentsInput ? commentsInput.value.trim() : ''

  });



  const waPhone = String(state.config.whatsappNumber).replace(/\D/g, '');

  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(receipt)}`;



  // Abrir WhatsApp con el recibo listo

  window.open(waUrl, '_blank', 'noopener');



  const ticketNumber = document.getElementById('ticketNumber');

  const ticketTextOutput = document.getElementById('ticketTextOutput');

  const whatsappOrderLink = document.getElementById('whatsappOrderLink');

  const checkoutForm = document.getElementById('checkoutForm');

  const orderConfirmedView = document.getElementById('orderConfirmedView');



  if (ticketNumber) ticketNumber.textContent = orderId;

  if (ticketTextOutput) ticketTextOutput.textContent = receipt;

  if (whatsappOrderLink) whatsappOrderLink.setAttribute('href', waUrl);



  if (checkoutForm) checkoutForm.hidden = true;

  if (orderConfirmedView) orderConfirmedView.hidden = false;

}



/* ============================================================================

   DETECCIÓN DE HORARIO DE ATENCIÓN EN VIVO (Zona horaria: America/Santiago)

   Lunes a Domingo de 17:30 a 23:30 hrs

   ============================================================================ */

function checkStoreOpenStatus() {
  const statusPill = document.getElementById('open-status');
  const statusText = document.getElementById('open-status-text');
  const topDot = document.getElementById('top-open-dot');
  const topText = document.getElementById('top-open-text');
  const addressLabel = state.config?.address || '[Dirección de tu Local, Comuna]';

  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Santiago',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });

    const parts = formatter.formatToParts(now);
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '14', 10);
    const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
    const totalMinutes = hour * 60 + minute;

    // Horario de demostración general: 12:00 (720 min) a 23:00 (1380 min)
    const isOpen = totalMinutes >= 12 * 60 && totalMinutes <= 23 * 60;

    if (isOpen) {
      if (statusPill) statusPill.classList.remove('closed');
      if (statusText) statusText.textContent = '[Abierto Ahora · 12:00 a 23:00 hrs]';
      if (topDot) topDot.classList.remove('closed');
      if (topText) topText.innerHTML = `<strong>[HORARIO DE ATENCIÓN]:</strong> [Lunes a Domingo de 12:00 a 23:00 hrs] · ${addressLabel}`;
    } else {
      if (statusPill) statusPill.classList.add('closed');
      if (statusText) statusText.textContent = '[Abre hoy de 12:00 a 23:00 hrs]';
      if (topDot) topDot.classList.add('closed');
      if (topText) topText.innerHTML = `<strong>[HORARIO DE ATENCIÓN]:</strong> [Lunes a Domingo de 12:00 a 23:00 hrs] · ${addressLabel}`;
    }
  } catch {
    if (statusText) statusText.textContent = '[Atención de 12:00 a 23:00 hrs]';
  }
}

/* ============================================================================
   PERSONALIZACIÓN DEL LOCAL (Modal #storeConfigDialog & Persistencia)
   ============================================================================ */
function applyStoreBranding() {
  const { brandName, tagline, deliveryFee, whatsappNumber } = state.config;
  const hasCustomConfig = Boolean(localStorage.getItem('hp_store_config_v2_clp'));
  const brandTitleEl = document.getElementById('brandNameText') || (hasCustomConfig ? document.querySelector('.navbar .brand-name') : null);
  const brandTaglineEl = document.getElementById('brandTaglineText') || (hasCustomConfig ? document.querySelector('.navbar .brand-tag') : null);
  const footerBrandEl = document.getElementById('footerBrandName');
  const deliveryFeeBadge = document.getElementById('deliveryFeeBadge');
  const cartDeliveryFee = document.getElementById('cartDeliveryFee');

  if (brandTitleEl && brandName) brandTitleEl.textContent = brandName;
  if (brandTaglineEl && tagline) brandTaglineEl.textContent = tagline;
  if (footerBrandEl && brandName) footerBrandEl.textContent = brandName;
  if (deliveryFeeBadge) deliveryFeeBadge.textContent = `+${formatPrice(deliveryFee)}`;
  if (cartDeliveryFee) cartDeliveryFee.textContent = formatPrice(deliveryFee);

  if (whatsappNumber) {
    const cleanPhone = String(whatsappNumber).replace(/\D/g, '');
    const waDisplay = document.getElementById('storeWhatsAppDisplay');
    if (waDisplay) waDisplay.textContent = `+${cleanPhone}`;
  }
}

function initStoreCustomizer() {
  const openBtn = document.getElementById('customizeBrandBtn');
  const dialog = document.getElementById('storeConfigDialog');
  const form = document.getElementById('storeConfigForm');
  const resetBtn = document.getElementById('resetStoreConfigBtn');

  if (!openBtn || !dialog || !form) return;

  openBtn.addEventListener('click', () => {
    const nameIn = document.getElementById('configBrandName') || document.getElementById('cfgBrandName');
    const tagIn = document.getElementById('cfgTagline');
    const feeIn = document.getElementById('configDeliveryFee') || document.getElementById('cfgDeliveryFee');
    const waIn = document.getElementById('configWhatsapp') || document.getElementById('cfgWhatsappNumber');

    if (nameIn) nameIn.value = state.config.brandName;
    if (tagIn) tagIn.value = state.config.tagline;
    if (feeIn) feeIn.value = state.config.deliveryFee;
    if (waIn) waIn.value = state.config.whatsappNumber;

    dialog.showModal();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameEl = document.getElementById('configBrandName') || document.getElementById('cfgBrandName');
    const tagEl = document.getElementById('cfgTagline');
    const feeEl = document.getElementById('configDeliveryFee') || document.getElementById('cfgDeliveryFee');
    const waEl = document.getElementById('configWhatsapp') || document.getElementById('cfgWhatsappNumber');

    const newBrand = nameEl?.value.trim();
    const newTag = tagEl?.value.trim();
    const newFee = Number(feeEl?.value);
    const newWa = waEl?.value.replace(/\D/g, '');

    if (newBrand) state.config.brandName = newBrand;
    if (newTag) state.config.tagline = newTag;
    if (!Number.isNaN(newFee) && newFee >= 0) state.config.deliveryFee = Math.round(newFee);
    if (newWa && newWa.length >= 8) state.config.whatsappNumber = newWa;



    localStorage.setItem('hp_store_config_v2_clp', JSON.stringify(state.config));



    const dishName = document.getElementById('newDishName')?.value.trim();

    const dishCategory = document.getElementById('newDishCategory')?.value;

    const dishPrice = Number(document.getElementById('newDishPrice')?.value);

    const dishDesc = document.getElementById('newDishDesc')?.value.trim();



    if (dishName && !Number.isNaN(dishPrice) && dishPrice > 0) {

      const svgMap = {

        burgers: 'burger',

        papas: 'sides',

        clasicos: 'chicken',

        drinks: 'drink'

      };

      const newDish = {

        id: `custom-${Date.now()}`,

        name: dishName,

        category: dishCategory || 'burgers',

        price: Math.round(dishPrice),

        calories: 650,

        prepMinutes: 10,

        featured: true,

        tags: ['popular'],

        svgType: svgMap[dishCategory] || 'burger',

        description: dishDesc || 'Especialidad casera agregada al menú de [NOMBRE DEL LOCAL].',

        sizes: [{ id: 'regular', label: 'Porción Regular', delta: 0 }],

        baseIngredients: ['Preparación al Momento'],

        extras: [{ id: 'extra-cheddar', label: 'Extra Queso Cheddar', price: 1000 }]

      };



      state.menuItems.unshift(newDish);

      try {

        const savedCustom = localStorage.getItem('hp_custom_dishes_v2_clp');

        const list = savedCustom ? JSON.parse(savedCustom) : [];

        list.unshift(newDish);

        localStorage.setItem('hp_custom_dishes_v2_clp', JSON.stringify(list));

      } catch {

        // ignore storage quota errors

      }



      document.getElementById('newDishName').value = '';

      document.getElementById('newDishPrice').value = '';

      document.getElementById('newDishDesc').value = '';

    }



    applyStoreBranding();

    renderCategories();

    renderMenuGrid();

    renderCartUI();

    closeTopLayer(dialog);

  });



  resetBtn?.addEventListener('click', () => {

    localStorage.removeItem('hp_store_config_v2_clp');

    localStorage.removeItem('hp_custom_dishes_v2_clp');

    state.config = { ...DEFAULT_STORE_CONFIG };

    state.menuItems = [...MENU_ITEMS];

    applyStoreBranding();

    renderCategories();

    renderMenuGrid();

    renderCartUI();

    closeTopLayer(dialog);

  });

}



/* ============================================================================

   INICIALIZACIÓN DE LA APLICACIÓN

   ============================================================================ */

function initApp() {

  // Soporte para enlaces profundos hacia carta.html (?cat=burgers o ?item=hamburguesa-la-americana)

  const params = new URLSearchParams(window.location.search);

  const catParam = params.get('cat');

  const itemParam = params.get('item');



  if (catParam && CATEGORIES.some((c) => c.id === catParam)) {

    state.activeCategory = catParam;

  }



  applyStoreBranding();

  setupDialogEnhancements();

  renderCategories();

  renderMenuGrid();

  renderCartUI();

  checkStoreOpenStatus();

  initStoreCustomizer();



  if (itemParam && document.getElementById('customizerDialog')) {

    const exists = state.menuItems.some((m) => m.id === itemParam);

    if (exists) {

      setTimeout(() => openCustomizerModal(itemParam), 80);

    }

  }



  // Resaltado de navegación activa en el header y scroll suave al inicio
  const isCartaPage = window.location.pathname.toLowerCase().endsWith('carta.html');

  // Si entra con #inicio en el hash o recarga, asegurar vista desde arriba (banner y estado)
  if (!isCartaPage && window.location.hash === '#inicio') {
    if (window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Interceptar clicks en Inicio y Carta para animación de scroll suave hacia arriba (top: 0)
  document.querySelectorAll('.brand-logo, .desktop-nav .nav-link, .mobile-menu a').forEach((link) => {
    const href = link.getAttribute('href') || '';

    // Si estamos en carta.html y tocan "Carta"
    if (isCartaPage && href.includes('carta.html')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuToggle && mobileMenu) {
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileMenu.classList.remove('is-open');
        }
      });
    }

    // Si estamos en index.html y tocan "Inicio" o el Logo del local
    if (!isCartaPage && (href === 'index.html' || href === 'index.html#inicio' || href === '#inicio' || link.classList.contains('brand-logo'))) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.history.pushState) {
          window.history.pushState(null, '', window.location.pathname + window.location.search);
        }
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuToggle && mobileMenu) {
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileMenu.classList.remove('is-open');
        }
      });
    }
  });

  // Marcar enlace activo con aria-current
  document.querySelectorAll('.desktop-nav .nav-link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (isCartaPage) {
      if (href.includes('carta.html')) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    } else {
      if (href === 'index.html' || href === 'index.html#inicio' || href === '#inicio') {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  });



  // Menú móvil

  const menuToggle = document.getElementById('menu-toggle');

  const mobileMenu = document.getElementById('mobile-menu');



  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener('click', () => {

      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

      menuToggle.setAttribute('aria-expanded', String(!isExpanded));

      mobileMenu.classList.toggle('is-open');

    });



    mobileMenu.querySelectorAll('a').forEach((link) => {

      link.addEventListener('click', () => {

        menuToggle.setAttribute('aria-expanded', 'false');

        mobileMenu.classList.remove('is-open');

      });

    });

  }



  // Búsqueda instantánea

  const searchInput = document.getElementById('menuSearch');

  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchInput?.addEventListener('input', () => {

    state.searchQuery = searchInput.value;

    if (clearSearchBtn) clearSearchBtn.hidden = state.searchQuery.length === 0;

    renderMenuGrid();

  });



  clearSearchBtn?.addEventListener('click', () => {

    searchInput.value = '';

    state.searchQuery = '';

    clearSearchBtn.hidden = true;

    searchInput.focus();

    renderMenuGrid();

  });



  // Ordenamiento

  const sortSelect = document.getElementById('menuSort');

  sortSelect?.addEventListener('change', () => {

    state.sortBy = sortSelect.value;

    renderMenuGrid();

  });



  // Filtros rápidos

  document.querySelectorAll('.tag-chip[data-tag]').forEach((chip) => {

    chip.addEventListener('click', () => {

      const tag = chip.getAttribute('data-tag');

      if (state.activeTags.has(tag)) {

        state.activeTags.delete(tag);

        chip.setAttribute('aria-pressed', 'false');

      } else {

        state.activeTags.add(tag);

        chip.setAttribute('aria-pressed', 'true');

      }

      renderMenuGrid();

    });

  });



  // Reset de filtros

  const resetAllFilters = () => {

    state.activeCategory = 'all';

    state.activeTags.clear();

    state.searchQuery = '';

    if (searchInput) searchInput.value = '';

    if (clearSearchBtn) clearSearchBtn.hidden = true;

    document.querySelectorAll('.tag-chip[data-tag]').forEach((c) => c.setAttribute('aria-pressed', 'false'));

    renderCategories();

    renderMenuGrid();

  };



  document.getElementById('resetFiltersBtn')?.addEventListener('click', resetAllFilters);

  document.getElementById('emptyResetBtn')?.addEventListener('click', resetAllFilters);



  // Botones de acción rápida en Hero y Especialidades

  document.querySelectorAll('[data-quick-jump]').forEach((btn) => {

    btn.addEventListener('click', () => {

      const id = btn.getAttribute('data-quick-jump');

      const menuSection = document.getElementById('menu-pedidos');

      menuSection?.scrollIntoView({ behavior: 'smooth' });

      openCustomizerModal(id);

    });

  });



  document.querySelector('.promo-spotlight [data-customize-id]')?.addEventListener('click', (e) => {

    const id = e.currentTarget.getAttribute('data-customize-id');

    const menuSection = document.getElementById('menu-pedidos');

    menuSection?.scrollIntoView({ behavior: 'smooth' });

    openCustomizerModal(id);

  });



  // Customizer: formulario, qty y submit

  const customizerForm = document.getElementById('customizerForm');

  customizerForm?.addEventListener('change', updateCustomizerLivePrice);



  document.getElementById('customizerQtyMinus')?.addEventListener('click', () => {

    if (state.customizerQty > 1) {

      state.customizerQty -= 1;

      document.getElementById('customizerQtyValue').textContent = String(state.customizerQty);

      updateCustomizerLivePrice();

    }

  });



  document.getElementById('customizerQtyPlus')?.addEventListener('click', () => {

    if (state.customizerQty < 20) {

      state.customizerQty += 1;

      document.getElementById('customizerQtyValue').textContent = String(state.customizerQty);

      updateCustomizerLivePrice();

    }

  });



  customizerForm?.addEventListener('submit', (e) => {

    e.preventDefault();

    const item = state.customizingItem;

    if (!item) return;



    const selectedSizeEl = customizerForm.querySelector('input[name="customSize"]:checked');

    const sizeLabel = selectedSizeEl ? selectedSizeEl.getAttribute('data-label') : 'Estándar';



    const removedIngredients = [];

    customizerForm.querySelectorAll('input[name="baseIng"]:not(:checked)').forEach((chk) => {

      removedIngredients.push(chk.value);

    });



    const extras = [];

    customizerForm.querySelectorAll('input[name="extraItem"]:checked').forEach((chk) => {

      extras.push(chk.getAttribute('data-label'));

    });



    const sauces = [];

    customizerForm.querySelectorAll('input[name="sauceItem"]:checked').forEach((chk) => {

      sauces.push(chk.value);

    });



    const notes = document.getElementById('customizerNotes').value.trim();



    addItemToCart({

      productId: item.id,

      name: item.name,

      unitPrice: calculateCustomizerUnitPrice(),

      quantity: state.customizerQty,

      sizeLabel,

      removedIngredients,

      extras,

      sauces,

      notes

    });



    closeTopLayer(document.getElementById('customizerDialog'));

  });



  // Conmutador Retiro vs Delivery

  document.querySelectorAll('.fulfillment-btn').forEach((btn) => {

    btn.addEventListener('click', () => {

      state.fulfillmentMode = btn.getAttribute('data-mode');

      document.querySelectorAll('.fulfillment-btn').forEach((b) => {

        const selected = b === btn;

        b.classList.toggle('is-selected', selected);

        b.setAttribute('aria-checked', String(selected));

      });

      renderCartUI();

    });

  });



  // Vaciar carrito

  document.getElementById('clearCartBtn')?.addEventListener('click', () => {

    state.cart = [];

    saveCart();

    renderCartUI();

  });



  // Disparadores de Checkout

  document.getElementById('checkoutBtn')?.addEventListener('click', openCheckoutModal);

  document.getElementById('mobileViewOrderBtn')?.addEventListener('click', openCheckoutModal);

  document.getElementById('headerCartBtn')?.addEventListener('click', () => {

    if (state.cart.length > 0 && typeof openCheckoutModal === 'function') {

      openCheckoutModal();

    } else {

      const menuEl = document.getElementById('menu-pedidos');

      if (menuEl) {

        menuEl.scrollIntoView({ behavior: 'smooth' });

      } else {

        window.location.href = 'carta.html';

      }

    }

  });



  // Envío del Checkout

  document.getElementById('checkoutForm')?.addEventListener('submit', validateAndSubmitCheckout);



  // Copiar Recibo

  document.getElementById('copyTicketBtn')?.addEventListener('click', async (e) => {

    const text = document.getElementById('ticketTextOutput').textContent;

    const btn = e.currentTarget;

    try {

      await navigator.clipboard.writeText(text);

      btn.innerHTML = '<span>¡Copiado!</span>';

      setTimeout(() => {

        btn.innerHTML = '<span>Copiar Recibo</span>';

      }, 1500);

    } catch {

      // fallback

    }

  });

}



document.addEventListener('DOMContentLoaded', initApp);

