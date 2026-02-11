import { Habitacion, PerfilUsuario, Servicio } from '@/tipos';

export const DATOS_USUARIO: PerfilUsuario = {
    nombre: 'Sr. Pérez',
    iniciales: 'JP',
};

// Imagen de placeholder para la habitación (deberás asegurarte de tener una imagen en assets o usar una URL externa si permites red)
export const DATOS_HABITACION: Habitacion = {
    numero: '402',
    tipo: 'DELUXE OCEAN VIEW',
    estado: 'OCUPADO',
    fechaSalida: '15 Oct',
    imagen: { uri: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
};

export const SERVICIOS_HOTEL: Servicio[] = [
    { id: '1', etiqueta: 'Reservar Servicios', icono: 'leaf', ruta: '/servicios' },
    { id: '2', etiqueta: 'Pedido al Cuarto', icono: 'restaurant', ruta: '/comida-habitacion' },
    { id: '3', etiqueta: 'Reportar Problema', icono: 'construct', ruta: '/reportar-problema' },
    { id: '4', etiqueta: 'Mis Reservas', icono: 'calendar', ruta: '/reservas' },
    { id: '5', etiqueta: 'Hablar con Recepción', icono: 'headset', ruta: '/chat' },
    { id: '6', etiqueta: 'Información del Hotel', icono: 'book', ruta: '/servicios' },
];

export const OFERTA_HAPPY_HOUR = {
    titulo: 'Happy Hour en The Lounge',
    horario: 'Hoy 5:00 PM - 7:00 PM',
};
