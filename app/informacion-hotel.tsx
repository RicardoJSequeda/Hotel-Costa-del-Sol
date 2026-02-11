import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import {
    Dimensions,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function PantallaInformacionHotel() {
    const router = useRouter();

    const seccionesInmersivas = [
        {
            id: 'wifi',
            titulo: 'Conectividad Premium',
            sub: 'Wi-Fi de alta velocidad en todo el resort',
            detalle: 'Red: COSTA_DEL_SOL_GUEST\nClave: COSTA2024',
            img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
            icon: 'wifi'
        },
        {
            id: 'horarios',
            titulo: 'Horarios de Servicio',
            sub: 'Disfrute de nuestras instalaciones',
            detalle: 'Desayuno: 07:00 - 11:00\nSpa: 09:00 - 20:00\nInfinity Pool: 08:00 - 19:00',
            img: 'https://images.unsplash.com/photo-1540555700478-4be289aefcf1?q=80&w=1200',
            icon: 'time'
        },
        {
            id: 'normas',
            titulo: 'Normas de Convivencia',
            sub: 'Para una estancia placentera',
            detalle: 'Código de vestimenta: Resort Casual\nÁreas de no fumar\nCheck-out: 12:00 PM',
            img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
            icon: 'document-text'
        },
        {
            id: 'turismo',
            titulo: 'Exploración Local',
            sub: 'Lo mejor cerca de nosotros',
            detalle: 'Tulum Ruinas: 45 min\nXcaret Park: 20 min\nQuinta Avenida: 10 min',
            img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200',
            icon: 'map'
        }
    ];

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header Flotante */}
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </Pressable>
                <Text style={styles.headerTitle}>Costa del Sol</Text>
                <View style={{ width: 44 }} />
            </View>

            <ScrollView
                pagingEnabled={false}
                showsVerticalScrollIndicator={false}
                snapToInterval={height * 0.7}
                decelerationRate="fast"
            >
                {/* Intro Story */}
                <View style={[styles.seccionFull, { height: height * 0.6 }]}>
                    <ImageBackground
                        source={{ uri: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200' }}
                        style={StyleSheet.absoluteFill}
                    >
                        <View style={styles.overlayOscuro} />
                        <View style={styles.contentCentrado}>
                            <Text style={styles.introLabel}>BIENVENIDO AL PARAÍSO</Text>
                            <Text style={styles.introTitle}>Nuestra Historia</Text>
                            <Text style={styles.introDesc}>
                                Un santuario de elegancia nacido en el corazón del Caribe, donde el tiempo se detiene y el lujo se fusiona con la naturaleza.
                            </Text>
                        </View>
                    </ImageBackground>
                </View>

                {/* Secciones Inmersivas */}
                {seccionesInmersivas.map((sec) => (
                    <View key={sec.id} style={styles.seccionInmersiva}>
                        <ImageBackground
                            source={{ uri: sec.img }}
                            style={StyleSheet.absoluteFill}
                        >
                            <View style={styles.overlayDegradado} />
                            <View style={styles.cardContent}>
                                <View style={styles.iconBox}>
                                    <Ionicons name={sec.icon as any} size={28} color={colores.dorado} />
                                </View>
                                <Text style={styles.secLabel}>{sec.titulo.toUpperCase()}</Text>
                                <Text style={styles.secTitle}>{sec.sub}</Text>

                                <View style={styles.detailsBox}>
                                    <Text style={styles.detailsText}>{sec.detalle}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                ))}

                {/* Footer Reviews */}
                <View style={styles.footerBrand}>
                    <Text style={styles.footerLabel}>COSTA DEL SOL</Text>
                    <Text style={styles.footerMotto}>Excellence as a standard.</Text>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
}

import { colores } from '@/constantes/colores';

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#0B0F19' },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)', alignItems: 'center', justifyContent: 'center' },
    headerTitle: { fontSize: 18, fontWeight: '700', color: 'white', letterSpacing: 1 },

    seccionFull: { width: width, overflow: 'hidden' },
    overlayOscuro: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
    contentCentrado: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 },
    introLabel: { color: colores.dorado, fontSize: 12, fontWeight: '900', letterSpacing: 3, marginBottom: 16 },
    introTitle: { color: 'white', fontSize: 42, fontWeight: '800', textAlign: 'center', marginBottom: 20 },
    introDesc: { color: 'rgba(255,255,255,0.7)', fontSize: 16, textAlign: 'center', lineHeight: 28 },

    seccionInmersiva: { height: height * 0.7, width: width, position: 'relative' },
    overlayDegradado: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
        // Simulado con backgroundColor ya que no tenemos LinearGradient nativo aquí sin expo-linear-gradient
    },
    cardContent: { position: 'absolute', bottom: 60, left: 30, right: 30 },
    iconBox: { width: 64, height: 64, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center', marginBottom: 24, borderWidth: 1, borderColor: 'rgba(212, 175, 55, 0.3)' },
    secLabel: { color: colores.dorado, fontSize: 12, fontWeight: '900', letterSpacing: 2, marginBottom: 8 },
    secTitle: { color: 'white', fontSize: 32, fontWeight: '800', marginBottom: 20 },

    detailsBox: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 24,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)'
    },
    detailsText: { color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 26, fontWeight: '500' },

    footerBrand: { paddingVertical: 80, alignItems: 'center' },
    footerLabel: { color: 'white', fontSize: 18, fontWeight: '900', letterSpacing: 5, marginBottom: 12 },
    footerMotto: { color: colores.dorado, fontSize: 13, fontWeight: '600', letterSpacing: 1 }
});
