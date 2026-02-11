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

export default function PantallaEntrenadorPrivado() {
    const router = useRouter();
    const [entrenador, setEntrenador] = useState('carlos');
    const [duracion, setDuracion] = useState('30');
    const [hora, setHora] = useState('11:00');

    const entrenadores = [
        { id: 'carlos', nombre: 'Carlos R.', especialidad: 'HIIT / Fuerza', img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=200', top: true },
        { id: 'elena', nombre: 'Elena M.', especialidad: 'Yoga / Pilates', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200' },
        { id: 'david', nombre: 'David S.', especialidad: 'Powerlifting', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200' },
    ];

    const duraciones = [
        { id: '30', etiqueta: 'EXPRESS', min: '30 min' },
        { id: '60', etiqueta: 'ESTÁNDAR', min: '60 min' },
        { id: '90', etiqueta: 'MASTER', min: '90 min' },
    ];

    const horas = ['08:00', '09:30', '11:00', '12:30', '15:00', '16:30', '18:00', '19:30'];

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Hero */}
                <View style={styles.hero}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=800' }}
                        style={styles.heroImg}
                    />
                    <View style={styles.heroOverlay} />

                    <Pressable onPress={() => router.back()} style={styles.backBtn}>
                        <Ionicons name="chevron-back" size={20} color="white" />
                    </Pressable>

                    <Text style={styles.headerTitle}>Entrenador Privado</Text>

                    <View style={styles.heroContent}>
                        <View style={styles.badgeExclusivo}>
                            <Text style={styles.badgeText}>EXCLUSIVO COSTA DEL SOL</Text>
                        </View>
                        <Text style={styles.heroMainTitle}>Potencia tu Bienestar</Text>
                        <Text style={styles.heroSub}>Sesiones personalizadas en nuestro Fitness Club.</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    {/* Expertos */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.seccionTitle}>Nuestros Expertos</Text>
                        <Pressable><Text style={styles.verTodos}>Ver todos</Text></Pressable>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.expertList}>
                        {entrenadores.map(e => (
                            <Pressable
                                key={e.id}
                                onPress={() => setEntrenador(e.id)}
                                style={[styles.expertCard, entrenador === e.id && styles.expertCardActive]}
                            >
                                <View style={styles.imgWrapper}>
                                    <Image source={{ uri: e.img }} style={styles.expertImg} />
                                    {e.top && (
                                        <View style={styles.topBadge}>
                                            <Text style={styles.topText}>TOP</Text>
                                        </View>
                                    )}
                                </View>
                                <Text style={[styles.expertName, entrenador === e.id && { color: 'white' }]}>{e.nombre}</Text>
                                <Text style={styles.expertSpec}>{e.especialidad}</Text>
                                {entrenador === e.id && <View style={styles.indicator} />}
                            </Pressable>
                        ))}
                    </ScrollView>

                    {/* Duración */}
                    <Text style={styles.seccionTitle}>Seleccionar Duración</Text>
                    <View style={styles.gridDuracion}>
                        {duraciones.map(d => (
                            <Pressable
                                key={d.id}
                                onPress={() => setDuracion(d.id)}
                                style={[styles.cardDuracion, duracion === d.id && styles.cardDuracionActive]}
                            >
                                <Text style={[styles.durLabel, duracion === d.id && { color: 'rgba(255,255,255,0.7)' }]}>{d.etiqueta}</Text>
                                <Text style={[styles.durMin, duracion === d.id && { color: 'white' }]}>{d.min}</Text>
                            </Pressable>
                        ))}
                    </View>

                    {/* Horarios */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.seccionTitle}>Horarios Disponibles</Text>
                        <View style={styles.fechaRow}>
                            <Ionicons name="calendar-outline" size={14} color="rgba(255,255,255,0.5)" />
                            <Text style={styles.fechaText}>Hoy, 24 Oct</Text>
                        </View>
                    </View>

                    <View style={styles.gridHoras}>
                        {horas.map(h => (
                            <Pressable
                                key={h}
                                onPress={() => setHora(h)}
                                style={[styles.chipHora, hora === h && styles.chipHoraActive]}
                            >
                                <Text style={[styles.textHora, hora === h && styles.textHoraActive]}>{h}</Text>
                            </Pressable>
                        ))}
                    </View>

                    {/* Nota */}
                    <View style={styles.notaCard}>
                        <Ionicons name="information-circle" size={20} color={colores.dorado} />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={styles.notaTitle}>Nota Importante</Text>
                            <Text style={styles.notaDesc}>
                                Incluye acceso a toallas premium, hidratación isotónica y seguimiento post-entrenamiento en nuestra app.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerLabel}>PRECIO SESIÓN</Text>
                    <Text style={styles.footerPrice}>85,00€</Text>
                </View>
                <Pressable
                    style={styles.btnReservar}
                    onPress={() => router.push({
                        pathname: '/servicios/confirmacion',
                        params: {
                            servicio: 'Entrenador Privado',
                            icono: 'fitness',
                            fecha: `Hoy, 24 Oct — ${hora}`,
                            ubicacion: 'Fitness Club Costa del Sol',
                            precio: '85,00€'
                        }
                    })}
                >
                    <Text style={styles.btnText}>Reservar Sesión</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#0B0F19' },
    hero: { height: 380, position: 'relative' },
    heroImg: { width: '100%', height: '100%' },
    heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(11, 15, 25, 0.4)' },
    backBtn: {
        position: 'absolute',
        top: 60,
        left: 20,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)'
    },
    headerTitle: { position: 'absolute', top: 70, left: 80, color: 'white', fontSize: 18, fontWeight: '700' },
    heroContent: { position: 'absolute', bottom: 30, left: 24, right: 24 },
    badgeExclusivo: { backgroundColor: 'rgba(37, 99, 235, 0.2)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(37, 99, 235, 0.3)' },
    badgeText: { color: '#3B82F6', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
    heroMainTitle: { color: 'white', fontSize: 36, fontWeight: '800', marginBottom: 8 },
    heroSub: { color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 22 },

    body: { paddingHorizontal: 24, paddingVertical: 32 },
    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    seccionTitle: { color: 'white', fontSize: 20, fontWeight: '800' },
    verTodos: { color: '#3B82F6', fontSize: 13, fontWeight: '600' },

    expertList: { gap: 20, paddingRight: 24, marginBottom: 40 },
    expertCard: { alignItems: 'center', width: 100 },
    imgWrapper: { position: 'relative', marginBottom: 12 },
    expertImg: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#1E293B' },
    expertCardActive: {
        // Estilo especial para el activo si se desea, como el borde azul de la imagen
    },
    topBadge: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#2563EB', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, borderWidth: 2, borderColor: '#0B0F19' },
    topText: { color: 'white', fontSize: 8, fontWeight: '900' },
    expertName: { color: 'rgba(255,255,255,0.4)', fontSize: 14, fontWeight: '700', marginBottom: 4 },
    expertSpec: { color: 'rgba(255,255,255,0.3)', fontSize: 11 },
    indicator: { width: 100, height: 100, borderRadius: 50, borderLeftWidth: 2, borderTopWidth: 2, borderColor: '#2563EB', position: 'absolute', top: -10, left: -10, transform: [{ rotate: '-45deg' }] },

    gridDuracion: { flexDirection: 'row', gap: 12, marginBottom: 40 },
    cardDuracion: {
        flex: 1,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)'
    },
    cardDuracionActive: { backgroundColor: '#1D4ED8', borderColor: '#3B82F6' },
    durLabel: { color: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: '800', marginBottom: 4 },
    durMin: { color: 'rgba(255,255,255,0.6)', fontSize: 20, fontWeight: '800' },

    fechaRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    fechaText: { color: 'rgba(255,255,255,0.5)', fontSize: 13 },

    gridHoras: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 40 },
    chipHora: {
        width: '23%',
        height: 50,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.03)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)'
    },
    chipHoraActive: { borderColor: '#1D4ED8', backgroundColor: 'rgba(29, 78, 216, 0.1)' },
    textHora: { color: 'rgba(255,255,255,0.3)', fontSize: 14, fontWeight: '700' },
    textHoraActive: { color: '#3B82F6' },

    notaCard: {
        flexDirection: 'row',
        backgroundColor: 'rgba(37, 99, 235, 0.05)',
        padding: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(37, 99, 235, 0.1)'
    },
    notaTitle: { color: 'white', fontSize: 15, fontWeight: '700', marginBottom: 6 },
    notaDesc: { color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 20 },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        paddingBottom: 40,
        backgroundColor: '#0B0F19',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.05)'
    },
    footerLabel: { color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: '700', marginBottom: 4 },
    footerPrice: { color: 'white', fontSize: 32, fontWeight: '800' },
    btnReservar: {
        backgroundColor: colores.dorado,
        paddingHorizontal: 32,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        ...tema.sombras.media
    },
    btnText: { color: '#1F2937', fontSize: 16, fontWeight: '800' }
});
