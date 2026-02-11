import { HABITACIONES_MOCK } from '@/constantes/habitaciones';
import { useBooking } from '@/context/BookingContext';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';

export default function PantallaCalendarioReserva() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const { state, setFechas, setAdultos, setHabitacion } = useBooking();

    // Efecto para cargar la habitación en el contexto al entrar
    useEffect(() => {
        if (id) {
            const h = HABITACIONES_MOCK.find(item => item.id === id);
            if (h) setHabitacion(h);
        }
    }, [id]);

    const { fechaInicio, fechaFin, adultos, habitacion } = state;

    const diasSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    const diasMes = Array.from({ length: 30 }, (_, i) => i + 1);

    const esDiaSeleccionado = (dia: number) => dia >= fechaInicio && dia <= fechaFin;
    const esInicio = (dia: number) => dia === fechaInicio;
    const esFin = (dia: number) => dia === fechaFin;

    const manejarSeleccionDia = (dia: number) => {
        // Lógica simple de selección: si es antes que el inicio, es nuevo inicio.
        // Si es después, es nuevo fin.
        if (dia < fechaInicio) {
            setFechas(dia, fechaFin);
        } else if (dia > fechaInicio) {
            setFechas(fechaInicio, dia);
        }
    };

    const irAPago = () => {
        router.push({ pathname: '/reserva/pago', params: { id } });
    };

    return (
        <View style={styles.contenedor}>
            <Stack.Screen options={{
                title: '',
                headerStyle: { backgroundColor: colores.principal },
                headerTintColor: 'white',
                headerShadowVisible: false,
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} style={{ marginLeft: 0 }}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </Pressable>
                ),
                headerRight: () => (
                    <Ionicons name="close" size={24} color="white" onPress={() => router.dismiss()} />
                )
            }} />

            <View style={styles.headerTitulo}>
                <Text style={styles.tituloGrande}>Reserva tu Estancia</Text>
                <Text style={styles.paso}>PASO 1 DE 4</Text>
            </View>

            <View style={styles.contenido}>
                {/* Tarjetas de Fechas */}
                <View style={styles.filaFechas}>
                    <View style={[styles.cardFecha, styles.cardFechaActive]}>
                        <View style={styles.checkIcon}>
                            <Ionicons name="checkmark-circle" size={16} color={colores.dorado} />
                        </View>
                        <Text style={styles.labelFecha}>LLEGADA</Text>
                        <Text style={styles.valorFecha}>{fechaInicio} Nov</Text>
                        <Text style={styles.diaFecha}>Jueves</Text>
                    </View>
                    <View style={styles.cardFecha}>
                        <Text style={styles.labelFecha}>SALIDA</Text>
                        <Text style={styles.valorFecha}>{fechaFin} Nov</Text>
                        <Text style={styles.diaFecha}>Lunes</Text>
                    </View>
                </View>

                {/* Calendario Visual */}
                <View style={styles.calendarioContainer}>
                    <View style={styles.headerCalendario}>
                        <Text style={styles.mesCalendario}>Noviembre 2023</Text>
                        <View style={{ flexDirection: 'row', gap: 16 }}>
                            <Ionicons name="chevron-back" size={20} color="#666" />
                            <Ionicons name="chevron-forward" size={20} color="white" />
                        </View>
                    </View>

                    <View style={styles.gridDiasSemana}>
                        {diasSemana.map((d, i) => (
                            <Text key={i} style={styles.textoDiaSemana}>{d}</Text>
                        ))}
                    </View>

                    <View style={styles.gridDias}>
                        {/* Espaciado inicial simulado (empieza en Miercoles p.ej) */}
                        <View style={styles.celdaDia} /><View style={styles.celdaDia} />

                        {diasMes.map((dia) => {
                            const seleccionado = esDiaSeleccionado(dia);
                            const inicio = esInicio(dia);
                            const fin = esFin(dia);
                            const extremo = inicio || fin;

                            return (
                                <Pressable key={dia} onPress={() => manejarSeleccionDia(dia)} style={[
                                    styles.celdaDia,
                                    seleccionado && styles.celdaSeleccionada,
                                    inicio && styles.celdaInicio,
                                    fin && styles.celdaFin
                                ]}>
                                    <Text style={[
                                        styles.textoDia,
                                        seleccionado && styles.textoDiaSeleccionado,
                                        extremo && styles.textoDiaExtremo
                                    ]}>{dia}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                </View>

                {/* Selector Huéspedes */}
                <View style={styles.huespedesContainer}>
                    <Text style={styles.labelSeccion}>HUÉSPEDES</Text>
                    <View style={styles.cardHuesped}>
                        <View style={styles.iconoHuesped}>
                            <Ionicons name="person" size={20} color={colores.dorado} />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 12 }}>
                            <Text style={styles.textoHuespedTitulo}>Adultos</Text>
                            <Text style={styles.textoHuespedSub}>Mayores de 12 años</Text>
                        </View>
                        <View style={styles.contador}>
                            <Pressable onPress={() => setAdultos(Math.max(1, adultos - 1))} style={styles.botonContador}>
                                <Ionicons name="remove" size={16} color="white" />
                            </Pressable>
                            <Text style={styles.numeroContador}>{adultos}</Text>
                            <Pressable onPress={() => setAdultos(adultos + 1)} style={styles.botonContador}>
                                <Ionicons name="add" size={16} color="white" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.textoFooterInfo}>Estancia total</Text>
                    <Text style={styles.textoFooterNoches}>{fechaFin - fechaInicio} Noches</Text>
                </View>
                <View style={{ alignItems: 'flex-end', flex: 1, paddingRight: 16 }}>
                    <Text style={styles.textoFooterDesde}>Desde</Text>
                    <Text style={styles.textoFooterPrecio}>${(habitacion?.precio || 310) * (fechaFin - fechaInicio)}</Text>
                </View>

                <Pressable style={styles.botonSiguiente} onPress={() => router.push('/reserva/registro')}>
                    <Text style={styles.textoBoton}>Siguiente: Registro de Huésped</Text>
                    <Ionicons name="arrow-forward" size={18} color="white" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: colores.principal }, // #121212 aprox

    headerTitulo: { alignItems: 'center', marginBottom: 24, marginTop: -10 },
    tituloGrande: { color: 'white', fontSize: 20, fontWeight: '600' },
    paso: { color: colores.dorado, fontSize: 10, fontWeight: '700', marginTop: 4, letterSpacing: 1 },

    contenido: { paddingHorizontal: 20 },

    filaFechas: { flexDirection: 'row', gap: 16, marginBottom: 32 },
    cardFecha: {
        flex: 1, backgroundColor: '#1E1E1E', borderRadius: 16, padding: 16,
        borderWidth: 1, borderColor: '#333'
    },
    cardFechaActive: { borderColor: '#4A90E2', backgroundColor: 'rgba(74, 144, 226, 0.1)' },
    checkIcon: { position: 'absolute', top: 12, right: 12 },
    labelFecha: { color: '#888', fontSize: 10, fontWeight: '700', marginBottom: 4 },
    valorFecha: { color: 'white', fontSize: 24, fontWeight: '600', marginBottom: 2 },
    diaFecha: { color: '#666', fontSize: 12 },

    calendarioContainer: { marginBottom: 32 },
    headerCalendario: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    mesCalendario: { color: 'white', fontSize: 18, fontWeight: '600' },

    gridDiasSemana: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, paddingHorizontal: 8 },
    textoDiaSemana: { color: '#666', width: 32, textAlign: 'center', fontSize: 12 },

    gridDias: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 12 },
    celdaDia: { width: '14.28%', height: 40, alignItems: 'center', justifyContent: 'center', position: 'relative' },

    textoDia: { color: 'white', fontSize: 14 },
    textoDiaSeleccionado: { color: '#DDD' },
    textoDiaExtremo: { color: 'white', fontWeight: '700' },

    celdaSeleccionada: { backgroundColor: 'rgba(74, 144, 226, 0.2)' },
    celdaInicio: { backgroundColor: '#2563EB', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 },
    celdaFin: { backgroundColor: '#2563EB', borderTopRightRadius: 20, borderBottomRightRadius: 20 },

    huespedesContainer: {},
    labelSeccion: { color: '#666', fontSize: 12, fontWeight: '600', marginBottom: 12 },
    cardHuesped: {
        backgroundColor: '#1E1E1E', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center'
    },
    iconoHuesped: {
        width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(252, 211, 77, 0.1)',
        alignItems: 'center', justifyContent: 'center'
    },
    textoHuespedTitulo: { color: 'white', fontSize: 16, fontWeight: '600' },
    textoHuespedSub: { color: '#666', fontSize: 12 },

    contador: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    botonContador: {
        width: 32, height: 32, borderRadius: 16, backgroundColor: '#333',
        alignItems: 'center', justifyContent: 'center'
    },
    numeroContador: { color: 'white', fontSize: 16, fontWeight: '600', minWidth: 20, textAlign: 'center' },

    footer: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        backgroundColor: '#1A1814', padding: 20, paddingBottom: 30,
        borderTopWidth: 1, borderTopColor: '#333',
        flexDirection: 'row', alignItems: 'center'
    },
    textoFooterInfo: { color: '#888', fontSize: 10 },
    textoFooterNoches: { color: 'white', fontSize: 18, fontWeight: '700' },
    textoFooterDesde: { color: '#888', fontSize: 10, textAlign: 'right' },
    textoFooterPrecio: { color: 'white', fontSize: 18, fontWeight: '700' },

    botonSiguiente: {
        backgroundColor: '#2563EB', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12,
        flexDirection: 'row', alignItems: 'center', gap: 8
    },
    textoBoton: { color: 'white', fontWeight: '600' }

});
