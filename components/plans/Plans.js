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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity  style={styles.buttonContainer} >
          <Text style={styles.text}>
            Moje plany
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.buttonContainer} >
          <Text style={styles.text}>
            Moje plany
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  buttonContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    bottom: 80,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#4E6889'
  },
  container: {
    height: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"   
  },
})


export default Plans