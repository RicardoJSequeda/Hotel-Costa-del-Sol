import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Boton } from '@/componentes/Boton';

export default function PantallaSolicitudes() {
    const router = useRouter();
    const [cantToallas, setCantToallas] = useState(2);

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.iconBtn}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </Pressable>
                <Text style={styles.headerTitle}>Solicitudes</Text>
                <Pressable style={styles.iconBtn}>
                    <Ionicons name="time-outline" size={24} color="rgba(255,255,255,0.5)" />
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                <View style={styles.roomHeader}>
                    <View style={styles.dotVerde} />
                    <Text style={styles.roomLabel}>HABITACIÓN 302</Text>
                </View>

                <Text style={styles.mainTitle}>¿Qué podemos hacer por usted, Sr. Garcia?</Text>
                <Text style={styles.subTitle}>Seleccione un servicio y nuestro equipo se encargará de inmediato.</Text>

                {/* Toallas Extra */}
                <View style={styles.requestCard}>
                    <View style={styles.requestIconBox}>
                        <Ionicons name="shirt-outline" size={22} color="#3B82F6" />
                    </View>
                    <Text style={styles.requestTitle}>Toallas Extra</Text>
                    <Text style={styles.requestDesc}>Juego fresco de toallas de algodón premium.</Text>

                    <View style={styles.rowAction}>
                        <View style={styles.selectorCant}>
                            <Pressable onPress={() => setCantToallas(Math.max(1, cantToallas - 1))} style={styles.cantBtn}>
                                <Ionicons name="remove" size={18} color="white" />
                            </Pressable>
                            <Text style={styles.cantTexto}>{cantToallas}</Text>
                            <Pressable onPress={() => setCantToallas(cantToallas + 1)} style={styles.cantBtn}>
                                <Ionicons name="add" size={18} color="white" />
                            </Pressable>
                        </View>
                        <Boton
                            titulo="Solicitar →"
                            tipo="primario"
                            onPress={() => { }}
                            style={styles.btnCard}
                            textoStyle={{ fontSize: 14 }}
                        />
                    </View>
                    <Ionicons name="shirt" size={80} color="rgba(255,255,255,0.03)" style={styles.bgIcon} />
                </View>

                {/* Limpieza Inmediata */}
                <View style={styles.requestCard}>
                    <View style={styles.requestIconBox}>
                        <Ionicons name="color-filter-outline" size={22} color="#3B82F6" />
                    </View>
                    <Text style={styles.requestTitle}>Limpieza Inmediata</Text>
                    <Text style={styles.requestDesc}>Solicite servicio de limpieza prioritaria ahora.</Text>

                    <Boton
                        titulo="🛎️ Solicitar ahora"
                        tipo="primario"
                        onPress={() => { }}
                        style={[styles.btnCard, { width: '100%', backgroundColor: 'rgba(59, 130, 246, 0.1)' }]}
                        textoStyle={{ color: '#3B82F6', fontSize: 14 }}
                    />
                    <Ionicons name="sparkles" size={80} color="rgba(255,255,255,0.03)" style={styles.bgIcon} />
                </View>

                {/* Reponer Minibar */}
                <View style={styles.requestCard}>
                    <View style={styles.requestIconBox}>
                        <Ionicons name="wine-outline" size={22} color="#3B82F6" />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text style={styles.requestTitle}>Reponer Minibar</Text>
                        <View style={styles.badgeIncluido}>
                            <Text style={styles.textoIncluido}>INCLUIDO</Text>
                        </View>
                    </View>
                    <Text style={styles.requestDesc}>Restock completo de bebidas y snacks.</Text>

                    <Boton
                        titulo="📤 Solicitar reposición"
                        tipo="primario"
                        onPress={() => { }}
                        style={[styles.btnCard, { width: '100%', backgroundColor: 'rgba(59, 130, 246, 0.1)' }]}
                        textoStyle={{ color: '#3B82F6', fontSize: 14 }}
                    />
                    <Ionicons name="wine" size={80} color="rgba(255,255,255,0.03)" style={styles.bgIcon} />
                </View>

                {/* Despertador */}
                <View style={styles.requestCard}>
                    <View style={styles.requestIconBox}>
                        <Ionicons name="alarm-outline" size={22} color="#3B82F6" />
                    </View>
                    <Text style={styles.requestTitle}>Despertador</Text>
                    <Text style={styles.requestDesc}>Programe una llamada de despertador.</Text>

                    <View style={styles.timePickerPlaceholder}>
                        <Text style={styles.timeLabel}>HORA</Text>
                        <Text style={styles.timeValue}>07:00 <Text style={{ fontSize: 14, color: '#888' }}>AM ✎</Text></Text>
                    </View>

                    <Boton
                        titulo="⏰ Programar"
                        tipo="primario"
                        onPress={() => { }}
                        style={[styles.btnCard, { width: '100%' }]}
                        textoStyle={{ fontSize: 14 }}
                    />
                    <Ionicons name="alarm" size={80} color="rgba(255,255,255,0.03)" style={styles.bgIcon} />
                </View>

                <View style={styles.footerConcierge}>
                    <Text style={styles.conciergeText}>¿Necesita algo más específico?</Text>
                    <Pressable onPress={() => router.push('/chat')} style={styles.chatLink}>
                        <Ionicons name="chatbubble-ellipses-outline" size={18} color="#3B82F6" />
                        <Text style={styles.chatText}>Chatear con Concierge</Text>
                    </Pressable>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#0B0F19' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    iconBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    headerTitle: { fontSize: 18, fontWeight: '700', color: 'white' },

    scroll: { paddingHorizontal: 20 },

    roomHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, marginTop: 10 },
    dotVerde: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981', marginRight: 8 },
    roomLabel: { fontSize: 11, fontWeight: '800', color: '#3B82F6', letterSpacing: 1 },

    mainTitle: { fontSize: 28, fontWeight: '800', color: 'white', lineHeight: 36, marginBottom: 12 },
    subTitle: { fontSize: 14, color: '#94A3B8', lineHeight: 20, marginBottom: 30 },

    requestCard: {
        backgroundColor: '#161B28',
        borderRadius: 24,
        padding: 24,
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)'
    },
    requestIconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
    },
    requestTitle: { fontSize: 18, fontWeight: '700', color: 'white', marginBottom: 4 },
    requestDesc: { fontSize: 13, color: '#94A3B8', marginBottom: 20, lineHeight: 18 },

    rowAction: { flexDirection: 'row', gap: 12, alignItems: 'center' },
    selectorCant: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 12,
        padding: 4
    },
    cantBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
    cantTexto: { marginHorizontal: 12, fontWeight: '700', color: 'white', fontSize: 16 },
    btnCard: { flex: 1, height: 48, borderRadius: 12 },

    badgeIncluido: {
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(16, 185, 129, 0.2)'
    },
    textoIncluido: { color: '#10B981', fontSize: 9, fontWeight: '900' },

    timePickerPlaceholder: {
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        marginBottom: 16
    },
    timeLabel: { fontSize: 10, color: '#64748B', fontWeight: '800', marginBottom: 4 },
    timeValue: { fontSize: 22, fontWeight: '700', color: 'white' },

    bgIcon: { position: 'absolute', top: 20, right: -10 },

    footerConcierge: { marginTop: 20, alignItems: 'center' },
    conciergeText: { color: '#64748B', fontSize: 13 },
    chatLink: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 },
    chatText: { color: '#3B82F6', fontWeight: '700', fontSize: 14 }
});
