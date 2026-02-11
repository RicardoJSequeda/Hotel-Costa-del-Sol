import { HabitacionVenta } from '@/tipos';
import React, { createContext, useContext, useState } from 'react';

interface BookingState {
    fechaInicio: number;
    fechaFin: number;
    adultos: number;
    habitacion: HabitacionVenta | null;
    huesped: {
        nombre: string;
        email: string;
    };
    codigoReserva: string | null;
}

interface BookingContextType {
    state: BookingState;
    setFechas: (inicio: number, fin: number) => void;
    setAdultos: (cantidad: number) => void;
    setHabitacion: (habitacion: HabitacionVenta) => void;
    setHuesped: (nombre: string, email: string) => void;
    generarCodigo: () => string;
    reset: () => void;
}

const initialState: BookingState = {
    fechaInicio: 12,
    fechaFin: 16,
    adultos: 2,
    habitacion: null,
    huesped: {
        nombre: 'Alejandro Vargas',
        email: 'alex.vargas@email.com',
    },
    codigoReserva: null
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<BookingState>(initialState);

    const setFechas = (inicio: number, fin: number) => {
        setState(prev => ({ ...prev, fechaInicio: inicio, fechaFin: fin }));
    };

    const setAdultos = (cantidad: number) => {
        setState(prev => ({ ...prev, adultos: cantidad }));
    };

    const setHabitacion = (habitacion: HabitacionVenta) => {
        setState(prev => ({ ...prev, habitacion }));
    };

    const setHuesped = (nombre: string, email: string) => {
        setState(prev => ({ ...prev, huesped: { nombre, email } }));
    };

    const generarCodigo = () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code = 'CDS-';
        for (let i = 0; i < 4; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
        code += '-';
        for (let i = 0; i < 2; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));

        setState(prev => ({ ...prev, codigoReserva: code }));
        return code;
    };

    const reset = () => {
        setState(initialState);
    };

    return (
        <BookingContext.Provider value={{ state, setFechas, setAdultos, setHabitacion, setHuesped, generarCodigo, reset }}>
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error('useBooking debe ser usado dentro de un BookingProvider');
    }
    return context;
}
