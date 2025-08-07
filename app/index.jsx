import { View, Text, Image } from "react-native";
import '../global.css'
import logo from '../assets/logo_light.png'
import { Link } from "expo-router";
import ThemedView from "../components/themedView";
import ThemedCard from "../components/themedCard";
import ThemedLogo from "../components/themedLogo";
import Spacer from "../components/spacer";
import ThemedText from "../components/themedText";
import { Colors } from "../constants/colors";
export default function Home() {
  return (
    <ThemedView className={'flex-1 items-center justify-center '} >
      <ThemedLogo className='my-8' />
      <ThemedText title className={'text-xl font-bold'}> the number 1</ThemedText>
      <Spacer className={'h-5'}></Spacer>
      <View>
        <Text className='bg-gray-200 p-2 shadow-slate-100 shadow-xl'>Reading List App</Text>
      </View>
      <Spacer className={'h-5'}></Spacer>
      <Link href='/login' className='border-b-2 border-black border-solid'>
        <ThemedText className={'text-lg'}>Login Page</ThemedText>
      </Link>
      <Spacer className={'h-5'}></Spacer>
      <Link href='/register' className='border-b-2 border-black border-solid'>
        <ThemedText className={'text-lg'}>Register Page</ThemedText>
      </Link>
      <Spacer className={'h-5'}></Spacer>
      <Link href='/profile' className='border-b-2 border-black border-solid'>
        <ThemedText className={'text-lg'}>profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
}