import { Ionicons } from '@expo/vector-icons';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { tema } from '@/constantes/colores';

interface ContactoRecepcionProps {
    visible: boolean;
    onClose: () => void;
}

export function ContactoRecepcion({ visible, onClose }: ContactoRecepcionProps) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <View style={styles.handle} />

                    <View style={styles.header}>
                        <Text style={styles.titulo}>¿Cómo podemos ayudarle?</Text>
                        <Pressable onPress={onClose} style={styles.closeBtn}>
                            <Ionicons name="close" size={24} color="#666" />
                        </Pressable>
                    </View>

                    <View style={styles.conciergeCard}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?u=concierge' }}
                            style={styles.avatar}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.conciergeNombre}>Elena Martínez</Text>
                            <Text style={styles.conciergeCargo}>Concierge de Turno</Text>
                        </View>
                        <View style={styles.statusBadge}>
                            <View style={styles.statusDot} />
                            <Text style={styles.statusText}>Disponible</Text>
                        </View>
                    </View>

                    <View style={styles.optionsGrid}>
                        <Pressable style={styles.optionBtn}>
                            <View style={[styles.iconBox, { backgroundColor: '#E0F2FE' }]}>
                                <Ionicons name="call" size={24} color="#0EA5E9" />
                            </View>
                            <Text style={styles.optionText}>Llamar ahora</Text>
                        </Pressable>

                        <Pressable style={styles.optionBtn}>
                            <View style={[styles.iconBox, { backgroundColor: '#F0FDF4' }]}>
                                <Ionicons name="chatbubbles" size={24} color="#22C55E" />
                            </View>
                            <Text style={styles.optionText}>Chat en vivo</Text>
                        </Pressable>

                        <Pressable style={styles.optionBtn}>
                            <View style={[styles.iconBox, { backgroundColor: '#FEF3C7' }]}>
                                <Ionicons name="restaurant" size={24} color="#F59E0B" />
                            </View>
                            <Text style={styles.optionText}>Room Service</Text>
                        </Pressable>

                        <Pressable style={styles.optionBtn}>
                            <View style={[styles.iconBox, { backgroundColor: '#F3E8FF' }]}>
                                <Ionicons name="alert-circle" size={24} color="#A855F7" />
                            </View>
                            <Text style={styles.optionText}>Emergencias</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.footerNote}>
                        Nuestra recepción está disponible las 24 horas para asegurar que su estancia sea perfecta.
                    </Text>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 24,
        paddingBottom: 40,
        ...tema.sombras.media
    },
    handle: {
        width: 40,
        height: 5,
        backgroundColor: '#E5E7EB',
        borderRadius: 3,
        alignSelf: 'center',
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    },
    titulo: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1F2937'
    },
    closeBtn: {
        padding: 5
    },
    conciergeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        padding: 16,
        borderRadius: 20,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#F3F4F6'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16
    },
    conciergeNombre: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1F2937'
    },
    conciergeCargo: {
        fontSize: 13,
        color: '#6B7280',
        marginTop: 2
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB'
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#10B981'
    },
    statusText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#10B981'
    },
    optionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 30
    },
    optionBtn: {
        width: '47%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F3F4F6',
        ...tema.sombras.leve
    },
    iconBox: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    },
    optionText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151'
    },
    footerNote: {
        fontSize: 12,
        color: '#9CA3AF',
        textAlign: 'center',
        lineHeight: 18
    }
});
