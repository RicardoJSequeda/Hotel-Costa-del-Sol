import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { colores, tema } from '@/constantes/colores';

export default function PantallaExitoCheckout() {
    const router = useRouter();

    const handleVolver = () => {
        router.dismissAll();
        router.replace('/(tabs)/concierge');
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.gradienteFondo} />

            <View style={styles.contenido}>
                <View style={styles.circuloExito}>
                    <Ionicons name="checkmark" size={60} color={colores.dorado} />
                </View>

                <Text style={styles.tituloExito}>¡Check‑out exitoso!</Text>
                <View style={styles.barraMedio} />

                <Text style={styles.agradecimiento}>
                    Gracias por hospedarse en <Text style={{ color: colores.dorado }}>Costa del Sol</Text>.
                </Text>

                <Text style={styles.subtexto}>
                    Hemos enviado su factura por correo electrónico. Puede dejar las llaves dentro de su habitación al salir.
                </Text>

                <View style={styles.cardFactura}>
                    <View style={styles.iconoFactura}>
                        <Ionicons name="receipt" size={20} color={colores.dorado} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.numeroFactura}>Factura #CS-9021</Text>
                        <Text style={styles.emailFactura}>Enviada a juan@email.com</Text>
                    </View>
                    <Ionicons name="checkmark-circle" size={20} color="#666" />
                </View>

                <View style={styles.botones}>
                    <Boton
                        titulo="Volver al Inicio"
                        tipo="primario"
                        onPress={handleVolver}
                        iconoDerecha={<Ionicons name="home-outline" size={20} color={colores.negro} />}
                        style={styles.botonPrincipal}
                    />
                    <Boton
                        titulo="Calificar Estancia"
                        tipo="outline"
                        onPress={() => { }}
                        iconoDerecha={<Ionicons name="star-outline" size={20} color={colores.dorado} />}
                        style={styles.botonSecundario}
                        textoStyle={{ color: colores.dorado }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: '#1A1814' },
    gradienteFondo: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#1A1814',
        opacity: 0.9,
    },
    contenido: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circuloExito: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colores.dorado,
        marginBottom: 40,
        ...tema.sombras.dorada,
    },
    tituloExito: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16,
    },
    barraMedio: {
        width: 60,
        height: 3,
        backgroundColor: colores.dorado,
        borderRadius: 2,
        marginBottom: 32,
    },
    agradecimiento: {
        color: '#888',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 26,
        marginBottom: 16,
    },
    subtexto: {
        color: '#666',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 40,
    },
    cardFactura: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        padding: 20,
        marginBottom: 60,
    },
    iconoFactura: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    numeroFactura: { color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 2 },
    emailFactura: { color: '#666', fontSize: 12 },
    botones: { width: '100%', gap: 16 },
    botonPrincipal: { height: 60, borderRadius: 30 },
    botonSecundario: { height: 60, borderRadius: 30, borderColor: 'rgba(212,175,55,0.3)' },
});
