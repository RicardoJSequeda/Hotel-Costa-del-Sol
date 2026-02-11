import { ProtectedRoute } from '@/componentes/ProtectedRoute';
import PerfilScreenImpl from '../perfil';

export default function PerfilScreenWrapper() {
    return (
        <ProtectedRoute>
            <PerfilScreenImpl />
        </ProtectedRoute>
    );
}
