import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ThemedView from '../../components/themedView'
import Spacer from '../../components/spacer'
import ThemedText from '../../components/themedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'

const Register = () => {
    const handleSubmit = () => {
        console.log('register form submitted');
    }
    return (
        <ThemedView className={'flex-1 justify-center items-center'}>
            <Spacer></Spacer>
            <ThemedText title className={'text-center text-2xl font-bold'}>Register to your account</ThemedText>
            <Spacer></Spacer>
            <Pressable
                onPress={handleSubmit}
                className={`active:opacity-80 bg-[${Colors.primary}] p-4 rounded-md`}>
                <ThemedText className={'!text-gray-200 text-center'}>Register</ThemedText>
            </Pressable>
            <Spacer className={'h-24'}></Spacer>
            <Link href={'/login'}>
                <ThemedText className={'text-center'}>Login instead</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Register

const styles = StyleSheet.create({})