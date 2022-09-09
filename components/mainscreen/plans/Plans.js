import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopTabs from './TopTabs'
import { collection, getDoc, doc, get } from 'firebase/firestore'
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
  const [tableData, settableData] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday:"",
    Sunday: ""
  });

  const getPlansName = async () => {
      const planDocRef = doc(firestore, 'users', auth.currentUser.uid);
      const planDocSnap = await getDoc(planDocRef);
      const trainingDocRef = planDocSnap.data()['monday'];
      const trainingDocSnap = await getDoc(trainingDocRef);

      settableData({
        Monday: trainingDocSnap.data().name,
        Tuesday: trainingDocSnap.data().name,
        Wednesday: trainingDocSnap.data().name,
        Thursday: trainingDocSnap.data().name,
        Friday: trainingDocSnap.data().name,
        Saturday: trainingDocSnap.data().name,
        Sunday: trainingDocSnap.data().name,
    })
  }
  useEffect(() => {getPlansName()}, [])

  const Day = ({day}) => (
    <TouchableOpacity style={styles.dayWrapper}>
      <View style={styles.dayContainer}>
        <Text style={{paddingLeft: 15}}> {day} </Text>
        <Text style={{paddingRight: 15, fontSize: 10}}> 
            {tableData['Monday']}
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