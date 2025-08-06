import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/themedView'
import Spacer from '../../components/spacer'
import ThemedText from '../../components/themedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'
import ThemedTextInput from '../../components/themedTextInput'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        console.log('login form submitted',email,password);
    }
    return (
        <ThemedView className={'flex-1 justify-center items-center'}>
            <Spacer></Spacer>
            <ThemedText title className={'text-center text-2xl font-bold'}>Login to your account</ThemedText>
            <Spacer></Spacer>
            <ThemedTextInput
                placeholder='Email'
                className={'w-4/5 mb-5'}
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />
            <ThemedTextInput
                placeholder='Password'
                className={'w-4/5 mb-5'}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Pressable
                onPress={handleSubmit}
                style={{ backgroundColor: Colors.primary }}
                className={`active:opacity-80 p-4 rounded-md`}>
                <ThemedText className={'!text-gray-200 text-center'}>Login</ThemedText>
            </Pressable>
            <Spacer className={'h-24'}></Spacer>
            <Link href={'/register'}>
                <ThemedText className={'text-center'}>Register instead</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({})