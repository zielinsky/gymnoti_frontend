import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
      name: 'Plany',
      path: require('../assets/icons/plans.png')
    },
    {
      name: 'Progress',
      path: require('../assets/icons/progress.png')
    },
    {
      name: 'Rozpocznij trening',
      path: require('../assets/icons/play.png')
    },
    {
      name: 'Historia',
      path: require('../assets/icons/history.png')
    },
    {
      name: 'Profil',
      path: require('../assets/icons/profile.png')
    },
]


const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Plany')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>

      <Divider style={styles.iconContainer}>
        <Image
          source={icon.path} 
          style={[styles.icon, activeTab == icon.name ? styles.iconActive : styles.iconInactive]}
        />
        <Text style={{color: activeTab == icon.name ? 'blue' : 'white'}}> {icon.name} </Text>
      </Divider>
      
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 999,
    backgroundColor: 'black'
  },
  iconsContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
    resizeMode: 'contain'
  },
  iconActive: {
    tintColor: 'blue',
    color: 'blue',
  },
  iconInactive: {
    tintColor: 'white',
  },
})

export default BottomTabs