import { StyleSheet, Text, View } from 'react-native';
import { colores } from '@/constantes/colores';
import { BotonServicio, type ServicioHotel } from './BotonServicio';

export function GridServicios({ titulo = 'Servicios del Hotel', servicios }: { titulo?: string; servicios: ServicioHotel[] }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.grid}>
        {servicios.map((s) => <BotonServicio key={s.id} servicio={s} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { marginBottom: 24 },
  titulo: { color: colores.texto, fontSize: 18, fontWeight: '600', marginBottom: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between' },
});
