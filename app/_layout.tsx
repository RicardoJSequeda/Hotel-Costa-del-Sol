import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { colores } from '@/constantes/colores';

import { AuthProvider } from '@/context/AuthContext';
import { BookingProvider } from '@/context/BookingContext';
import { FoodProvider } from '@/context/FoodContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <BookingProvider>
        <FoodProvider>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: colores.principal },
              headerTintColor: colores.dorado,
              headerTitleStyle: { fontWeight: '600' },
              contentStyle: { backgroundColor: colores.principal },
            }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="carga" options={{ headerShown: false }} />
            <Stack.Screen name="inicio" />
            <Stack.Screen name="ingreso" options={{ headerShown: false }} />
            <Stack.Screen name="servicios" />
            <Stack.Screen name="reservas" />
            <Stack.Screen name="perfil" />
            <Stack.Screen name="chat" />
            <Stack.Screen name="estado-cuenta" />
            <Stack.Screen name="reportar-problema" />
            <Stack.Screen name="comida-habitacion" />
            {/* Nuevas pantallas */}
            <Stack.Screen name="login-modal" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="ubicacion" />
          </Stack>
          <StatusBar style="light" />
        </FoodProvider>
      </BookingProvider>
    </AuthProvider>
  );
}
