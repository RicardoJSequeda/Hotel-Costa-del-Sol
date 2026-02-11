import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';

export default function PantallaUbicacion() {
    const router = useRouter();

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{
                headerShown: true,
                title: 'Ubicación',
                headerTransparent: true,
                headerTintColor: colores.texto,
            }} />

            {/* Mapa Simulado */}
            <View style={styles.mapaContainer}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop' }}
                    style={styles.mapaImagen}
                />
                <View style={styles.pinCentral}>
                    <View style={styles.pinIcono}>
                        <Ionicons name="business" size={24} color={colores.negro} />
                    </View>
                    <View style={styles.pinEtiqueta}>
                        <Text style={styles.pinTexto}>COSTA DEL SOL</Text>
                    </View>
                </View>

                <Pressable style={styles.botonGoogleMaps}>
                    <Ionicons name="map" size={20} color={colores.negro} />
                    <Text style={styles.textoGoogle}>Abrir en Google Maps</Text>
                </Pressable>
            </View>

            {/* Sheet Inferior */}
            <View style={styles.sheet}>
                <Text style={styles.tituloSheet}>Entorno</Text>
                <Text style={styles.descSheet}>Descubre los tesoros que rodean nuestro refugio. Desde playas de arena dorada hasta la vibrante cultura local.</Text>

                <ScrollView horizontal style={styles.filtros} contentContainerStyle={{ gap: 10 }}>
                    <Filtro label="Todo" activo />
                    <Filtro label="Playas" />
                    <Filtro label="Cultura" />
                    <Filtro label="Transporte" />
                </ScrollView>

                <ScrollView style={styles.listaLugares}>
                    <ItemLugar
                        nombre="Playa de la Malagueta"
                        distancia="5 min • 0.4 km"
                        tipo="Playa"
                        imagen="https://images.unsplash.com/photo-1596423984399-5221975bb425?q=80&w=1500"
                    />
                    <ItemLugar
                        nombre="Museo Picasso"
                        distancia="10 min • 3.5 km"
                        tipo="Cultura"
                        imagen="https://images.unsplash.com/photo-1544078498-d3c5397f394a?q=80&w=1470"
                    />
                    <ItemLugar
                        nombre="Aeropuerto de Málaga"
                        distancia="20 min • 15 km"
                        tipo="Transporte"
                        imagen="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474"
                    />
                </ScrollView>
            </View>
        </View>
    );
}

function Filtro({ label, activo }: { label: string, activo?: boolean }) {
    return (
        <View style={[styles.filtro, activo && styles.filtroActivo]}>
            <Text style={[styles.textoFiltro, activo && styles.textoFiltroActivo]}>{label}</Text>
        </View>
    );
}

function ItemLugar({ nombre, distancia, tipo, imagen }: { nombre: string, distancia: string, tipo: string, imagen: string }) {
    return (
        <View style={styles.itemLugar}>
            <Image source={{ uri: imagen }} style={styles.imgLugar} />
            <View style={styles.infoLugar}>
                <Text style={styles.nombreLugar}>{nombre}</Text>
                <View style={styles.filaInfo}>
                    <Ionicons name={tipo === 'Playa' ? 'body' : tipo === 'Cultura' ? 'easel' : 'airplane'} size={12} color={colores.dorado} />
                    <Text style={styles.distanciaLugar}>{distancia}</Text>
                </View>
                <Text style={styles.descLugar}>Arena dorada y ambiente relajado.</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.3)" />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: colores.negro },
    mapaContainer: { height: '45%', position: 'relative' },
    mapaImagen: { width: '100%', height: '100%' },

    pinCentral: { position: 'absolute', top: '40%', left: '35%', alignItems: 'center' },
    pinIcono: { width: 40, height: 40, borderRadius: 20, backgroundColor: colores.dorado, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'black' },
    pinEtiqueta: { backgroundColor: '#333', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, marginTop: 4 },
    pinTexto: { color: colores.dorado, fontSize: 10, fontWeight: '700' },

    botonGoogleMaps: {
        position: 'absolute', bottom: 20, alignSelf: 'center',
        backgroundColor: colores.dorado, flexDirection: 'row', alignItems: 'center', gap: 8,
        paddingVertical: 12, paddingHorizontal: 24, borderRadius: 24,
        shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10
    },
    textoGoogle: { fontWeight: '700', color: colores.negro },

    sheet: { flex: 1, backgroundColor: '#1A1915', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -20, padding: 24 },
    tituloSheet: { color: 'white', fontSize: 24, fontWeight: '700', marginBottom: 8 },
    descSheet: { color: 'rgba(255,255,255,0.6)', lineHeight: 20, fontSize: 13, marginBottom: 20 },

    filtros: { flexDirection: 'row', marginBottom: 20, height: 40 },
    filtro: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.1)', marginRight: 10 },
    filtroActivo: { backgroundColor: colores.dorado },
    textoFiltro: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
    textoFiltroActivo: { color: colores.negro, fontWeight: '700' },

    listaLugares: { flex: 1 },
    itemLugar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#252420', padding: 12, borderRadius: 16, marginBottom: 12 },
    imgLugar: { width: 60, height: 60, borderRadius: 12, marginRight: 16 },
    infoLugar: { flex: 1 },
    nombreLugar: { color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 4 },
    filaInfo: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
    distanciaLugar: { color: 'rgba(255,255,255,0.5)', fontSize: 11 },
    descLugar: { color: 'rgba(255,255,255,0.3)', fontSize: 10 },
});
