import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { colores, tema } from '@/constantes/colores';

export default function PantallaChat() {
  const router = useRouter();
  const [mensaje, setMensaje] = useState('');

  const chat = [
    { id: '1', emisor: 'recepcion', texto: 'Buenas noches, Sr. Smith. Bienvenido a Costa del Sol. ¿En qué podemos ayudarle esta noche?', hora: '19:42' },
    { id: '2', emisor: 'usuario', texto: 'Hola, me gustaría reservar una mesa en el restaurante de la azotea para cenar.', hora: '19:45', leido: true },
    { id: '3', emisor: 'recepcion', texto: 'Por supuesto. Será un placer organizarlo. ¿Para cuántas personas desea la reserva?', hora: '19:46' },
    { id: '4', emisor: 'usuario', texto: 'Solo para dos personas, por favor.', hora: '19:48', leido: true },
  ];

  return (
    <View style={styles.contenedor}>
      {/* Header Premium */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable onPress={() => router.back()} style={styles.btnAtras}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <View style={styles.avatarContenedor}>
            <Image source={{ uri: 'https://i.pravatar.cc/150?u=reception' }} style={styles.avatar} />
            <View style={styles.dotOnline} />
          </View>
          <View>
            <Text style={styles.headerNombre}>Recepción</Text>
            <Text style={styles.headerStatus}>En línea</Text>
          </View>
        </View>
        <Pressable style={styles.btnLlamada}>
          <Ionicons name="call-outline" size={24} color={colores.dorado} />
        </Pressable>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.mensajesScroll}
        >
          <View style={styles.fechaContenedor}>
            <View style={styles.linea} />
            <Text style={styles.fechaTexto}>Hoy</Text>
            <View style={styles.linea} />
          </View>

          {chat.map((msg) => (
            <View key={msg.id} style={[
              styles.contenedorMensaje,
              msg.emisor === 'usuario' ? styles.msgDerecha : styles.msgIzquierda
            ]}>
              {msg.emisor === 'recepcion' && (
                <Image source={{ uri: 'https://i.pravatar.cc/150?u=reception' }} style={styles.miniAvatar} />
              )}
              <View style={{ flexShrink: 1 }}>
                <View style={[
                  styles.burbuja,
                  msg.emisor === 'usuario' ? styles.burbujaUsuario : styles.burbujaRecepcion
                ]}>
                  <Text style={[
                    styles.textoMensaje,
                    msg.emisor === 'usuario' ? styles.textoUsuario : styles.textoRecepcion
                  ]}>
                    {msg.texto}
                  </Text>
                </View>
                <View style={[styles.infoMsg, msg.emisor === 'usuario' && { alignSelf: 'flex-end' }]}>
                  <Text style={styles.hora}>{msg.hora}</Text>
                  {msg.emisor === 'usuario' && (
                    <Ionicons name="checkmark-done" size={14} color={colores.dorado} />
                  )}
                </View>
              </View>
            </View>
          ))}

          {/* Indicador de escribiendo */}
          <View style={styles.contenedorEscribiendo}>
            <Image source={{ uri: 'https://i.pravatar.cc/150?u=reception' }} style={styles.miniAvatar} />
            <View style={styles.burbujaEscribiendo}>
              <Text style={styles.puntos}>...</Text>
            </View>
          </View>
        </ScrollView>

        {/* Footer de Entrada */}
        <View style={styles.footer}>
          <Pressable style={styles.btnMenu}>
            <Ionicons name="attach-outline" size={26} color="rgba(255,255,255,0.5)" />
          </Pressable>
          <View style={styles.contenedorInput}>
            <TextInput
              style={styles.input}
              placeholder="Escribe un mensaje..."
              placeholderTextColor="rgba(255,255,255,0.3)"
              value={mensaje}
              onChangeText={setMensaje}
            />
            <Pressable>
              <Ionicons name="happy-outline" size={24} color="rgba(255,255,255,0.5)" />
            </Pressable>
          </View>
          <Pressable style={styles.btnEnviar}>
            <Ionicons name="send" size={20} color="#1F2937" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
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
    paddingBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)'
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  btnAtras: { padding: 5, marginRight: 4 },
  avatarContenedor: { position: 'relative' },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#252420' },
  dotOnline: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#10B981', position: 'absolute', bottom: 0, right: 0, borderWidth: 2, borderColor: '#11100B' },
  headerNombre: { color: 'white', fontSize: 18, fontWeight: '700' },
  headerStatus: { color: colores.dorado, fontSize: 13, fontWeight: '600' },
  btnLlamada: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },

  mensajesScroll: { padding: 20, paddingBottom: 40 },
  fechaContenedor: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 30 },
  linea: { flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.05)' },
  fechaTexto: { color: 'rgba(255,255,255,0.3)', fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },

  contenedorMensaje: { flexDirection: 'row', marginBottom: 20, gap: 12, maxWidth: '85%' },
  msgIzquierda: { alignSelf: 'flex-start' },
  msgDerecha: { alignSelf: 'flex-end', flexDirection: 'row-reverse' },
  miniAvatar: { width: 32, height: 32, borderRadius: 16, alignSelf: 'flex-end', marginBottom: 20 },

  burbuja: { padding: 16, borderRadius: 24 },
  burbujaRecepcion: { backgroundColor: 'white', borderBottomLeftRadius: 4 },
  burbujaUsuario: { backgroundColor: '#2D4B7C', borderBottomRightRadius: 4 }, // Azul navy claro de la imagen

  textoMensaje: { fontSize: 15, lineHeight: 22 },
  textoRecepcion: { color: '#1F2937' },
  textoUsuario: { color: 'white' },

  infoMsg: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 6 },
  hora: { color: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: '600' },

  contenedorEscribiendo: { flexDirection: 'row', gap: 12, alignItems: 'center', marginTop: 10 },
  burbujaEscribiendo: { backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, borderBottomLeftRadius: 4 },
  puntos: { color: '#1F2937', fontSize: 18, fontWeight: '800', letterSpacing: 2 },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: 'transparent'
  },
  btnMenu: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  contenedorInput: {
    flex: 1,
    height: 54,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 27,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  input: { flex: 1, color: 'white', fontSize: 15 },
  btnEnviar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colores.dorado,
    alignItems: 'center',
    justifyContent: 'center',
    ...tema.sombras.dorada
  }
});
