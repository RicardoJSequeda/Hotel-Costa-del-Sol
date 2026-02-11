import { Ionicons } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';

const OPCIONES_NAV = [
  { ruta: '/panel', icono: 'home' as const, etiqueta: 'Inicio' },
  { ruta: '/servicios', icono: 'compass' as const, etiqueta: 'Concierge' },
  { ruta: '/chat', icono: 'chatbubble' as const, etiqueta: 'Chat' },
];

export function BarraNavegacionPanel() {
  const pathname = usePathname();

  return (
    <View style={styles.contenedor}>
      {OPCIONES_NAV.map((opcion) => {
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
                style={[styles.etiqueta, activo && styles.etiquetaActiva]}>
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
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colores.principal,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: colores.borde,
  },
  opcion: {
    alignItems: 'center',
    gap: 4,
    minWidth: 56,
  },
  etiqueta: {
    fontSize: 11,
    color: colores.textoSecundario,
  },
  etiquetaActiva: {
    color: colores.dorado,
    fontWeight: '600',
  },
});
