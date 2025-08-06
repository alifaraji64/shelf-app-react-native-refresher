import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/themedView'
import Spacer from '../../components/spacer'
import ThemedText from '../../components/themedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'
import ThemedTextInput from '../../components/themedTextInput'
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        console.log('register form submitted', email, password);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView className={'flex-1 justify-center items-center'}>
                <Spacer></Spacer>
                <ThemedText title className={'text-center text-2xl font-bold'}>Register to your account</ThemedText>
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
                    className={`active:opacity-80 bg-[${Colors.primary}] p-4 rounded-md`}>
                    <ThemedText className={'!text-gray-200 text-center'}>Register</ThemedText>
                </Pressable>
                <Spacer className={'h-24'}></Spacer>
                <Link href={'/login'}>
                    <ThemedText className={'text-center'}>Login instead</ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default Register

const styles = StyleSheet.create({})