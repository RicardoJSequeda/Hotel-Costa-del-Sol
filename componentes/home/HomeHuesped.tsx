import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colores, tema } from '@/constantes/colores';
import { useAuth } from '@/context/AuthContext';
import { useBooking } from '@/context/BookingContext';

export function HomeHuesped() {
    const router = useRouter();
    const { usuario } = useAuth();
    const { state } = useBooking();

    const servicios = [
        { id: '1', titulo: 'Reservar\nServicios', icono: 'leaf-outline', route: '/servicios' },
        { id: '2', titulo: 'Pedido al\nCuarto', icono: 'restaurant-outline', route: '/comida-habitacion' },
        { id: '3', titulo: 'Reportar\nProblema', icono: 'construct-outline', route: '/reportar-problema' },
        { id: '4', titulo: 'Mis\nReservas', icono: 'calendar-outline', route: '/estancia' },
        { id: '5', titulo: 'Hablar con\nRecepción', icono: 'headset-outline', route: '/chat' },
        { id: '6', titulo: 'Información\ndel Hotel', icono: 'help-circle-outline', route: '/informacion-hotel' },
        { id: '7', titulo: 'Otras\nSolicitudes', icono: 'list-outline', route: '/solicitudes' },
    ];

    return (
        <View style={styles.contenedor}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

                {/* Custom Header */}
                <View style={styles.header}>
                    <View style={styles.brandRow}>
                        <Ionicons name="sunny" size={24} color={colores.dorado} />
                        <Text style={styles.brandText}>COSTA DEL SOL</Text>
                    </View>
                    <View style={styles.notifBadge}>
                        <Ionicons name="notifications-outline" size={24} color="white" />
                        <View style={styles.dotNotif} />
                    </View>
                </View>

                {/* Profile Section */}
                <View style={styles.perfilRow}>
                    <View>
                        <Text style={styles.bienvenido}>Bienvenido,</Text>
                        <Text style={styles.nombre}>{usuario?.nombre || 'Sr. Pérez'}</Text>
                    </View>
                    <View style={styles.avatarBubble}>
                        <Text style={styles.avatarInitials}>JP</Text>
                    </View>
                </View>

                {/* Main Room Card */}
                <Pressable onPress={() => router.push('/llave-digital')} style={styles.tarjetaHabitacion}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200' }}
                        style={styles.imgHabitacion}
                    />
                    <View style={styles.overlayTarjeta} />

                    <View style={styles.badgeOcupado}>
                        <Text style={styles.textoOcupado}>OCUPADO</Text>
                    </View>

                    <View style={styles.infoHabitacion}>
                        <View style={styles.tipoHabRow}>
                            <Ionicons name="bed-outline" size={14} color={colores.dorado} />
                            <Text style={styles.tipoHabText}>DELUXE OCEAN VIEW</Text>
                        </View>
                        <Text style={styles.numHab}>Habitación 402</Text>
                    </View>

                    <View style={styles.salidaBadge}>
                        <Text style={styles.salidaLabel}>Salida</Text>
                        <Text style={styles.salidaFecha}>15 Oct</Text>
                    </View>

                    <View style={styles.botonOpcionesHab}>
                        <Ionicons name="ellipsis-horizontal" size={20} color="white" />
                    </View>
                </Pressable>

                {/* Grid Servicios */}
                <Text style={styles.tituloSeccion}>Servicios del Hotel</Text>
                <View style={styles.gridServicios}>
                    {servicios.map((item) => (
                        <Pressable
                            key={item.id}
                            style={styles.cardServicio}
                            onPress={() => router.push(item.route as any)}
                        >
                            <View style={styles.circuloIcono}>
                                <Ionicons name={item.icono as any} size={28} color={colores.dorado} />
                            </View>
                            <Text style={styles.textoServicio}>{item.titulo}</Text>
                        </Pressable>
                    ))}
                </View>

                {/* Banner Happy Hour */}
                <View style={styles.bannerHappy}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.happyTitle}>Happy Hour en The Lounge</Text>
                        <Text style={styles.happySub}>Hoy 5:00 PM - 7:00 PM</Text>
                    </View>
                    <Pressable style={styles.btnDetalles}>
                        <Text style={styles.textoBtnDetalles}>Detalles</Text>
                    </Pressable>
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: colores.fondoProfundo },
    scroll: { padding: 24, paddingTop: 60 },

    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 },
    brandRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    brandText: { color: 'white', letterSpacing: 3, fontSize: 16, fontWeight: '700' },
    notifBadge: { position: 'relative' },
    dotNotif: { width: 8, height: 8, borderRadius: 4, backgroundColor: colores.dorado, position: 'absolute', top: 0, right: 0, borderWidth: 1.5, borderColor: colores.fondoProfundo },

    perfilRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 },
    bienvenido: { color: 'rgba(255,255,255,0.5)', fontSize: 16 },
    nombre: { color: 'white', fontSize: 32, fontWeight: '700', marginTop: 4 },
    avatarBubble: { width: 56, height: 56, borderRadius: 28, borderWidth: 1, borderColor: colores.dorado, alignItems: 'center', justifyContent: 'center' },
    avatarInitials: { color: colores.dorado, fontSize: 18, fontWeight: '700' },

    tarjetaHabitacion: {
        height: 220, borderRadius: 40, overflow: 'hidden', position: 'relative', marginBottom: 40,
        ...tema.sombras.media
    },
    imgHabitacion: { width: '100%', height: '100%' },
    overlayTarjeta: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(15, 23, 42, 0.4)' },
    badgeOcupado: {
        position: 'absolute', top: 20, left: 20,
        backgroundColor: colores.dorado, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12
    },
    textoOcupado: { color: '#1F2937', fontSize: 12, fontWeight: '800' },
    infoHabitacion: { position: 'absolute', bottom: 25, left: 25 },
    tipoHabRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
    tipoHabText: { color: colores.dorado, fontSize: 12, fontWeight: '700' },
    numHab: { color: 'white', fontSize: 28, fontWeight: '800' },
    salidaBadge: { position: 'absolute', bottom: 25, right: 25, alignItems: 'flex-end' },
    salidaLabel: { color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: '600' },
    salidaFecha: { color: 'white', fontSize: 18, fontWeight: '700' },
    botonOpcionesHab: {
        position: 'absolute', top: 20, right: 20, width: 44, height: 44,
        borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center', justifyContent: 'center'
    },

    tituloSeccion: { color: 'white', fontSize: 20, fontWeight: '700', marginBottom: 24 },
    gridServicios: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
    cardServicio: {
        width: '47%', height: 160, backgroundColor: colores.tarjetaProfunda,
        borderRadius: 30, padding: 20, justifyContent: 'center', alignItems: 'center',
        borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)'
    },
    circuloIcono: {
        width: 60, height: 60, borderRadius: 30, backgroundColor: 'rgba(255,255,255,0.05)',
        alignItems: 'center', justifyContent: 'center', marginBottom: 16
    },
    textoServicio: { color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'center', lineHeight: 20 },

    bannerHappy: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(252, 211, 77, 0.05)',
        padding: 24, borderRadius: 30, marginTop: 40, borderWidth: 1, borderColor: 'rgba(252, 211, 77, 0.15)'
    },
    happyTitle: { color: colores.dorado, fontSize: 16, fontWeight: '700' },
    happySub: { color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 4 },
    btnDetalles: { backgroundColor: colores.dorado, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 15 },
    textoBtnDetalles: { color: '#1F2937', fontWeight: '700', fontSize: 13 },
});
