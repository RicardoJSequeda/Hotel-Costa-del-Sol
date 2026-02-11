import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function PantallaCataVinos() {
    const router = useRouter();
    const [pax, setPax] = useState(2);
    const [exp, setExp] = useState('premium');

    const total = (exp === 'premium' ? 75 : 120) * pax;

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                {/* Hero */}
                <View style={styles.hero}>
                    <ImageBackground
                        source={{ uri: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200' }}
                        style={StyleSheet.absoluteFill}
                    >
                        <View style={styles.overlayOscuro} />

                        <View style={styles.navBar}>
                            <Pressable onPress={() => router.back()} style={styles.navBtn}>
                                <Ionicons name="chevron-back" size={24} color="white" />
                            </Pressable>
                            <Pressable style={styles.navBtn}>
                                <Ionicons name="share-social-outline" size={24} color="white" />
                            </Pressable>
                        </View>

                        <View style={styles.heroContent}>
                            <View style={styles.badgeSignature}>
                                <Text style={styles.signatureText}>COSTA DEL SOL SIGNATURE</Text>
                            </View>
                            <Text style={styles.titulo}>Cata de Vinos y Quesos{"\n"}Locales</Text>

                            <View style={styles.metaRow}>
                                <View style={styles.metaItem}>
                                    <Ionicons name="time-outline" size={16} color={colores.dorado} />
                                    <Text style={styles.metaText}>90 min</Text>
                                </View>
                                <View style={[styles.metaItem, { marginLeft: 16 }]}>
                                    <Ionicons name="star" size={16} color={colores.dorado} />
                                    <Text style={styles.metaText}>4.9 (120 reseñas)</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.body}>
                    {/* Sommelier */}
                    <View style={styles.expertCard}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200' }} style={styles.expertImg} />
                        <View style={{ flex: 1, marginLeft: 16 }}>
                            <View style={styles.expertHeader}>
                                <Text style={styles.expertTitle}>Alejandro Garrido</Text>
                                <Ionicons name="checkmark-circle" size={20} color={colores.dorado} />
                            </View>
                            <Text style={styles.expertSub}>Sommelier Senior & Experto en Maridaje</Text>
                        </View>
                    </View>

                    {/* Experiencia */}
                    <Text style={styles.seccionTitulo}>SELECCIONE SU EXPERIENCIA</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollExp}>
                        <Pressable
                            onPress={() => setExp('premium')}
                            style={[styles.cardExp, exp === 'premium' && styles.cardExpActive]}
                        >
                            <View style={styles.cardExpHeader}>
                                <Text style={styles.expLabel}>PREMIUM</Text>
                                {exp === 'premium' && <Ionicons name="checkmark-circle" size={18} color={colores.dorado} />}
                            </View>
                            <Text style={styles.expTitle}>Reserva Local</Text>
                            <Text style={styles.expDesc}>4 vinos malagueños & 4 quesos artesanales.</Text>
                            <Text style={styles.expPrecio}>€75<Text style={styles.expPax}>/persona</Text></Text>
                        </Pressable>

                        <Pressable
                            onPress={() => setExp('exclusive')}
                            style={[styles.cardExp, exp === 'exclusive' && styles.cardExpActive]}
                        >
                            <View style={styles.cardExpHeader}>
                                <Text style={[styles.expLabel, { color: '#94A3B8' }]}>EXCLUSIVE</Text>
                                {exp === 'exclusive' && <Ionicons name="checkmark-circle" size={18} color={colores.dorado} />}
                            </View>
                            <Text style={styles.expTitle}>Cosecha Vintage</Text>
                            <Text style={styles.expDesc}>Vinos de colección & quesos curados.</Text>
                            <Text style={styles.expPrecio}>€120<Text style={styles.expPax}>/persona</Text></Text>
                        </Pressable>
                    </ScrollView>

                    {/* Participantes */}
                    <View style={styles.paxRow}>
                        <Text style={styles.paxLabel}>Participantes</Text>
                        <View style={styles.counter}>
                            <Pressable
                                onPress={() => setPax(Math.max(1, pax - 1))}
                                style={styles.counterBtn}
                            >
                                <Ionicons name="remove" size={20} color="white" />
                            </Pressable>
                            <Text style={styles.paxValue}>{pax}</Text>
                            <Pressable
                                onPress={() => setPax(pax + 1)}
                                style={[styles.counterBtn, { backgroundColor: colores.dorado }]}
                            >
                                <Ionicons name="add" size={20} color="#1F2937" />
                            </Pressable>
                        </View>
                    </View>

                    {/* Ubicación */}
                    <Text style={styles.seccionTitulo}>UBICACIÓN</Text>
                    <View style={styles.mapContainer}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800' }} style={styles.mapImg} />
                        <View style={styles.mapOverlay} />
                        <View style={styles.pinBox}>
                            <Ionicons name="location" size={16} color="white" />
                            <Text style={styles.pinText}>Bodega Principal, Nivel -1</Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>

            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerLabel}>Total a pagar</Text>
                    <Text style={styles.footerTotal}>€{total}</Text>
                </View>
                <Pressable
                    style={styles.btnReservar}
                    onPress={() => router.push({
                        pathname: '/servicios/confirmacion',
                        params: {
                            servicio: 'Cata de Vinos y Quesos',
                            icono: 'wine',
                            fecha: 'Viernes, 19:00 PM',
                            ubicacion: 'Bodega Principal, Nivel -1',
                            precio: `€${total}`
                        }
                    })}
                >
                    <Text style={styles.btnText}>Reservar Cata</Text>
                    <Ionicons name="calendar-outline" size={18} color="#1F2937" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#110F0A' }, // Tono cálido oscuro
    hero: { height: 400, position: 'relative' },
    overlayOscuro: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
    navBar: { position: 'absolute', top: 60, left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between', zIndex: 10 },
    scroll: { paddingBottom: 40 },
    navBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)', alignItems: 'center', justifyContent: 'center' },
    heroContent: { position: 'absolute', bottom: 30, left: 24, right: 24 },
    badgeSignature: { backgroundColor: 'rgba(212, 175, 55, 0.2)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(212, 175, 55, 0.3)' },
    signatureText: { color: colores.dorado, fontSize: 10, fontWeight: '900', letterSpacing: 1 },
    titulo: { color: 'white', fontSize: 32, fontWeight: '800', lineHeight: 40, marginBottom: 16 },
    metaRow: { flexDirection: 'row', alignItems: 'center' },
    metaItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    metaText: { color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: '600' },

    body: { paddingHorizontal: 24, paddingVertical: 32 },
    expertCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.03)',
        padding: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        marginBottom: 32
    },
    expertImg: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: colores.dorado },
    expertHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
    expertTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
    expertSub: { color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 18 },

    seccionTitulo: { color: colores.dorado, fontSize: 12, fontWeight: '800', letterSpacing: 2, marginBottom: 20, borderLeftWidth: 3, borderLeftColor: colores.dorado, paddingLeft: 10 },

    scrollExp: { marginHorizontal: -24, paddingHorizontal: 24, marginBottom: 40 },
    cardExp: { width: 220, backgroundColor: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 28, marginRight: 16, borderWidth: 2, borderColor: 'transparent' },
    cardExpActive: { borderColor: colores.dorado, backgroundColor: 'rgba(212, 175, 55, 0.05)' },
    cardExpHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    expLabel: { color: colores.dorado, fontSize: 10, fontWeight: '900', letterSpacing: 1 },
    expTitle: { color: 'white', fontSize: 20, fontWeight: '800', marginBottom: 8 },
    expDesc: { color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 20, marginBottom: 20, minHeight: 40 },
    expPrecio: { color: 'white', fontSize: 24, fontWeight: '800' },
    expPax: { fontSize: 12, color: 'rgba(255,255,255,0.4)' },

    paxRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 },
    paxLabel: { color: 'white', fontSize: 18, fontWeight: '700' },
    counter: { flexDirection: 'row', alignItems: 'center', gap: 20, backgroundColor: 'rgba(255,255,255,0.05)', padding: 8, borderRadius: 20 },
    counterBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' },
    paxValue: { color: 'white', fontSize: 20, fontWeight: '800', width: 20, textAlign: 'center' },

    mapContainer: { height: 200, borderRadius: 32, overflow: 'hidden', position: 'relative' },
    mapImg: { width: '100%', height: '100%', opacity: 0.4 },
    mapOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
    pinBox: { position: 'absolute', bottom: 16, left: 16, backgroundColor: 'rgba(31, 41, 55, 0.9)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, gap: 8 },
    pinText: { color: 'white', fontSize: 11, fontWeight: '700' },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0B0F19',
        paddingHorizontal: 24,
        paddingVertical: 20,
        paddingBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.05)'
    },
    footerLabel: { color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: '700', marginBottom: 2 },
    footerTotal: { color: 'white', fontSize: 32, fontWeight: '800' },
    btnReservar: { backgroundColor: colores.dorado, paddingHorizontal: 24, height: 56, borderRadius: 28, flexDirection: 'row', alignItems: 'center', gap: 12, ...tema.sombras.media },
    btnText: { color: '#1F2937', fontSize: 16, fontWeight: '800' }
});
