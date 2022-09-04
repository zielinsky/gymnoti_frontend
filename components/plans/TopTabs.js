import { Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import React from 'react'


const TopTabs = () => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity >
                <Image
                    source={require('../../assets/icons/search.png')}
                    style={{width: 30, height: 30, resizeMode: 'contain', tintColor: 'white'}}
                />
            </TouchableOpacity>
        </View>
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