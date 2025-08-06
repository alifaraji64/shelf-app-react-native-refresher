import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedTextInput = ({ className, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <TextInput
        placeholderTextColor={theme.text}
            style={{
                backgroundColor: theme.uiBackground,
                color: theme.text,
            }}
            className={`p-5 rounded-md ${className}`}
            {...props}
        />
    )
}

export default ThemedTextInput

const styles = StyleSheet.create({})