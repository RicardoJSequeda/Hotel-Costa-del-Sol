import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function PantallaExplorar() {
    const router = useRouter();

    const secciones = [
        {
            id: '1',
            titulo: 'Infinity Pool & Beach',
            sub: 'Relajación absoluta frente al mar',
            img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800',
            tag: 'RELAX'
        },
        {
            id: '2',
            titulo: 'Gastronomía Gourmet',
            sub: '7 Restaurantes de autor',
            img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800',
            tag: 'FOOD'
        },
        {
            id: '3',
            titulo: 'Royal Spa & Wellness',
            sub: 'Tratamientos de rejuvenecimiento',
            img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db93e?q=80&w=800',
            tag: 'WELLNESS'
        },
        {
            id: '4',
            titulo: 'Actividades & Tours',
            sub: 'Explore la Riviera Maya',
            img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800',
            tag: 'AVENTURA'
        }
    ];

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </Pressable>
                <View style={styles.headerContent}>
                    <Text style={styles.headerLabel}>DESCUBRE</Text>
                    <Text style={styles.headerTitle}>Costa del Sol</Text>
                </View>
                <View style={{ width: 44 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.introBox}>
                    <Text style={styles.introText}>
                        Sumérjase en la excelencia. Cada rincón de nuestro resort ha sido diseñado para superar sus expectativas.
                    </Text>
                </View>

                {secciones.map((sec) => (
                    <Pressable key={sec.id} style={styles.card}>
                        <Image source={{ uri: sec.img }} style={styles.cardImg} />
                        <View style={styles.overlay} />

                        <View style={styles.cardContent}>
                            <View style={styles.tagBadge}>
                                <Text style={styles.tagText}>{sec.tag}</Text>
                            </View>
                            <View>
                                <Text style={styles.secTitle}>{sec.titulo}</Text>
                                <Text style={styles.secSub}>{sec.sub}</Text>
                            </View>
                        </View>

                        <View style={styles.cardFooter}>
                            <Text style={styles.verMas}>Ver galería completa</Text>
                            <Ionicons name="arrow-forward" size={16} color="white" />
                        </View>
                    </Pressable>
                ))}

                <View style={styles.footerInfo}>
                    <Ionicons name="location-sharp" size={20} color="#B49B57" />
                    <Text style={styles.footerText}>Carretera Federal Cancún-Playa del Carmen, Km 298</Text>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#0B0F19' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', justifyContent: 'center' },
    headerContent: { alignItems: 'center' },
    headerLabel: { fontSize: 10, fontWeight: '800', color: '#B49B57', letterSpacing: 2 },
    headerTitle: { fontSize: 20, fontWeight: '700', color: 'white' },

    introBox: { paddingHorizontal: 24, marginVertical: 20 },
    introText: { fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 24, textAlign: 'center' },

    card: {
        height: 280,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 32,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)'
    },
    cardImg: { width: '100%', height: '100%' },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    cardContent: {
        position: 'absolute',
        top: 24,
        left: 24,
        right: 24,
        bottom: 24,
        justifyContent: 'space-between'
    },
    tagBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: 'rgba(180, 155, 87, 0.9)',
        borderRadius: 8
    },
    tagText: { color: 'white', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
    secTitle: { fontSize: 26, fontWeight: '800', color: 'white', marginBottom: 4 },
    secSub: { fontSize: 14, color: 'rgba(255,255,255,0.8)' },

    cardFooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    verMas: { color: 'white', fontSize: 12, fontWeight: '600' },

    footerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingVertical: 40,
        opacity: 0.6
    },
    footerText: { color: 'white', fontSize: 12, textAlign: 'center' }
});
