import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useEffect } from 'react';  // Add useEffect to imports
import { Colors } from '../constants/colors'
const ThemedView = ({ style, children, className, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    console.log(theme.background);
    
    return (
        <View style={[{ backgroundColor: theme.background }]} {...props}  className={`${className} hidden`} >
            {children}
        </View>
    )
}

export default ThemedView

const styles = StyleSheet.create({})