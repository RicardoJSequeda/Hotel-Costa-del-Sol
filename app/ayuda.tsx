import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    LayoutAnimation,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { tema } from '@/constantes/colores';

export default function PantallaAyuda() {
    const router = useRouter();
    const [faqAbierto, setFaqAbierto] = useState<string | null>(null);

    const faqs = [
        { id: 'wifi', pregunta: '¿Cuál es la clave del Wi-Fi?', respuesta: 'La clave es "COSTA2024". Tienes cobertura en todo el resort, incluyendo áreas de playa.' },
        { id: 'llave', pregunta: 'Perdí mi tarjeta de acceso', respuesta: 'No te preocupes. Puedes activar la Llave Digital en la app o solicitar una nueva en recepción con tu identificación.' },
        { id: 'roomservice', pregunta: 'Horario de Room Service', respuesta: 'Estamos a tu disposición las 24 horas del día. Algunos platos especiales solo están disponibles hasta las 11 PM.' },
    ];

    const toggleFaq = (id: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFaqAbierto(faqAbierto === id ? null : id);
    };

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.iconBtn}>
                    <Ionicons name="chevron-back" size={24} color="#1E293B" />
                </Pressable>
                <Text style={styles.headerTitle}>Ayuda</Text>
                <View style={styles.iconBtn} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                <Text style={styles.mainTitle}>¿En qué podemos{"\n"}<Text style={{ color: '#EF4444' }}>ayudarte?</Text></Text>
                <Text style={styles.subTitle}>Asistencia inmediata para huéspedes del Hotel Costa del Sol.</Text>

                <View style={styles.emergenciaHeader}>
                    <View style={styles.dotRojo} />
                    <Text style={styles.emergenciaLabel}>EMERGENCIA (SOS)</Text>
                </View>

                <View style={styles.emergenciaGrid}>
                    <Pressable style={[styles.sosCard, { backgroundColor: '#FF1A1A' }]}>
                        <View style={styles.sosIconCircle}>
                            <Ionicons name="medical" size={24} color="#FF1A1A" />
                        </View>
                        <View style={{ marginTop: 12 }}>
                            <Text style={styles.sosPriority}>Prioridad Alta</Text>
                            <Text style={styles.sosTitle}>Emergencia{"\n"}Médica</Text>
                        </View>
                        <Ionicons name="add" size={40} color="rgba(255,255,255,0.2)" style={styles.sosBgIcon} />
                    </Pressable>

                    <Pressable style={[styles.sosCard, { backgroundColor: 'white' }]}>
                        <View style={[styles.sosIconCircle, { backgroundColor: '#FEE2E2' }]}>
                            <Ionicons name="shield-checkmark" size={24} color="#EF4444" />
                        </View>
                        <View style={{ marginTop: 12 }}>
                            <Text style={[styles.sosPriority, { color: '#64748B' }]}>Seguridad Hotel</Text>
                            <Text style={[styles.sosTitle, { color: '#1E293B' }]}>Seguridad</Text>
                        </View>
                        <Ionicons name="shield" size={40} color="rgba(0,0,0,0.03)" style={styles.sosBgIcon} />
                    </Pressable>
                </View>

                <View style={styles.avisoUbicacion}>
                    <Ionicons name="information-circle" size={16} color="#94A3B8" />
                    <Text style={styles.avisoTexto}>Al pulsar se enviará una alerta con tu ubicación.</Text>
                </View>

                <View style={styles.cardRecepcion}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.recepcionTitle}>Recepción 24/7</Text>
                        <Text style={styles.recepcionSub}>Tiempo de espera: <Text style={{ color: '#1E293B', fontWeight: '700' }}>&lt;1 min</Text></Text>
                    </View>
                    <Pressable style={styles.btnLlamar}>
                        <Ionicons name="call" size={18} color="white" />
                        <Text style={styles.textoLlamar}>Llamar</Text>
                    </Pressable>
                </View>

                <Text style={styles.sectionTitle}>Preguntas Frecuentes</Text>

                {faqs.map(faq => (
                    <View key={faq.id} style={styles.faqCard}>
                        <Pressable onPress={() => toggleFaq(faq.id)} style={styles.faqHeader}>
                            <View style={styles.faqIconBox}>
                                <Ionicons
                                    name={faq.id === 'wifi' ? 'wifi' : faq.id === 'llave' ? 'key' : 'restaurant'}
                                    size={18}
                                    color="#64748B"
                                />
                            </View>
                            <Text style={styles.faqPregunta}>{faq.pregunta}</Text>
                            <Ionicons
                                name={faqAbierto === faq.id ? 'chevron-up' : 'chevron-down'}
                                size={20}
                                color="#BCBEC0"
                            />
                        </Pressable>
                        {faqAbierto === faq.id && (
                            <View style={styles.faqRespuesta}>
                                <Text style={styles.faqRespuestaTexto}>{faq.respuesta}</Text>
                            </View>
                        )}
                    </View>
                ))}

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#F8FAFC' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    iconBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    headerTitle: { fontSize: 18, fontWeight: '700', color: '#1E293B' },

    scroll: { padding: 24 },
    mainTitle: { fontSize: 32, fontWeight: '800', color: '#1E293B', lineHeight: 40, marginBottom: 12 },
    subTitle: { fontSize: 15, color: '#64748B', lineHeight: 22, marginBottom: 30 },

    emergenciaHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    dotRojo: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#EF4444', marginRight: 8 },
    emergenciaLabel: { fontSize: 11, fontWeight: '800', color: '#EF4444', letterSpacing: 1 },

    emergenciaGrid: { flexDirection: 'row', gap: 16, marginBottom: 16 },
    sosCard: { flex: 1, height: 180, borderRadius: 32, padding: 20, justifyContent: 'space-between', overflow: 'hidden' },
    sosIconCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' },
    sosPriority: { fontSize: 12, fontWeight: '600', color: 'rgba(255,255,255,0.8)', marginBottom: 4 },
    sosTitle: { fontSize: 20, fontWeight: '800', color: 'white' },
    sosBgIcon: { position: 'absolute', bottom: -10, right: -10 },

    avisoUbicacion: { flexDirection: 'row', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 32 },
    avisoTexto: { color: '#94A3B8', fontSize: 12 },

    cardRecepcion: {
        backgroundColor: 'white',
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        ...tema.sombras.media
    },
    recepcionTitle: { fontSize: 16, fontWeight: '800', color: '#1E293B' },
    recepcionSub: { fontSize: 13, color: '#64748B', marginTop: 2 },
    btnLlamar: {
        backgroundColor: '#111827',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 16
    },
    textoLlamar: { color: 'white', fontWeight: '700', fontSize: 14 },

    sectionTitle: { fontSize: 20, fontWeight: '800', color: '#1E293B', marginBottom: 20 },
    faqCard: { backgroundColor: 'white', borderRadius: 20, marginBottom: 12, ...tema.sombras.media, overflow: 'hidden' },
    faqHeader: { flexDirection: 'row', alignItems: 'center', padding: 16 },
    faqIconBox: { width: 36, height: 36, borderRadius: 12, backgroundColor: '#F1F5F9', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
    faqPregunta: { flex: 1, fontSize: 15, fontWeight: '600', color: '#1E293B' },
    faqRespuesta: { padding: 16, paddingTop: 0, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
    faqRespuestaTexto: { color: '#64748B', lineHeight: 22, fontSize: 14 }
});
