import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import {  firestore, auth } from '../../../firebase'
import { ScrollView } from 'react-native-gesture-handler'

const HIGHLITED_COLOR = '#2BF1E1'

const days = [
  'Niedziela',
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota'
]

const engDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]

const now = new Date()

const Train = () => {
  const [loading, setLoading] = useState(true)
  const [plan, setPlan] = useState({})
  const [titleSize, setTitleSize] = useState()

  const navigation = useNavigation()

  useEffect(() => {
    const  subscriber = onSnapshot(doc(firestore, 'users', auth.currentUser.uid, 'info', 'plans'), 
      async QuerySnapshot => {
        const itemDoc = await Promise.resolve(getDoc(QuerySnapshot.data()[engDays[now.getDay()]]))
        
        setPlan(itemDoc.data())
        setTitleSize(45 - itemDoc.data()["name"].length)
        setLoading(false);
      } 
    );
    return () => subscriber()
  }, [])

  if(loading)
    return <ActivityIndicator size="large" color={HIGHLITED_COLOR} style={{flex: 1}}/>

  const Exercise = ({name, sets, reps}) => (
    <View style={styles.exerciseWrapper}>
    <View style={styles.exerciseContainer}>
      <Text style={{width: 200, textAlign: 'center'}}> {name} </Text>
      <Text>
          <Text style={{fontWeight: '900'}}>  {sets} </Text>serie
          <Text style={{fontWeight: '900'}}>  {reps} </Text>powtórzeń
      </Text>
    </View>
  </View>
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("Training", {exercises: plan["exercises"]})}>
        <Text style={{fontSize: titleSize, textAlign: 'center'}}>{plan["name"]}</Text>
        <Text style={{fontSize: 15}}>{days[now.getDay()].toLocaleUpperCase()}</Text>
        <Text style={{fontSize: 10, paddingTop: 15, color:'grey'}}> Naciśnij, aby rozpocząć</Text>
      </TouchableOpacity>
      <ScrollView style={{marginTop: 25, height: '50%'}}>
        {plan["exercises"].map((element) => (
              <Exercise name={element["name"]} sets={element["sets"]} reps={element["reps"]} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Train

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 40
  },
  exerciseWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  exerciseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 365,
    height: 40,
  },
  circle:{
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: 'rgba(130, 130, 130, 1)',
    borderRadius: 125,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
})