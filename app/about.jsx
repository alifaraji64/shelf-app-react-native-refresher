import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/colors'

const About = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    
    return (
        <View className={'flex-1 items-center justify-center'} style={{ backgroundColor: theme.background }}>
            <Text className='text-3xl'>About Page</Text>
            <Link href="/" asChild>
                <Text className="text-blue-500 mt-8">Back Home</Text>
            </Link>
        </View>
    )
}

export default About

const styles = StyleSheet.create({})