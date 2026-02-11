import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function SeleccionIdioma() {
    const router = useRouter();
    const [idioma, setIdioma] = useState('es');

    const idiomas = [
        { id: 'es', nombre: 'Español', sub: 'ACTUAL', imagen: 'https://images.unsplash.com/photo-1543783232-af41011c4ef2?q=80&w=200' },
        { id: 'en', nombre: 'Inglés', sub: 'English', imagen: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=200' },
        { id: 'fr', nombre: 'Francés', sub: 'Français', imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=200' },
        { id: 'de', nombre: 'Alemán', sub: 'Deutsch', imagen: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=200' },
    ];

    return (
        <View style={styles.contenedor}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.iconBtn}>
                    <Ionicons name="chevron-back" size={24} color="#1E2B5B" />
                </Pressable>
                <Text style={styles.tituloHeader}>Selección de Idioma</Text>
                <View style={{ width: 44 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                <Text style={styles.seccionTitulo}>Personaliza tu estancia</Text>
                <Text style={styles.seccionSub}>Selecciona tu idioma preferido para disfrutar de una experiencia personalizada en toda la aplicación del Hotel Costa del Sol.</Text>

                {idiomas.map((item) => (
                    <Pressable
                        key={item.id}
                        style={[
                            styles.cardIdioma,
                            idioma === item.id && styles.cardIdiomaActive
                        ]}
                        onPress={() => setIdioma(item.id)}
                    >
                        <Image source={{ uri: item.imagen }} style={styles.flag} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.idiomaNombre}>{item.nombre}</Text>
                            <Text style={[
                                styles.idiomaSub,
                                item.id === 'es' && styles.actualText
                            ]}>{item.sub}</Text>
                        </View>
                        <View style={[
                            styles.radio,
                            idioma === item.id && styles.radioActive
                        ]}>
                            {idioma === item.id && (
                                <Ionicons name="checkmark" size={14} color="white" />
                            )}
                        </View>
                    </Pressable>
                ))}

                <View style={{ height: 100 }} />
            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.btnGuardar} onPress={() => router.back()}>
                    <Text style={styles.btnTexto}>Guardar Preferencias <Ionicons name="checkmark-done" size={20} color="white" /></Text>
                </Pressable>
                <Text style={styles.brandFooter}>COSTA DEL SOL HOTELS & RESORTS</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: 'white' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    iconBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center' },
    tituloHeader: { fontSize: 18, fontWeight: '800', color: '#111827' },

    scroll: { padding: 24 },
    seccionTitulo: { fontSize: 24, fontWeight: '800', color: '#111827', marginBottom: 12 },
    seccionSub: { fontSize: 15, color: '#94A3B8', lineHeight: 22, marginBottom: 32 },

    cardIdioma: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#F1F5F9',
        marginBottom: 16,
        gap: 16
    },
    cardIdiomaActive: { borderColor: colores.dorado, backgroundColor: 'white' },
    flag: { width: 44, height: 44, borderRadius: 22 },
    idiomaNombre: { fontSize: 16, fontWeight: '800', color: '#111827' },
    idiomaSub: { fontSize: 12, color: '#94A3B8', fontWeight: '500' },
    actualText: { color: colores.dorado, fontWeight: '800' },
    radio: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#E2E8F0', alignItems: 'center', justifyContent: 'center' },
    radioActive: { backgroundColor: '#2563EB', borderColor: '#2563EB' },

    footer: { padding: 24, paddingBottom: 40, alignItems: 'center' },
    btnGuardar: {
        backgroundColor: '#1E40AF',
        width: '100%',
        height: 64,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        ...tema.sombras.media,
        marginBottom: 20
    },
    btnTexto: { color: 'white', fontSize: 18, fontWeight: '800' },
    brandFooter: { color: '#CBD5E1', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 }
});
