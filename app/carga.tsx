import { Stack } from 'expo-router';
import { View } from 'react-native';

import { PantallaSplash } from '@/componentes/splash';

export default function PantallaCarga() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1 }}>
        <PantallaSplash />
      </View>
    </>
  );
}
