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
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>

      <Divider style={styles.iconContainer}>
        <Image
          source={icon.path} 
          style={styles.icon}
        />
        <Text> {icon.name} </Text>
      </Divider>
      
    </TouchableOpacity>
  )
  return (
    <View style={styles.iconsContainer}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    resizeMode: 'contain'
  },
})

export default BottomTabs