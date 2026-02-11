import { tema } from '@/constantes/colores';
import React from 'react';
import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';

interface BotonProps {
    titulo: string;
    onPress: () => void;
    tipo?: 'primario' | 'secundario' | 'outline' | 'fantasma';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    textoStyle?: TextStyle;
    iconoIzquierda?: React.ReactNode;
    iconoDerecha?: React.ReactNode;
}

export function Boton({
    titulo,
    onPress,
    tipo = 'primario',
    size = 'md',
    loading = false,
    disabled = false,
    style,
    textoStyle,
    iconoIzquierda,
    iconoDerecha,
}: BotonProps) {

    const getEstilosBoton = () => {
        const base: ViewStyle = styles.boton;
        const tipos = {
            primario: styles.primario,
            secundario: styles.secundario,
            outline: styles.outline,
            fantasma: styles.fantasma,
        };

        const sizes = {
            sm: styles.sm,
            md: styles.md,
            lg: styles.lg,
        };

        return [base, tipos[tipo], sizes[size], style, (disabled || loading) && styles.deshabilitado];
    };

    const getEstilosTexto = () => {
        const tipos = {
            primario: styles.textoPrimario,
            secundario: styles.textoSecundario,
            outline: styles.textoOutline,
            fantasma: styles.textoFantasma,
        };

        return [styles.texto, tipos[tipo], textoStyle];
    };

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || loading}
            style={({ pressed }) => [
                ...getEstilosBoton(),
                pressed && !disabled && !loading && styles.presionado,
            ]}
        >
            {loading ? (
                <ActivityIndicator color={tipo === 'primario' ? tema.colores.principal : tema.colores.dorado} />
            ) : (
                <>
                    {iconoIzquierda && <View style={styles.margenIconoIzquierda}>{iconoIzquierda}</View>}
                    <Text style={getEstilosTexto()}>{titulo}</Text>
                    {iconoDerecha && <View style={styles.margenIconoDerecha}>{iconoDerecha}</View>}
                </>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    boton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: tema.bordes.md,
    },
    presionado: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
    deshabilitado: {
        opacity: 0.5,
    },
    // Tipos
    primario: {
        backgroundColor: tema.colores.dorado,
        ...tema.sombras.dorada,
    },
    secundario: {
        backgroundColor: tema.colores.principalClaro,
        borderWidth: 1,
        borderColor: tema.colores.borde,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: tema.colores.dorado,
    },
    fantasma: {
        backgroundColor: 'transparent',
    },
    // Tamaños
    sm: { paddingVertical: 8, paddingHorizontal: 16 },
    md: { paddingVertical: 14, paddingHorizontal: 24 },
    lg: { paddingVertical: 18, paddingHorizontal: 32 },
    // Textos
    texto: {
        ...tema.tipografia.cuerpoNegrita,
        textAlign: 'center',
    },
    textoPrimario: { color: tema.colores.principal },
    textoSecundario: { color: tema.colores.texto },
    textoOutline: { color: tema.colores.dorado },
    textoFantasma: { color: tema.colores.textoSecundario },
    // Iconos
    margenIconoIzquierda: { marginRight: 8 },
    margenIconoDerecha: { marginLeft: 8 },
});
