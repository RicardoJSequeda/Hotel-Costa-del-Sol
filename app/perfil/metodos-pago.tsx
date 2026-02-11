import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View
} from 'react-native';

import { tema } from '@/constantes/colores';

export default function MetodosPago() {
    const router = useRouter();
    const [facturacionAuto, setFacturacionAuto] = useState(true);
    const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState('1');

    const tarjetas = [
        { id: '1', tipo: 'Visa', numero: '**** 4582', expira: '08/26', prederminada: true },
        { id: '2', tipo: 'Mastercard', numero: '**** 9012', expira: '11/24', prederminada: false },
    ];

    return (
        <View style={styles.contenedor}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.btnAtras}>
                    <Ionicons name="chevron-back" size={24} color="#1E2B5B" />
                </Pressable>
                <Text style={styles.tituloHeader}>Métodos de Pago</Text>
                <Pressable>
                    <Text style={styles.btnEditar}>Editar</Text>
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                <Text style={styles.seccionTitulo}>Mis Tarjetas</Text>
                <Text style={styles.seccionSub}>Gestiona tus formas de pago para servicios de habitación, spa y restaurante.</Text>

                {tarjetas.map((tarjeta) => (
                    <Pressable
                        key={tarjeta.id}
                        style={[
                            styles.cardTarjeta,
                            tarjetaSeleccionada === tarjeta.id && styles.cardTarjetaActive
                        ]}
                        onPress={() => setTarjetaSeleccionada(tarjeta.id)}
                    >
                        <View style={styles.logoContenedor}>
                            <Ionicons
                                name={tarjeta.tipo === 'Visa' ? 'card' : 'card-outline'}
                                size={24}
                                color="#1E2B5B"
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.tarjetaHeader}>
                                <Text style={styles.tarjetaTipo}>{tarjeta.tipo} {tarjeta.numero}</Text>
                                {tarjeta.prederminada && (
                                    <View style={styles.badgePred}>
                                        <Text style={styles.textoBadgePred}>PREDETERMINADA</Text>
                                    </View>
                                )}
                            </View>
                            <Text style={styles.tarjetaExp}>Expira: {tarjeta.expira}</Text>
                        </View>
                        <View style={[
                            styles.radio,
                            tarjetaSeleccionada === tarjeta.id && styles.radioActive
                        ]}>
                            {tarjetaSeleccionada === tarjeta.id && (
                                <Ionicons name="checkmark" size={14} color="white" />
                            )}
                        </View>
                    </Pressable>
                ))}

                <Pressable style={styles.btnNuevaTarjeta}>
                    <View style={styles.iconPlus}>
                        <Ionicons name="add" size={20} color="white" />
                    </View>
                    <Text style={styles.textoNuevaTarjeta}>Añadir Nueva Tarjeta</Text>
                </Pressable>

                <View style={styles.divisor} />

                <Text style={styles.ajustesLabel}>AJUSTES DE CARGO</Text>

                <View style={styles.cardAjuste}>
                    <View style={styles.iconAjuste}>
                        <Ionicons name="receipt-outline" size={20} color="#1E2B5B" />
                    </View>
                    <Text style={styles.textoAjuste}>Facturación Automática</Text>
                    <Switch
                        value={facturacionAuto}
                        onValueChange={setFacturacionAuto}
                        trackColor={{ false: '#E2E8F0', true: '#2563EB' }}
                        thumbColor="white"
                    />
                </View>

                {/* Footer Info */}
                <View style={styles.pagoSeguro}>
                    <View style={styles.badgeSeguro}>
                        <Ionicons name="shield-checkmark" size={16} color="#94A3B8" />
                        <Text style={styles.pagoSeguroTexto}>PAGO SEGURO SSL ENCRIPTADO</Text>
                    </View>
                    <Text style={styles.legalTexto}>
                        Costa del Sol utiliza protocolos de seguridad de nivel bancario. Tus datos bancarios están protegidos y nunca se almacenan en nuestros servidores.
                    </Text>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
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
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9'
    },
    btnAtras: { width: 40 },
    tituloHeader: { fontSize: 18, fontWeight: '800', color: '#1E2B5B' },
    btnEditar: { color: '#2563EB', fontWeight: '700' },

    scroll: { padding: 24 },
    seccionTitulo: { fontSize: 22, fontWeight: '800', color: '#111827', marginBottom: 8 },
    seccionSub: { fontSize: 15, color: '#64748B', lineHeight: 22, marginBottom: 32 },

    cardTarjeta: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#F1F5F9',
        marginBottom: 16,
        gap: 16
    },
    cardTarjetaActive: { borderColor: '#2563EB', backgroundColor: 'white' },
    logoContenedor: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center' },
    tarjetaHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
    tarjetaTipo: { fontSize: 16, fontWeight: '700', color: '#111827' },
    badgePred: { backgroundColor: '#DBEAFE', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
    textoBadgePred: { color: '#2563EB', fontSize: 9, fontWeight: '900', letterSpacing: 0.5 },
    tarjetaExp: { fontSize: 13, color: '#94A3B8' },
    radio: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#E2E8F0', alignItems: 'center', justifyContent: 'center' },
    radioActive: { backgroundColor: '#2563EB', borderColor: '#2563EB' },

    btnNuevaTarjeta: {
        backgroundColor: '#1E40AF',
        height: 64,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginTop: 16,
        ...tema.sombras.media
    },
    iconPlus: { width: 28, height: 28, borderRadius: 14, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
    textoNuevaTarjeta: { color: 'white', fontSize: 16, fontWeight: '800' },

    divisor: { height: 1, backgroundColor: '#F1F5F9', marginVertical: 32 },
    ajustesLabel: { fontSize: 11, fontWeight: '800', color: '#94A3B8', letterSpacing: 1, marginBottom: 16 },
    cardAjuste: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...tema.sombras.leve
    },
    iconAjuste: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center' },
    textoAjuste: { flex: 1, marginLeft: 16, fontSize: 15, fontWeight: '700', color: '#111827' },

    pagoSeguro: { marginTop: 40, alignItems: 'center' },
    badgeSeguro: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        gap: 10,
        marginBottom: 20
    },
    pagoSeguroTexto: { color: '#94A3B8', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
    legalTexto: { textAlign: 'center', fontSize: 13, color: '#94A3B8', lineHeight: 20, paddingHorizontal: 20 }
});
