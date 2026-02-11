import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';
import { HabitacionVenta } from '@/constantes/habitaciones';

export function TarjetaHabitacion({ habitacion }: { habitacion: HabitacionVenta }) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/habitacion/${habitacion.id}`)}
    >
      <Image source={{ uri: habitacion.imagen }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTipo}>{habitacion.tipo}</Text>
          <Text style={styles.cardTitle}>{habitacion.nombre}</Text>
          <View style={styles.cardDetalles}>
            <Text style={styles.cardDetalleTexto}>{habitacion.capacidad} Pers • {habitacion.camas} Cama(s) • {habitacion.banos} Baño(s)</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end', minWidth: 80 }}>
          <Text style={styles.cardPrecio}>${habitacion.precio}</Text>
          <Text style={styles.cardNoche}>/ noche</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', marginBottom: 16, elevation: 2 },
  cardImage: { height: 160, width: '100%' },
  cardContent: { padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardTipo: { color: colores.doradoOscuro, fontSize: 10, fontWeight: '700', textTransform: 'uppercase', marginBottom: 2 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: colores.principal, marginBottom: 4 },
  cardDetalles: { flexDirection: 'row', alignItems: 'center' },
  cardDetalleTexto: { fontSize: 12, color: '#888' },
  cardPrecio: { fontSize: 18, fontWeight: '700', color: colores.principal },
  cardNoche: { fontSize: 10, color: '#888' },
});
