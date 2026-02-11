export interface PerfilUsuario {
    nombre: string;
    iniciales: string;
}

export type EstadoHabitacion = 'OCUPADO' | 'DISPONIBLE' | 'LIMPIEZA';

export interface Habitacion {
    numero: string;
    tipo: string;
    estado: EstadoHabitacion;
    fechaSalida: string;
    imagen: any;
}

export interface HabitacionVenta {
    id: string;
    nombre: string;
    tipo: 'Estándar' | 'Suite' | 'Villa' | 'Penthouse';
    precio: number;
    capacidad: number;
    camas: number;
    banos: number;
    vista: 'Jardín' | 'Mar' | 'Ciudad' | 'Piscina';
    imagen: string;
    detalles: string[];
    descripcion?: string;
    rating?: number;
}

export interface Servicio {
    id: string;
    etiqueta: string;
    icono: string;
    ruta: string;
    descripcion?: string;
}

export interface MensajeChat {
    id: string;
    texto: string;
    remitente: 'usuario' | 'staff';
    fecha: Date;
}

export interface Reserva {
    id: string;
    tipo: string;
    fecha: string;
    hora: string;
    estado: 'confirmada' | 'pendiente' | 'cancelada';
}

export interface Usuario {
    id: string;
    nombre: string;
    email: string;
    apellido?: string;
    codigoReserva?: string;
    habitacionAsignada?: string;
}
