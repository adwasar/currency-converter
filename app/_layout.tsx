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
  const [baseCurrency, setBaseCurrency] = useState({ title: 'EUR', amount: '1.00' });
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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    const base = baseCurrency.title.toLowerCase();
    const target = targetCurrency.title.toLowerCase();
    const amount = Number(baseCurrency.amount);

    const urls = [
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.min.json`,
      `https://latest.currency-api.pages.dev/v1/currencies/${base}.min.json`,
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`,
      `https://latest.currency-api.pages.dev/v1/currencies/${base}.json`,
    ];

    const timer = setTimeout(async () => {
      for (let url of urls) {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const data = await res.json();

          const rate = data[base]?.[target];
          if (rate == null) throw new Error(`Rate not found for ${target}`);

          const calculated = (rate * amount).toFixed(2);
          setTargetCurrency((prev) => ({
            ...prev,
            amount: calculated,
          }));
          return;
        } catch (err) {
          console.warn(`Failed to fetch from ${url}:`, err);
        }
      }
      console.error('All currency API requests failed');
    }, 400);

    return () => clearTimeout(timer);
  }, [baseCurrency.title, baseCurrency.amount, targetCurrency.title]);

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
