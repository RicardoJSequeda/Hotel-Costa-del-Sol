import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function CalificarEstancia() {
    const router = useRouter();
    const [ratingResumen, setRatingResumen] = useState(4);

    const [detalles, setDetalles] = useState([
        { id: 'limpieza', nombre: 'Limpieza', icono: 'brush', rating: 5 },
        { id: 'servicio', nombre: 'Servicio', icono: 'notifications', rating: 4 },
        { id: 'instalaciones', nombre: 'Instalaciones', icono: 'business', rating: 3 },
    ]);

    const updateRating = (id: string, val: number) => {
        setDetalles(prev => prev.map(item => item.id === id ? { ...item, rating: val } : item));
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.iconBtn}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>
                <Text style={styles.tituloHeader}>Calificar Estancia</Text>
                <View style={{ width: 44 }} />
            </View>

            <View style={styles.hero}>
                <Text style={styles.heroTitle}>Tu opinión nos importa</Text>
                <Text style={styles.heroSub}>Ayúdanos a mejorar tu experiencia en Costa del Sol</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                {/* Resumen Rating */}
                <View style={styles.cardResumen}>
                    <View style={styles.pillHandle} />
                    <Text style={styles.labelResumen}>Calificación General</Text>
                    <View style={styles.starsRow}>
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Ionicons
                                key={s}
                                name={s <= ratingResumen ? "star" : "star-outline"}
                                size={32}
                                color={s <= ratingResumen ? colores.dorado : "#E2E8F0"}
                                style={{ marginHorizontal: 4 }}
                                onPress={() => setRatingResumen(s)}
                            />
                        ))}
                    </View>
                    <Text style={styles.textRatingStatus}>Excelente</Text>
                </View>

                <Text style={styles.sectionLabel}>DETALLES DE LA EXPERIENCIA</Text>

                {detalles.map((item) => (
                    <View key={item.id} style={styles.cardDetalle}>
                        <View style={styles.iconBox}>
                            <Ionicons name={item.icono as any} size={20} color={colores.dorado} />
                        </View>
                        <Text style={styles.itemNombre}>{item.nombre}</Text>
                        <View style={styles.starsSmall}>
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Ionicons
                                    key={s}
                                    name={s <= item.rating ? "star" : "star-outline"}
                                    size={18}
                                    color={s <= item.rating ? colores.dorado : "#E2E8F0"}
                                    style={{ marginHorizontal: 2 }}
                                    onPress={() => updateRating(item.id, s)}
                                />
                            ))}
                        </View>
                    </View>
                ))}

                <Pressable style={styles.btnEnviar}>
                    <Text style={styles.btnTexto}>Enviar Valoración</Text>
                    <Ionicons name="arrow-forward" size={20} color="white" />
                </Pressable>

                <Text style={styles.sectionLabel}>COMENTARIOS ADICIONALES</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        placeholder="¿Hubo algún detalle especial que te gustaría mencionar? Cuéntanos..."
                        multiline
                        style={styles.input}
                        placeholderTextColor="#94A3B8"
                    />
                    <Text style={styles.charCount}>0/500</Text>
                </View>

                <View style={{ height: 40 }} />
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
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: '#0F172A'
    },
    iconBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    tituloHeader: { fontSize: 18, fontWeight: '800', color: 'white' },

    hero: { backgroundColor: '#0F172A', paddingHorizontal: 24, paddingBottom: 40, borderBottomLeftRadius: 32, borderBottomRightRadius: 32, alignItems: 'center' },
    heroTitle: { color: 'white', fontSize: 26, fontWeight: '800', marginBottom: 10 },
    heroSub: { color: 'rgba(255,255,255,0.6)', fontSize: 15, textAlign: 'center' },

    scroll: { padding: 24 },
    cardResumen: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 30,
        marginTop: -30,
        alignItems: 'center',
        ...tema.sombras.media,
        marginBottom: 32
    },
    pillHandle: { width: 40, height: 4, backgroundColor: '#E2E8F0', borderRadius: 2, marginBottom: 20 },
    labelResumen: { fontSize: 18, fontWeight: '700', color: '#1E293B', marginBottom: 20 },
    starsRow: { flexDirection: 'row', marginBottom: 20 },
    textRatingStatus: { fontSize: 14, color: '#94A3B8', fontWeight: '600' },

    sectionLabel: { fontSize: 12, fontWeight: '800', color: '#94A3B8', letterSpacing: 1, marginBottom: 16 },
    cardDetalle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        ...tema.sombras.leve
    },
    iconBox: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#FFFBEB', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
    itemNombre: { flex: 1, fontSize: 15, fontWeight: '700', color: '#1E293B' },
    starsSmall: { flexDirection: 'row' },

    btnEnviar: {
        backgroundColor: colores.dorado,
        height: 64,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginVertical: 24,
        ...tema.sombras.media
    },
    btnTexto: { color: 'white', fontSize: 18, fontWeight: '800' },

    inputBox: { backgroundColor: 'white', borderRadius: 16, padding: 20, height: 160, borderWidth: 1, borderColor: '#F1F5F9', ...tema.sombras.leve },
    input: { flex: 1, fontSize: 15, color: '#1E293B', textAlignVertical: 'top' },
    charCount: { alignSelf: 'flex-end', fontSize: 12, color: '#CBD5E1', marginTop: 10 }
});
