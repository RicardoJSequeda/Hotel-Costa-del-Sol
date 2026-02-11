import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { colores, tema } from '@/constantes/colores';
import { useAuth } from '@/context/AuthContext';
import { useBooking } from '@/context/BookingContext';

export default function LoginModal() {
    const router = useRouter();
    const { iniciarSesion } = useAuth();
    const { state } = useBooking();
    const [codigo, setCodigo] = useState('');
    const [identificador, setIdentificador] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = () => {
        const codigoValido = state.codigoReserva || 'CDS-8821-XP';

        if (codigo.toUpperCase() === codigoValido.toUpperCase() || codigo === '8821') {
            iniciarSesion({
                id: '1',
                nombre: 'Sr. Pérez',
                email: identificador || 'perez@email.com',
                habitacionAsignada: '402'
            });
            router.back();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.contenedor}
        >
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.contenido}>
                    <View style={styles.topActions}>
                        <Pressable onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="chevron-back" size={24} color={colores.principal} />
                        </Pressable>
                    </View>

                    <View style={styles.header}>
                        <View style={styles.circuloIcono}>
                            <Ionicons name="star" size={32} color={colores.dorado} />
                        </View>
                        <Text style={styles.tituloHotel}>COSTA DEL SOL</Text>
                        <Text style={styles.subtituloHotel}>LUXURY RESORT & SPA</Text>
                    </View>

                    <View style={[styles.tarjetaLogin, tema.sombras.media, error && { borderColor: '#EF4444', borderWidth: 1 }]}>
                        <Text style={styles.bienvenido}>Bienvenido</Text>
                        <Text style={styles.instruccion}>Por favor ingrese los detalles de su estadía</Text>

                        <View style={styles.inputsContainer}>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>CÓDIGO DE RESERVA</Text>
                                <View style={styles.inputWrapper}>
                                    <Ionicons name="ticket" size={20} color={colores.dorado} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="EJ. CDS-8821"
                                        placeholderTextColor="#AAA"
                                        autoCapitalize="characters"
                                        value={codigo}
                                        onChangeText={setCodigo}
                                    />
                                </View>
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>EMAIL O APELLIDO</Text>
                                <View style={styles.inputWrapper}>
                                    <Ionicons name="person" size={20} color={colores.dorado} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="ej. perez@email.com"
                                        placeholderTextColor="#AAA"
                                        value={identificador}
                                        onChangeText={setIdentificador}
                                    />
                                </View>
                            </View>
                        </View>

                        {error && <Text style={{ color: '#EF4444', fontSize: 12, textAlign: 'center', marginBottom: 16, fontWeight: '600' }}>Credenciales no encontradas</Text>}

                        <Boton
                            titulo="INGRESAR"
                            tipo="primario"
                            onPress={handleLogin}
                            style={styles.botonIngresar}
                            textoStyle={styles.textoBoton}
                        />

                        <Pressable style={styles.linkNoReserva}>
                            <Text style={styles.textoNoReserva}>¿No tienes reserva? <Ionicons name="arrow-forward" size={14} color={colores.dorado} /></Text>
                        </Pressable>

                        <View style={styles.divisor} />

                        <Pressable style={styles.linkContacto} onPress={() => router.push('/chat')}>
                            <Ionicons name="headset-outline" size={18} color={colores.dorado} />
                            <Text style={styles.textoContacto}>Contactar Recepción</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.footerTexto}>UNA EXPERIENCIA COSTA</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#F8F9FA' },
    scroll: { flexGrow: 1 },
    contenido: { flex: 1, padding: 24, alignItems: 'center', paddingTop: 60 },
    header: { alignItems: 'center', marginBottom: 40 },
    circuloIcono: {
        width: 80, height: 80, borderRadius: 40,
        backgroundColor: '#F3E5AB', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20,
        borderWidth: 1, borderColor: 'rgba(212,175,55,0.2)'
    },
    tituloHotel: { fontSize: 28, fontWeight: '700', color: colores.principal, letterSpacing: 2 },
    subtituloHotel: { fontSize: 12, color: '#888', letterSpacing: 3, marginTop: 4 },
    tarjetaLogin: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 32,
        padding: 32,
        ...tema.sombras.media,
    },
    bienvenido: { fontSize: 24, fontWeight: '700', color: colores.principal, textAlign: 'center', marginBottom: 8 },
    instruccion: { fontSize: 14, color: '#888', textAlign: 'center', marginBottom: 32 },
    inputsContainer: { gap: 24, marginBottom: 32 },
    inputGroup: { gap: 8 },
    label: { fontSize: 11, fontWeight: '700', color: '#666', letterSpacing: 1 },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 56,
        borderWidth: 1,
        borderColor: '#EEE',
    },
    inputIcon: { marginRight: 12 },
    input: { flex: 1, color: colores.principal, fontSize: 16, fontWeight: '500' },
    botonIngresar: { backgroundColor: colores.principal, height: 60, borderRadius: 16 },
    textoBoton: { color: 'white', fontWeight: '800', fontSize: 14, letterSpacing: 1 },
    linkNoReserva: { marginTop: 24, alignItems: 'center' },
    textoNoReserva: { color: colores.dorado, fontSize: 14, fontWeight: '600' },
    divisor: { height: 1, backgroundColor: '#EEE', width: '100%', marginVertical: 24 },
    linkContacto: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
    textoContacto: { color: colores.dorado, fontSize: 14, fontWeight: '600' },
    footerTexto: { marginTop: 40, fontSize: 10, color: '#BBB', letterSpacing: 2 },
    topActions: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
