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
        <TouchableOpacity  style={styles.buttonContainer} >
          <Text style={styles.text}>
            MOJE PLANY
          </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  buttonContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 70,
    paddingRight: 70,
    bottom: 80,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#132235'
  },
  container: {
    height: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"   
  },
})


export default Plans