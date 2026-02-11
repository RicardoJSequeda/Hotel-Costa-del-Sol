import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { TarjetaHabitacion } from '@/componentes/TarjetaHabitacion';
import { colores } from '@/constantes/colores';
import { HABITACIONES_MOCK, HabitacionVenta } from '@/constantes/habitaciones';

export default function PantallaReservas() {
  const router = useRouter();
  const [modalFiltrosVisible, setModalFiltrosVisible] = useState(false);

  // Estados de Filtro
  const [precioMax, setPrecioMax] = useState<string>('');
  const [capacidad, setCapacidad] = useState<number>(0); // 0 = cualquiera
  const [camas, setCamas] = useState<number>(0);
  const [banos, setBanos] = useState<number>(0);
  const [tipoBusqueda, setTipoBusqueda] = useState(''); // Búsqueda por texto (nombre)

  // Lógica de Filtrado
  const habitacionesFiltradas = useMemo(() => {
    return HABITACIONES_MOCK.filter(h => {
      const cumplePrecio = precioMax ? h.precio <= parseInt(precioMax) : true;
      const cumpleCapacidad = capacidad ? h.capacidad >= capacidad : true;
      const cumpleCamas = camas ? h.camas >= camas : true;
      const cumpleBanos = banos ? h.banos >= banos : true;
      const cumpleTexto = tipoBusqueda
        ? h.nombre.toLowerCase().includes(tipoBusqueda.toLowerCase()) ||
        h.tipo.toLowerCase().includes(tipoBusqueda.toLowerCase())
        : true;

      return cumplePrecio && cumpleCapacidad && cumpleCamas && cumpleBanos && cumpleTexto;
    });
  }, [precioMax, capacidad, camas, banos, tipoBusqueda]);

  const limpiarFiltros = () => {
    setPrecioMax('');
    setCapacidad(0);
    setCamas(0);
    setBanos(0);
    setTipoBusqueda('');
  };

  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{
        title: 'Reservar Estancia',
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: '600' }
      }} />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header Visual */}
        <View style={styles.headerHero}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop' }}
            style={styles.imagenHeader}
          />
          <View style={styles.overlayHeader} />
          <View style={styles.textoHeaderContainer}>
            <Text style={styles.tituloHeader}>Encuentra tu{'\n'}Santuario</Text>
          </View>
        </View>

        {/* Buscador Simple y Botón Filtros */}
        <View style={styles.buscador}>
          <View style={styles.inputContainer}>
            <Ionicons name="search" size={20} color={colores.textoSecundario} />
            <TextInput
              style={styles.inputText}
              placeholder="Buscar por nombre, tipo..."
              placeholderTextColor="#999"
              value={tipoBusqueda}
              onChangeText={setTipoBusqueda}
            />
          </View>

          <Pressable style={styles.botonFiltros} onPress={() => setModalFiltrosVisible(true)}>
            <Ionicons name="options" size={24} color={colores.dorado} />
            <Text style={styles.textoFiltro}>Filtros</Text>
          </Pressable>
        </View>

        {/* Resumen Filtros Activos */}
        {(precioMax || capacidad > 0 || camas > 0 || banos > 0) && (
          <ScrollView horizontal style={styles.chipsContainer} showsHorizontalScrollIndicator={false}>
            {precioMax ? <ChipFiltro label={`Max $${precioMax}`} /> : null}
            {capacidad > 0 ? <ChipFiltro label={`${capacidad}+ Personas`} /> : null}
            {camas > 0 ? <ChipFiltro label={`${camas}+ Camas`} /> : null}
            {banos > 0 ? <ChipFiltro label={`${banos}+ Baños`} /> : null}
            <Pressable onPress={limpiarFiltros}>
              <Text style={{ color: colores.doradoOscuro, marginLeft: 8, fontSize: 12, fontWeight: '600' }}>Limpiar</Text>
            </Pressable>
          </ScrollView>
        )}

        {/* Lista de Resultados */}
        <View style={styles.listaHabitaciones}>
          <Text style={styles.tituloSeccion}>
            {habitacionesFiltradas.length} Habitaciones Encontradas
          </Text>

          {habitacionesFiltradas.map((hab) => (
            <TarjetaHabitacion key={hab.id} habitacion={hab} />
          ))}

          {habitacionesFiltradas.length === 0 && (
            <View style={{ alignItems: 'center', marginTop: 40 }}>
              <Ionicons name="search-outline" size={48} color="#CCC" />
              <Text style={{ color: '#888', marginTop: 10 }}>No se encontraron habitaciones con estos criterios.</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Modal de Filtros Avanzados */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFiltrosVisible}
        onRequestClose={() => setModalFiltrosVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.headerModal}>
              <Text style={styles.tituloModal}>Filtros Avanzados</Text>
              <Pressable onPress={() => setModalFiltrosVisible(false)}>
                <Ionicons name="close" size={24} color={colores.principal} />
              </Pressable>
            </View>

            <ScrollView>
              <Text style={styles.labelFiltro}>Precio Máximo (por noche)</Text>
              <TextInput
                style={styles.inputFiltro}
                keyboardType="numeric"
                placeholder="$2000"
                value={precioMax}
                onChangeText={setPrecioMax}
              />

              <FiltroContador label="Capacidad (Personas)" valor={capacidad} setValor={setCapacidad} />
              <FiltroContador label="Camas Mínimas" valor={camas} setValor={setCamas} />
              <FiltroContador label="Baños Mínimos" valor={banos} setValor={setBanos} />

            </ScrollView>

            <View style={styles.footerModal}>
              <Pressable style={styles.botonLimpiar} onPress={limpiarFiltros}>
                <Text style={styles.textoLimpiar}>Limpiar</Text>
              </Pressable>
              <Pressable style={styles.botonAplicar} onPress={() => setModalFiltrosVisible(false)}>
                <Text style={styles.textoAplicar}>Ver Resultados</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}

