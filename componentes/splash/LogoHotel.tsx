import { StyleSheet, Text, View } from 'react-native';
import { colores } from '@/constantes/colores';
import { configuracionSplash } from '@/constantes/splash';

interface LogoHotelProps {
  nombre?: string;
  tagline?: string;
}

export function LogoHotel({
  nombre = configuracionSplash.nombreHotel,
  tagline = configuracionSplash.tagline,
}: LogoHotelProps) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.tagline}>{tagline}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { alignItems: 'center' },
  nombre: { color: colores.blanco, fontSize: 32, fontWeight: '600', letterSpacing: 2 },
  tagline: { color: colores.dorado, fontSize: 12, fontWeight: '500', letterSpacing: 4, marginTop: 8 },
});
