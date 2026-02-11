import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BotonPrimario } from '@/componentes/BotonPrimario';
import { BotonSecundario } from '@/componentes/BotonSecundario';
import { colores } from '@/constantes/colores';

export default function PantallaEstadoCuenta() {
  return (
    <>
      <Stack.Screen options={{ title: 'Estado de cuenta', headerStyle: { backgroundColor: colores.principal }, headerTintColor: colores.dorado }} />
      <ScrollView style={styles.contenedor} contentContainerStyle={styles.contenido}>
        <View style={styles.info}>
          <View><Text style={styles.etiqueta}>HUESPED</Text><Text style={styles.valor}>Sr. Alejandro Garcia</Text></View>
          <View><Text style={styles.etiqueta}>HABITACION</Text><Text style={styles.valorDorado}>304</Text></View>
        </View>
        <View style={styles.tarjetaSaldo}>
          <Text style={styles.saldoTitulo}>SALDO TOTAL PENDIENTE</Text>
          <Text style={styles.saldoMonto}>$1.450,00</Text>
          <Text style={styles.saldoVencimiento}>Vencimiento al check-out</Text>
        </View>
        <View style={styles.botones}>
          <BotonSecundario titulo="Solicitar factura" style={styles.boton} />
          <BotonPrimario titulo="Pagar ahora" style={styles.boton} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.principal },
  contenido: { padding: 20 },
  info: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  etiqueta: { color: colores.textoSecundario, fontSize: 11, marginBottom: 4 },
  valor: { color: colores.texto, fontSize: 18, fontWeight: '700' },
  valorDorado: { color: colores.dorado, fontSize: 18, fontWeight: '700' },
  tarjetaSaldo: { backgroundColor: colores.dorado, borderRadius: 16, padding: 24, marginBottom: 24 },
  saldoTitulo: { color: colores.blanco, fontSize: 12, marginBottom: 8 },
  saldoMonto: { color: colores.blanco, fontSize: 36, fontWeight: '700' },
  saldoVencimiento: { color: colores.principal, fontSize: 12 },
  botones: { flexDirection: 'row', gap: 12 },
  boton: { flex: 1 },
});
