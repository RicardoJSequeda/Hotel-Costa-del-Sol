import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { colores, tema } from '@/constantes/colores';
import { useAuth } from '@/context/AuthContext';
import { useBooking } from '@/context/BookingContext';

import * as Haptics from 'expo-haptics';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

export default function PantallaExitoReserva() {
    const router = useRouter();
    const { state } = useBooking();
    const { iniciarSesion } = useAuth();
    const [mostrarCopiado, setMostrarCopiado] = useState(false);

    const handleVolver = () => {
        iniciarSesion({
            id: 'G' + Date.now(),
            nombre: state.huesped.nombre,
            email: state.huesped.email,
            codigoReserva: state.codigoReserva || 'CDS-8821-XP'
        });
        router.dismissAll();
        router.replace('/(tabs)');
    };

    const handleVerReservas = () => {
        iniciarSesion({
            id: 'G' + Date.now(),
            nombre: state.huesped.nombre,
            email: state.huesped.email,
            codigoReserva: state.codigoReserva || 'CDS-8821-XP'
        });
        router.replace('/estancia'); // Corregido a estancia
    };

    const copiarCodigo = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setMostrarCopiado(true);
        setTimeout(() => setMostrarCopiado(false), 2000);
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.gradienteFondo} />

            <View style={styles.contenido}>
                <View style={styles.circuloExito}>
                    <Ionicons name="checkmark" size={60} color={colores.dorado} />
                </View>

                <Text style={styles.tituloExito}>¡Reserva exitosa!</Text>
                <View style={styles.barraMedio} />

                <Text style={styles.agradecimiento}>
                    Su estancia ha sido confirmada en <Text style={{ color: colores.dorado }}>Costa del Sol Resort</Text>.
                </Text>

                <Text style={styles.subtexto}>
                    Hemos enviado los detalles de su reserva y código de acceso a su correo electrónico. ¡Esperamos verle pronto!
                </Text>

                <View style={styles.cardInfo}>
                    {mostrarCopiado && (
                        <Animated.View
                            entering={FadeInUp}
                            exiting={FadeOutUp}
                            style={styles.toastCopiado}
                        >
                            <Text style={styles.textoToast}>¡Copiado!</Text>
                        </Animated.View>
                    )}
                    <View style={styles.iconoInfo}>
                        <Ionicons name="calendar-outline" size={20} color={colores.dorado} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.tituloInfo}>Código de Reserva</Text>
                        <Text style={styles.valorInfo}>{state.codigoReserva || 'CDS-8821-XP'}</Text>
                    </View>
                    <Ionicons
                        name="copy-outline"
                        size={24}
                        color={colores.dorado}
                        onPress={copiarCodigo}
                        style={{ padding: 10 }}
                    />
                </View>

                <View style={styles.botones}>
                    <Boton
                        titulo="Volver al Inicio"
                        tipo="primario"
                        onPress={handleVolver}
                        iconoDerecha={<Ionicons name="home-outline" size={20} color={colores.negro} />}
                        style={styles.botonPrincipal}
                    />
                    <Boton
                        titulo="Ver Mis Reservas"
                        tipo="outline"
                        onPress={handleVerReservas}
                        iconoDerecha={<Ionicons name="list-outline" size={20} color={colores.dorado} />}
                        style={styles.botonSecundario}
                        textoStyle={{ color: colores.dorado }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#1A1814' },
    gradienteFondo: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#1A1814',
        opacity: 0.9,
    },
    contenido: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circuloExito: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colores.dorado,
        marginBottom: 40,
        ...tema.sombras.dorada,
    },
    tituloExito: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16,
    },
    barraMedio: {
        width: 60,
        height: 3,
        backgroundColor: colores.dorado,
        borderRadius: 2,
        marginBottom: 32,
    },
    agradecimiento: {
        color: '#888',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 26,
        marginBottom: 16,
    },
    subtexto: {
        color: '#666',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 40,
    },
    cardInfo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        padding: 20,
        marginBottom: 60,
    },
    iconoInfo: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    tituloInfo: { color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 2 },
    valorInfo: { color: colores.dorado, fontSize: 18, fontWeight: '700' },
    botones: { width: '100%', gap: 16 },
    botonPrincipal: { height: 60, borderRadius: 30 },
    botonSecundario: { height: 60, borderRadius: 30, borderColor: 'rgba(212,175,55,0.3)' },
    toastCopiado: {
        position: 'absolute',
        top: -40,
        backgroundColor: colores.dorado,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: 'center',
        zIndex: 10,
    },
    textoToast: { color: colores.negro, fontWeight: '800', fontSize: 12 },
});
