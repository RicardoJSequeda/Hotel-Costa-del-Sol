import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { colores, tema } from '@/constantes/colores';
import { useFood } from '@/context/FoodContext';

const categorias = ['Todo', 'Desayunos', 'Almuerzos', 'Bebidas'];

export default function PantallaComidaHabitacion() {
  const router = useRouter();
  const { agregarAlCarrito, actualizarCantidad, carrito, total, conteoCarts } = useFood();
  const [categoriaActiva, setCategoriaActiva] = useState('Todo');

  const especialDelChef = {
    id: 'wagyu-1',
    nombre: 'Bife de Chorizo Wagyu',
    descripcion: 'Puré de trufas, espárragos, reducción de vino tinto.',
    precio: 68.00,
    imagen: 'https://images.unsplash.com/photo-1546248384-933333333333?q=80&w=800',
  };

  const almuerzos = [
    {
      id: 'alm-1',
      nombre: 'Calamares Mediterráneos',
      descripcion: 'Servidos con salsa tártara casera y rodajas de limón asado.',
      precio: 18.00,
      imagen: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=400',
    },
    {
      id: 'alm-2',
      nombre: 'Salmón del Atlántico',
      descripcion: 'Sellado a la sartén, ensalada de quinoa, salsa de mantequilla de...',
      precio: 32.00,
      imagen: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400',
    },
    {
      id: 'alm-3',
      nombre: 'Pizza de Trufa y Hongos',
      descripcion: 'Hongos silvestres, aceite de trufa, mozzarella, tomillo fresco.',
      precio: 26.00,
      imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400',
    }
  ];

  const desayunos = [
    {
      id: 'des-1',
      nombre: 'Bowl Saludable',
      descripcion: 'Mezcla de verdes, palta, tomates cherry y vinagreta balsámica.',
      precio: 16.00,
      imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400',
    }
  ];

  const getCantidad = (id: string) => {
    return carrito.find(item => item.id === id)?.cantidad || 0;
  };

  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Custom Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
        <Text style={styles.headerTitle}>Menú Room Service</Text>
        <Pressable style={styles.iconBtn}>
          <Ionicons name="search" size={22} color="white" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Categorías */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriasScroll}>
          {categorias.map(cat => (
            <Pressable
              key={cat}
              onPress={() => setCategoriaActiva(cat)}
              style={[styles.catChip, categoriaActiva === cat && styles.catChipActivo]}
            >
              <Text style={[styles.catText, categoriaActiva === cat && styles.catTextActivo]}>{cat}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Especiales del Chef */}
        <View style={[styles.sectionHeader, { marginTop: 10 }]}>
          <Text style={styles.sectionTitle}>Especiales del Chef</Text>
          <Text style={styles.verTodo}>Ver todo</Text>
        </View>

        <Pressable style={styles.heroCard} onPress={() => agregarAlCarrito(especialDelChef)}>
          <Image source={{ uri: especialDelChef.imagen }} style={styles.heroImage} />
          <View style={styles.heroGradient} />
          <View style={styles.heroContent}>
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>POPULAR</Text>
            </View>
            <View style={styles.heroInfoRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.heroTitle}>Bife de Chorizo Wagyu</Text>
                <Text style={styles.heroDesc} numberOfLines={1}>{especialDelChef.descripcion}</Text>
              </View>
              <Text style={styles.heroPrice}>${especialDelChef.precio.toFixed(2)}</Text>
            </View>
            <View style={styles.addBtnCircle}>
              <Ionicons name="add" size={24} color="white" />
            </View>
          </View>
        </Pressable>

        {/* Desayunos */}
        <Text style={styles.sectionTitleLarge}>Desayunos</Text>
        {desayunos.map(item => {
          const cant = getCantidad(item.id);
          return (
            <View key={item.id} style={styles.itemCard}>
              <Image source={{ uri: item.imagen }} style={styles.itemThumb} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemNombre}>{item.nombre}</Text>
                <Text style={styles.itemDesc}>{item.descripcion}</Text>
                <View style={styles.itemFooter}>
                  <Text style={styles.itemPrecio}>${item.precio.toFixed(2)}</Text>
                  <View style={styles.selectorCant}>
                    <Pressable onPress={() => actualizarCantidad(item.id, -1)} style={styles.cantBtn}>
                      <Ionicons name="remove" size={18} color={colores.dorado} />
                    </Pressable>
                    <Text style={styles.cantTexto}>{cant}</Text>
                    <Pressable onPress={() => agregarAlCarrito(item)} style={styles.cantBtn}>
                      <Ionicons name="add" size={18} color={colores.dorado} />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          );
        })}

        {/* Almuerzos */}
        <Text style={styles.sectionTitleLarge}>Almuerzos</Text>
        {almuerzos.map(item => {
          const cant = getCantidad(item.id);
          return (
            <View key={item.id} style={styles.itemCard}>
              <Image source={{ uri: item.imagen }} style={styles.itemThumb} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemNombre}>{item.nombre}</Text>
                <Text style={styles.itemDesc}>{item.descripcion}</Text>
                <View style={styles.itemFooter}>
                  <Text style={styles.itemPrecio}>${item.precio.toFixed(2)}</Text>
                  {cant > 0 ? (
                    <View style={styles.selectorCant}>
                      <Pressable onPress={() => actualizarCantidad(item.id, -1)} style={styles.cantBtn}>
                        <Ionicons name="remove" size={18} color={colores.dorado} />
                      </Pressable>
                      <Text style={styles.cantTexto}>{cant}</Text>
                      <Pressable onPress={() => agregarAlCarrito(item)} style={styles.cantBtn}>
                        <Ionicons name="add" size={18} color={colores.dorado} />
                      </Pressable>
                    </View>
                  ) : (
                    <Pressable style={styles.btnAgregar} onPress={() => agregarAlCarrito(item)}>
                      <Text style={styles.textoBtnAgregar}>AGREGAR</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            </View>
          );
        })}

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Floating Cart Bar */}
      {conteoCarts > 0 && (
        <Pressable
          style={styles.cartBar}
          onPress={() => router.push('/room-service/pedido')}
        >
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{conteoCarts}</Text>
          </View>
          <View style={styles.cartInfo}>
            <Text style={styles.cartTotalLabel}>TOTAL</Text>
            <Text style={styles.cartTotalPrice}>${total.toFixed(2)}</Text>
          </View>
          <Text style={styles.verCarrito}>Ver Carrito →</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#1A1814' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  iconBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '700' },

  scrollContent: { paddingHorizontal: 20 },

  categoriasScroll: { marginBottom: 20 },
  catChip: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#25231F',
    borderWidth: 1,
    borderColor: '#3D3A35',
    marginRight: 12
  },
  catChipActivo: { backgroundColor: colores.dorado, borderColor: colores.dorado },
  catText: { color: '#8E8B86', fontSize: 14, fontWeight: '600' },
  catTextActivo: { color: '#1A1814' },

  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { color: 'white', fontSize: 20, fontWeight: '800' },
  verTodo: { color: colores.dorado, fontSize: 13, fontWeight: '600' },

  heroCard: { height: 260, borderRadius: 24, overflow: 'hidden', marginBottom: 30 },
  heroImage: { width: '100%', height: '100%' },
  heroGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  heroContent: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: 'flex-end'
  },
  popularBadge: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: colores.dorado,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8
  },
  popularText: { color: '#1A1814', fontSize: 10, fontWeight: '900' },
  heroInfoRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  heroTitle: { color: 'white', fontSize: 24, fontWeight: '900', marginBottom: 4 },
  heroDesc: { color: 'rgba(255,255,255,0.7)', fontSize: 13 },
  heroPrice: { color: colores.dorado, fontSize: 24, fontWeight: '900' },
  addBtnCircle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  sectionTitleLarge: { color: 'white', fontSize: 24, fontWeight: '800', marginVertical: 20 },

  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#25231F',
    borderRadius: 24,
    padding: 12,
    marginBottom: 16,
    height: 120
  },
  itemThumb: { width: 96, height: 96, borderRadius: 18 },
  itemInfo: { flex: 1, paddingLeft: 16, justifyContent: 'space-between' },
  itemNombre: { color: 'white', fontSize: 16, fontWeight: '700' },
  itemDesc: { color: 'rgba(255,255,255,0.5)', fontSize: 12, lineHeight: 16 },
  itemFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemPrecio: { color: colores.dorado, fontSize: 16, fontWeight: '800' },

  btnAgregar: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12
  },
  textoBtnAgregar: { color: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: '800' },

  selectorCant: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.dorado,
    borderRadius: 20,
    paddingHorizontal: 4
  },
  cantBtn: { width: 30, height: 30, alignItems: 'center', justifyContent: 'center' },
  cantTexto: { color: '#1A1814', fontWeight: '800', marginHorizontal: 8 },

  cartBar: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    ...tema.sombras.media
  },
  cartBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartBadgeText: { color: 'white', fontWeight: '800', fontSize: 15 },
  cartInfo: { flex: 1, marginLeft: 16 },
  cartTotalLabel: { color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: '700' },
  cartTotalPrice: { color: 'white', fontSize: 20, fontWeight: '800' },
  verCarrito: { color: 'white', fontWeight: '700', fontSize: 14 }
});
