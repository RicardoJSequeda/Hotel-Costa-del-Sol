/**
 * Paleta de colores - Hotel Costa del Sol
 * Diseño de Lujo (Dark/Gold Theme)
 * Basado en referencias visuales: Fondos oscuros profundos y dorados vibrantes
 */

export const colores = {
  /** Fondos */
  principal: '#0F172A', // Navy profundo
  principalClaro: '#1E293B',
  fondoProfundo: '#0B0F1A', // Fondo extra oscuro de la imagen 5
  tarjetaProfunda: '#151C2C', // Fondo de las tarjetas de servicios
  tarjetaFondo: '#1E1E1E',
  overlayNegro: 'rgba(0, 0, 0, 0.7)',

  /** Acentos (Dorado) */
  dorado: '#FCD34D',       // Dorado brillante (Gold 400)
  doradoBrillante: '#FBBF24', // Dorado intenso (Gold 500)
  doradoPuro: '#FBBF24',   // Alias para compatibilidad
  doradoOscuro: '#B49B57', // Dorado metálico
  doradoSuave: 'rgba(252, 211, 77, 0.15)',
  doradoMuySuave: 'rgba(252, 211, 77, 0.05)',

  /** Texto */
  texto: '#FFFFFF',
  textoSecundario: '#A1A1AA', // Gray 400
  textoTerciario: '#71717A',   // Gray 500

  /** Borde */
  borde: 'rgba(255, 255, 255, 0.1)',
  bordeDorado: 'rgba(252, 211, 77, 0.3)',

  /** Colores funcionales */
  blanco: '#FFFFFF',
  negro: '#000000',
  error: '#EF4444',
  exito: '#10B981',
  info: '#3B82F6',
} as const;

export const tema = {
  colores,
  espaciado: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  bordes: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
  },
  tipografia: {
    h1: { fontSize: 32, fontWeight: '700' as const },
    h2: { fontSize: 24, fontWeight: '700' as const },
    h3: { fontSize: 20, fontWeight: '600' as const },
    cuerpo: { fontSize: 16, fontWeight: '400' as const },
    cuerpoNegrita: { fontSize: 16, fontWeight: '600' as const },
    pequeno: { fontSize: 14, fontWeight: '400' as const },
    pieDepagina: { fontSize: 12, fontWeight: '500' as const, letterSpacing: 0.5 },
  },
  sombras: {
    leve: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    suave: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    media: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 10,
    },
    dorada: {
      shadowColor: colores.dorado,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 8,
    },
  },
};
