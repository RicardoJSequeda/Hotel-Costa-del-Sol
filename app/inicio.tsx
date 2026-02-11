import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { BotonPrimario } from '@/componentes/BotonPrimario';
import { colores } from '@/constantes/colores';

export default function InicioScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Hotel Costa del Sol',
          headerStyle: { backgroundColor: colores.principal },
          headerTintColor: colores.dorado,
          headerTitleStyle: { fontWeight: '600' },
        }}
      />
      <View style={styles.contenedor}>
        <Text style={styles.bienvenida}>Bienvenido</Text>
        <Text style={styles.titulo}>Hotel Costa del Sol</Text>
        <Text style={styles.subtitulo}>
          Experiencia de lujo frente al mar
        </Text>
        <View style={styles.botones}>
          <Link href="/ingreso" asChild>
            <BotonPrimario titulo="Ingresar" />
          </Link>
          <Link href="/servicios" asChild>
            <BotonPrimario titulo="Ver servicios" />
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.principal,
    padding: 24,
    justifyContent: 'center',
  },
  bienvenida: {
    color: colores.dorado,
    fontSize: 14,
    letterSpacing: 4,
    marginBottom: 8,
  },
  titulo: {
    color: colores.texto,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitulo: {
    color: colores.textoSecundario,
    fontSize: 18,
    marginBottom: 40,
  },
  botones: {
    gap: 16,
  },
});
