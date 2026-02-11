import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';

import { ContactoRecepcion } from '@/componentes/ContactoRecepcion';
import { colores } from '@/constantes/colores';

export default function DigitalKeyScreen() {
    const router = useRouter();
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.contenedor}>
            {/* Header / Brand */}
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.botonAtras}>
                    <Ionicons name="chevron-back" size={28} color="white" />
                </Pressable>
                <View style={styles.stars}>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Ionicons key={i} name="star" size={16} color={colores.dorado} />
                    ))}
                </View>
                <Text style={styles.brand}>COSTA DEL SOL</Text>
            </View>

            {/* Room Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.labelActiva}>LLAVE DIGITAL ACTIVA</Text>
                <Text style={styles.numeroHabitacion}>402</Text>
                <Text style={styles.tipoHabitacion}>Suite Premium</Text>
            </View>

            {/* Lock Animation Area */}
            <View style={styles.lockContainer}>
                <View style={styles.circleOuter}>
                    <Animated.View style={[styles.dotContainer, { transform: [{ rotate: rotation }] }]}>
                        <View style={styles.dot} />
                    </Animated.View>
                    <View style={styles.circleInner}>
                        <Ionicons name="lock-open" size={48} color={colores.dorado} />
                    </View>
                </View>
            </View>

            {/* Instructions */}
            <View style={styles.instruccionesContainer}>
                <Text style={styles.instruccionPrincipal}>Acerca el teléfono</Text>
                <Text style={styles.instruccionSecundaria}>
                    Mantén tu dispositivo cerca de la cerradura para desbloquear automáticamente.
                </Text>

                <View style={styles.statusBadge}>
                    <View style={styles.statusDot} />
                    <Text style={styles.statusText}>Bluetooth Activo</Text>
                </View>
            </View>

            {/* Actions */}
            <View style={styles.footer}>
                <Pressable onPress={() => router.push('/llave/exito')} style={styles.botonManual}>
                    <Ionicons name="hand-right" size={20} color={colores.dorado} />
                    <Text style={styles.textoBotonManual}>Desbloquear Manualmente</Text>
                </Pressable>

                <Pressable onPress={() => setModalVisible(true)} style={styles.botonRecepcion}>
                    <Ionicons name="help-buoy-outline" size={18} color="rgba(255,255,255,0.5)" />
                    <Text style={styles.textoRecepcion}>Llamar a recepción</Text>
                </Pressable>
            </View>

            <ContactoRecepcion
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#0F172A', padding: 24 },
    header: { alignItems: 'center', marginTop: 40, position: 'relative' },
    botonAtras: { position: 'absolute', left: 0, top: 0 },
    stars: { flexDirection: 'row', gap: 4, marginBottom: 8 },
    brand: { color: 'white', letterSpacing: 4, fontSize: 14, fontWeight: '600' },

    infoContainer: { alignItems: 'center', marginTop: 60 },
    labelActiva: { color: colores.dorado, letterSpacing: 2, fontSize: 12, fontWeight: '700', marginBottom: 10 },
    numeroHabitacion: { color: 'white', fontSize: 100, fontWeight: '700', textShadowColor: 'rgba(255,255,255,0.3)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 20 },
    tipoHabitacion: { color: 'rgba(255,255,255,0.6)', fontSize: 18 },

    lockContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    circleOuter: {
        width: 240,
        height: 240,
        borderRadius: 120,
        borderWidth: 2,
        borderColor: 'rgba(212, 175, 55, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    dotContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colores.dorado,
        position: 'absolute',
        left: -5,
        top: '50%',
        marginTop: -5,
        shadowColor: colores.dorado,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    circleInner: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: colores.dorado,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(212, 175, 55, 0.05)'
    },

    instruccionesContainer: { alignItems: 'center', marginBottom: 40 },
    instruccionPrincipal: { color: 'white', fontSize: 22, fontWeight: '600', marginBottom: 12 },
    instruccionSecundaria: { color: 'rgba(255,255,255,0.5)', textAlign: 'center', fontSize: 15, lineHeight: 22, paddingHorizontal: 20, marginBottom: 24 },

    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.05)',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        gap: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)'
    },
    statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981' },
    statusText: { color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: '500' },

    footer: { gap: 16, marginBottom: 20 },
    botonManual: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: colores.dorado,
        height: 60,
        borderRadius: 12,
        gap: 12
    },
    textoBotonManual: { color: colores.dorado, fontSize: 16, fontWeight: '700' },
    botonRecepcion: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 10
    },
    textoRecepcion: { color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: '500' }
});
