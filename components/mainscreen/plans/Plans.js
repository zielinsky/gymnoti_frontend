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

const HIGHLITED_COLOR = '#2BF1E1'

const Plans = () => {
  const Day = ({day}) => (
    <TouchableOpacity style={styles.dayWrapper}>
      <View style={styles.dayContainer}>
        <Text style={{paddingLeft: 15}}> {day} </Text>
        <Text style={{paddingRight: 15, fontSize: 10}}> 
          Aktualnie nie masz wybranego treningu! {'\n'} 
          Kliknij aby dodać/utworzyć trening lub {'\n'}
          ustawić <Text style={styles.highlitedText}> {day} </Text> jako dzień wolny!
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      <TopTabs />
        <View  style={styles.daysContainer}>
          {days.map((day, index) => (
            <Day key={index} day={day}/>
          ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  daysContainer:{
    alignItems: 'center'
  },
  dayWrapper: {
    paddingTop: 10,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    height: 86,
    borderWidth: .6,
    borderRadius: 10,
    borderColor:'rgba(158, 150, 150, .6)',
  },
  highlitedText: {
    color: HIGHLITED_COLOR
  }
})


export default Plans