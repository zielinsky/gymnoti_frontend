import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

const ACTIVE_COLOR = '#2BF1E1';
const INACTIVE_COLOR = 'white';

const BottomTabs = ({icons, setParenActiveTab, activeTab}) => {

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setParenActiveTab(icon.name)}>

      <View style={styles.iconContainer}>
        <Image
          source={icon.path} 
          style={[styles.icon, {tintColor: activeTab == icon.name ? ACTIVE_COLOR : INACTIVE_COLOR}]}
        />
        <Text style={{color: activeTab == icon.name ? ACTIVE_COLOR : INACTIVE_COLOR}}> {icon.name} </Text>
      </View>
      
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
  },
  iconsContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: 'white',
    resizeMode: 'contain'
  },
})

export default BottomTabs