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
  const Day = ({day}) => (
    <TouchableOpacity style={{paddingTop: 10}}>
      <View style={styles.container}>
        <Text> {day} </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      <TopTabs />
        <View  style={styles.wrapper}>
          {days.map((day, index) => (
            <Day key={index} day={day}/>
          ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    alignItems: 'center'
  },
  container: {
    justifyContent: 'center',
    width: 350,
    height: 85,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'white',
  }
})


export default Plans