import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedText from '../components/themedText'
import ThemedView from '../components/themedView'

const About = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <ThemedView className={'flex-1 items-center justify-center'} style={{ backgroundColor: theme.background }}>
            <ThemedText className='text-3xl'>About Page</ThemedText>
            <Link href="/" asChild>
                <ThemedText className="text-blue-500 mt-8">Back Home</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default About

const styles = StyleSheet.create({})