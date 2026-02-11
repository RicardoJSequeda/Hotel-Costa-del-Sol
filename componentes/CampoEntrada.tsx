import { tema } from '@/constantes/colores';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';

interface CampoEntradaProps {
  etiqueta: string;
  placeholder: string;
  valor?: string;
  onChangeTexto?: (texto: string) => void;
  icono?: React.ReactNode;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  style?: ViewStyle;
}

export function CampoEntrada({
  etiqueta,
  placeholder,
  valor,
  onChangeTexto,
  icono,
  error,
  secureTextEntry,
  keyboardType = 'default',
  style,
}: CampoEntradaProps) {
  const [enfocado, setEnfocado] = useState(false);

  return (
    <View style={[styles.contenedor, style]}>
      <Text style={styles.etiqueta}>{etiqueta.toUpperCase()}</Text>
      <View
        style={[
          styles.campoContenedor,
          enfocado && styles.contenedorEnfocado,
          error && styles.contenedorError
        ]}
      >
        {icono && <View style={styles.icono}>{icono}</View>}
        <TextInput
          style={styles.campo}
          placeholder={placeholder}
          placeholderTextColor={tema.colores.textoTerciario}
          value={valor}
          onChangeText={onChangeTexto}
          onFocus={() => setEnfocado(true)}
          onBlur={() => setEnfocado(false)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
      {error && <Text style={styles.errorTexto}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: tema.espaciado.md
  },
  etiqueta: {
    ...tema.tipografia.pieDepagina,
    color: tema.colores.doradoOscuro,
    marginBottom: 6,
    marginLeft: 4,
  },
  campoContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tema.colores.principalClaro,
    borderRadius: tema.bordes.md,
    borderWidth: 1,
    borderColor: tema.colores.borde,
    paddingHorizontal: tema.espaciado.md,
    transition: 'border-color 0.2s',
  },
  contenedorEnfocado: {
    borderColor: tema.colores.dorado,
    backgroundColor: tema.colores.principal,
  },
  contenedorError: {
    borderColor: tema.colores.error,
  },
  icono: {
    marginRight: tema.espaciado.sm
  },
  campo: {
    flex: 1,
    paddingVertical: tema.espaciado.md,
    ...tema.tipografia.cuerpo,
    color: tema.colores.texto,
  },
  errorTexto: {
    ...tema.tipografia.pieDepagina,
    color: tema.colores.error,
    marginTop: 4,
    marginLeft: 4,
  }
});
