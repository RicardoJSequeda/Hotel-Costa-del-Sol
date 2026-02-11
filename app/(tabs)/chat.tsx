
// Reutilizamos la pantalla de chat existente redirigiendo
// O podríamos mover el archivo chat.tsx aquí.
// Por ahora, para mantener la estructura simple, haremos un componente wrapper.
import { ProtectedRoute } from '@/componentes/ProtectedRoute';
import ChatScreenImpl from '../chat';

export default function ChatScreenWrapper() {
    return (
        <ProtectedRoute>
            <ChatScreenImpl />
        </ProtectedRoute>
    );
}
