/**
 * Configuración del splash - Hotel Costa del Sol
 * Centraliza textos y duración para facilitar cambios
 */

export const configuracionSplash = {
  /** Tiempo en ms antes de navegar automáticamente */
  duracion: 2500,
  /** Nombre principal del hotel */
  nombreHotel: 'Costa del Sol',
  /** Tagline / eslogan */
  tagline: 'RESORT DE LUJO & SPA',
  /** Año de fundación para el pie */
  establecido: 'EST. 1984',
  /** Ruta a la que navegar después del splash */
  rutaSiguiente: '/(tabs)' as const,
} as const;
