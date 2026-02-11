import { HomeExplorador } from '@/componentes/home/HomeExplorador';
import { HomeHuesped } from '@/componentes/home/HomeHuesped';
import { colores } from '@/constantes/colores';
import { useAuth } from '@/context/AuthContext';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function IndexScreen() {
    const { estaLogueado } = useAuth();

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={{ flex: 1, backgroundColor: colores.principal }}>
                {estaLogueado ? <HomeHuesped /> : <HomeExplorador />}
            </View>
        </>
    );
}
