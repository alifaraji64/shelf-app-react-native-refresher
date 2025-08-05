import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({className}) => {
    return (
        <View className={`min-w-full h-10 ${className}`}></View>
    )
}

export default Spacer

const styles = StyleSheet.create({})