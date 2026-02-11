import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { colores } from '@/constantes/colores';

type MetodoPago = 'apple' | 'visa' | 'master';

export default function PantallaMetodoPago() {
    const router = useRouter();
    const [seleccionado, setSeleccionado] = useState<MetodoPago>('visa');

    return (
        <View style={styles.contenedor}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.botonHeader}>
                    <Ionicons name="arrow-back" size={24} color={colores.principal} />
                </Pressable>
                <Text style={styles.tituloHeader}>Check-out Express</Text>
                <View style={{ width: 44 }} />
            </View>

            <View style={styles.pasosContainer}>
                <View style={styles.pasoBarra} />
                <View style={[styles.pasoBarra, styles.pasoBarraActiva]} />
                <View style={styles.pasoBarra} />
            </View>

            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.cardResumen}>
                    <View style={styles.filaResumen}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.labelResumen}>Total a Pagar</Text>
                            <Text style={styles.montoTotal}>$845.00</Text>
                        </View>
                        <View style={styles.iconoFactura}>
                            <Ionicons name="receipt-outline" size={24} color={colores.principal} />
                        </View>
                    </View>
                    <View style={styles.divisor} />
                    <View style={styles.filaDetalle}>
                        <Text style={styles.textoHabitacion}>Habitación 402 - Suite Deluxe</Text>
                        <Pressable>
                            <Text style={styles.linkDetalles}>Ver detalles</Text>
                        </Pressable>
                    </View>
                </View>

                <Text style={styles.tituloSeccion}>Método de Pago</Text>

                <Pressable
                    style={[styles.opcionPago, seleccionado === 'apple' && styles.opcionSeleccionada]}
                    onPress={() => setSeleccionado('apple')}
                >
                    <View style={[styles.iconoPagoContainer, { backgroundColor: '#000' }]}>
                        <Ionicons name="logo-apple" size={20} color="white" />
                        <Text style={styles.textoApple}>Pay</Text>
                    </View>
                    <View style={styles.infoPago}>
                        <Text style={styles.nombreMetodo}>Apple Pay</Text>
                        <Text style={styles.subMetodo}>Rápido y seguro</Text>
                    </View>
                    <View style={[styles.radio, seleccionado === 'apple' && styles.radioActivo]}>
                        {seleccionado === 'apple' && <View style={styles.radioPunto} />}
                    </View>
                </Pressable>

                <Pressable
                    style={[styles.opcionPago, seleccionado === 'visa' && styles.opcionSeleccionada]}
                    onPress={() => setSeleccionado('visa')}
                >
                    <View style={[styles.iconoPagoContainer, { backgroundColor: '#1A1F71' }]}>
                        <Text style={styles.textoVisa}>VISA</Text>
                    </View>
                    <View style={styles.infoPago}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Text style={styles.nombreMetodo}>Visa Gold</Text>
                            <View style={styles.badgeDefault}>
                                <Text style={styles.textoDefault}>Predeterminada</Text>
                            </View>
                        </View>
                        <Text style={styles.subMetodo}>Termina en • • • • 4242</Text>
                    </View>
                    <View style={[styles.radio, seleccionado === 'visa' && styles.radioActivo]}>
                        {seleccionado === 'visa' && <View style={styles.radioPunto} />}
                    </View>
                </Pressable>

                <Pressable
                    style={[styles.opcionPago, seleccionado === 'master' && styles.opcionSeleccionada]}
                    onPress={() => setSeleccionado('master')}
                >
                    <View style={[styles.iconoPagoContainer, { backgroundColor: '#EB001B', flexDirection: 'row' }]}>
                        <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#EB001B', marginRight: -4 }} />
                        <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#F79E1B', opacity: 0.8 }} />
                    </View>
                    <View style={styles.infoPago}>
                        <Text style={styles.nombreMetodo}>Mastercard</Text>
                        <Text style={styles.subMetodo}>Termina en • • • • 8899</Text>
                    </View>
                    <View style={[styles.radio, seleccionado === 'master' && styles.radioActivo]}>
                        {seleccionado === 'master' && <View style={styles.radioPunto} />}
                    </View>
                </Pressable>

                <Pressable style={styles.botonAnadir}>
                    <View style={styles.iconoAnadir}>
                        <Ionicons name="add" size={24} color="#666" />
                    </View>
                    <Text style={styles.textoAnadir}>Añadir nuevo método</Text>
                </Pressable>

                <View style={{ height: 120 }} />
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.filaFooterLabel}>
                    <Text style={styles.labelImpuestos}>Impuestos incluidos</Text>
                    <Text style={styles.monedaFinal}>USD</Text>
                </View>
                <Boton
                    titulo="Pagar y Finalizar Check-out"
                    tipo="primario"
                    onPress={() => router.push('/checkout/exito')}
                    style={styles.botonFinal}
                    textoStyle={{ color: 'white' }}
                    iconoDerecha={<Ionicons name="arrow-forward" size={20} color="white" />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: 'white' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
        paddingHorizontal: 20,
    },
    botonHeader: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    tituloHeader: { color: colores.principal, fontSize: 18, fontWeight: '700' },
    pasosContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginTop: 20,
    },
    pasoBarra: { width: 32, height: 4, borderRadius: 2, backgroundColor: '#EEE' },
    pasoBarraActiva: { backgroundColor: colores.principal },
    scroll: { padding: 24 },
    cardResumen: {
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        padding: 20,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: '#EEE',
    },
    filaResumen: { flexDirection: 'row', alignItems: 'center' },
    labelResumen: { color: '#888', fontSize: 14, marginBottom: 4 },
    montoTotal: { fontSize: 32, fontWeight: '700', color: colores.principal },
    iconoFactura: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divisor: { height: 1, backgroundColor: '#EEE', marginVertical: 16 },
    filaDetalle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    textoHabitacion: { color: '#666', fontSize: 14 },
    linkDetalles: { color: colores.principal, fontSize: 14, fontWeight: '700', textDecorationLine: 'underline' },
    tituloSeccion: { fontSize: 20, fontWeight: '700', color: colores.principal, marginBottom: 24 },
    opcionPago: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#EEE',
        marginBottom: 16,
    },
    opcionSeleccionada: { borderColor: colores.principal, backgroundColor: 'rgba(0,0,0,0.02)', borderWidth: 2 },
    iconoPagoContainer: {
        width: 56,
        height: 36,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    textoApple: { color: 'white', fontSize: 16, fontWeight: '700', marginLeft: 2 },
    textoVisa: { color: 'white', fontSize: 12, fontWeight: '900', fontStyle: 'italic' },
    infoPago: { flex: 1 },
    nombreMetodo: { fontSize: 16, fontWeight: '700', color: colores.principal, marginBottom: 2 },
    subMetodo: { fontSize: 13, color: '#888' },
    badgeDefault: { backgroundColor: '#EEE', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
    textoDefault: { fontSize: 10, fontWeight: '600', color: '#666' },
    radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: '#DDD', alignItems: 'center', justifyContent: 'center' },
    radioActivo: { borderColor: colores.principal },
    radioPunto: { width: 12, height: 12, borderRadius: 6, backgroundColor: colores.principal },
    botonAnadir: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#CCC',
        gap: 16,
    },
    iconoAnadir: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#F9F9F9', alignItems: 'center', justifyContent: 'center' },
    textoAnadir: { fontSize: 16, fontWeight: '600', color: colores.principal },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        paddingBottom: Platform.OS === 'ios' ? 40 : 24,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#EEE',
    },
    filaFooterLabel: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
    labelImpuestos: { color: '#888', fontSize: 12 },
    monedaFinal: { color: colores.principal, fontSize: 12, fontWeight: '700' },
    botonFinal: { backgroundColor: colores.principal, height: 64, borderRadius: 16 },
});
