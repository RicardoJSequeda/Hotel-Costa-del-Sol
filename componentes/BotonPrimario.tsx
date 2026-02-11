import { ViewStyle, type PressableProps } from 'react-native';
import { Boton } from './Boton';

interface BotonPrimarioProps extends Omit<PressableProps, 'style'> {
  titulo: string;
  style?: ViewStyle;
  icono?: any;
}

export function BotonPrimario({ titulo, style, onPress, icono, ...props }: BotonPrimarioProps) {
  return (
    <Boton
      titulo={titulo}
      onPress={onPress as any}
      tipo="primario"
      style={style}
      iconoDerecha={icono}
      {...props}
    />
  );
}
