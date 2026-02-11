import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { colores } from '@/constantes/colores';
import { useAuth } from '@/context/AuthContext';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { estaLogueado } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!estaLogueado) {
            // Si no está logueado, redirigir al inicio (que mostrará modo explorador)
            // Usamos replace para evitar que puedan volver atrás
            router.replace('/');
        }
    }, [estaLogueado]);

    if (!estaLogueado) {
        // Mostrar un spinner o nada mientras redirige
        return (
            <View style={{ flex: 1, backgroundColor: colores.principal, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color={colores.dorado} />
            </View>
        );
    }

    return <>{children}</>;
}
