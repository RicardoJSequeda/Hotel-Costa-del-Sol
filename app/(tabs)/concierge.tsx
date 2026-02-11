import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/componentes/Boton';
import { ProtectedRoute } from '@/componentes/ProtectedRoute';
import { tema } from '@/constantes/colores';

export default function PantallaConcierge() {
    return (
        <ProtectedRoute>
            <ScrollView
                style={styles.contenedor}
                contentContainerStyle={styles.contenido}
                showsVerticalScrollIndicator={false}
            >
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="sparkles" size={32} color={tema.colores.dorado} />
                    </View>
                    <Text style={styles.titulo}>Servicio de Concierge</Text>
                    <Text style={styles.subtitulo}>Experiencias exclusivas a su medida</Text>
                </View>

                {/* Hero Card/Feature */}
                <View style={styles.tarjeta}>
                    <Text style={styles.tarjetaTitulo}>Atención Personalizada 24/7</Text>
                    <Text style={styles.tarjetaTexto}>
                        Nuestro equipo de expertos está a su disposición para coordinar cenas en los mejores restaurantes,
                        tours privados, traslados de lujo y cualquier requerimiento especial.
                    </Text>

                    <View style={styles.divisor} />

                    <View style={styles.filaServicio}>
                        <Ionicons name="restaurant-outline" size={24} color={tema.colores.doradoOscuro} />
                        <Text style={styles.servicioTexto}>Reservas en Restaurantes Gourmet</Text>
                    </View>
                    <View style={styles.filaServicio}>
                        <Ionicons name="car-outline" size={24} color={tema.colores.doradoOscuro} />
                        <Text style={styles.servicioTexto}>Transporte Privado de Lujo</Text>
                    </View>
                    <View style={styles.filaServicio}>
                        <Ionicons name="wine-outline" size={24} color={tema.colores.doradoOscuro} />
                        <Text style={styles.servicioTexto}>Eventos y Experiencias Locales</Text>
                    </View>
                </View>

                {/* Call to Action */}
                <View style={styles.footer}>
                    <Boton
                        titulo="Hablar con un Agente"
                        onPress={() => { }}
                        tipo="primario"
                        size="lg"
                        iconoIzquierda={<Ionicons name="chatbubbles-outline" size={20} color={tema.colores.principal} />}
                    />
                    <Text style={styles.footerNota}>
                        Tiempo estimado de respuesta: Inmediato
                    </Text>
                </View>
            </ScrollView>
        </ProtectedRoute>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: tema.colores.principal,
    },
    contenido: {
        padding: tema.espaciado.lg,
        paddingBottom: tema.espaciado.xxl,
    },
    header: {
        alignItems: 'center',
        marginTop: tema.espaciado.xl,
        marginBottom: tema.espaciado.xl,
    },
    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: tema.bordes.full,
        backgroundColor: tema.colores.doradoSuave,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: tema.espaciado.md,
    },
    titulo: {
        ...tema.tipografia.h2,
        color: tema.colores.texto,
        textAlign: 'center',
    },
    subtitulo: {
        ...tema.tipografia.cuerpo,
        color: tema.colores.doradoOscuro,
        textAlign: 'center',
        marginTop: 4,
    },
    tarjeta: {
        backgroundColor: tema.colores.principalClaro,
        borderRadius: tema.bordes.lg,
        padding: tema.espaciado.lg,
        borderWidth: 1,
        borderColor: tema.colores.bordeDorado,
        marginBottom: tema.espaciado.xl,
    },
    tarjetaTitulo: {
        ...tema.tipografia.h3,
        color: tema.colores.dorado,
        marginBottom: tema.espaciado.sm,
    },
    tarjetaTexto: {
        ...tema.tipografia.pequeno,
        color: tema.colores.textoSecundario,
        lineHeight: 22,
    },
    divisor: {
        height: 1,
        backgroundColor: tema.colores.borde,
        marginVertical: tema.espaciado.lg,
    },
    filaServicio: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: tema.espaciado.md,
    },
    servicioTexto: {
        ...tema.tipografia.cuerpo,
        color: tema.colores.texto,
        marginLeft: tema.espaciado.md,
    },
    footer: {
        marginTop: tema.espaciado.md,
    },
    footerNota: {
        ...tema.tipografia.pieDepagina,
        color: tema.colores.textoTerciario,
        textAlign: 'center',
        marginTop: tema.espaciado.md,
    },
});
