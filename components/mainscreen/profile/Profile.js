import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase'


const Profile = () => {
  const navigation = useNavigation()

  const handleSingOut = () =>{
    signOut(auth).then(() => {
      navigation.replace("Login")
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSingOut} style={styles.button}>
            <Text style={styles.buttonText}>Wyloguj</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#07b0f9',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
export default Profile