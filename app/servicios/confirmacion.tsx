import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function PantallaConfirmacionReserva() {
    const router = useRouter();
    const params = useLocalSearchParams();

    // Parametros dinamicos (con defaults para preview)
    const {
        servicio = 'Servicio del Hotel',
        icono = 'calendar',
        fecha = 'Fecha no seleccionada',
        ubicacion = 'Ubicación del Resort',
        precio = '$0.00'
    } = params;

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

                {/* Check Animation / Icon */}
                <View style={styles.successWrapper}>
                    <View style={styles.successOuterCircle}>
                        <View style={styles.successInnerCircle}>
                            <Ionicons name="checkmark" size={60} color={colores.dorado} />
                        </View>
                    </View>
                    <View style={styles.smallDot1} />
                    <View style={styles.smallDot2} />
                </View>

                {/* Confirmacion Text */}
                <Text style={styles.mainTitle}>¡Reserva Confirmada!</Text>
                <Text style={styles.subTitle}>Su solicitud ha sido procesada con éxito.</Text>

                {/* Card Detalles */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardLabel}>DETALLES DEL SERVICIO</Text>
                        <View style={styles.badgeConfirmado}>
                            <Text style={styles.confirmadoText}>CONFIRMADO</Text>
                        </View>
                    </View>

                    <View style={styles.infoList}>
                        <View style={styles.infoRow}>
                            <View style={styles.iconBox}>
                                <Ionicons name={icono as any} size={24} color="#2563EB" />
                            </View>
                            <View>
                                <Text style={styles.rowLabel}>SERVICIO</Text>
                                <Text style={styles.rowValue}>{servicio}</Text>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <View style={styles.iconBox}>
                                <Ionicons name="calendar-outline" size={24} color="#2563EB" />
                            </View>
                            <View>
                                <Text style={styles.rowLabel}>FECHA Y HORA</Text>
                                <Text style={styles.rowValue}>{fecha}</Text>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <View style={styles.iconBox}>
                                <Ionicons name="location-outline" size={24} color="#2563EB" />
                            </View>
                            <View>
                                <Text style={styles.rowLabel}>UBICACIÓN</Text>
                                <Text style={styles.rowValue}>{ubicacion}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Precio Total</Text>
                        <Text style={styles.totalValue}>{precio}</Text>
                    </View>
                </View>

                {/* Nota Info */}
                <View style={styles.notaBox}>
                    <View style={styles.notaIconOuter}>
                        <Ionicons name="information" size={20} color="#B45309" />
                    </View>
                    <Text style={styles.notaText}>
                        Este cargo se ha realizado automáticamente a su <Text style={{ fontWeight: '700' }}>cuenta de habitación</Text>. Recibirá el desglose final al momento de su check-out.
                    </Text>
                </View>

                {/* Botones */}
                <View style={styles.btnGroup}>
                    <Pressable onPress={() => router.push('/(tabs)')} style={styles.btnAceptar}>
                        <Text style={styles.btnAceptarText}>Aceptar</Text>
                    </Pressable>

                    <Pressable style={styles.btnCalendario}>
                        <Ionicons name="calendar-outline" size={20} color="#1E293B" />
                        <Text style={styles.btnCalText}>Añadir al Calendario</Text>
                    </Pressable>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#F8FAFC' },
    scroll: { padding: 30, alignItems: 'center' },

    successWrapper: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        position: 'relative'
    },
    successOuterCircle: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 2,
        borderColor: colores.dorado,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },
    successInnerCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(212, 175, 55, 0.05)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallDot1: { position: 'absolute', top: 30, right: 30, width: 12, height: 12, borderRadius: 6, backgroundColor: colores.dorado, opacity: 0.4 },
    smallDot2: { position: 'absolute', bottom: 30, left: 30, width: 8, height: 8, borderRadius: 4, backgroundColor: colores.dorado, opacity: 0.2 },

    mainTitle: { color: '#0F172A', fontSize: 28, fontWeight: '800', marginTop: 20, textAlign: 'center' },
    subTitle: { color: '#64748B', fontSize: 16, marginTop: 10, textAlign: 'center', marginBottom: 40 },

    card: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 32,
        padding: 24,
        ...tema.sombras.media,
        borderWidth: 1,
        borderColor: '#F1F5F9'
    },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
    cardLabel: { color: '#B45309', fontSize: 12, fontWeight: '800', letterSpacing: 1 },
    badgeConfirmado: { backgroundColor: '#DBEAFE', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
    confirmadoText: { color: '#2563EB', fontSize: 10, fontWeight: '900' },

    infoList: { gap: 24 },
    infoRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
    iconBox: { width: 54, height: 54, borderRadius: 18, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F1F5F9' },
    rowLabel: { color: '#94A3B8', fontSize: 10, fontWeight: '700', letterSpacing: 0.5, marginBottom: 4 },
    rowValue: { color: '#1E293B', fontSize: 18, fontWeight: '700' },

    divider: { height: 1, backgroundColor: '#F1F5F9', marginVertical: 24, borderStyle: 'dotted', borderWidth: 1, borderColor: '#F1F5F9' },

    totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    totalLabel: { color: '#64748B', fontSize: 18, fontWeight: '600' },
    totalValue: { color: '#000', fontSize: 28, fontWeight: '800' },

    notaBox: {
        flexDirection: 'row',
        backgroundColor: '#F8FAFC',
        padding: 24,
        borderRadius: 24,
        marginTop: 30,
        gap: 16,
        alignItems: 'center'
    },
    notaIconOuter: { width: 36, height: 36, borderRadius: 10, backgroundColor: '#FEF3C7', alignItems: 'center', justifyContent: 'center' },
    notaText: { flex: 1, color: '#64748B', fontSize: 13, lineHeight: 20 },

    btnGroup: { width: '100%', marginTop: 40, gap: 16 },
    btnAceptar: {
        backgroundColor: '#1D4ED8',
        height: 64,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        ...tema.sombras.media
    },
    btnAceptarText: { color: 'white', fontSize: 18, fontWeight: '800' },
    btnCalendario: {
        backgroundColor: 'white',
        height: 64,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0'
    },
    btnCalText: { color: '#1E293B', fontSize: 18, fontWeight: '700' }
});
