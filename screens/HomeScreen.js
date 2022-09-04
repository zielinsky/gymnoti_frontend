import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs, { bottomTabIcons } from '../components/BottomTabs'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  )
}

export default HomeScreen