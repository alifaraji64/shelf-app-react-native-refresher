import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import ThemedView from '../../components/themedView'
import Spacer from '../../components/spacer'
import ThemedText from '../../components/themedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'
import ThemedTextInput from '../../components/themedTextInput'
import { useUser } from '../../hooks/useUser'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, seterror] = useState(null)
    const { login } = useUser()

    const handleSubmit = async () => {
        seterror(null)
        try {
            await login(email, password)

        } catch (error) {
            console.log(error.message);
            seterror(error.message)
        }
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
            <Spacer></Spacer>
            {error && <Text style={styles.error}>{error}</Text>}
            <Spacer className={'h-24'}></Spacer>
            <Link href={'/register'}>
                <ThemedText className={'text-center'}>Register instead</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    }
})