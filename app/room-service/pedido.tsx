import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
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

import { Boton } from '@/componentes/Boton';
import { colores, tema } from '@/constantes/colores';
import { useFood } from '@/context/FoodContext';

export default function PantallaPedido() {
    const router = useRouter();
    const { carrito, actualizarCantidad, removerDelCarrito, total, limpiarCarrito } = useFood();
    const [notas, setNotas] = useState('');

    const cargoServicio = total * 0.10;
    const finalTotal = total + cargoServicio;

    if (carrito.length === 0) {
        return (
            <View style={styles.contenedor}>
                <Stack.Screen options={{ headerShown: false }} />
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()} style={styles.iconBtn}>
                        <Ionicons name="chevron-back" size={24} color={colores.principal} />
                    </Pressable>
                    <Text style={[styles.headerTitle, { color: colores.principal }]}>Tu Pedido</Text>
                    <View style={styles.iconBtn} />
                </View>
                <View style={styles.emptyContainer}>
                    <Ionicons name="cart-outline" size={80} color="#CCC" />
                    <Text style={styles.emptyText}>Tu carrito está vacío</Text>
                    <Boton
                        titulo="Volver al Menú"
                        tipo="primario"
                        onPress={() => router.back()}
                        style={{ marginTop: 20, width: 200 }}
                    />
                </View>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.contenedor}
        >
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.iconBtn}>
                    <Ionicons name="chevron-back" size={24} color={colores.principal} />
                </Pressable>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.headerTitle, { color: colores.principal }]}>Tu Pedido</Text>
                    <Text style={styles.roomLabel}>Habitación 302</Text>
                </View>
                <Pressable onPress={limpiarCarrito}>
                    <Text style={styles.limpiarText}>Limpiar</Text>
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

                {/* Banner Tiempo Estimado */}
                <View style={styles.bannerTiempo}>
                    <View style={styles.relojCircle}>
                        <Ionicons name="time-outline" size={24} color="#3B82F6" />
                    </View>
                    <View style={styles.tiempoInfo}>
                        <Text style={styles.tiempoLabel}>TIEMPO ESTIMADO</Text>
                        <Text style={styles.tiempoValor}>
                            25-30 min <Text style={{ fontWeight: '400', color: '#888' }}>a tu habitación</Text>
                        </Text>
                    </View>
                </View>

                <Text style={styles.seccionTitulo}>PLATOS SELECCIONADOS</Text>

                {carrito.map(item => (
                    <View key={item.id} style={styles.platoCard}>
                        <Image source={{ uri: item.imagen }} style={styles.platoThumb} />
                        <View style={styles.platoInfo}>
                            <View style={styles.platoHeader}>
                                <Text style={styles.platoNombre}>{item.nombre}</Text>
                                <Pressable onPress={() => removerDelCarrito(item.id)}>
                                    <Ionicons name="close" size={20} color="#AAA" />
                                </Pressable>
                            </View>
                            <Text style={styles.platoPrecio}>${item.precio.toFixed(2)}</Text>
                            <View style={styles.selectorCant}>
                                <Pressable onPress={() => actualizarCantidad(item.id, -1)} style={styles.cantBtn}>
                                    <Ionicons name="remove" size={20} color={colores.principal} />
                                </Pressable>
                                <Text style={styles.cantTexto}>{item.cantidad}</Text>
                                <Pressable onPress={() => actualizarCantidad(item.id, 1)} style={styles.cantBtn}>
                                    <Ionicons name="add" size={20} color="white" />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                ))}

                {/* Notas Especiales */}
                <View style={styles.seccionNotas}>
                    <View style={styles.rowNotas}>
                        <Ionicons name="menu-outline" size={18} color={colores.principal} />
                        <Text style={styles.notasLabel}>NOTAS ESPECIALES</Text>
                    </View>
                    <TextInput
                        style={styles.notasInput}
                        placeholder="Ej. Sin cebolla, alergia a nueces, salsa aparte..."
                        multiline
                        value={notas}
                        onChangeText={setNotas}
                        placeholderTextColor="#AAA"
                    />
                </View>

                {/* Resumen de Pago */}
                <View style={styles.resumenContainer}>
                    <View style={styles.resumenFila}>
                        <Text style={styles.resumenLabel}>Subtotal</Text>
                        <Text style={styles.resumenValor}>${total.toFixed(2)}</Text>
                    </View>
                    <View style={styles.resumenFila}>
                        <Text style={styles.resumenLabel}>Servicio (10%)</Text>
                        <Text style={styles.resumenValor}>${cargoServicio.toFixed(2)}</Text>
                    </View>
                    <View style={styles.divisor} />
                    <View style={styles.resumenFila}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalValor}>${finalTotal.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>

            <View style={styles.footer}>
                <Pressable
                    onPress={() => router.push('/reserva/exito')} // Simulating success
                    style={styles.btnConfirmar}
                >
                    <Text style={styles.textoBtnConfirmar}>Confirmar Pedido</Text>
                    <View style={styles.badgePrecioFinal}>
                        <Text style={styles.textoPrecioFinal}>${finalTotal.toFixed(2)}</Text>
                    </View>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
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
        backgroundColor: 'white',
    },
    iconBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    headerTitle: { fontSize: 18, fontWeight: '800' },
    roomLabel: { fontSize: 12, color: '#3B82F6', fontWeight: '600' },
    limpiarText: { color: '#EF4444', fontWeight: '600' },

    scroll: { padding: 20 },

    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 100 },
    emptyText: { color: '#94A3B8', fontSize: 18, marginTop: 16, fontWeight: '600' },

    bannerTiempo: {
        flexDirection: 'row',
        backgroundColor: '#EFF6FF',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DBEAFE',
        marginBottom: 24
    },
    relojCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tiempoInfo: { marginLeft: 16 },
    tiempoLabel: { fontSize: 10, color: '#64748B', fontWeight: '800', letterSpacing: 0.5 },
    tiempoValor: { fontSize: 16, color: '#1E293B', fontWeight: '700' },

    seccionTitulo: { fontSize: 12, fontWeight: '800', color: '#64748B', letterSpacing: 1, marginBottom: 16 },

    platoCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 12,
        marginBottom: 16,
        ...tema.sombras.media
    },
    platoThumb: { width: 80, height: 80, borderRadius: 16 },
    platoInfo: { flex: 1, marginLeft: 16, justifyContent: 'space-between' },
    platoHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    platoNombre: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
    platoPrecio: { fontSize: 15, color: '#3B82F6', fontWeight: '700' },

    selectorCant: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        borderRadius: 20,
        padding: 4,
        alignSelf: 'flex-start'
    },
    cantBtn: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    cantTexto: { marginHorizontal: 12, fontWeight: '700', color: '#1E293B' },

    seccionNotas: { marginTop: 8, marginBottom: 24 },
    rowNotas: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
    notasLabel: { fontSize: 12, fontWeight: '800', color: '#64748B' },
    notasInput: {
        backgroundColor: '#F1F5F9',
        borderRadius: 16,
        padding: 16,
        height: 80,
        fontSize: 14,
        color: '#1E293B',
        textAlignVertical: 'top'
    },

    resumenContainer: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 24,
        marginBottom: 20,
        ...tema.sombras.media
    },
    resumenFila: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    resumenLabel: { color: '#64748B', fontSize: 14 },
    resumenValor: { color: '#1E293B', fontSize: 14, fontWeight: '700' },
    divisor: { height: 1, backgroundColor: '#F1F5F9', marginVertical: 8 },
    totalLabel: { fontSize: 18, fontWeight: '800', color: '#1E293B' },
    totalValor: { fontSize: 22, fontWeight: '800', color: '#2563EB' },

    footer: { padding: 20, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#F1F5F9' },
    btnConfirmar: {
        backgroundColor: '#2563EB',
        height: 60,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    textoBtnConfirmar: { color: 'white', fontSize: 16, fontWeight: '700', flex: 1, textAlign: 'center' },
    badgePrecioFinal: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8
    },
    textoPrecioFinal: { color: 'white', fontWeight: '700' }
});
