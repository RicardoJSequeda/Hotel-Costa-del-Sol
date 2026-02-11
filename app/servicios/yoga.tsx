import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function PantallaYogaMeditacion() {
    const router = useRouter();
    const [favorito, setFavorito] = useState(false);

    const amenidades = [
        { id: 'mat', titulo: 'Mat de Yoga Premium', desc: 'Antideslizante y desinfectado', icono: 'fitness' },
        { id: 'agua', titulo: 'Agua Purificada', desc: 'Infusionada con menta y limón', icono: 'water' },
        { id: 'toalla', titulo: 'Toalla de Algodón', desc: 'Orgánica y refrescante', icono: 'shirt' },
    ];

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                {/* Hero / Header Img */}
                <View style={styles.heroContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800' }}
                        style={styles.heroImg}
                    />

                    <View style={styles.navBar}>
                        <Pressable onPress={() => router.back()} style={styles.navBtn}>
                            <Ionicons name="chevron-back" size={20} color="#1E293B" />
                        </Pressable>
                        <Pressable onPress={() => setFavorito(!favorito)} style={styles.navBtn}>
                            <Ionicons name={favorito ? "heart" : "heart-outline"} size={20} color={favorito ? "#EF4444" : "#1E293B"} />
                        </Pressable>
                    </View>

                    <View style={styles.badgesRow}>
                        <View style={[styles.badge, { backgroundColor: '#FEF3C7' }]}>
                            <Text style={[styles.badgeText, { color: '#B45309' }]}>BIENESTAR PREMIUM</Text>
                        </View>
                        <View style={[styles.badge, { backgroundColor: '#F1F5F9' }]}>
                            <Text style={[styles.badgeText, { color: '#64748B' }]}>COSTA DEL SOL</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.titulo}>Yoga y Meditación al{"\n"}Amanecer</Text>

                    <View style={styles.metaRow}>
                        <View style={styles.metaItem}>
                            <View style={styles.metaIconBox}>
                                <Ionicons name="time-outline" size={18} color="#B45309" />
                            </View>
                            <View>
                                <Text style={styles.metaLabel}>HORARIO</Text>
                                <Text style={styles.metaValue}>07:30 AM</Text>
                            </View>
                        </View>
                        <View style={styles.metaItem}>
                            <View style={[styles.metaIconBox, { backgroundColor: '#FEF3C7' }]}>
                                <Ionicons name="stats-chart" size={18} color="#B45309" />
                            </View>
                            <View>
                                <Text style={styles.metaLabel}>NIVEL</Text>
                                <Text style={styles.metaValue}>Todos</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.seccionTitulo}>LA EXPERIENCIA</Text>
                    <Text style={styles.descripcion}>
                        Comience su día en armonía con el sonido rítmico del Mar Mediterráneo. Nuestra sesión de amanecer combina Hatha Yoga suave con técnicas de respiración consciente, diseñada para despertar el cuerpo y calmar la mente en nuestro jardín zen privado frente al...
                    </Text>

                    <Pressable
                        style={styles.btnUnirse}
                        onPress={() => router.push({
                            pathname: '/servicios/confirmacion',
                            params: {
                                servicio: 'Yoga al Amanecer',
                                icono: 'leaf',
                                fecha: 'Mañana, 07:30 AM',
                                ubicacion: 'Terraza Zen del Acantilado',
                                precio: '$45.00'
                            }
                        })}
                    >
                        <Text style={styles.btnUnirseText}>Unirme a la Clase</Text>
                        <Ionicons name="arrow-forward" size={20} color="#1F2937" />
                    </Pressable>
                    <Text style={styles.reservaInfo}>Reserva sujeta a disponibilidad. Se recomienda llegar 10 min antes.</Text>

                    {/* Amenidades */}
                    {amenidades.map(item => (
                        <View key={item.id} style={styles.amenidadCard}>
                            <View style={styles.amenidadIconBox}>
                                <Ionicons name={item.icono as any} size={22} color="#64748B" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.amenidadTitle}>{item.titulo}</Text>
                                <Text style={styles.amenidadDesc}>{item.desc}</Text>
                            </View>
                        </View>
                    ))}

                    {/* Ubicación */}
                    <Text style={styles.seccionTitulo}>UBICACIÓN</Text>
                    <View style={styles.mapContainer}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600' }}
                            style={styles.mapImg}
                        />
                        <View style={styles.mapOverlay} />
                        <View style={styles.pinBox}>
                            <Ionicons name="location" size={14} color="#B45309" />
                            <Text style={styles.pinText}>Terraza Zen del Acantilado</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#F9FAFB' },
    scroll: { paddingBottom: 40 },
    heroContainer: { height: 480, position: 'relative' },
    heroImg: { width: '100%', height: '100%' },
    navBar: {
        position: 'absolute',
        top: 60,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        ...tema.sombras.media
    },
    badgesRow: { position: 'absolute', bottom: 30, left: 24, flexDirection: 'row', gap: 8 },
    badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
    badgeText: { fontSize: 10, fontWeight: '900', letterSpacing: 0.5 },

    body: { paddingHorizontal: 24, paddingVertical: 32 },
    titulo: { fontSize: 32, fontWeight: '800', color: '#1E293B', lineHeight: 40, marginBottom: 24 },

    metaRow: { flexDirection: 'row', gap: 20, marginBottom: 40 },
    metaItem: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 24,
        ...tema.sombras.media
    },
    metaIconBox: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFFBEB', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
    metaLabel: { fontSize: 9, fontWeight: '800', color: '#94A3B8', letterSpacing: 1, marginBottom: 2 },
    metaValue: { fontSize: 16, fontWeight: '700', color: '#1E293B' },

    seccionTitulo: { fontSize: 12, fontWeight: '800', color: '#94A3B8', letterSpacing: 1, marginBottom: 16, marginTop: 10 },
    descripcion: { fontSize: 16, color: '#64748B', lineHeight: 26, marginBottom: 30 },

    btnUnirse: {
        backgroundColor: colores.dorado,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 64,
        borderRadius: 32,
        gap: 12,
        marginBottom: 12,
        ...tema.sombras.media
    },
    btnUnirseText: { color: '#1F2937', fontSize: 18, fontWeight: '800' },
    reservaInfo: { textAlign: 'center', color: '#94A3B8', fontSize: 11, marginBottom: 40 },

    amenidadCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 24,
        marginBottom: 12,
        ...tema.sombras.media
    },
    amenidadIconBox: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
    amenidadTitle: { fontSize: 15, fontWeight: '700', color: '#1E293B' },
    amenidadDesc: { fontSize: 12, color: '#94A3B8', marginTop: 2 },

    mapContainer: { height: 180, borderRadius: 32, overflow: 'hidden', position: 'relative', marginTop: 8 },
    mapImg: { width: '100%', height: '100%', opacity: 0.6 },
    mapOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.02)' },
    pinBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -20 }],
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        ...tema.sombras.media
    },
    pinText: { fontSize: 12, fontWeight: '700', color: '#1E293B', marginLeft: 8 }
});
