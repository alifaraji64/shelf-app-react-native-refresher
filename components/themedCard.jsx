import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedCard = ({ children, className, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={{backgroundColor:theme.uiBackground}} className={`${className} rounded-lg p-5`}>
      {children}
    </View>
  )
}

export default ThemedCard

const styles = StyleSheet.create({})