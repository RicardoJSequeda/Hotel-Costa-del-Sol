import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';
import { configuracionSplash } from '@/constantes/splash';

import { IconoSol } from './IconoSol';

interface PantallaSplashProps {
  /** Si es true, navega automáticamente al terminar */
  navegacionAutomatica?: boolean;
  /** Duración antes de navegar (ms) */
  duracion?: number;
  /** Callback al completar (si no hay navegación automática) */
  onCompletar?: () => void;
}



interface PantallaSplashProps {
  navegacionAutomatica?: boolean;
  duracion?: number;
  onCompletar?: () => void;
}

export function PantallaSplash({
  navegacionAutomatica = true,
  duracion = configuracionSplash.duracion,
  onCompletar,
}: PantallaSplashProps) {
  const router = useRouter();

  useEffect(() => {
    if (!navegacionAutomatica) return;

    const timer = setTimeout(() => {
      onCompletar?.();
      // Redirigir a la nueva ruta de tabs en lugar de panel
      router.replace('/(tabs)');
    }, duracion);

    return () => clearTimeout(timer);
  }, [navegacionAutomatica, duracion, onCompletar, router]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.centro}>
        <IconoSol tamano={80} />
        <View style={styles.textoContenedor}>
          <Text style={styles.titulo}>Costa del Sol</Text>
          <Text style={styles.subtitulo}>RESORT DE LUJO & SPA</Text>
        </View>
      </View>

      <View style={styles.pie}>
        <View style={styles.barraCarga}>
          <View style={styles.progreso} />
        </View>
        <Text style={styles.ano}>EST. 1984</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.principal, // Fondo oscuro
    alignItems: 'center',
    justifyContent: 'center',
  },
  centro: {
    alignItems: 'center',
    marginBottom: 80,
  },
  textoContenedor: {
    marginTop: 24,
    alignItems: 'center',
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '400',
    letterSpacing: 1,
    fontFamily: 'System', // Usar fuente del sistema por ahora
    marginBottom: 8,
  },
  subtitulo: {
    color: colores.dorado,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  pie: {
    position: 'absolute',
    bottom: 48,
    alignItems: 'center',
    gap: 16,
  },
  barraCarga: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progreso: {
    width: '60%', // Simulado estático por ahora o animado si se prefiere
    height: '100%',
    backgroundColor: colores.dorado,
  },
  ano: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 10,
    letterSpacing: 1.5,
  },
});
