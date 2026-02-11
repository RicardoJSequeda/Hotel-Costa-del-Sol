import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function UnlockSuccessScreen() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
            })
        ]).start();

        // Auto redirect back after 3 seconds
        const timer = setTimeout(() => {
            router.back();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.contenedor}>
            <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
                <View style={styles.iconCircle}>
                    <Ionicons name="checkmark" size={60} color="white" />
                </View>
                <Text style={styles.titulo}>¡Bienvenidos!</Text>
                <Text style={styles.subtitulo}>Habitación 402 Desbloqueda</Text>

                <Pressable onPress={() => router.back()} style={styles.botonEntrar}>
                    <Text style={styles.textoBoton}>Entrar</Text>
                </Pressable>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    card: {
        width: '100%',
        backgroundColor: colores.principalClaro,
        borderRadius: 40,
        padding: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        ...tema.sombras.media
    },
    iconCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: colores.exito,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: colores.exito,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 20,
        shadowOpacity: 0.5
    },
    titulo: { color: 'white', fontSize: 32, fontWeight: '800', marginBottom: 12 },
    subtitulo: { color: 'rgba(255,255,255,0.6)', fontSize: 18, textAlign: 'center', marginBottom: 40 },
    botonEntrar: {
        width: '100%',
        height: 60,
        borderRadius: 20,
        backgroundColor: colores.dorado,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBoton: { color: '#1F2937', fontSize: 18, fontWeight: '700' }
});
