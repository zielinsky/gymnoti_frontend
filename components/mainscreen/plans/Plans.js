import { View, Text , StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopTabs from './TopTabs'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import {firestore, auth} from '../../../firebase'

export const days = [
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
  'Niedziela'
]

const engDays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
]

const HIGHLITED_COLOR = '#2BF1E1'


const Plans = () => {
  const [loading, setLoading] = useState(true)
  const [plans, setPlans] = useState({})


  useEffect(() => {

    const plans = {
      'monday': '',
      'tuesday': '',
      'wednesday': '',
      'thursday': '',
      'friday': '',
      'saturday': '',
      'sunday': ''
    }
    
    const  subscriber = onSnapshot(collection(firestore, 'users', auth.currentUser.uid, 'plans'), QuerySnapshot => {
      QuerySnapshot.forEach(documentSnapshot => {
        plans[documentSnapshot.id] = documentSnapshot.data().name
      })

      setPlans(plans);
      setLoading(false);
    });
    return () => subscriber();
  }, [])


  if(loading)
    return <ActivityIndicator size="large" color={HIGHLITED_COLOR} style={{flex: 1}}/>


  const Day = ({day, plan}) => (
    <TouchableOpacity style={styles.dayWrapper}>
      <View style={styles.dayContainer}>
        <Text style={{paddingLeft: 15}}> {day} </Text>
        <Text style={[{paddingRight: 15, fontSize: 20}, styles.highlitedText]}>
          {plan}
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      <TopTabs />
        <View  style={styles.daysContainer}>
          {days.map((day, index) => (
            <Day key={index} day={day} plan={plans[engDays[index]]}/>
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
  }
})


export default Plans