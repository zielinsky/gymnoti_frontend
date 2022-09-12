import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

import React from 'react'
import { Calendar } from 'react-native-calendars';
// import {LocaleConfig} from 'react-native-calendars';

// LocaleConfig.locales['pl'] = {
//   monthNames: [
//     'Styczeń',
//     'Luty',
//     'Marzec',
//     'Kwiecień',
//     'Maj',
//     'Czerwiec',
//     'Lipiec',
//     'Sierpień',
//     'Wrzesień',
//     'Październik',
//     'Listopad',
//     'Grudzeń'
//   ],
//   monthNamesShort: ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP.', 'SIE', 'WRZ', 'PAŹ', 'LIS.', 'GRU'],
//   dayNames: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
//   dayNamesShort: ['Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.', 'Ndz.']
// };
// LocaleConfig.defaultLocale = 'pl';


const History = () => {

  const Training = ({training}) => (
    <TouchableOpacity style={styles.dayWrapper}>
      <View style={styles.dayContainer}>
        <Text style={{paddingLeft: 15}}> {training} </Text>
      </View>
    </TouchableOpacity>
  )

    return (
      <View style={styles.container}>
        <Calendar />
        <Divider width={1} orientation='vertical' />
        <View style={{height: '53%', alignItems: 'center'}} >
          <ScrollView >
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
              <Training training="elo"/>
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