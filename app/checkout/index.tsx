import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { colores, tema } from '@/constantes/colores';

export default function PantallaCheckoutExpress() {
    const router = useRouter();

    const cargos = [
        { id: '1', nombre: 'Suite Ocean View', desc: '3 Noches x $200.00', precio: 600.00, icono: 'bed' },
        { id: '2', nombre: 'Room Service', desc: 'Cena 14 Oct', precio: 85.50, icono: 'restaurant' },
        { id: '3', nombre: 'Spa & Wellness', desc: 'Masaje Relajante', precio: 120.00, icono: 'leaf' },
    ];

    const subtotal = cargos.reduce((acc, current) => acc + current.precio, 0);
    const iva = 32.00;
    const impuestoHotelero = 8.00;
    const total = 845.50;

    return (
        <View style={styles.contenedor}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.botonHeader}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>
                <Text style={styles.tituloHeader}>Check-out Express</Text>
                <Pressable style={styles.botonHeader}>
                    <Ionicons name="help-circle-outline" size={24} color="white" />
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.heroSection}>
                    <Text style={styles.labelResumen}>RESUMEN DE ESTANCIA</Text>
                    <Text style={styles.habitacionTitulo}>Habitación 305</Text>
                    <View style={styles.filaUsuario}>
                        <Ionicons name="person" size={16} color="white" />
                        <Text style={styles.nombreUsuario}>Sr. Alejandro García</Text>
                    </View>
                </View>

                <View style={styles.cardTotal}>
                    <View style={styles.filaTotalHeader}>
                        <Text style={styles.totalLabel}>TOTAL A PAGAR</Text>
                        <View style={styles.badgePendiente}>
                            <Text style={styles.textoPendiente}>PENDIENTE</Text>
                        </View>
                    </View>
                    <Text style={styles.precioTotal}>
                        ${total.toFixed(2)} <Text style={styles.moneda}>USD</Text>
                    </Text>
                    <Text style={styles.notaImpuestos}>Incluye todos los impuestos y cargos por servicio.</Text>
                </View>

                <View style={styles.seccionCargos}>
                    <View style={styles.headerCargos}>
                        <Text style={styles.tituloSeccion}>Detalles de Cargos</Text>
                        <Pressable>
                            <Text style={styles.linkPdf}>Ver PDF</Text>
                        </Pressable>
                    </View>

                    {cargos.map((cargo) => (
                        <View key={cargo.id} style={styles.filaCargo}>
                            <View style={styles.iconoCargoContainer}>
                                <Ionicons name={cargo.icono as any} size={20} color={colores.dorado} />
                            </View>
                            <View style={styles.infoCargo}>
                                <Text style={styles.nombreCargo}>{cargo.nombre}</Text>
                                <Text style={styles.descCargo}>{cargo.desc}</Text>
                            </View>
                            <Text style={styles.precioCargo}>${cargo.precio.toFixed(2)}</Text>
                        </View>
                    ))}

                    <View style={styles.divisor} />

                    <View style={styles.filaImpuesto}>
                        <Text style={styles.labelImpuesto}>IVA (16%)</Text>
                        <Text style={styles.valorImpuesto}>${iva.toFixed(2)}</Text>
                    </View>
                    <View style={styles.filaImpuesto}>
                        <Text style={styles.labelImpuesto}>Impuesto Hotelero (4%)</Text>
                        <Text style={styles.valorImpuesto}>${impuestoHotelero.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.infoBanner}>
                    <Ionicons name="information-circle" size={20} color={colores.principal} />
                    <Text style={styles.textoInfoBanner}>
                        Al confirmar, el cargo se realizará automáticamente a su tarjeta terminada en **** 4242. Recibirá su factura por correo electrónico.
                    </Text>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            <View style={styles.footer}>
                <Boton
                    titulo="Confirmar y Continuar"
                    tipo="primario"
                    onPress={() => router.push('/checkout/pago')}
                    iconoDerecha={<Ionicons name="arrow-forward" size={20} color={colores.negro} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: colores.principal },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    botonHeader: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    tituloHeader: { color: 'white', fontSize: 18, fontWeight: '600' },
    scroll: { padding: 20 },
    heroSection: { marginBottom: 30, marginTop: 10 },
    labelResumen: { color: colores.dorado, fontSize: 12, fontWeight: '700', letterSpacing: 1, marginBottom: 8 },
    habitacionTitulo: { color: 'white', fontSize: 32, fontWeight: '700', marginBottom: 12 },
    filaUsuario: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    nombreUsuario: { color: 'white', fontSize: 14, opacity: 0.8 },
    cardTotal: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 24,
        marginBottom: 32,
        ...tema.sombras.dorada,
    },
    filaTotalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
    totalLabel: { color: '#888', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
    badgePendiente: { backgroundColor: '#E8F5E9', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
    textoPendiente: { color: '#2E7D32', fontSize: 10, fontWeight: '700' },
    precioTotal: { fontSize: 36, fontWeight: '700', color: colores.principal, marginBottom: 8 },
    moneda: { fontSize: 18, fontWeight: '400', color: '#888' },
    notaImpuestos: { color: '#888', fontSize: 12 },
    seccionCargos: { marginBottom: 32 },
    headerCargos: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    tituloSeccion: { color: 'white', fontSize: 18, fontWeight: '700' },
    linkPdf: { color: colores.dorado, fontSize: 14, fontWeight: '600' },
    filaCargo: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    iconoCargoContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    infoCargo: { flex: 1 },
    nombreCargo: { color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 2 },
    descCargo: { color: '#888', fontSize: 12 },
    precioCargo: { color: 'white', fontSize: 16, fontWeight: '700' },
    divisor: { height: 1, backgroundColor: 'rgba(255,255,255,0.05)', marginVertical: 20, borderStyle: 'dashed', borderRadius: 1 },
    filaImpuesto: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    labelImpuesto: { color: '#888', fontSize: 14 },
    valorImpuesto: { color: '#AAA', fontSize: 14, fontWeight: '600' },
    infoBanner: {
        backgroundColor: 'rgba(74, 144, 226, 0.1)',
        padding: 20,
        borderRadius: 16,
        flexDirection: 'row',
        gap: 12,
    },
    textoInfoBanner: { flex: 1, color: '#AAA', fontSize: 12, lineHeight: 18 },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        paddingBottom: Platform.OS === 'ios' ? 40 : 20,
        backgroundColor: colores.principal,
    },
});
