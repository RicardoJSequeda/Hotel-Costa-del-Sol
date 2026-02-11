import { ViewStyle, type PressableProps } from 'react-native';
import { Boton } from './Boton';

interface BotonSecundarioProps extends Omit<PressableProps, 'style'> {
  titulo: string;
  style?: ViewStyle;
}

export function BotonSecundario({ titulo, style, onPress, disabled, ...props }: BotonSecundarioProps) {
  return (
    <Boton
      titulo={titulo}
      onPress={onPress as any}
      tipo="secundario"
      style={style}
      disabled={disabled ?? undefined}
      {...props}
    />
  );
}
