import { colores } from '@/constantes/colores';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function BotonServicio({ servicio }: { servicio: Servicio }) {
  return (
    <Link href={servicio.ruta} asChild>
      <Pressable style={styles.boton}>
        <View style={styles.iconoContenedor}>
          <Ionicons name={servicio.icono} size={28} color={colores.dorado} />
        </View>
        <Text style={styles.etiqueta}>{servicio.etiqueta}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  boton: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: colores.principalClaro,
    borderRadius: 16, // Más redondeado
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    // Sutil sombra en lugar de borde fuerte
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  iconoContenedor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colores.doradoSuave, // Fondo más sutil
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  etiqueta: {
    color: colores.texto,
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 4
  },
});