function ChipFiltro({ label }: { label: string }) {
  return (
    <View style={{ backgroundColor: colores.doradoSuave, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6, marginRight: 8, borderWidth: 1, borderColor: colores.dorado }}>
      <Text style={{ color: colores.doradoOscuro, fontSize: 10, fontWeight: '700' }}>{label}</Text>
    </View>
  );
}

function FiltroContador({ label, valor, setValor }: { label: string, valor: number, setValor: (v: number) => void }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.labelFiltro}>{label}</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <Pressable
            key={num}
            onPress={() => setValor(num)}
            style={[styles.botonContador, valor === num && styles.botonContadorActivo]}
          >
            <Text style={[styles.textoContador, valor === num && styles.textoContadorActivo]}>
              {num === 0 ? 'Todos' : `${num}+`}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function TarjetaHabitacionVenta({ habitacion }: { habitacion: HabitacionVenta }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: habitacion.imagen }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTipo}>{habitacion.tipo}</Text>
          <Text style={styles.cardTitle}>{habitacion.nombre}</Text>
          <View style={styles.cardDetalles}>
            <Text style={styles.cardDetalleTexto}>{habitacion.capacidad} Pers • {habitacion.camas} Cama(s) • {habitacion.banos} Baño(s)</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end', minWidth: 80 }}>
          <Text style={styles.cardPrecio}>${habitacion.precio}</Text>
          <Text style={styles.cardNoche}>/ noche</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#F5F5F5' },

  headerHero: { height: 200, position: 'relative' },
  imagenHeader: { ...StyleSheet.absoluteFillObject },
  overlayHeader: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
  textoHeaderContainer: { position: 'absolute', bottom: 40, left: 24 },
  tituloHeader: { color: 'white', fontSize: 28, fontWeight: '700' },

  buscador: {
    marginHorizontal: 20, marginTop: -25, backgroundColor: 'white', borderRadius: 16, padding: 12,
    flexDirection: 'row', alignItems: 'center', gap: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5
  },
  inputContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9F9F9', borderRadius: 10, paddingHorizontal: 10 },
  inputText: { flex: 1, paddingVertical: 12, marginLeft: 8, fontSize: 14, color: colores.principal },

  botonFiltros: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 8 },
  textoFiltro: { color: colores.doradoOscuro, fontWeight: '600', fontSize: 14 },

  chipsContainer: { paddingHorizontal: 24, marginTop: 12 },

  listaHabitaciones: { padding: 24 },
  tituloSeccion: { fontSize: 14, fontWeight: '600', color: '#888', marginBottom: 16 },



  // Estilos Modal
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: 'white', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, paddingBottom: 40, height: '70%' },
  headerModal: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  tituloModal: { fontSize: 20, fontWeight: '700', color: colores.principal },

  labelFiltro: { fontSize: 14, fontWeight: '600', color: colores.principal, marginBottom: 12, marginTop: 12 },
  inputFiltro: { backgroundColor: '#F5F5F5', padding: 16, borderRadius: 12, fontSize: 16 },

  botonContador: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12, backgroundColor: '#F5F5F5', borderWidth: 1, borderColor: '#EEE' },
  botonContadorActivo: { backgroundColor: colores.dorado, borderColor: colores.dorado },
  textoContador: { fontSize: 14, fontWeight: '600', color: '#666' },
  textoContadorActivo: { color: colores.negro },

  footerModal: { marginTop: 'auto', flexDirection: 'row', gap: 16 },
  botonLimpiar: { flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' },
  textoLimpiar: { color: '#666', fontWeight: '600' },
  botonAplicar: { flex: 2, backgroundColor: colores.principal, borderRadius: 16, padding: 16, alignItems: 'center' },
  textoAplicar: { color: colores.dorado, fontWeight: '700' },

});
