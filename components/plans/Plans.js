import { View, Text } from 'react-native'
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
    <View>
      <TopTabs />
    </View>
  )
}

export default Plans