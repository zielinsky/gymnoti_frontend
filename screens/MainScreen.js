import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs, { bottomTabIcons } from '../components/BottomTabs'

const MainScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        <BottomTabs icons={bottomTabIcons}/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08090D',
  }
})

export default MainScreen