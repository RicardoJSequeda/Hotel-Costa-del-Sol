import { StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';
import type { Servicio } from '@/tipos';

interface TarjetaServicioProps {
  servicio: Servicio;
}

export function TarjetaServicio({ servicio }: TarjetaServicioProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{servicio.nombre}</Text>
      <Text style={styles.descripcion}>{servicio.descripcion}</Text>
      {(servicio.precio != null || servicio.duracion != null) && (
        <View style={styles.filaMeta}>
          {servicio.precio != null && (
            <Text style={styles.precio}>{servicio.precio}</Text>
          )}
          {servicio.duracion != null && (
            <Text style={styles.duracion}>{servicio.duracion}</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: colores.tarjetaFondo,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  nombre: {
    color: colores.dorado,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  descripcion: {
    color: colores.textoSecundario,
    fontSize: 14,
    lineHeight: 20,
  },
  filaMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  precio: {
    color: colores.dorado,
    fontSize: 14,
    fontWeight: '600',
  },
  duracion: {
    color: colores.textoSecundario,
    fontSize: 13,
  },
});
