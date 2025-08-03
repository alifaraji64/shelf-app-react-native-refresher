import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='text-3xl'>Contact Page</Text>
            <Link href="/" asChild>
                <Text className="text-blue-500 mt-8">Back Home</Text>
            </Link>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})