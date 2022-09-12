import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Divider } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import {firestore, auth} from '../../../firebase'

LocaleConfig.locales['pl'] = {
  monthNames: [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzeń'
  ],
  monthNamesShort: ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP.', 'SIE', 'WRZ', 'PAŹ', 'LIS.', 'GRU'],
  dayNames: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
  dayNamesShort: ['Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.', 'Ndz.']
};
LocaleConfig.defaultLocale = 'pl';

const HIGHLITED_COLOR = '#2BF1E1'


const History = () => {
  const [loading, setLoading] = useState(true)
  const [trainings, setTrainings] = useState({})

  useEffect(() => {

    const getDocsReference = async ({trainingsRef}) => {
        const itemsDocs = await Promise.all(trainingsRef.map(item => getDoc(item['training'])))
        const trainingsSnap = [] 
        
        itemsDocs.map((item, index) => trainingsSnap.push([item.data(), trainingsRef[index]["date"]]))

        setTrainings(trainingsSnap);
        setLoading(false);
    }

    const  subscriber = onSnapshot(collection(firestore, 'users', auth.currentUser.uid, 'trainings'), QuerySnapshot => {

      const trainingsRef = []
      QuerySnapshot.forEach(documentSnapshot => {
        trainingsRef.push(documentSnapshot.data())
      })

      getDocsReference({trainingsRef: trainingsRef})

    });
    return () => subscriber()
  }, [])

  if(loading)
    return <ActivityIndicator size="large" color={HIGHLITED_COLOR} style={{flex: 1}}/>


  const dateFormat = (date) =>
                            date.getDate() + ' ' + LocaleConfig.locales['pl'].monthNames[date.getMonth()+1] +' ' + date.getFullYear() +
                            ' ' + date.toLocaleTimeString()

  const Training = ({training, date}) => (
    <TouchableOpacity style={styles.dayWrapper}>
      <View style={styles.dayContainer}>
        <Text style={{paddingLeft: 15}}> {training} </Text>
        <Text style={{paddingLeft: 15}}> {dateFormat(date)} </Text>
      </View>
    </TouchableOpacity>
  )

    return (
      <View style={styles.container}>
        <Calendar />
        <Divider width={1} orientation='vertical' />
        <View style={{height: '53%', alignItems: 'center'}} >
          <ScrollView>
            {trainings.map((training, index) => (
              <Training key={index} training={training[0].name} date={training[1].toDate('en-EN')}/>
            ))}
          </ScrollView>
        </View>
      </View>
    );

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  daysContainer:{
    alignItems: 'center'
  },
  dayWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    height: 40,
    borderWidth: .6,
    borderRadius: 10,
    borderColor:'rgba(158, 150, 150, .6)',
  },
})

export default History