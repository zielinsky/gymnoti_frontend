import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Timer from '../components/trainingscreen/Timer'
import Clock from '../components/trainingscreen/Clock'


const TrainingScreen = () => {
  const [exerciseID, setExerciseID] = useState(0)
  const [setID, setSetID] = useState(1)
  const [rest, setRest] = useState(false)
  
  const route = useRoute()
  const HEADER_FONT_SIZE = 50 - route.params["name"].length

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
              <Clock clockStyle={{position: 'absolute', left: 35}} textStyle={{fontSize: 20}}/>
              <Text style={{fontSize: 50}}>{setID}/{route.params["exercises"][exerciseID]["sets"]}</Text>
              <Timer time={180} start={rest} timerStyle={{position: 'absolute', right: 35}} />
        </View> 
        <View  style={styles.exerciseContainer}>
          <View style={styles.exerciseHeader}>
            <Text style={{width: '80%'}}> {route.params["exercises"][0]["name"]} </Text>
            <Text>{exerciseID+1}/{route.params["exercises"].length}</Text>
          </View>
          <View style={styles.exerciseImage}>
            <Text> EXERCISE IMAGE/VIDEO HERE</Text> 
          </View>
        </View>
        
      </SafeAreaView>
    )
}

export default TrainingScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: '#08090D',
    alignItems: 'center',
    paddingTop: 40
  },
  exerciseContainer: {
    width: '90%',
    height: '40%',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseImage:{
    width: '100%',
    height: '95%',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  exerciseHeader: {
    justifyContent: 'space-between',
    flexDirection: "row",
    width: '100%'
  },
  checkContainer: {

  }, 
  checkImage: {
    width: 100,
    height: 100,
    tintColor: 'green',
  },
  header:{
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerText: {
    textAlign: 'center',
    width: '80%',
  }
})