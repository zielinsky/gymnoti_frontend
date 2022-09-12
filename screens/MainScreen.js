import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs from '../components/mainscreen/BottomTabs'
import Plans from '../components/mainscreen/plans/Plans'
import History from '../components/mainscreen/history/History'
import Profile from '../components/mainscreen/profile/Profile'
import Progres from '../components/mainscreen/progres/Progres'

export const tabsInfo = [
  {
    name: 'Plany',
    path: require('../assets/icons/plans.png'),
    obj: <Plans />
  },
  {
    name: 'Historia',
    path: require('../assets/icons/history.png'),
    obj: <History />
  },
  {
    name: 'Rozpocznij Trening',
    path: require('../assets/icons/play.png')
  },  
  {
    name: 'Progres',
    path: require('../assets/icons/progress.png'),
    obj: <Progres />
  },
  {
    name: 'Profil',
    path: require('../assets/icons/profile.png'),
    obj: <Profile />
  },
]

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState('Historia')

  return (
      <SafeAreaView style={styles.container}>

        {tabsInfo.map((icon) => (icon.name == activeTab ? icon.obj : null))}

        <BottomTabs activeTab={activeTab} icons={tabsInfo} setParenActiveTab={newTab => setActiveTab(newTab)}/>
      
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