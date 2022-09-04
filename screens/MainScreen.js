import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs, { bottomTabIcons } from '../components/BottomTabs'
import TopTabs from '../components/plans/TopTabs'

const MainScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        {/* Tutaj będzie głowna zawartość :D */}
        <TopTabs />
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