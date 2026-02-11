import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { colores } from '@/constantes/colores';

interface IconoSolProps {
  tamano?: number;
  color?: string;
}

export function IconoSol({ tamano = 64, color = colores.dorado }: IconoSolProps) {
  return (
    <View style={[styles.contenedor, { width: tamano, height: tamano }]}>
      <Ionicons name="sunny" size={tamano} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { alignItems: 'center', justifyContent: 'center' },
});
