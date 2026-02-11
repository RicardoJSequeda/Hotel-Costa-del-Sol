import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function ServiceDetailScreen() {
    const router = useRouter();
    const [especialista, setEspecialista] = useState('1');

    const especialistas = [
        { id: '1', nombre: 'Ana', imagen: 'https://i.pravatar.cc/150?u=ana' },
        { id: '2', nombre: 'Carlos', imagen: 'https://i.pravatar.cc/150?u=carlos' },
        { id: '3', nombre: 'Sofia', imagen: 'https://i.pravatar.cc/150?u=sofia' },
        { id: '4', nombre: 'David', imagen: 'https://i.pravatar.cc/150?u=david' },
    ];

    return (
        <View style={styles.contenedor}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Hero Image */}
                <View style={styles.heroContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db93e?q=80&w=1470' }}
                        style={styles.heroImage}
                    />
                    <View style={styles.topActions}>
                        <Pressable onPress={() => router.back()} style={styles.actionCircle}>
                            <Ionicons name="arrow-back" size={20} color="white" />
                        </Pressable>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <Pressable style={styles.actionCircle}>
                                <Ionicons name="share-outline" size={20} color="white" />
                            </Pressable>
                            <Pressable style={styles.actionCircle}>
                                <Ionicons name="heart-outline" size={20} color="white" />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.pagination}>
                        <View style={[styles.dot, styles.dotActive]} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                </View>

                {/* Content */}
                <View style={styles.contenido}>
                    <View style={styles.headerInfo}>
                        <View>
                            <Text style={styles.categoria}>WELLNESS & SPA</Text>
                            <Text style={styles.titulo}>Masaje Holístico</Text>
                        </View>
                        <View style={styles.ratingBadge}>
                            <Ionicons name="star" size={14} color={colores.dorado} />
                            <Text style={styles.ratingText}>4.9</Text>
                        </View>
                    </View>

                    <View style={styles.specsRow}>
                        <View style={styles.specBadge}>
                            <Ionicons name="time-outline" size={16} color={colores.dorado} />
                            <Text style={styles.specText}>60 min</Text>
                        </View>
                        <View style={styles.specBadge}>
                            <Ionicons name="cash-outline" size={16} color={colores.dorado} />
                            <Text style={styles.specText}>$150.00</Text>
                        </View>
                    </View>

                    <Text style={styles.labelSeccion}>Descripción</Text>
                    <Text style={styles.descripcion} numberOfLines={4}>
                        Sumérgete en una experiencia multisensorial diseñada para equilibrar cuerpo y mente. Utilizamos aceites esenciales orgánicos calientes y técnicas de presión moderada para aliviar la tensión muscular profunda, mejorar la circulación y promover una relajación total.
                    </Text>
                    <Text style={styles.leerMas}>Leer más <Ionicons name="chevron-down" size={14} color={colores.dorado} /></Text>

                    <View style={styles.divisor} />

                    <View style={styles.sectionHeader}>
                        <Text style={styles.labelSeccion}>Elige tu Especialista</Text>
                        <Text style={styles.verTodos}>Ver todos</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollEspecialistas}>
                        {especialistas.map((esp) => (
                            <Pressable
                                key={esp.id}
                                style={styles.avatarItem}
                                onPress={() => setEspecialista(esp.id)}
                            >
                                <View style={[styles.avatarWrapper, especialista === esp.id && styles.avatarSelected]}>
                                    <Image source={{ uri: esp.imagen }} style={styles.avatarImg} />
                                    {especialista === esp.id && (
                                        <View style={styles.checkIcon}>
                                            <Ionicons name="checkmark" size={10} color="white" />
                                        </View>
                                    )}
                                </View>
                                <Text style={[styles.avatarNombre, especialista === esp.id && styles.nombreSelected]}>{esp.nombre}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>

                    <Text style={styles.labelSeccion}>Incluye</Text>
                    <View style={styles.pillsRow}>
                        <View style={styles.pill}>
                            <Ionicons name="flower-outline" size={16} color={colores.dorado} />
                            <Text style={styles.pillText}>Aromaterapia</Text>
                        </View>
                        <View style={styles.pill}>
                            <Ionicons name="musical-notes-outline" size={16} color={colores.dorado} />
                            <Text style={styles.pillText}>Sonido Zen</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 120 }} />
            </ScrollView>

            {/* Sticky Footer */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.precioLabel}>Precio Total</Text>
                    <Text style={styles.precioValor}>$150.00</Text>
                </View>
                <Pressable
                    style={styles.botonReserva}
                    onPress={() => router.push({
                        pathname: '/servicios/confirmacion',
                        params: {
                            servicio: 'Masaje Holístico',
                            icono: 'sparkles',
                            fecha: 'Hoy, 24 Oct — 16:00',
                            ubicacion: 'Spa Costa del Sol',
                            precio: '$150.00'
                        }
                    })}
                >
                    <Text style={styles.textoBotonReserva}>Reservar Cita</Text>
                    <Ionicons name="arrow-forward" size={18} color="#1F2937" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: 'white' },
    heroContainer: { height: 350, position: 'relative' },
    heroImage: { width: '100%', height: '100%' },
    topActions: {
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    actionCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pagination: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 6
    },
    dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.5)' },
    dotActive: { width: 24, backgroundColor: colores.dorado },

    contenido: { padding: 24, marginTop: -20, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
    headerInfo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
    categoria: { fontSize: 12, fontWeight: '700', color: colores.dorado, letterSpacing: 1 },
    titulo: { fontSize: 28, fontWeight: '800', color: '#1F2937', marginTop: 4 },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFBEB',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
        gap: 4
    },
    ratingText: { fontSize: 13, fontWeight: '700', color: colores.dorado },

    specsRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
    specBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        gap: 8,
        borderWidth: 1,
        borderColor: '#F3F4F6'
    },
    specText: { fontSize: 14, fontWeight: '600', color: '#6B7280' },

    labelSeccion: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 12 },
    descripcion: { fontSize: 15, color: '#6B7280', lineHeight: 22 },
    leerMas: { color: colores.dorado, fontSize: 14, fontWeight: '700', marginTop: 8 },

    divisor: { height: 1, backgroundColor: '#F3F4F6', marginVertical: 24 },

    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    verTodos: { fontSize: 12, color: colores.dorado, fontWeight: '600' },
    scrollEspecialistas: { marginBottom: 24 },
    avatarItem: { alignItems: 'center', marginRight: 20 },
    avatarWrapper: { width: 64, height: 64, borderRadius: 32, padding: 3, position: 'relative' },
    avatarSelected: { borderWidth: 2, borderColor: colores.dorado },
    avatarImg: { width: '100%', height: '100%', borderRadius: 30 },
    checkIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: colores.dorado,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white'
    },
    avatarNombre: { marginTop: 8, fontSize: 13, color: '#9CA3AF', fontWeight: '500' },
    nombreSelected: { color: colores.dorado, fontWeight: '700' },

    pillsRow: { flexDirection: 'row', gap: 12 },
    pill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 12,
        gap: 8,
        flex: 1
    },
    pillText: { fontSize: 13, fontWeight: '600', color: '#4B5563' },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 24,
        paddingBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...tema.sombras.media,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6'
    },
    precioLabel: { fontSize: 12, color: '#9CA3AF', marginBottom: 4 },
    precioValor: { fontSize: 24, fontWeight: '800', color: '#1F2937' },
    botonReserva: {
        backgroundColor: colores.dorado,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        ...tema.sombras.media
    },
    textoBotonReserva: { color: '#1F2937', fontSize: 16, fontWeight: '800' }
});
