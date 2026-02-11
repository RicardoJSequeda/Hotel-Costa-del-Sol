import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import { colores } from '@/constantes/colores';
import { useAuth } from '@/context/AuthContext';

export default function PantallaPerfil() {
  const router = useRouter();
  const { usuario, cerrarSesion } = useAuth();
  const [notificaciones, setNotificaciones] = useState(true);

  const menuItems = [
    { id: '1', titulo: 'Información Personal', sub: 'Actualiza tus datos', icono: 'person-outline', ruta: '/perfil/informacion-personal' },
    { id: '2', titulo: 'Métodos de Pago', sub: 'Tarjetas y facturación', icono: 'card-outline', ruta: '/perfil/metodos-pago' },
    { id: '3', titulo: 'Idioma', sub: 'Español (ES)', icono: 'globe-outline', ruta: '/perfil/idioma' },
    { id: '4', titulo: 'Calificar Estancia', sub: 'Tu opinión nos importa', icono: 'star-outline', ruta: '/perfil/calificar-estancia' },
  ];

  return (
    <View style={styles.contenedor}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Premium */}
        <View style={styles.header}>
          <View style={styles.topActions}>
            <Pressable onPress={() => router.back()} style={styles.iconBtn}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
            <Pressable style={styles.iconBtn}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </Pressable>
          </View>

          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarBorder}>
                <Image
                  source={{ uri: 'https://i.pravatar.cc/300?u=juanperez' }}
                  style={styles.avatar}
                />
              </View>
              <View style={styles.statusDot} />
            </View>
            <Text style={styles.nombre}>{usuario?.nombre || 'Sr. Garcia'}</Text>
            <Text style={styles.correo}>{usuario?.correo || 'garcia.premium@vip.com'}</Text>

            <View style={styles.badgeOro}>
              <Ionicons name="diamond" size={14} color={colores.dorado} />
              <Text style={styles.textoBadge}>MIEMBRO PLATINUM</Text>
            </View>
          </View>
        </View>

        {/* Lista de Opciones */}
        <View style={styles.listaOpciones}>
          <Text style={styles.seccionTitulo}>Configuración de Cuenta</Text>
          {menuItems.map((item) => (
            <Pressable
              key={item.id}
              style={styles.cardOpcion}
              onPress={() => router.push(item.ruta as any)}
            >
              <View style={styles.iconoOpcion}>
                <Ionicons name={item.icono as any} size={20} color={colores.dorado} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tituloOpcion}>{item.titulo}</Text>
                <Text style={styles.subtituloOpcion}>{item.sub}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="rgba(255,255,255,0.2)" />
            </Pressable>
          ))}

          <Text style={[styles.seccionTitulo, { marginTop: 24 }]}>Preferencias</Text>
          {/* Switch de Notificaciones */}
          <View style={styles.cardOpcion}>
            <View style={styles.iconoOpcion}>
              <Ionicons name="notifications-outline" size={20} color={colores.dorado} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.tituloOpcion}>Notificaciones Push</Text>
              <Text style={styles.subtituloOpcion}>Recibir alertas en tiempo real</Text>
            </View>
            <Switch
              value={notificaciones}
              onValueChange={setNotificaciones}
              trackColor={{ false: 'rgba(255,255,255,0.1)', true: colores.dorado }}
              thumbColor="white"
            />
          </View>

          <Boton
            titulo="Cerrar Sesión"
            tipo="secundario"
            onPress={cerrarSesion}
            style={styles.btnCerrarSesion}
            textoStyle={{ color: '#EF4444' }}
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

import { Boton } from '@/componentes/Boton';

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#0B0F19' },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: '#161B28'
  },
  topActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  iconBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', justifyContent: 'center' },

  profileInfo: { alignItems: 'center' },
  avatarContainer: { position: 'relative', marginBottom: 20 },
  avatarBorder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colores.dorado,
    padding: 6,
    backgroundColor: 'rgba(212, 175, 55, 0.1)'
  },
  avatar: { width: '100%', height: '100%', borderRadius: 54 },
  statusDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#10B981',
    position: 'absolute',
    bottom: 5,
    right: 5,
    borderWidth: 3,
    borderColor: '#161B28'
  },
  nombre: { color: 'white', fontSize: 24, fontWeight: '800', marginBottom: 4 },
  correo: { color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 16 },
  badgeOro: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
    gap: 8
  },
  textoBadge: { color: colores.dorado, fontSize: 11, fontWeight: '900', letterSpacing: 1 },

  listaOpciones: { padding: 20 },
  seccionTitulo: { color: 'rgba(255,255,255,0.3)', fontSize: 12, fontWeight: '800', letterSpacing: 1, marginBottom: 16, textTransform: 'uppercase' },
  cardOpcion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161B28',
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)'
  },
  iconoOpcion: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.03)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  tituloOpcion: { fontSize: 15, fontWeight: '700', color: 'white' },
  subtituloOpcion: { fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 },
  btnCerrarSesion: { marginTop: 40, backgroundColor: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)', borderWidth: 1 }
});
