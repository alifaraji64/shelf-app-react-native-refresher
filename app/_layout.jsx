import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import '../global.css'
export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack />
    </SafeAreaView>
  );
}