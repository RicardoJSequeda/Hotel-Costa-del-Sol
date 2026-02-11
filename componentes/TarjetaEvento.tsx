import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { BotonPrimario } from '@/componentes/BotonPrimario';
import { colores } from '@/constantes/colores';

interface TarjetaEventoProps {
  titulo: string;
  horario: string;
}

export function TarjetaEvento({ titulo, horario }: TarjetaEventoProps) {
  return (
    <View style={styles.tarjeta}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.horario}>{horario}</Text>
      </View>
      <Link href="/servicios" asChild>
        <BotonPrimario
          titulo="Detalles"
          style={styles.boton}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colores.principalClaro,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  contenido: { flex: 1 },
  titulo: {
    color: colores.dorado,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  horario: {
    color: colores.texto,
    fontSize: 14,
  },
  boton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 16,
  },
});
