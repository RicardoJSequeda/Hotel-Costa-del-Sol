import { Usuario } from '@/tipos';
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    estaLogueado: boolean;
    usuario: Usuario | null;
    iniciarSesion: (user?: Usuario) => void;
    cerrarSesion: () => void;
}

const AuthContext = createContext<AuthContextType>({
    estaLogueado: false,
    usuario: null,
    iniciarSesion: () => { },
    cerrarSesion: () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [estaLogueado, setEstaLogueado] = useState(false);
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    const iniciarSesion = (user?: Usuario) => {
        setEstaLogueado(true);
        if (user) {
            setUsuario(user);
        } else {
            // Default mock user if none provided
            setUsuario({
                id: '1',
                nombre: 'Sr. Pérez',
                email: 'perez@email.com',
                apellido: 'Pérez'
            });
        }
    };

    const cerrarSesion = () => {
        setEstaLogueado(false);
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ estaLogueado, usuario, iniciarSesion, cerrarSesion }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
