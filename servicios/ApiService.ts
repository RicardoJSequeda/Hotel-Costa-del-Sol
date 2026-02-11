import { DATOS_HABITACION, DATOS_USUARIO, SERVICIOS_HOTEL } from '@/constantes/datos';
import { Habitacion, PerfilUsuario, Servicio } from '@/tipos';

/**
 * ApiService maneja la comunicación con la fuente de datos.
 * Actualmente usa datos estáticos, pero está preparado para conectar con una API real.
 */
class ApiService {
    async obtenerPerfil(): Promise<PerfilUsuario> {
        // Simular retraso de red
        return new Promise((resolve) => {
            setTimeout(() => resolve(DATOS_USUARIO), 500);
        });
    }

    async obtenerHabitacion(): Promise<Habitacion> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(DATOS_HABITACION), 500);
        });
    }

    async obtenerServicios(): Promise<Servicio[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(SERVICIOS_HOTEL), 500);
        });
    }

    // Métodos para futuras implementaciones
    async solicitarServicio(servicioId: string): Promise<{ success: boolean }> {
        console.log(`Solicitando servicio: ${servicioId}`);
        return { success: true };
    }
}

export const api = new ApiService();
