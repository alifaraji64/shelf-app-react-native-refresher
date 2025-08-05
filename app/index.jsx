import { View, Text, Image } from "react-native";
import '../global.css'
import logo from '../assets/logo_light.png'
import { Link } from "expo-router";
import ThemedView from "../components/themedView";
export default function Home() {
  return (
      <ThemedView className={' flex-1 items-center justify-center'} >
        <Text className='text-3xl font-bold'>Helloooo World</Text>
        <View>
          <Text className='bg-gray-200 p-2 shadow-slate-100 shadow-xl'>hello this is card</Text>
        </View>
        <Image source={logo} className='my-8'></Image>
        <Link href='/about' className='border-b-2 border-black border-solid mb-8'>About Page</Link>
        <Link href='/contact' className='border-b-2 border-black border-solid'>Contact Page</Link>
      </ThemedView>
  );
}