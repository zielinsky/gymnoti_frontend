import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Timer from '../components/trainingscreen/Timer'

const TrainingScreen = () => {
  const [exerciseID, setExerciseID] = useState(0)
  const [setID, setSetID] = useState(1)
  const [rest, setRest] = useState(false)
  
  const route = useRoute()

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Timer time={180} start={rest} />
          </View>
        </View>
        <TouchableOpacity style={{marginBottom: 50}}>
          <Image style={styles.check} source={require('../assets/icons/check.png')}/>
        </TouchableOpacity>
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
    alignItems: 'center',
    paddingTop: 40
  },
  check: {
    width: 100,
    height: 100,
    tintColor: 'green',
  },
})