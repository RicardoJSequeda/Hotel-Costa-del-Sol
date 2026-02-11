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

import { tema } from '@/constantes/colores';

export default function PantallaKidsClub() {
    const router = useRouter();
    const [tab, setTab] = useState('actividades');

    const cuidadores = [
        { id: '1', nombre: 'Elena Martínez', esp: 'Educadora Infantil • 8 años exp.', languages: ['ESPAÑOL', 'ENGLISH'], rating: 4.9, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200' },
        { id: '2', nombre: 'Sofia Ricci', esp: 'Enfermería Pediátrica • 5 años exp.', languages: ['ESPAÑOL', 'ITALIANO'], rating: 5.0, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200' },
    ];

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.navBtn}>
                    <Ionicons name="chevron-back" size={20} color="#B45309" />
                </Pressable>
                <Text style={styles.headerTitle}>Kids Club & Cuidado</Text>
                <Pressable style={styles.navBtn}>
                    <Ionicons name="help-circle-outline" size={24} color="#B45309" />
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

                {/* Banner Principal */}
                <View style={styles.banner}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?q=80&w=800' }}
                        style={styles.bannerImg}
                    />
                    <View style={styles.bannerOverlay} />
                    <View style={styles.bannerContent}>
                        <View style={styles.badgeAbierto}>
                            <Text style={styles.abiertoText}>ABIERTO • 09:00 – 20:00</Text>
                        </View>
                        <Text style={styles.bannerTitle}>Un oasis de diversión segura</Text>
                        <Text style={styles.bannerDesc}>Supervisión profesional en cada momento.</Text>
                    </View>
                </View>

                {/* Tabs */}
                <View style={styles.tabsContainer}>
                    <Pressable
                        onPress={() => setTab('actividades')}
                        style={[styles.tab, tab === 'actividades' && styles.tabActive]}
                    >
                        <Text style={[styles.tabText, tab === 'actividades' && styles.tabTextActive]}>Actividades Diarias</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setTab('niñera')}
                        style={[styles.tab, tab === 'niñera' && styles.tabActive]}
                    >
                        <Text style={[styles.tabText, tab === 'niñera' && styles.tabTextActive]}>Niñera Privada</Text>
                    </Pressable>
                </View>

                {tab === 'actividades' ? (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.seccionTitle}>Programa de Hoy</Text>
                            <Pressable><Text style={styles.verCalendario}>Ver calendario</Text></Pressable>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actividadesScroll}>
                            <View style={styles.actividadCard}>
                                <View style={styles.actividadHeader}>
                                    <View style={styles.actividadIconBox}>
                                        <Ionicons name="color-palette" size={20} color="#B45309" />
                                    </View>
                                    <View>
                                        <Text style={styles.actividadHora}>10:00 – 11:30</Text>
                                        <Text style={styles.actividadNombre}>Manualidades Creativas</Text>
                                    </View>
                                </View>
                                <Text style={styles.actividadDesc}>Pintura al aire libre y creación de figuras con materiales reciclados del hotel.</Text>
                                <View style={styles.actividadFooter}>
                                    <View style={styles.tagEdad}><Text style={styles.tagEdadText}>4-8 años</Text></View>
                                    <Image source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100' }} style={styles.miniFace} />
                                </View>
                            </View>

                            <View style={[styles.actividadCard, { backgroundColor: '#EFF6FF' }]}>
                                <View style={styles.actividadHeader}>
                                    <View style={[styles.actividadIconBox, { backgroundColor: '#DBEAFE' }]}>
                                        <Ionicons name="trail-sign" size={20} color="#2563EB" />
                                    </View>
                                    <View>
                                        <Text style={[styles.actividadHora, { color: '#2563EB' }]}>12:00 – 13:30</Text>
                                        <Text style={styles.actividadNombre}>Búsqueda del Tesoro</Text>
                                    </View>
                                </View>
                                <Text style={styles.actividadDesc}>Aventuras por el jardín botánico siguiendo pistas de piratas antiguos.</Text>
                                <View style={styles.actividadFooter}>
                                    <View style={[styles.tagEdad, { backgroundColor: '#DBEAFE' }]}><Text style={[styles.tagEdadText, { color: '#2563EB' }]}>6-12 años</Text></View>
                                </View>
                            </View>
                        </ScrollView>
                    </>
                ) : (
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={styles.seccionTitle}>Cuidadoras Certificadas</Text>
                        <Text style={styles.serviciosDesc}>Personal bilingüe certificado en primeros auxilios y educación infantil para un cuidado personalizado.</Text>

                        {cuidadores.map(c => (
                            <View key={c.id} style={styles.cuidadorCard}>
                                <Image source={{ uri: c.img }} style={styles.cuidadorImg} />
                                <View style={{ flex: 1, marginLeft: 16 }}>
                                    <View style={styles.cuidadorHeader}>
                                        <Text style={styles.cuidadorNombre}>{c.nombre}</Text>
                                        <View style={styles.ratingRow}>
                                            <Ionicons name="star" size={14} color="#F59E0B" />
                                            <Text style={styles.ratingText}>{c.rating}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.cuidadorEsp}>{c.esp}</Text>
                                    <View style={styles.langList}>
                                        {c.languages.map(l => (
                                            <View key={l} style={styles.langChip}><Text style={styles.langText}>{l}</Text></View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                {/* Seguridad */}
                <View style={styles.seguridadCard}>
                    <Ionicons name="information-circle" size={24} color="#F59E0B" />
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={styles.seguridadTitle}>Información de Seguridad</Text>
                        <Text style={styles.seguridadDesc}>
                            Todos nuestros espacios son sanitizados cada 3 horas. Contamos con circuito cerrado de TV y acceso restringido exclusivo para huéspedes registrados.
                        </Text>
                    </View>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.precioLabel}>Desde</Text>
                    <Text style={styles.precioText}>$45<Text style={styles.precioSub}>/hr</Text></Text>
                </View>
                <Pressable
                    style={styles.btnSolicitar}
                    onPress={() => router.push({
                        pathname: '/servicios/confirmacion',
                        params: {
                            servicio: tab === 'actividades' ? 'Actividad Kids Club' : 'Niñera Privada',
                            icono: 'happy',
                            fecha: 'Hoy, Programación Diaria',
                            ubicacion: 'Kids Club "El Oasis"',
                            precio: '$45.00'
                        }
                    })}
                >
                    <Text style={styles.btnTexto}>Solicitar Servicio</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#F9FAFB' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: 'white'
    },
    navBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    headerTitle: { fontSize: 18, fontWeight: '700', color: '#1E293B' },

    scroll: { paddingHorizontal: 20, paddingTop: 20 },

    banner: { height: 260, borderRadius: 32, overflow: 'hidden', position: 'relative', marginBottom: 30 },
    bannerImg: { width: '100%', height: '100%' },
    bannerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
    bannerContent: { position: 'absolute', bottom: 24, left: 24, right: 24 },
    badgeAbierto: { backgroundColor: '#F97316', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, marginBottom: 12 },
    abiertoText: { color: 'white', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
    bannerTitle: { color: 'white', fontSize: 28, fontWeight: '800', marginBottom: 6 },
    bannerDesc: { color: 'rgba(255,255,255,0.8)', fontSize: 14 },

    tabsContainer: { flexDirection: 'row', backgroundColor: '#F1F5F9', borderRadius: 20, padding: 6, marginBottom: 30 },
    tab: { flex: 1, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 16 },
    tabActive: { backgroundColor: 'white', ...tema.sombras.media },
    tabText: { color: '#64748B', fontSize: 14, fontWeight: '600' },
    tabTextActive: { color: '#F97316' },

    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    seccionTitle: { fontSize: 20, fontWeight: '800', color: '#1E293B' },
    verCalendario: { color: '#F97316', fontSize: 13, fontWeight: '600' },

    actividadesScroll: { marginBottom: 40 },
    actividadCard: { width: 280, backgroundColor: '#FFF7ED', padding: 24, borderRadius: 28, marginRight: 16 },
    actividadHeader: { flexDirection: 'row', gap: 16, marginBottom: 20 },
    actividadIconBox: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#FFEDD5', alignItems: 'center', justifyContent: 'center' },
    actividadHora: { color: '#F97316', fontSize: 12, fontWeight: '800', marginBottom: 2 },
    actividadNombre: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
    actividadDesc: { color: '#64748B', fontSize: 14, lineHeight: 22, marginBottom: 20 },
    actividadFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    tagEdad: { backgroundColor: '#FFEDD5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
    tagEdadText: { color: '#F97316', fontSize: 11, fontWeight: '700' },
    miniFace: { width: 32, height: 32, borderRadius: 16 },

    serviciosDesc: { color: '#64748B', fontSize: 14, lineHeight: 22, marginBottom: 24 },
    cuidadorCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 24,
        marginBottom: 12,
        ...tema.sombras.media
    },
    cuidadorImg: { width: 64, height: 64, borderRadius: 32 },
    cuidadorHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
    cuidadorNombre: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
    ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    ratingText: { color: '#F59E0B', fontSize: 13, fontWeight: '700' },
    cuidadorEsp: { color: '#64748B', fontSize: 13, marginBottom: 10 },
    langList: { flexDirection: 'row', gap: 8 },
    langChip: { backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
    langText: { color: '#64748B', fontSize: 9, fontWeight: '800' },

    seguridadCard: {
        flexDirection: 'row',
        backgroundColor: '#FFF7ED',
        padding: 24,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#FFEDD5',
        marginTop: 20
    },
    seguridadTitle: { color: '#C2410C', fontSize: 15, fontWeight: '700', marginBottom: 8 },
    seguridadDesc: { color: '#9A3412', fontSize: 13, lineHeight: 20, opacity: 0.8 },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
        paddingVertical: 20,
        paddingBottom: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9'
    },
    precioLabel: { fontSize: 11, color: '#64748B', fontWeight: '600' },
    precioText: { fontSize: 24, fontWeight: '800', color: '#1E293B' },
    precioSub: { fontSize: 14, color: '#94A3B8', fontWeight: '400' },
    btnSolicitar: {
        backgroundColor: '#F97316',
        paddingHorizontal: 28,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        ...tema.sombras.media
    },
    btnTexto: { color: 'white', fontSize: 16, fontWeight: '800' }
});
