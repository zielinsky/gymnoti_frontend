import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs, { bottomTabIcons } from '../components/mainscreen/BottomTabs'
import Plans from '../components/mainscreen/plans/Plans'

const MainScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Plans/>
        <BottomTabs icons={bottomTabIcons}/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#08090D',
  }
})

export default MainScreen