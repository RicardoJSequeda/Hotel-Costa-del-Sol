import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { colores } from '@/constantes/colores';

export default function PantallaServicios() {
  const router = useRouter();
  const [categoria, setCategoria] = useState('Todos');

  const categorias = ['Todos', 'Spa y Bienestar', 'Gimnasio'];

  const servicios = [
    {
      id: '1',
      titulo: 'Facial Signature Gold',
      desc: 'Revitalice su piel con nuestro exclusivo tratamiento de hoja de oro de 24k diseñado...',
      precio: '$180',
      duracion: '60 min',
      imagen: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800',
      popular: true,
      tipo: 'hero',
      route: '/servicios/detalle'
    },
    {
      id: '2',
      titulo: 'Masaje de Tejido Profundo',
      desc: 'Alivie la tensión muscular crónica con presión enfocada en las capas más profundas del...',
      precio: '$140',
      duracion: '90 min',
      imagen: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db93e?q=80&w=800',
      rating: '4.9',
      tipo: 'card',
      route: '/servicios/detalle'
    },
    {
      id: '3',
      titulo: 'Entrenador Privado',
      desc: 'Sesión de entrenamiento personalizada uno a uno con un entrenador certificado y vista al...',
      precio: '$90',
      duracion: '60 min',
      imagen: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
      tipo: 'card',
      route: '/servicios/entrenador'
    },
    {
      id: '4',
      titulo: 'Cena Romántica al Atardecer',
      desc: 'Una cena de 5 platos servida en su balcón privado durante las horas del atardecer.',
      precio: '$250',
      duracion: 'Para 2 Personas',
      imagen: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800',
      tag: 'SIGNATURE',
      tipo: 'card',
      route: '/servicios/cena-romantica'
    },
    {
      id: '5',
      titulo: 'Yoga y Meditación',
      desc: 'Comience su día en armonía con el sonido rítmico del mar en nuestra sesión de amanecer.',
      precio: '$45',
      duracion: '90 min',
      imagen: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
      tipo: 'card',
      route: '/servicios/yoga'
    },
    {
      id: '6',
      titulo: 'Kids Club & Cuidado',
      desc: 'Un oasis de diversión segura para los más pequeños bajo supervisión profesional.',
      precio: '$45',
      duracion: 'por hora',
      imagen: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?q=80&w=800',
      tipo: 'card',
      route: '/servicios/kids-club'
    },
    {
      id: '7',
      titulo: 'Cata de Vinos y Quesos',
      desc: 'Descubra los sabores locales en una cata guiada por nuestro sommelier senior.',
      precio: '$75',
      duracion: '90 min',
      imagen: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
      tag: 'EXCLUSIVE',
      tipo: 'card',
      route: '/servicios/cata-vinos'
    }
  ];

  return (
    <View style={styles.contenedor}>
      {/* Custom Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandTitle}>COSTA DEL SOL</Text>
          <Text style={styles.headerMainTitle}>Servicios del Hotel</Text>
        </View>
        <View style={styles.bagContainer}>
          <Ionicons name="bag-outline" size={24} color="white" />
          <View style={styles.bagBadge} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* Search Bar */}
        <View style={styles.contenedorBusqueda}>
          <Ionicons name="search" size={20} color="rgba(255,255,255,0.4)" />
          <TextInput
            placeholder="Buscar tratamientos, cenas..."
            placeholderTextColor="rgba(255,255,255,0.3)"
            style={styles.busquedaInput}
          />
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollCategorias}>
          {categorias.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setCategoria(cat)}
              style={[styles.chip, categoria === cat && styles.chipActivo]}
            >
              <Text style={[styles.textoChip, categoria === cat && styles.textoChipActivo]}>{cat}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* List */}
        <View style={styles.grid}>
          {servicios.map((item) => (
            <Pressable
              key={item.id}
              style={[styles.card, item.tipo === 'hero' && styles.cardHero]}
              onPress={() => router.push(item.route as any)}
            >
              <Image source={{ uri: item.imagen }} style={styles.cardImage} />
              <View style={styles.cardOverlay} />

              <View style={styles.cardContent}>
                <View style={{ flex: 1 }}>
                  {item.popular && (
                    <View style={styles.badgePopular}>
                      <Text style={styles.textoPopular}>MÁS POPULAR</Text>
                    </View>
                  )}
                  {item.tag && (
                    <View style={[styles.badgePopular, { backgroundColor: '#B49B57' }]}>
                      <Text style={styles.textoPopular}>{item.tag}</Text>
                    </View>
                  )}
                  {item.rating && (
                    <View style={styles.ratingBox}>
                      <Ionicons name="star" size={12} color={colores.dorado} />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                  )}

                  <Text style={styles.cardTitle}>{item.titulo}</Text>
                  <Text style={styles.cardDesc} numberOfLines={2}>{item.desc}</Text>
                </View>

                <View style={styles.footerCard}>
                  <View>
                    <Text style={styles.labelPrecio}>Precio</Text>
                    <View style={styles.precioRow}>
                      <Text style={styles.precioText}>{item.precio}</Text>
                      <Text style={styles.duracionText}> / {item.duracion}</Text>
                    </View>
                  </View>
                  <View style={styles.btnReserva}>
                    <Text style={styles.textoBtnReserva}>Reservar Ahora</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

import { useState } from 'react';

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#0B0F1A' }, // Fondo navy extra oscuro Imagen 8

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20
  },
  brandTitle: { color: colores.dorado, fontSize: 13, fontWeight: '700', letterSpacing: 2 },
  headerMainTitle: { color: 'white', fontSize: 28, fontWeight: '800', marginTop: 4 },
  bagContainer: { width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', justifyContent: 'center' },
  bagBadge: { width: 8, height: 8, borderRadius: 4, backgroundColor: colores.dorado, position: 'absolute', top: 12, right: 12 },

  scroll: { paddingBottom: 40 },
  contenedorBusqueda: {
    marginHorizontal: 24,
    height: 54,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 27,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    marginVertical: 24
  },
  busquedaInput: { flex: 1, color: 'white', marginLeft: 12, fontSize: 15 },

  scrollCategorias: { paddingLeft: 24, marginBottom: 30 },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 15,
    marginRight: 12
  },
  chipActivo: { backgroundColor: colores.dorado },
  textoChip: { color: 'rgba(255,255,255,0.6)', fontWeight: '600', fontSize: 14 },
  textoChipActivo: { color: '#1F2937' },

  grid: { paddingHorizontal: 24, gap: 24 },
  card: { height: 260, borderRadius: 32, overflow: 'hidden', position: 'relative' },
  cardHero: { height: 320 },
  cardImage: { width: '100%', height: '100%' },
  cardOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)', backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)' },

  cardContent: { ...StyleSheet.absoluteFillObject, padding: 24, justifyContent: 'space-between' },

  badgePopular: {
    backgroundColor: colores.dorado,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 12
  },
  textoPopular: { color: '#1F2937', fontSize: 10, fontWeight: '800' },

  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    gap: 4
  },
  ratingText: { color: 'white', fontSize: 12, fontWeight: '700' },

  cardTitle: { color: 'white', fontSize: 24, fontWeight: '800', marginBottom: 8 },
  cardDesc: { color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 20 },

  footerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.03)',
    margin: -24,
    padding: 24,
    marginTop: 10
  },
  labelPrecio: { color: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: '600', marginBottom: 4 },
  precioRow: { flexDirection: 'row', alignItems: 'baseline' },
  precioText: { color: colores.dorado, fontSize: 22, fontWeight: '800' },
  duracionText: { color: 'rgba(255,255,255,0.5)', fontSize: 12 },

  btnReserva: {
    backgroundColor: colores.dorado,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: colores.dorado,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  textoBtnReserva: { color: '#1F2937', fontWeight: '800', fontSize: 13 }
});
