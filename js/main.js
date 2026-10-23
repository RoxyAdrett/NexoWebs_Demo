/**
 * DON CHAMY (@donchamy.oficial) - Interacciones UI/UX
 * Archivo: js/main.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú móvil accesible
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('is-open');
    });

    // Cerrar menú al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
      });
    });
  }

  // 2. Indicador dinámico de horario de atención (Zona horaria: Santiago de Chile)
  const statusPill = document.getElementById('open-status');
  const statusText = document.getElementById('open-status-text');

  if (statusPill && statusText) {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Santiago',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });

      const parts = formatter.formatToParts(now);
      const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      const weekdayStr = parts.find((p) => p.type === 'weekday')?.value || 'Mon';
      const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '12', 10);
      const day = dayMap[weekdayStr] ?? 1;

      let isOpen = false;

      // Horarios reales de Don Chamy:
      // Lun-Jue: 10:00 a 03:00 | Vie-Sáb: 10:00 a 05:00 | Dom: 18:00 a 03:00
      if (day >= 1 && day <= 4) {
        isOpen = hour >= 10 || hour < 3;
      } else if (day === 5) {
        isOpen = hour >= 10 || hour < 3;
      } else if (day === 6) {
        isOpen = hour >= 10 || hour < 5;
      } else if (day === 0) {
        isOpen = hour >= 18 || hour < 5;
      }

      if (isOpen) {
        statusPill.classList.remove('closed');
        statusText.textContent = 'Abierto ahora · Delivery disponible';
      } else {
        statusPill.classList.add('closed');
        statusText.textContent = 'Cerrado en este momento';
      }
    } catch {
      statusText.textContent = 'Delivery todos los días';
    }
  }
});
