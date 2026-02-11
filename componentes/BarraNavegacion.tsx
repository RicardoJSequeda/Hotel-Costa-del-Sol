import { Ionicons } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';

interface OpcionNav {
  ruta: string;
  icono: 'home' | 'leaf' | 'calendar' | 'person';
  etiqueta: string;
}

const opciones: OpcionNav[] = [
  { ruta: '/panel', icono: 'home', etiqueta: 'Inicio' },
  { ruta: '/servicios', icono: 'leaf', etiqueta: 'Servicios' },
  { ruta: '/reservas', icono: 'calendar', etiqueta: 'Mi estancia' },
  { ruta: '/perfil', icono: 'person', etiqueta: 'Perfil' },
];

export function BarraNavegacion() {
  const pathname = usePathname();

  return (
    <View style={styles.contenedor}>
      {opciones.map((opcion) => {
        const activo = pathname === opcion.ruta;
        return (
          <Link key={opcion.ruta} href={opcion.ruta} asChild>
            <Pressable style={styles.opcion}>
              <Ionicons
                name={opcion.icono}
                size={24}
                color={activo ? colores.dorado : colores.textoSecundario}
              />
              <Text
                style={[
                  styles.etiqueta,
                  activo && styles.etiquetaActiva,
                ]}>
                {opcion.etiqueta}
              </Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    backgroundColor: colores.principal,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: colores.borde,
  },
  opcion: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  etiqueta: {
    fontSize: 12,
    color: colores.textoSecundario,
  },
  etiquetaActiva: {
    color: colores.dorado,
    fontWeight: '600',
  },
});
