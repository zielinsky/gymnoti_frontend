import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs, { bottomTabIcons } from '../components/BottomTabs'

const HomeScreen = () => {
  return (
      <BottomTabs icons={bottomTabIcons}/>
  )
}

export default HomeScreen