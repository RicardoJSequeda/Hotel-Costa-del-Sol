import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { colores, tema } from '@/constantes/colores';

const nivelesUrgencia = [
  { id: 'normal', etiqueta: 'Normal', icono: 'checkmark-circle-outline' as const, color: '#10B981' },
  { id: 'alta', etiqueta: 'Alta', icono: 'alert-circle-outline' as const, color: '#FCD34D' },
  { id: 'critica', etiqueta: 'Crítica', icono: 'warning-outline' as const, color: '#EF4444' },
];

export default function PantallaReportarProblema() {
  const router = useRouter();
  const [urgencia, setUrgencia] = useState('normal');
  const [detalles, setDetalles] = useState('');

  return (
    <View style={styles.contenedor}>
      {/* Header Personalizado */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.btnHeader}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
        <View style={styles.headerTitleCol}>
          <Text style={styles.headerTitle}>Reportar Problema</Text>
          <Text style={styles.headerSub}>Habitacion 304 • Suite Presidencial</Text>
        </View>
        <Pressable style={styles.btnHeader}>
          <Ionicons name="time-outline" size={24} color="white" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contenido}>
        <View style={styles.emergencyBanner}>
          <View style={styles.dotRojo} />
          <Text style={styles.emergenciaLabel}>EMERGENCIA INMEDIATA (SOS)</Text>
        </View>

        <View style={styles.emergenciaGrid}>
          <Pressable style={[styles.sosCard, { backgroundColor: '#FF1A1A' }]}>
            <Ionicons name="medical" size={20} color="white" />
            <Text style={styles.sosTitle}>Médica</Text>
          </Pressable>
          <Pressable style={[styles.sosCard, { backgroundColor: '#1E293B' }]}>
            <Ionicons name="shield-checkmark" size={20} color="white" />
            <Text style={styles.sosTitle}>Seguridad</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/ayuda')} style={[styles.sosCard, { backgroundColor: '#B49B57' }]}>
            <Ionicons name="help-circle" size={20} color="white" />
            <Text style={styles.sosTitle}>Ayuda / FAQ</Text>
          </Pressable>
        </View>

        <View style={styles.divider} />

        <Text style={styles.tituloHeader}>Reportar Daño o Incidencia</Text>
        <Text style={styles.descripcionHeader}>
          ¿Algo no funciona en su habitación? Descríbalo aquí y lo arreglaremos de inmediato.
        </Text>

        {/* Categoria */}
        <Text style={styles.etiquetaSecundaria}>TIPO DE PROBLEMA</Text>
        <Pressable style={styles.selectorDropdown}>
          <Text style={styles.textoDropdown}>Seleccione una categoría...</Text>
          <Ionicons name="chevron-down" size={20} color={colores.dorado} />
        </Pressable>

        {/* Urgencia */}
        <Text style={styles.etiquetaSecundaria}>NIVEL DE URGENCIA</Text>
        <View style={styles.gridUrgencias}>
          {nivelesUrgencia.map((n) => (
            <Pressable
              key={n.id}
              onPress={() => setUrgencia(n.id)}
              style={[
                styles.cardUrgencia,
                urgencia === n.id && { borderColor: n.color, backgroundColor: n.color + '10' }
              ]}>
              <View style={[styles.circuloIcono, urgencia === n.id && { backgroundColor: n.color + '20' }]}>
                <Ionicons
                  name={n.icono}
                  size={24}
                  color={urgencia === n.id ? n.color : 'white'}
                />
              </View>
              <Text style={[styles.textoUrgencia, urgencia === n.id && { color: n.color }]}>
                {n.etiqueta}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Descripción */}
        <Text style={styles.etiquetaSecundaria}>DESCRIPCIÓN</Text>
        <View style={styles.contenedorInput}>
          <TextInput
            style={styles.areaTexto}
            placeholder="Por favor, describa el problema con detalle para traer las herramientas correctas..."
            placeholderTextColor="rgba(255,255,255,0.3)"
            value={detalles}
            onChangeText={setDetalles}
            multiline
          />
        </View>

        {/* Fotos */}
        <Text style={styles.etiquetaSecundaria}>SUBIR FOTO <Text style={{ fontWeight: '400', color: 'rgba(255,255,255,0.3)' }}>(Opcional)</Text></Text>
        <View style={styles.filaFotos}>
          <Pressable style={styles.btnAnadirFoto}>
            <Ionicons name="camera" size={28} color={colores.dorado} />
            <Text style={styles.textoAnadir}>AÑADIR</Text>
          </Pressable>

          <View style={styles.previewFoto}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200' }}
              style={styles.imgPreview}
            />
            <Pressable style={styles.btnEliminarFoto}>
              <Ionicons name="close" size={14} color="white" />
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.btnEnviar}>
          <Text style={styles.textoBtnEnviar}>Enviar Reporte</Text>
          <Ionicons name="send" size={18} color="white" />
        </Pressable>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#11100B' }, // Tono café oscuro de la imagen
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20
  },
  btnHeader: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  headerTitleCol: { alignItems: 'center' },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  headerSub: { color: colores.dorado, fontSize: 12, marginTop: 4, fontWeight: '600' },

  contenido: { paddingHorizontal: 24, paddingBottom: 40 },
  emergencyBanner: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, marginTop: 10 },
  dotRojo: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#EF4444', marginRight: 8 },
  emergenciaLabel: { fontSize: 10, fontWeight: '800', color: '#EF4444', letterSpacing: 1 },

  emergenciaGrid: { flexDirection: 'row', gap: 10, marginBottom: 30 },
  sosCard: { flex: 1, height: 50, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  sosTitle: { color: 'white', fontSize: 13, fontWeight: '700' },

  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: 25 },

  tituloHeader: { color: 'white', fontSize: 24, fontWeight: '800' },
  descripcionHeader: { color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 22, marginTop: 8, marginBottom: 30 },

  etiquetaSecundaria: { color: 'white', fontSize: 13, fontWeight: '700', letterSpacing: 1, marginBottom: 16, marginTop: 10 },

  selectorDropdown: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    height: 64,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 30
  },
  textoDropdown: { color: 'rgba(255,255,255,0.6)', fontSize: 16 },

  gridUrgencias: { flexDirection: 'row', gap: 12, marginBottom: 30 },
  cardUrgencia: {
    flex: 1,
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  circuloIcono: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  textoUrgencia: { color: 'white', fontSize: 14, fontWeight: '700' },

  contenedorInput: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 30
  },
  areaTexto: {
    color: 'white',
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
  },

  filaFotos: { flexDirection: 'row', gap: 16, marginBottom: 40 },
  btnAnadirFoto: {
    width: 100,
    height: 100,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.2)',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  textoAnadir: { color: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: '800' },
  previewFoto: { width: 100, height: 100, borderRadius: 24, overflow: 'hidden', position: 'relative' },
  imgPreview: { width: '100%', height: '100%' },
  btnEliminarFoto: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnEnviar: {
    backgroundColor: '#0F172A',
    height: 64,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    ...tema.sombras.media
  },
  textoBtnEnviar: { color: 'white', fontSize: 18, fontWeight: '700' }
});
