import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable } from 'react-native';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { BotonSecundario } from '@/componentes/BotonSecundario';
import { CampoEntrada } from '@/componentes/CampoEntrada';
import { colores } from '@/constantes/colores';

export default function PantallaIngreso() {
  const [numeroHabitacion, setNumeroHabitacion] = useState('');
  const [codigoReserva, setCodigoReserva] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.contenedor}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.contenido}
        keyboardShouldPersistTaps="handled">
        <View style={styles.logo}>
          <View style={styles.iconoLogo}>
            <Ionicons name="sunny" size={32} color={colores.dorado} />
          </View>
          <Text style={styles.nombreHotel}>COSTA DEL SOL</Text>
          <Text style={styles.eslogan}>LUXURY RESORT & SPA</Text>
        </View>

        <View style={styles.formulario}>
          <Text style={styles.titulo}>Bienvenido, huésped</Text>
          <Text style={styles.subtitulo}>
            Ingresa los datos de tu estancia
          </Text>

          <CampoEntrada
            etiqueta="NÚMERO DE HABITACIÓN"
            placeholder="ej. 1024"
            valor={numeroHabitacion}
            onChangeTexto={setNumeroHabitacion}
            icono={
              <Ionicons name="bed" size={20} color={colores.dorado} />
            }
          />

          <CampoEntrada
            etiqueta="CÓDIGO DE RESERVA"
            placeholder="ej. CDS-8821"
            valor={codigoReserva}
            onChangeTexto={setCodigoReserva}
            icono={
              <Ionicons name="key" size={20} color={colores.dorado} />
            }
          />

          <Link href="/panel" asChild>
            <BotonSecundario titulo="ENTRAR" />
          </Link>

          <Link href="/reservas" asChild>
            <Pressable style={styles.enlaceReserva}>
              <Text style={styles.textoEnlace}>
                ¿Sin reserva? Reservar estancia
              </Text>
              <Ionicons name="chevron-forward" size={18} color={colores.dorado} />
            </Pressable>
          </Link>

          <View style={styles.recepcion}>
            <Ionicons name="headset" size={20} color={colores.principalClaro} />
            <Text style={styles.textoRecepcion}>Contactar recepción</Text>
          </View>
        </View>

        <Text style={styles.pie}>UNA EXPERIENCIA COSTA</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.crema,
  },
  contenido: {
    padding: 24,
    paddingBottom: 48,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 24,
  },
  iconoLogo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colores.blanco,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colores.dorado,
  },
  nombreHotel: {
    color: colores.principal,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 2,
  },
  eslogan: {
    color: colores.textoSecundario,
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 4,
  },
  formulario: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  titulo: {
    color: colores.principal,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitulo: {
    color: colores.textoSecundario,
    fontSize: 14,
    marginBottom: 24,
  },
  enlaceReserva: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 8,
  },
  textoEnlace: {
    color: colores.dorado,
    fontSize: 14,
    fontWeight: '500',
  },
  recepcion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    gap: 8,
  },
  textoRecepcion: {
    color: colores.principalClaro,
    fontSize: 14,
  },
  pie: {
    textAlign: 'center',
    color: colores.textoSecundario,
    fontSize: 12,
    letterSpacing: 2,
  },
});
