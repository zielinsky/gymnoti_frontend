import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import TopTabs from './TopTabs'

export const days = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela'
]

const Plans = () => {
  return (
    <View style={styles.container}>
      <TopTabs />
    </View>
  )
}

const styles = StyleSheet.create({
})


export default Plans