import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors';
import lightLogo from '../assets/logo_light.png'
import darkLogo from '../assets/logo_dark.png'

const ThemedLogo = ({ className }) => {
    const colorScheme = useColorScheme();
    return (
        <View>
            <Image source={colorScheme == 'light' ? lightLogo : darkLogo} className={`${className}`}></Image>
        </View>
    )
}

export default ThemedLogo

const styles = StyleSheet.create({})