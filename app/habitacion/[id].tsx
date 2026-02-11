import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { colores } from '@/constantes/colores';
import { HABITACIONES_MOCK } from '@/constantes/habitaciones';
import { useAuth } from '@/context/AuthContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function PantallaDetalleHabitacion() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { estaLogueado } = useAuth();
    const [activeIndex, setActiveIndex] = useState(0);

    const habitacion = HABITACIONES_MOCK.find(h => h.id === id);

    if (!habitacion) {
        return (
            <View style={styles.contenedorError}>
                <Text style={{ color: 'white' }}>Habitación no encontrada</Text>
            </View>
        );
    }

    const handleReservar = () => {
        router.push({ pathname: '/reserva/calendario', params: { id: habitacion.id } });
    };

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} bounces={false}>
                {/* Header Hero Carousel */}
                <View style={styles.headerHero}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={(e) => {
                            const slide = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
                            if (slide !== activeIndex) setActiveIndex(slide);
                        }}
                        scrollEventThrottle={16}
                    >
                        {[habitacion.imagen, ...HABITACIONES_MOCK.filter(h => h.id !== habitacion.id).slice(0, 2).map(h => h.imagen)].map((img, index) => (
                            <Image
                                key={index}
                                source={{ uri: img }}
                                style={styles.imagenHeader}
                                contentFit="cover"
                            />
                        ))}
                    </ScrollView>

                    {/* Pagination Dots */}
                    <View style={styles.pagination}>
                        {[1, 2, 3].map((_, i) => (
                            <View
                                key={i}
                                style={[styles.dot, activeIndex === i && styles.dotActive]}
                            />
                        ))}
                    </View>

                    <View style={styles.botonesSuperiores}>
                        <Pressable style={styles.botonRedondo} onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </Pressable>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <Pressable style={styles.botonRedondo}>
                                <Ionicons name="share-social" size={24} color="white" />
                            </Pressable>
                            <Pressable style={styles.botonRedondo}>
                                <Ionicons name="heart-outline" size={24} color="white" />
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* Contenido Principal */}
                <View style={styles.contenido}>
                    <View style={styles.headerInfo}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.titulo}>{habitacion.nombre}</Text>
                            <View style={styles.filaRating}>
                                <View style={styles.badgeRating}>
                                    <Ionicons name="star" size={12} color={colores.negro} />
                                    <Text style={styles.textoRating}>{habitacion.rating || 4.8}</Text>
                                </View>
                                <Text style={styles.textoResenas}>(124 reseñas)</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.precioGrande}>${habitacion.precio} <Text style={{ fontSize: 14, fontWeight: '400' }}>USD</Text></Text>
                            <Text style={styles.textoNoche}>/ noche</Text>
                        </View>
                    </View>

                    <Text style={styles.tituloSeccion}>COMODIDADES</Text>
                    <View style={styles.gridComodidades}>
                        <ItemComodidad icon="wifi" label="WIFI" />
                        <ItemComodidad icon="snow" label="A/C" />
                        <ItemComodidad icon="bed" label="King Bed" />
                        <ItemComodidad icon="water" label="Jacuzzi" />
                    </View>

                    <Text style={styles.tituloSeccion}>DESCRIPCIÓN</Text>
                    <Text style={styles.descripcion}>
                        {habitacion.descripcion || 'Experimente el máximo lujo en nuestra exclusiva habitación. Diseñada para ofrecer una experiencia inolvidable con vistas inigualables y servicios de primera clase. Disfrute de sábanas de algodón egipcio, sistema de entretenimiento premium y minibar surtido.'}
                    </Text>
                    <Pressable>
                        <Text style={styles.leerMas}>Leer más</Text>
                    </Pressable>
                </View>
            </ScrollView>

            {/* Footer Sticky */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerLabel}>TOTAL</Text>
                    <Text style={styles.footerPrecio}>${habitacion.precio}</Text>
                </View>
                <Boton
                    titulo="Reservar Ahora"
                    onPress={handleReservar}
                    tipo="primario"
                    iconoDerecha={<Ionicons name="arrow-forward" size={20} color={colores.negro} />}
                />
            </View>
        </View>
    );
}

function ItemComodidad({ icon, label }: { icon: any, label: string }) {
    return (
        <View style={styles.cardComodidad}>
            <Ionicons name={icon} size={24} color={colores.dorado} />
            <Text style={styles.textoComodidad}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#1A1814' },
    contenedorError: { flex: 1, backgroundColor: '#1A1814', justifyContent: 'center', alignItems: 'center' },

    headerHero: { height: 400, position: 'relative' },
    imagenHeader: { width: SCREEN_WIDTH, height: 400 },
    pagination: {
        position: 'absolute',
        bottom: 60,
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 8
    },
    dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.3)' },
    dotActive: { width: 24, backgroundColor: colores.dorado },

    botonesSuperiores: {
        position: 'absolute', top: Platform.OS === 'ios' ? 60 : 40, left: 20, right: 20,
        flexDirection: 'row', justifyContent: 'space-between'
    },
    botonRedondo: {
        width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center', justifyContent: 'center'
    },

    contenido: { padding: 24, marginTop: -40, backgroundColor: '#1A1814', borderTopLeftRadius: 32, borderTopRightRadius: 32 },

    headerInfo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 },
    titulo: { fontSize: 24, fontWeight: '700', color: 'white', marginBottom: 8, maxWidth: '80%' },
    filaRating: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    badgeRating: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: colores.dorado, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
    textoRating: { fontSize: 12, fontWeight: '700', color: colores.negro },
    textoResenas: { color: '#888', fontSize: 12 },

    precioGrande: { fontSize: 24, fontWeight: '700', color: colores.dorado, textAlign: 'right' },
    textoNoche: { color: '#888', fontSize: 12, textAlign: 'right' },

    tituloSeccion: { color: '#888', fontSize: 12, fontWeight: '700', letterSpacing: 1, marginBottom: 16, marginTop: 16 },

    gridComodidades: { flexDirection: 'row', gap: 12, marginBottom: 24 },
    cardComodidad: {
        flex: 1, height: 80, backgroundColor: '#25231F', borderRadius: 16,
        alignItems: 'center', justifyContent: 'center', gap: 8
    },
    textoComodidad: { color: '#DDD', fontSize: 12 },

    descripcion: { color: '#BBB', fontSize: 14, lineHeight: 22, marginBottom: 8 },
    leerMas: { color: colores.dorado, fontSize: 14, fontWeight: '600', marginBottom: 24 },

    footer: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        backgroundColor: '#25231F', padding: 24, paddingBottom: Platform.OS === 'ios' ? 40 : 24,
        borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)',
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    footerLabel: { color: '#888', fontSize: 10, fontWeight: '700', marginBottom: 2 },
    footerPrecio: { color: 'white', fontSize: 24, fontWeight: '700' }
});
