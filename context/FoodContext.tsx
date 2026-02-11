import React, { createContext, useContext, useState } from 'react';

export interface Plato {
    id: string;
    nombre: string;
    precio: number;
    descripcion?: string;
    imagen?: string;
    cantidad: number;
}

interface FoodContextType {
    carrito: Plato[];
    agregarAlCarrito: (plato: Omit<Plato, 'cantidad'>) => void;
    removerDelCarrito: (id: string) => void;
    actualizarCantidad: (id: string, delta: number) => void;
    limpiarCarrito: () => void;
    total: number;
    conteoCarts: number;
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export function FoodProvider({ children }: { children: React.ReactNode }) {
    const [carrito, setCarrito] = useState<Plato[]>([]);

    const agregarAlCarrito = (plato: Omit<Plato, 'cantidad'>) => {
        setCarrito(prev => {
            const existe = prev.find(item => item.id === plato.id);
            if (existe) {
                return prev.map(item =>
                    item.id === plato.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }
            return [...prev, { ...plato, cantidad: 1 }];
        });
    };

    const removerDelCarrito = (id: string) => {
        setCarrito(prev => prev.filter(item => item.id !== id));
    };

    const actualizarCantidad = (id: string, delta: number) => {
        setCarrito(prev => prev.map(item => {
            if (item.id === id) {
                const nuevaCantidad = Math.max(0, item.cantidad + delta);
                return { ...item, cantidad: nuevaCantidad };
            }
            return item;
        }).filter(item => item.cantidad > 0));
    };

    const limpiarCarrito = () => setCarrito([]);

    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const conteoCarts = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <FoodContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removerDelCarrito,
            actualizarCantidad,
            limpiarCarrito,
            total,
            conteoCarts
        }}>
            {children}
        </FoodContext.Provider>
    );
}

export function useFood() {
    const context = useContext(FoodContext);
    if (!context) throw new Error('useFood must be used within a FoodProvider');
    return context;
}
