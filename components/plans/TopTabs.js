import { Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'


const TopTabs = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity >
                <Image
                    source={require('../../assets/icons/search.png')}
                    style={{width: 40, height: 40, resizeMode: 'contain', tintColor: 'white'}}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 999,
        paddingRight: 15,
    }
})
    
export default TopTabs