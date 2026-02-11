import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { colores } from '@/constantes/colores';
import { useBooking } from '@/context/BookingContext';

export default function PantallaPagoReserva() {
    const router = useRouter();
    const { state, setHuesped, generarCodigo } = useBooking();
    const { habitacion, fechaInicio, fechaFin, adultos, huesped } = state;

    const noches = fechaFin - fechaInicio;
    const subtotal = (habitacion?.precio || 0) * noches;
    const total = subtotal + 30; // 30 de impuestos fijos para el demo

    const confirmarPago = () => {
        // Generar código único antes de navegar
        generarCodigo();
        // Navegar a la pantalla de éxito premium
        router.push('/reserva/exito');
    };

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{
                title: 'Confirmación',
                headerStyle: { backgroundColor: colores.principal },
                headerTintColor: 'white',
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerRight: () => (
                    <Text style={styles.pasoHeader}>PASO 3 DE 4</Text>
                )
            }} />

            <ScrollView contentContainerStyle={styles.scroll}>

                {/* Resumen Final */}
                <View style={styles.headerSection}>
                    <Text style={styles.labelHuesped}>CONFIRMACIÓN PARA {huesped.nombre?.toUpperCase()}</Text>
                    <Text style={styles.tituloPago}>Método de Pago</Text>
                </View>

                {/* Resumen Habitación */}
                <View style={styles.cardResumen}>
                    <Image source={{ uri: habitacion?.imagen }} style={styles.imgResumen} />
                    <View style={styles.infoResumen}>
                        <Text style={styles.tipoResumen}>{habitacion?.tipo || 'ROYAL SUITE'}</Text>
                        <Text style={styles.tituloResumen}>{habitacion?.nombre || 'Vista al Océano'}</Text>
                        <Text style={styles.fechasResumen}>{fechaInicio} Nov - {fechaFin} Nov</Text>
                        <Text style={styles.detallesResumen}>{adultos} Adultos, {noches} Noches</Text>
                    </View>
                    <View style={styles.precioContainer}>
                        <Text style={styles.precioTotal}>${total.toLocaleString()}</Text>
                        <Text style={styles.impuestosLabel}>Total Final</Text>
                    </View>
                </View>

                <View style={styles.headerMetodo}>
                    <Text style={styles.tituloSeccion}>MÉTODO DE PAGO</Text>
                    <Text style={styles.linkAgregar}>Agregar Nueva</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carruselTarjetas}>
                    <View style={[styles.tarjetaCredito, styles.tarjetaActiva]}>
                        <View style={styles.rowTarjeta}>
                            <View style={styles.chip} />
                            <Ionicons name="checkmark-circle" size={20} color="#2563EB" />
                        </View>
                        <Text style={styles.numeroTarjeta}>**** **** **** 4242</Text>
                        <View style={styles.rowTarjetaBottom}>
                            <Text style={styles.nombreTarjeta}>{huesped.nombre}</Text>
                            <Text style={styles.expTarjeta}>09/25</Text>
                        </View>
                    </View>

                    <View style={styles.tarjetaCreditoInactiva}>
                        <View style={styles.chipInactivo} />
                        <Text style={styles.numeroTarjetaInactiva}>**** **** **** 8899</Text>
                        <Text style={styles.nombreTarjetaInactiva}>Empresa S.A.</Text>
                    </View>
                </ScrollView>

                <View style={styles.seguridadContainer}>
                    <Ionicons name="lock-closed" size={14} color={colores.exito} />
                    <Text style={styles.textoSeguridad}>Pagos procesados de forma segura con cifrado 256-bit.</Text>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <Boton
                    titulo="Confirmar Pago Seguro"
                    tipo="primario"
                    onPress={confirmarPago}
                    iconoDerecha={<Ionicons name="lock-closed" size={20} color={colores.negro} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: colores.principal }, // #121212
    scroll: { padding: 20, paddingBottom: 120 },

    headerSection: { marginBottom: 24 },
    labelHuesped: { color: colores.dorado, fontSize: 10, fontWeight: '700', letterSpacing: 1.5, marginBottom: 8 },
    tituloPago: { color: 'white', fontSize: 24, fontWeight: '700' },

    pasoHeader: { color: '#666', fontSize: 10, fontWeight: '700', backgroundColor: '#222', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },

    cardResumen: {
        backgroundColor: '#1E1E1E', borderRadius: 16, padding: 16, marginBottom: 32,
        borderWidth: 1, borderColor: '#333'
    },
    imgResumen: { width: 80, height: 80, borderRadius: 12, position: 'absolute', top: 16, left: 16 },
    infoResumen: { marginLeft: 96, minHeight: 80, justifyContent: 'center' },
    tipoResumen: { color: '#4A90E2', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
    tituloResumen: { color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 4 },
    fechasResumen: { color: '#888', fontSize: 12 },
    detallesResumen: { color: '#666', fontSize: 12 },

    precioContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        marginTop: 16, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#333'
    },
    precioTotal: { color: 'white', fontSize: 20, fontWeight: '700' },
    impuestosLabel: { color: '#666', fontSize: 12 },

    tituloSeccion: { color: 'white', fontSize: 14, fontWeight: '700', letterSpacing: 1, marginBottom: 16 },

    formContainer: { gap: 16, marginBottom: 32 },
    inputGroup: { gap: 8 },
    labelInput: { color: '#888', fontSize: 12 },
    inputWrapper: {
        backgroundColor: '#1E1E1E', borderRadius: 12, height: 50,
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16,
        borderWidth: 1, borderColor: '#333'
    },
    input: { flex: 1, color: 'white', fontSize: 14 },

    headerMetodo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    linkAgregar: { color: '#4A90E2', fontSize: 12, fontWeight: '600' },

    carruselTarjetas: { overflow: 'visible', marginBottom: 24 },

    tarjetaCredito: {
        width: 280, height: 160, borderRadius: 16, padding: 20, justifyContent: 'space-between',
        marginRight: 16, borderWidth: 1
    },
    tarjetaActiva: { backgroundColor: 'rgba(37, 99, 235, 0.1)', borderColor: '#2563EB' },
    tarjetaCreditoInactiva: { width: 280, height: 160, borderRadius: 16, padding: 20, backgroundColor: '#1E1E1E', borderColor: '#333', borderWidth: 1, justifyContent: 'space-between' },

    rowTarjeta: { flexDirection: 'row', justifyContent: 'space-between' },
    chip: { width: 32, height: 24, backgroundColor: '#D97706', borderRadius: 4 },
    chipInactivo: { width: 32, height: 24, backgroundColor: '#444', borderRadius: 4 },

    numeroTarjeta: { color: 'white', fontSize: 18, letterSpacing: 2 },
    numeroTarjetaInactiva: { color: '#666', fontSize: 18, letterSpacing: 2 },

    rowTarjetaBottom: { flexDirection: 'row', justifyContent: 'space-between' },
    nombreTarjeta: { color: 'white', fontSize: 12, textTransform: 'uppercase' },
    expTarjeta: { color: 'white', fontSize: 12 },
    nombreTarjetaInactiva: { color: '#666', fontSize: 12 },

    seguridadContainer: { flexDirection: 'row', alignItems: 'center', gap: 8, justifyContent: 'center' },
    textoSeguridad: { color: '#666', fontSize: 10 },

    footer: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        backgroundColor: '#1A1814', padding: 20, paddingBottom: 30,
    },
    botonConfirmar: {
        backgroundColor: colores.dorado, height: 56, borderRadius: 16,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10
    },
    textoConfirmar: { color: colores.negro, fontSize: 16, fontWeight: '700' }

});
