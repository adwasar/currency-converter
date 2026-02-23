import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import CurrencyContext from '@/context/CurrencyContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [currentPickerType, setCurrentPickerType] = useState<'base' | 'target'>('base');
  const [baseCurrency, setBaseCurrency] = useState({ title: 'EUR', amount: '0.00' });
  const [targetCurrency, setTargetCurrency] = useState({ title: 'USD', amount: '0.00' });

  const currencyContextValue = {
    currentPickerType,
    setCurrentPickerType,
    baseCurrency,
    setBaseCurrency,
    targetCurrency,
    setTargetCurrency,
  };

  const [loaded, error] = useFonts({
    'SFPro-Regular': require('@/assets/fonts/sf-pro-display-regular.otf'),
    'SFPro-Medium': require('@/assets/fonts/sf-pro-display-medium.otf'),
  });

  // Connecting fonts
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  // END Connecting fonts

  return (
    <CurrencyContext value={currencyContextValue}>
      <GestureHandlerRootView>
        <StatusBar style="dark" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
        </Stack>
      </GestureHandlerRootView>
    </CurrencyContext>
  );
}
