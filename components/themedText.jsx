import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors';

const ThemedText = ({ title = false,style, className, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <Text className={`${className}`} style={{ color: (title ? theme.title : theme.text),...style }} {...props} />
    )
}

export default ThemedText

const styles = StyleSheet.create({})