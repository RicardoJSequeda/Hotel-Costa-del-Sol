import { StyleSheet, Text, View } from 'react-native';
import { colores } from '@/constantes/colores';
import { configuracionSplash } from '@/constantes/splash';

export function PieSplash({ texto = configuracionSplash.establecido }: { texto?: string }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { alignItems: 'center' },
  texto: { color: colores.dorado, fontSize: 11, letterSpacing: 3 },
});
