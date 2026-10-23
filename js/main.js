/**
 * EL HONESTO PARRA (@elhonestoparra) - Interacciones UI/UX
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
  // Horario El Honesto Parra: Lunes a Domingo de 17:30 a 23:30 hrs
  const statusPill = document.getElementById('open-status');
  const statusText = document.getElementById('open-status-text');

  if (statusPill && statusText) {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Santiago',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });

      const parts = formatter.formatToParts(now);
      const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '18', 10);
      const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
      const totalMinutes = hour * 60 + minute;

      // 17:30 (1050 min) a 23:30 (1410 min)
      const isOpen = totalMinutes >= 17 * 60 + 30 && totalMinutes <= 23 * 60 + 30;

      if (isOpen) {
        statusPill.classList.remove('closed');
        statusText.textContent = 'Abierto ahora · 17:30 a 23:30 hrs';
      } else {
        statusPill.classList.add('closed');
        statusText.textContent = 'Abre hoy de 17:30 a 23:30 hrs';
      }
    } catch {
      statusText.textContent = 'Atención de 17:30 a 23:30 hrs';
    }
  }
});
