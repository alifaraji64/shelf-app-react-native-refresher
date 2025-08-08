import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import ThemedView from './themedView'
import ThemedText from './themedText'
import { Colors } from '../constants/colors'


const ThemedLoader = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return <ThemedView className={'flex-1 justify-center items-center'}>
        <ThemedText>Loading...</ThemedText>
        <ActivityIndicator size={'large'} color={theme.text} />
    </ThemedView>
}

export default ThemedLoader

const styles = StyleSheet.create({})