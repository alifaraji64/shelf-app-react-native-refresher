import { Slot, Stack } from 'expo-router';
import { Text, useColorScheme, Platform, View } from 'react-native';
import '../global.css'
import { Colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Layout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
      <StatusBar
        style={colorScheme === 'dark' ? 'light' : 'dark'}
      />
      <SafeAreaView className={`flex-1 bg-[${colorScheme === 'dark' ?"#252231": "#e0dfe8"}]`}>
        <View className='flex-1' >
          <Stack
            screenOptions={{ headerStyle: { backgroundColor: theme.background }, headerTintColor: theme.text }}>
            <Stack.Screen name='index'
              options={{ title: 'home' }} />
            <Stack.Screen name='(auth)/login'
              options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name='(auth)/register'
              options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name='(dashboard)'
              options={{ headerShown: false, animation: 'none' }} />
          </Stack>
        </View>
      </SafeAreaView>


    </>

  );
}