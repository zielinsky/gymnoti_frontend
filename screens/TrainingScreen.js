import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const TrainingScreen = () => {
  const [exerciseID, setExerciseID] = useState()
  const [setID, setSetID] = useState()
  
  const route = useRoute()

    return (
      <SafeAreaView style={styles.container}>
        
      </SafeAreaView>
    )
}

export default TrainingScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#08090D',
  }
})