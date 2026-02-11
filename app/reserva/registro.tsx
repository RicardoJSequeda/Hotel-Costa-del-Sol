import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { colores } from '@/constantes/colores';
import { useBooking } from '@/context/BookingContext';

export default function PantallaRegistroReserva() {
    const router = useRouter();
    const { state, setHuesped } = useBooking();
    const { huesped } = state;

    const handleSiguiente = () => {
        if (!huesped.nombre || !huesped.email) {
            return; // Idealmente mostrar error
        }
        router.push('/reserva/pago');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.contenedor}
        >
            <Stack.Screen options={{
                title: 'Registro de Huésped',
                headerStyle: { backgroundColor: colores.principal },
                headerTintColor: 'white',
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerRight: () => (
                    <Text style={styles.pasoHeader}>PASO 2 DE 4</Text>
                )
            }} />

            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.headerSection}>
                    <Text style={styles.tituloSecundario}>CREAR CUENTA DE HUÉSPED</Text>
                    <Text style={styles.tituloPrincipal}>Tus datos para la{'\n'}estancia</Text>
                    <Text style={styles.descripcion}>
                        Para procesar su reserva y brindarle una experiencia personalizada, necesitamos completar sus datos.
                    </Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>NOMBRE COMPLETO</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons name="person-outline" size={20} color={colores.dorado} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Sr. Alejandro Vargas"
                                placeholderTextColor="#555"
                                value={huesped.nombre}
                                onChangeText={(text) => setHuesped(text, huesped.email)}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons name="mail-outline" size={20} color={colores.dorado} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="alex.vargas@email.com"
                                placeholderTextColor="#555"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={huesped.email}
                                onChangeText={(text) => setHuesped(huesped.nombre, text)}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>TELÉFONO DE CONTACTO</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons name="call-outline" size={20} color={colores.dorado} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="+1 234 567 890"
                                placeholderTextColor="#555"
                                keyboardType="phone-pad"
                            />
                        </View>
                    </View>

                    <View style={styles.infoBanner}>
                        <Ionicons name="shield-checkmark" size={18} color={colores.exito} />
                        <Text style={styles.textoInfoBanner}>
                            Tus datos están protegidos y solo se usarán para gestionar tu estadía.
                        </Text>
                    </View>
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>

            <View style={styles.footer}>
                <Boton
                    titulo="Continuar al Pago"
                    tipo="primario"
                    onPress={handleSiguiente}
                    iconoDerecha={<Ionicons name="arrow-forward" size={20} color={colores.negro} />}
                />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: colores.principal },
    scroll: { padding: 24 },
    pasoHeader: {
        color: '#666', fontSize: 10, fontWeight: '700',
        backgroundColor: 'rgba(255,255,255,0.05)',
        paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12
    },
    headerSection: { marginBottom: 40 },
    tituloSecundario: { color: colores.dorado, fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 12 },
    tituloPrincipal: { color: 'white', fontSize: 32, fontWeight: '700', lineHeight: 40, marginBottom: 16 },
    descripcion: { color: '#888', fontSize: 14, lineHeight: 22 },
    formContainer: { gap: 24 },
    inputGroup: { gap: 8 },
    label: { fontSize: 11, fontWeight: '700', color: '#666', letterSpacing: 1 },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1A1814',
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 56,
        borderWidth: 1,
        borderColor: 'rgba(252, 211, 77, 0.1)',
    },
    icon: { marginRight: 12 },
    input: { flex: 1, color: 'white', fontSize: 16 },
    infoBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
        padding: 16,
        borderRadius: 12,
        marginTop: 10,
    },
    textoInfoBanner: { flex: 1, color: '#888', fontSize: 12 },
    footer: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        backgroundColor: '#121212', padding: 24, paddingBottom: Platform.OS === 'ios' ? 40 : 24,
        borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)'
    }
});
