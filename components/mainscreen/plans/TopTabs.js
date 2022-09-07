import { StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import { Divider } from 'react-native-elements'
import React from 'react'


const TopTabs = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableOpacity  style={styles.buttonContainer} >
                    <Text style={{color: 'white', fontSize: 20}}>
                        Moje treningi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonContainer} >
                    <Text style={{color: 'white', fontSize: 20}}>
                        Społeczność
                    </Text>
                </TouchableOpacity>
            </View>
            <Divider width={1} orientation='vertical' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingBottom: 15,
        paddingTop: 15,
        zIndex: 999,
    },
    buttonContainer: {
        paddingLeft: 25,
        paddingRight: 25,
    }
})
    
export default TopTabs