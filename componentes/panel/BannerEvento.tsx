import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';

interface BannerEventoProps {
  titulo: string;
  horario: string;
  rutaDetalles?: string;
}

export function BannerEvento({
  titulo,
  horario,
  rutaDetalles = '/servicios',
}: BannerEventoProps) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.horario}>{horario}</Text>
      </View>
      <Link href={rutaDetalles} asChild>
        <Pressable style={styles.boton}>
          <Text style={styles.botonTexto}>Detalles</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colores.tarjetaFondo,
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
    backgroundColor: colores.dorado,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  botonTexto: {
    color: colores.principal,
    fontSize: 14,
    fontWeight: '600',
  },
});
