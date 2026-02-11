import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { colores } from '@/constantes/colores';

interface BarraProgresoSplashProps {
  /** Progreso de 0 a 1 */
  progreso?: number;
  /** Animar automáticamente */
  animar?: boolean;
  /** Duración de la animación en ms */
  duracion?: number;
}

export function BarraProgresoSplash({
  progreso = 0.7,
  animar = true,
  duracion = 1500,
}: BarraProgresoSplashProps) {
  const animacion = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!animar) {
      animacion.setValue(progreso);
      return;
    }
    const anim = Animated.timing(animacion, {
      toValue: progreso,
      duration: duracion,
      useNativeDriver: false,
    });
    anim.start();
    return () => anim.stop();
  }, [animar, duracion, progreso]);

  const anchoFondo = 140;
  const ancho = animacion.interpolate({
    inputRange: [0, 1],
    outputRange: [0, anchoFondo],
  });

  return (
    <View style={styles.contenedor}>
      <View style={[styles.fondo, { width: anchoFondo }]}>
        <Animated.View style={[styles.progreso, { width: ancho }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  fondo: {
    height: 3,
    backgroundColor: colores.principalClaro,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progreso: {
    height: '100%',
    backgroundColor: colores.dorado,
  },
});
