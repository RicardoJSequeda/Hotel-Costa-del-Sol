import { HabitacionVenta } from '@/tipos';

const imagenes = [
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470', // 1
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470', // 2
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1350', // 3
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470', // 4
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470', // 5
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1474', // 6
    'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1374', // 7
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470', // 8
];

export const HABITACIONES_MOCK: HabitacionVenta[] = [
    // Estándar
    {
        id: '101', nombre: 'Habitación Deluxe Jardín', tipo: 'Estándar', precio: 150, capacidad: 2, camas: 1, banos: 1, vista: 'Jardín', imagen: imagenes[0], detalles: ['Wifi', 'TV 50"', 'Minibar'],
        rating: 4.5,
        descripcion: 'Relájese en nuestra moderna habitación Deluxe con vistas serenas a los jardines tropicales. Perfecta para parejas que buscan tranquilidad y confort.'
    },
    { id: '102', nombre: 'Habitación Deluxe Jardín Doble', tipo: 'Estándar', precio: 170, capacidad: 4, camas: 2, banos: 1, vista: 'Jardín', imagen: imagenes[4], detalles: ['Wifi', 'TV 50"', 'Minibar'] },
    { id: '103', nombre: 'Habitación Deluxe Piscina', tipo: 'Estándar', precio: 190, capacidad: 2, camas: 1, banos: 1, vista: 'Piscina', imagen: imagenes[5], detalles: ['Wifi', 'TV 50"', 'Balcón'] },
    { id: '104', nombre: 'Habitación Deluxe Piscina Doble', tipo: 'Estándar', precio: 210, capacidad: 4, camas: 2, banos: 1, vista: 'Piscina', imagen: imagenes[4], detalles: ['Wifi', 'TV 50"', 'Balcón'] },
    { id: '105', nombre: 'Ejecutiva Vista Ciudad', tipo: 'Estándar', precio: 160, capacidad: 2, camas: 1, banos: 1, vista: 'Ciudad', imagen: imagenes[0], detalles: ['Escritorio', 'Wifi Alta Velocidad'] },

    // Suites
    {
        id: '201', nombre: 'Junior Suite Vista Mar', tipo: 'Suite', precio: 350, capacidad: 2, camas: 1, banos: 1, vista: 'Mar', imagen: imagenes[2], detalles: ['Vista al Mar', 'Jacuzzi', 'Desayuno Incluido'],
        rating: 4.8,
        descripcion: 'Despierte con el sonido de las olas. Nuestra Junior Suite ofrece vistas panorámicas al océano, un amplio balcón privado y un elegante jacuzzi para dos.'
    },
    { id: '202', nombre: 'Junior Suite Vista Mar Doble', tipo: 'Suite', precio: 400, capacidad: 4, camas: 2, banos: 2, vista: 'Mar', imagen: imagenes[2], detalles: ['Vista al Mar', 'Jacuzzi', '2 Baños'] },
    { id: '203', nombre: 'Suite Familiar Jardín', tipo: 'Suite', precio: 320, capacidad: 5, camas: 3, banos: 2, vista: 'Jardín', imagen: imagenes[6], detalles: ['Sala de estar', 'Cocina pequeña'] },
    { id: '204', nombre: 'Suite Nupcial', tipo: 'Suite', precio: 500, capacidad: 2, camas: 1, banos: 2, vista: 'Mar', imagen: imagenes[7], detalles: ['Decoración romántica', 'Champagne', 'Jacuzzi Doble'] },
    { id: '205', nombre: 'Suite Ejecutiva', tipo: 'Suite', precio: 380, capacidad: 2, camas: 1, banos: 1, vista: 'Ciudad', imagen: imagenes[1], detalles: ['Sala de reuniones', 'Bar Premium'] },
    { id: '206', nombre: 'Master Suite Oceanfront', tipo: 'Suite', precio: 600, capacidad: 3, camas: 1, banos: 2, vista: 'Mar', imagen: imagenes[3], detalles: ['Primera línea de playa', 'Mayordomo'] },

    // Villas
    {
        id: '301', nombre: 'Villa Privada con Piscina', tipo: 'Villa', precio: 850, capacidad: 4, camas: 2, banos: 3, vista: 'Jardín', imagen: imagenes[1], detalles: ['Piscina Privada', 'Cocina Completa', 'BBQ'],
        rating: 4.9,
        descripcion: 'Experimente el máximo lujo en nuestra exclusiva Villa. Con 120m² de elegancia contemporánea, esta villa ofrece privacidad total, piscina propia y servicio de mayordomo.'
    },
    { id: '302', nombre: 'Villa Familiar Deluxe', tipo: 'Villa', precio: 950, capacidad: 6, camas: 3, banos: 3, vista: 'Mar', imagen: imagenes[1], detalles: ['Piscina Privada', 'Acceso a Playa', 'Chef Privado (Opcional)'] },
    { id: '303', nombre: 'Villa Garden Retreat', tipo: 'Villa', precio: 800, capacidad: 2, camas: 1, banos: 2, vista: 'Jardín', imagen: imagenes[6], detalles: ['Privacidad total', 'Jardín Zen', 'Jacuzzi exterior'] },
    { id: '304', nombre: 'Villa Royal', tipo: 'Villa', precio: 1200, capacidad: 8, camas: 4, banos: 4, vista: 'Mar', imagen: imagenes[3], detalles: ['Piscina Infinita', 'Cine privado', 'Gimnasio'] },

    // Penthouses
    { id: '401', nombre: 'Penthouse Sky View', tipo: 'Penthouse', precio: 1500, capacidad: 4, camas: 2, banos: 2, vista: 'Mar', imagen: imagenes[7], detalles: ['Vista 360', 'Terraza Panorámica', 'Ascensor Privado'] },
    { id: '402', nombre: 'Penthouse Presidencial', tipo: 'Penthouse', precio: 2500, capacidad: 6, camas: 3, banos: 4, vista: 'Mar', imagen: imagenes[3], detalles: ['Helipuerto', 'Seguridad Privada', 'Todo Incluido'] },
    { id: '403', nombre: 'Loft Urbano de Lujo', tipo: 'Penthouse', precio: 1100, capacidad: 2, camas: 1, banos: 2, vista: 'Ciudad', imagen: imagenes[5], detalles: ['Diseño Moderno', 'Domótica Total'] },
    { id: '404', nombre: 'Grand Penthouse', tipo: 'Penthouse', precio: 2000, capacidad: 5, camas: 3, banos: 3, vista: 'Mar', imagen: imagenes[7], detalles: ['Doble Altura', 'Piano de Cola', 'Spa Privado'] },
];
