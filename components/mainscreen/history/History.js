import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import {LocaleConfig} from 'react-native-calendars';

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

const History = () => {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    height: '0%'

  }
})