import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import ThemedText from '../../components/themedText'
import ThemedView from '../../components/themedView'
import { Stack, useRouter } from 'expo-router'
import { Colors } from '../../constants/colors'
const _layout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const { user, authChecked } = useUser()
    const router = useRouter()
    useEffect(() => {
        if (user && authChecked) {
            router.replace('/profile')
        }

    }, [user, authChecked])

    if (!user && !authChecked) {
        return <ThemedView className={'flex-1 justify-center items-center'}>
            <ThemedText>Loading...</ThemedText>
            <ActivityIndicator size={'large'} color={theme.text}/>
        </ThemedView>
    }
    return (
        <Stack
            screenOptions={{ headerStyle: { backgroundColor: theme.background }, headerTintColor: theme.text }}>
            <Stack.Screen name='register'
                options={{ headerShown:false }} />
            <Stack.Screen name='login'
                options={{ headerShown: false, animation: 'none' }} />
        </Stack>
    )
}

export default _layout