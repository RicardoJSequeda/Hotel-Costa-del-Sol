import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native';

import { colores } from '@/constantes/colores';

export default function PantallaCenaRomantica() {
    const router = useRouter();
    const [ubicacion, setUbicacion] = useState('playa');
    const [maridaje, setMaridaje] = useState(true);

    const ubicaciones = [
        { id: 'playa', titulo: 'PLAYA', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300' },
        { id: 'terraza', titulo: 'TERRAZA', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=300' },
        { id: 'muelle', titulo: 'MUELLE', img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=300' },
    ];

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200' }}
                style={StyleSheet.absoluteFill}
            >
                <View style={styles.overlayOscuro} />

                <View style={styles.header}>
                    <Pressable onPress={() => router.back()} style={styles.iconBtn}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </Pressable>
                    <Text style={styles.headerLabel}>EXPERIENCIAS LUXURY</Text>
                    <Pressable style={styles.iconBtn}>
                        <Ionicons name="share-social-outline" size={24} color="white" />
                    </Pressable>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                    <View style={styles.heroContent}>
                        <Text style={styles.titulo}>Cena Romántica al Atardecer</Text>
                        <View style={styles.ubicacionRow}>
                            <Ionicons name="location" size={16} color={colores.dorado} />
                            <Text style={styles.ubicacionTexto}>Costa del Sol Resort</Text>
                        </View>
                    </View>

                    <View style={styles.body}>
                        {/* Ubicaciones */}
                        <Text style={styles.seccionLabel}>UBICACIÓN PREFERIDA</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollUbi}>
                            {ubicaciones.map(u => (
                                <Pressable
                                    key={u.id}
                                    onPress={() => setUbicacion(u.id)}
                                    style={[styles.cardUbi, ubicacion === u.id && styles.cardUbiActive]}
                                >
                                    <Image source={{ uri: u.img }} style={styles.imgUbi} />
                                    <View style={styles.overlayUbi} />
                                    {ubicacion === u.id && (
                                        <View style={styles.checkUbi}>
                                            <Ionicons name="checkmark" size={12} color="#1F2937" />
                                        </View>
                                    )}
                                    <Text style={styles.textoUbi}>{u.titulo}</Text>
                                </Pressable>
                            ))}
                        </ScrollView>

                        {/* Menú */}
                        <View style={styles.menuCard}>
                            <View style={styles.menuHeader}>
                                <Text style={styles.menuTitle}>Menú Degustación</Text>
                                <View style={styles.signatureBadge}>
                                    <Text style={styles.signatureText}>SIGNATURE</Text>
                                </View>
                            </View>

                            <View style={styles.menuItem}>
                                <Text style={styles.itemLabel}>ENTRANTE</Text>
                                <Text style={styles.itemDesc}>Tartar de bogavante con emulsión de cítricos y aire de mar.</Text>
                            </View>

                            <View style={styles.menuItem}>
                                <Text style={styles.itemLabel}>PLATO PRINCIPAL</Text>
                                <Text style={styles.itemDesc}>Solomillo de buey madurado 45 días con crema de guisantes y brotes de temporada.</Text>
                            </View>

                            <View style={styles.precioBox}>
                                <View>
                                    <Text style={styles.desdeText}>DESDE</Text>
                                    <Text style={styles.precioText}>450€<Text style={styles.paxText}>/pareja</Text></Text>
                                </View>
                                <Pressable
                                    style={styles.btnReservar}
                                    onPress={() => router.push({
                                        pathname: '/servicios/confirmacion',
                                        params: {
                                            servicio: 'Cena Romántica',
                                            icono: 'restaurant',
                                            fecha: '15 Oct, 2024 — 20:30',
                                            ubicacion: `Costa del Sol, ${ubicacion.toUpperCase()}`,
                                            precio: '450.00€'
                                        }
                                    })}
                                >
                                    <Text style={styles.btnText}>RESERVAR{"\n"}EXPERIENCIA</Text>
                                    <Ionicons name="calendar-outline" size={20} color="#1F2937" />
                                </Pressable>
                            </View>
                        </View>

                        {/* Maridaje */}
                        <View style={styles.maridajeCard}>
                            <View style={styles.maridajeIconBox}>
                                <Ionicons name="wine" size={24} color={colores.dorado} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 16 }}>
                                <Text style={styles.maridajeTitle}>Maridaje Premium</Text>
                                <Text style={styles.maridajeDesc}>Selección de nuestra cava privada</Text>
                            </View>
                            <Switch
                                value={maridaje}
                                onValueChange={setMaridaje}
                                trackColor={{ false: '#334155', true: '#B49B57' }}
                                thumbColor={maridaje ? '#FFFFFF' : '#94A3B8'}
                            />
                        </View>

                        {/* Info Tiles */}
                        <View style={styles.tilesGrid}>
                            <View style={styles.tile}>
                                <Ionicons name="time-outline" size={24} color={colores.dorado} />
                                <Text style={styles.tileLabel}>DURACIÓN</Text>
                                <Text style={styles.tileValue}>3 Horas</Text>
                            </View>
                            <View style={styles.tile}>
                                <Ionicons name="people-outline" size={24} color={colores.dorado} />
                                <Text style={styles.tileLabel}>PERSONAS</Text>
                                <Text style={styles.tileValue}>2 Adultos</Text>
                            </View>
                            <View style={styles.tile}>
                                <Ionicons name="star-outline" size={24} color={colores.dorado} />
                                <Text style={styles.tileLabel}>NIVEL</Text>
                                <Text style={styles.tileValue}>Exclusive</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 60 }} />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#0B0F19' },
    overlayOscuro: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.4)', backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)' },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        zIndex: 10
    },
    iconBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' },
    headerLabel: { color: 'white', fontSize: 11, fontWeight: '800', letterSpacing: 2 },

    scroll: { paddingTop: 40 },
    heroContent: { paddingHorizontal: 24, marginBottom: 40 },
    titulo: { color: 'white', fontSize: 38, fontWeight: '800', lineHeight: 46, marginBottom: 12 },
    ubicacionRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    ubicacionTexto: { color: colores.dorado, fontSize: 14, fontWeight: '600' },

    body: { paddingHorizontal: 20 },
    seccionLabel: { color: colores.dorado, fontSize: 13, fontWeight: '800', letterSpacing: 1, marginBottom: 16 },
    scrollUbi: { marginBottom: 32 },
    cardUbi: { width: 120, height: 160, borderRadius: 20, overflow: 'hidden', marginRight: 12, borderWidth: 2, borderColor: 'transparent' },
    cardUbiActive: { borderColor: colores.dorado },
    imgUbi: { width: '100%', height: '100%' },
    overlayUbi: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
    textoUbi: { position: 'absolute', bottom: 16, left: 12, color: 'white', fontSize: 11, fontWeight: '900', letterSpacing: 1 },
    checkUbi: { position: 'absolute', top: 12, right: 12, width: 22, height: 22, borderRadius: 11, backgroundColor: colores.dorado, alignItems: 'center', justifyContent: 'center' },

    menuCard: { backgroundColor: 'rgba(11, 15, 25, 0.85)', padding: 24, borderRadius: 28, borderWidth: 1, borderColor: 'rgba(212, 175, 55, 0.2)', marginBottom: 20 },
    menuHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
    menuTitle: { color: colores.dorado, fontSize: 20, fontWeight: '800' },
    signatureBadge: { backgroundColor: 'rgba(212, 175, 55, 0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(212, 175, 55, 0.2)' },
    signatureText: { color: colores.dorado, fontSize: 10, fontWeight: '900' },

    menuItem: { marginBottom: 20, paddingLeft: 12, borderLeftWidth: 2, borderLeftColor: colores.dorado },
    itemLabel: { color: 'white', fontSize: 12, fontWeight: '800', marginBottom: 6 },
    itemDesc: { color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 22 },

    precioBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        marginHorizontal: -24,
        marginBottom: -24,
        marginTop: 10,
        padding: 24,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28
    },
    desdeText: { color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: '800', marginBottom: 2 },
    precioText: { color: 'white', fontSize: 28, fontWeight: '800' },
    paxText: { fontSize: 14, color: 'rgba(255,255,255,0.4)', fontWeight: '400' },
    btnReservar: { backgroundColor: colores.dorado, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
    btnText: { color: '#1F2937', fontSize: 12, fontWeight: '900', textAlign: 'right' },

    maridajeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        marginBottom: 20,
        borderLeftWidth: 3,
        borderLeftColor: colores.dorado
    },
    maridajeIconBox: { width: 48, height: 48, borderRadius: 14, backgroundColor: 'rgba(212, 175, 55, 0.1)', alignItems: 'center', justifyContent: 'center' },
    maridajeTitle: { color: 'white', fontSize: 16, fontWeight: '700', marginBottom: 2 },
    maridajeDesc: { color: 'rgba(255,255,255,0.4)', fontSize: 12 },

    tilesGrid: { flexDirection: 'row', gap: 12 },
    tile: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.03)',
        paddingVertical: 16,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)'
    },
    tileLabel: { color: 'rgba(255,255,255,0.4)', fontSize: 9, fontWeight: '800', marginTop: 8, marginBottom: 4 },
    tileValue: { color: 'white', fontSize: 13, fontWeight: '700' }
});
