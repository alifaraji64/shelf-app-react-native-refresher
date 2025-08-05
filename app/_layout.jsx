import { Slot, Stack } from 'expo-router';
import { SafeAreaView, Text, useColorScheme } from 'react-native';
import '../global.css'
import { Colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
export default function Layout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerStyle: { backgroundColor: theme.background }, headerTintColor: theme.text }}>
          <Stack.Screen name='index' options={{ title: 'home' }} />
          <Stack.Screen name='about' options={{ title: 'About' }} />
          <Stack.Screen name='contact' options={{ title: 'Contact' }} />
        </Stack>
      </SafeAreaView>
    </>

  );
}