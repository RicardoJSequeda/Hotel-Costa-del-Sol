import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function InformacionPersonal() {
    const router = useRouter();
    const [nombre, setNombre] = useState('Alejandra García');
    const [correo, setCorreo] = useState('alejandra.garcia@gmail.com');
    const [telefono, setTelefono] = useState('+34 612 345 678');
    const [fecha, setFecha] = useState('14 / Mayo / 1992');

    return (
        <KeyboardAvoidingView
            style={styles.contenedor}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.btnAtras}>
                    <Ionicons name="chevron-back" size={24} color="#1E293B" />
                    <Text style={styles.textoAtras}>Atrás</Text>
                </Pressable>
                <Text style={styles.tituloHeader}>Información Personal</Text>
                <View style={{ width: 80 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                {/* Avatar Section */}
                <View style={styles.avatarSection}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/300?u=alejandra' }}
                            style={styles.avatar}
                        />
                        <Pressable style={styles.btnCamera}>
                            <Ionicons name="camera" size={16} color="white" />
                        </Pressable>
                    </View>
                    <Text style={styles.memberTag}>COSTA DEL SOL MEMBER</Text>
                </View>

                {/* Form Section */}
                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>NOMBRE COMPLETO</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                value={nombre}
                                onChangeText={setNombre}
                                placeholderTextColor="#94A3B8"
                            />
                            <Ionicons name="person" size={18} color="#CBD5E1" />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                value={correo}
                                onChangeText={setCorreo}
                                keyboardType="email-address"
                                placeholderTextColor="#94A3B8"
                            />
                            <Ionicons name="mail" size={18} color="#CBD5E1" />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>TELÉFONO</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                value={telefono}
                                onChangeText={setTelefono}
                                keyboardType="phone-pad"
                                placeholderTextColor="#94A3B8"
                            />
                            <Ionicons name="phone-portrait" size={18} color="#CBD5E1" />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>FECHA DE NACIMIENTO</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                value={fecha}
                                onChangeText={setFecha}
                                placeholderTextColor="#94A3B8"
                            />
                            <Ionicons name="calendar" size={18} color="#CBD5E1" />
                        </View>
                    </View>

                    <Text style={styles.sectionLabel}>SEGURIDAD</Text>
                    <Pressable style={styles.cardSeguridad}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="refresh-circle" size={24} color="#1E293B" />
                        </View>
                        <Text style={styles.tituloSeguridad}>Cambiar Contraseña</Text>
                        <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
                    </Pressable>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.btnGuardar}>
                    <Text style={styles.btnTexto}>Guardar Cambios</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#F8F9FA' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: 'white'
    },
    btnAtras: { flexDirection: 'row', alignItems: 'center', gap: 4, width: 80 },
    textoAtras: { fontSize: 16, fontWeight: '600', color: '#1E293B' },
    tituloHeader: { fontSize: 18, fontWeight: '800', color: '#1E293B' },

    scroll: { padding: 24 },

    avatarSection: { alignItems: 'center', marginVertical: 32 },
    avatarContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: colores.dorado,
        padding: 5,
        backgroundColor: '#FFFBEB',
        position: 'relative',
        marginBottom: 16
    },
    avatar: { width: '100%', height: '100%', borderRadius: 55 },
    btnCamera: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: colores.dorado,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'white'
    },
    memberTag: { color: colores.dorado, fontSize: 12, fontWeight: '800', letterSpacing: 1 },

    form: { gap: 24 },
    inputGroup: { gap: 8 },
    label: { fontSize: 11, fontWeight: '800', color: '#94A3B8', letterSpacing: 0.5 },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        paddingHorizontal: 20,
        height: 64,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...tema.sombras.leve
    },
    input: { flex: 1, color: '#1E293B', fontSize: 16, fontWeight: '600' },

    sectionLabel: { fontSize: 11, fontWeight: '800', color: '#94A3B8', letterSpacing: 0.5, marginTop: 12 },
    cardSeguridad: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        gap: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...tema.sombras.leve
    },
    iconCircle: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#F1F5F9', alignItems: 'center', justifyContent: 'center' },
    tituloSeguridad: { flex: 1, color: '#1E293B', fontSize: 16, fontWeight: '600' },

    footer: { padding: 24, paddingBottom: 40, backgroundColor: 'white' },
    btnGuardar: {
        backgroundColor: colores.dorado,
        height: 64,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        ...tema.sombras.media
    },
    btnTexto: { color: 'white', fontSize: 18, fontWeight: '800' }
});
