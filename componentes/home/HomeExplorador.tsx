import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';

export function HomeExplorador() {
    const router = useRouter();

    return (
        <View style={styles.contenedor}>
            {/* Imagen de Fondo Full Screen */}
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop' }}
                style={styles.imagenFondo}
                contentFit="cover"
            />
            <View style={styles.overlay} />

            {/* Contenido Seguro */}
            <View style={styles.contenido}>
                {/* Header Superior */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.marca}>COSTA DEL SOL</Text>
                        <Text style={styles.marcaSub}>LUXURY RESORT</Text>
                    </View>
                    <Link href="/login-modal" asChild>
                        <Pressable style={styles.botonLogin}>
                            <Text style={styles.textoLogin}>Login Huésped</Text>
                            <Ionicons name="arrow-forward" size={14} color={colores.texto} />
                        </Pressable>
                    </Link>
                </View>

                {/* Texto Principal */}
                <View style={styles.centroPrincipal}>
                    <View style={styles.badgeBienvenida}>
                        <View style={styles.puntoDorado} />
                        <Text style={styles.textoBienvenida}>BIENVENIDO AL PARAÍSO</Text>
                    </View>
                    <Text style={styles.tituloGrande}>
                        Redefine el{'\n'}
                        <Text style={{ color: colores.dorado }}>Lujo</Text>{'\n'}
                        Absoluto
                    </Text>
                    <Text style={styles.descripcion}>
                        Experiencias inolvidables frente al mar, donde cada detalle está diseñado para usted.
                    </Text>
                </View>

                {/* Footer / Experiencias */}
                <View style={styles.footer}>
                    <View style={styles.headerExperiencias}>
                        <Text style={styles.tituloExperiencias}>Nuestras Experiencias</Text>
                        <Text style={styles.verTodo}>Ver todo →</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollExperiencias}>
                        <TarjetaExperiencia
                            titulo="Bar Moonlight"
                            subtitulo="Cócteles de autor bajo las estrellas"
                            imagen="https://images.unsplash.com/photo-1514362545857-3bc165497db5?q=80&w=1350"
                        />
                        <TarjetaExperiencia
                            titulo="Spa Serenity"
                            subtitulo="Relajación profunda frente al mar"
                            imagen="https://images.unsplash.com/photo-1544161515-4ab6ce6db93e?q=80&w=1470"
                        />
                    </ScrollView>

                    {/* Botones de Acción Principal */}
                    <View style={styles.filaBotones}>
                        <Pressable style={styles.botonMapa} onPress={() => router.push('/ubicacion')}>
                            <Ionicons name="map" size={24} color={colores.texto} />
                        </Pressable>
                        <Pressable style={styles.botonReservar} onPress={() => router.push('/explorar')}>
                            <Text style={styles.textoReservar}>Reservar Habitación</Text>
                            <Ionicons name="calendar-outline" size={20} color={colores.negro} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

function TarjetaExperiencia({ titulo, subtitulo, imagen }: { titulo: string, subtitulo: string, imagen: string }) {
    return (
        <View style={styles.cardExperiencia}>
            <Image source={{ uri: imagen }} style={styles.imgExperiencia} contentFit="cover" />
            <View style={styles.overlayExperiencia} />
            <View style={styles.infoExperiencia}>
                <Text style={styles.catExperiencia}>GASTRONOMÍA</Text>
                <Text style={styles.titExperiencia}>{titulo}</Text>
                <Text style={styles.subExperiencia}>{subtitulo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: colores.negro },
    imagenFondo: { ...StyleSheet.absoluteFillObject },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)', // Oscurecer ligeramente el fondo
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)' // Gradiente simulado
    },
    contenido: { flex: 1, padding: 24, justifyContent: 'space-between', paddingTop: 60 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    marca: { color: colores.texto, fontSize: 16, fontWeight: '700', letterSpacing: 2 },
    marcaSub: { color: colores.dorado, fontSize: 10, letterSpacing: 1 },
    botonLogin: {
        flexDirection: 'row', alignItems: 'center', gap: 6,
        backgroundColor: 'rgba(255,255,255,0.2)', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20,
        borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)'
    },
    textoLogin: { color: colores.texto, fontSize: 12, fontWeight: '600' },

    centroPrincipal: { marginTop: 40 },
    badgeBienvenida: {
        flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'flex-start',
        backgroundColor: 'rgba(50,50,0,0.6)', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 12, marginBottom: 16
    },
    puntoDorado: { width: 6, height: 6, borderRadius: 3, backgroundColor: colores.dorado },
    textoBienvenida: { color: colores.dorado, fontSize: 10, fontWeight: '700', letterSpacing: 1 },
    tituloGrande: { color: colores.texto, fontSize: 42, fontWeight: '800', lineHeight: 48 },
    descripcion: { color: 'rgba(255,255,255,0.8)', fontSize: 16, marginTop: 16, maxWidth: '80%' },

    footer: { gap: 16 },
    headerExperiencias: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4 },
    tituloExperiencias: { color: colores.texto, fontSize: 16, fontWeight: '600' },
    verTodo: { color: colores.dorado, fontSize: 12 },
    scrollExperiencias: { overflow: 'visible' },

    filaBotones: { flexDirection: 'row', gap: 12, marginTop: 10 },
    botonMapa: {
        width: 56, height: 56, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)'
    },
    botonReservar: {
        flex: 1, height: 56, backgroundColor: colores.dorado, borderRadius: 16,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10
    },
    textoReservar: { color: colores.negro, fontSize: 16, fontWeight: '700' },

    // Tarjeta Experiencia
    cardExperiencia: { width: 220, height: 140, borderRadius: 16, overflow: 'hidden', marginRight: 16, backgroundColor: '#222' },
    imgExperiencia: { ...StyleSheet.absoluteFillObject },
    overlayExperiencia: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.4)' },
    infoExperiencia: { padding: 12, flex: 1, justifyContent: 'flex-end' },
    catExperiencia: { color: colores.dorado, fontSize: 8, fontWeight: '700', marginBottom: 2 },
    titExperiencia: { color: colores.texto, fontSize: 14, fontWeight: '700' },
    subExperiencia: { color: 'rgba(255,255,255,0.7)', fontSize: 10 },
});
