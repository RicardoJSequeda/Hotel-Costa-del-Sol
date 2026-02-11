import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { colores } from '@/constantes/colores';
import { useAuth } from '@/context/AuthContext';

export default function TabLayout() {
    const { estaLogueado } = useAuth();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colores.principal,
                    borderTopWidth: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 88 : 64,
                    paddingBottom: Platform.OS === 'ios' ? 28 : 12,
                    paddingTop: 8,
                    // Ocultar si no está logueado
                    display: estaLogueado ? 'flex' : 'none',
                },
                tabBarActiveTintColor: colores.doradoBrillante,
                tabBarInactiveTintColor: colores.textoSecundario,
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: '500',
                    marginTop: 4,
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="estancia"
                options={{
                    title: 'Estancia',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="dining"
                options={{
                    title: 'Dining',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'restaurant' : 'restaurant-outline'} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
                    ),
                }}
            />

            {/* Rutas ocultas del tab bar */}
            <Tabs.Screen name="chat" options={{ href: null }} />
            <Tabs.Screen name="servicios" options={{ href: null }} />
            <Tabs.Screen name="concierge" options={{ href: null }} />
            <Tabs.Screen name="explorar" options={{ href: null }} />
            <Tabs.Screen name="reservas" options={{ href: null }} />
        </Tabs>
    );
}
