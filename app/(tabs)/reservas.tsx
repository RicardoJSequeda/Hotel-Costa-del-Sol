import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function MyReservationsScreen() {
    const router = useRouter();
    const [seccion, setSeccion] = useState<'activas' | 'historial'>('activas');

    const reservas = [
        {
            id: '1',
            hotel: 'Costa del sol Resort',
            ubicacion: 'Marbella, España',
            tipo: 'Suite Ejecutiva - Vista Mar',
            noches: 3,
            checkIn: '12 Oct, 2023',
            checkOut: '15 Oct, 2023',
            confirmacion: '#CS-8842-MB',
            estado: 'CONFIRMADA',
            imagen: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200'
        },
        {
            id: '2',
            hotel: 'Costa del sol City',
            ubicacion: 'Málaga, España',
            tipo: 'Habitación Deluxe',
            noches: 1,
            checkIn: '24 Nov, 2023',
            checkOut: '25 Nov, 2023',
            confirmacion: '#CS-9102-ML',
            estado: 'PENDIENTE',
            imagen: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200'
        }
    ];

    return (
        <View style={styles.contenedor}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color={colores.principal} />
                </Pressable>
                <Text style={styles.tituloHeader}>Mis Reservas</Text>
                <Ionicons name="options-outline" size={24} color={colores.principal} />
            </View>

            {/* Segmented Control */}
            <View style={styles.tabContainer}>
                <Pressable
                    style={[styles.tab, seccion === 'activas' && styles.tabActivo]}
                    onPress={() => setSeccion('activas')}
                >
                    <Text style={[styles.textoTab, seccion === 'activas' && styles.textoTabActivo]}>Activas</Text>
                </Pressable>
                <Pressable
                    style={[styles.tab, seccion === 'historial' && styles.tabActivo]}
                    onPress={() => setSeccion('historial')}
                >
                    <Text style={[styles.textoTab, seccion === 'historial' && styles.textoTabActivo]}>Historial</Text>
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
                {reservas.map((reserva) => (
                    <View key={reserva.id} style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: reserva.imagen }} style={styles.cardImage} />
                            <View style={styles.overlay} />

                            <View style={styles.statusBadge}>
                                <View style={[styles.statusDot, { backgroundColor: reserva.estado === 'CONFIRMADA' ? '#10B981' : '#F59E0B' }]} />
                                <Text style={styles.statusText}>{reserva.estado}</Text>
                            </View>

                            <View style={styles.locationContainer}>
                                <Ionicons name="location-sharp" size={14} color="white" />
                                <Text style={styles.locationText}>{reserva.ubicacion}</Text>
                            </View>
                        </View>

                        <View style={styles.cardContent}>
                            <View style={styles.titleRow}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.hotelName}>{reserva.hotel}</Text>
                                    <Text style={styles.roomType}>{reserva.tipo}</Text>
                                </View>
                                <View style={styles.nightsBadge}>
                                    <Text style={styles.nightsLabel}>NOCHES</Text>
                                    <Text style={styles.nightsValue}>{reserva.noches}</Text>
                                </View>
                            </View>

                            <View style={styles.datesRow}>
                                <View style={styles.dateItem}>
                                    <Text style={styles.dateLabel}>CHECK-IN</Text>
                                    <View style={styles.dateValueContainer}>
                                        <Ionicons name="calendar-outline" size={16} color={colores.dorado} />
                                        <Text style={styles.dateText}>{reserva.checkIn}</Text>
                                    </View>
                                </View>
                                <View style={styles.dateItem}>
                                    <Text style={styles.dateLabel}>CHECK-OUT</Text>
                                    <View style={styles.dateValueContainer}>
                                        <Ionicons name="calendar-outline" size={16} color={colores.dorado} />
                                        <Text style={styles.dateText}>{reserva.checkOut}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.confirmationRow}>
                                <Text style={styles.confLabel}>Confirmación</Text>
                                <Text style={styles.confValue}>{reserva.confirmacion}</Text>
                            </View>

                            <View style={styles.actionsRow}>
                                <Pressable style={styles.btnSecundario}>
                                    <Text style={styles.textoBtnSec}>Gestionar</Text>
                                </Pressable>
                                <Pressable style={styles.btnPrimario}>
                                    <Text style={styles.textoBtnPri}>Ver Detalles</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                ))}

                {/* Footer Card */}
                <Pressable style={styles.footerCard}>
                    <View style={styles.footerIcon}>
                        <Ionicons name="sparkles" size={24} color={colores.dorado} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.footerTitle}>Servicios Adicionales</Text>
                        <Text style={styles.footerSub}>Personalice su estancia con spa y cenas.</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={20} color={colores.dorado} />
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#F8F9FA' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20
    },
    backButton: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
    tituloHeader: { fontSize: 20, fontWeight: '700', color: colores.principal },

    tabContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 25,
        padding: 5,
        ...tema.sombras.leve
    },
    tab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 20 },
    tabActivo: { backgroundColor: colores.dorado },
    textoTab: { fontSize: 14, fontWeight: '600', color: '#888' },
    textoTabActivo: { color: 'white' },

    card: {
        backgroundColor: 'white',
        borderRadius: 24,
        overflow: 'hidden',
        marginBottom: 24,
        ...tema.sombras.media
    },
    imageContainer: { height: 200, position: 'relative' },
    cardImage: { width: '100%', height: '100%' },
    overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
    statusBadge: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 20,
        gap: 6
    },
    statusDot: { width: 8, height: 8, borderRadius: 4 },
    statusText: { fontSize: 10, fontWeight: '800', color: '#1F2937' },
    locationContainer: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    locationText: { color: 'white', fontSize: 12, fontWeight: '600' },

    cardContent: { padding: 20 },
    titleRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    hotelName: { fontSize: 18, fontWeight: '700', color: colores.principal },
    roomType: { fontSize: 14, color: colores.dorado, marginTop: 2 },
    nightsBadge: { backgroundColor: '#F3F4F6', padding: 10, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
    nightsLabel: { fontSize: 8, fontWeight: '700', color: '#9CA3AF' },
    nightsValue: { fontSize: 18, fontWeight: '700', color: '#1F2937' },

    datesRow: { flexDirection: 'row', gap: 20, marginBottom: 20 },
    dateItem: { flex: 1 },
    dateLabel: { fontSize: 10, fontWeight: '700', color: '#9CA3AF', marginBottom: 8 },
    dateValueContainer: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    dateText: { fontSize: 14, fontWeight: '600', color: '#1F2937' },

    confirmationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F9FAFB',
        padding: 12,
        borderRadius: 12,
        marginBottom: 20
    },
    confLabel: { fontSize: 12, color: '#9CA3AF' },
    confValue: { fontSize: 12, fontWeight: '700', color: '#1F2937' },

    actionsRow: { flexDirection: 'row', gap: 12 },
    btnSecundario: {
        flex: 1,
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoBtnSec: { fontSize: 14, fontWeight: '600', color: '#1F2937' },
    btnPrimario: {
        flex: 1,
        height: 50,
        borderRadius: 12,
        backgroundColor: colores.dorado,
        alignItems: 'center',
        justifyContent: 'center',
        ...tema.sombras.media
    },
    textoBtnPri: { fontSize: 14, fontWeight: '600', color: 'white' },

    footerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FCF9EE',
        padding: 20,
        borderRadius: 24,
        gap: 16,
        borderWidth: 1,
        borderColor: 'rgba(212, 175, 55, 0.2)'
    },
    footerIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTitle: { fontSize: 16, fontWeight: '700', color: '#1F2937' },
    footerSub: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
});
