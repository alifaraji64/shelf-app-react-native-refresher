import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/themedView'
import ThemedText from '../components/themedText'

const Contact = () => {
    return (
        <ThemedView className='flex-1 items-center justify-center'>
            <ThemedText className='text-3xl'>Contact Page</ThemedText>
            <Link href="/" asChild>
                <ThemedText className="text-blue-500 mt-8">Back Home</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Contact

const styles = StyleSheet.create({})