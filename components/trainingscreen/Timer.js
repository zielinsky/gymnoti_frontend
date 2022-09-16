import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Timer = ({time, textStyle, timerStyle, start}) => {
    const [counter, setCounter] = useState(time);
    useEffect(() => {
        const timer = start && counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        return () => timer;
    }, [counter]);

    return (
        <View style={[styles.timer, timerStyle]}>
            <Text style={[styles.text, textStyle, {color: counter == 0 ? 'red' : 'white'}]}>{counter}</Text>
            <Image style={{width: 25, height: 25, tintColor: counter == 0 ? 'red' : 'white'}} source={require('../../assets/icons/hourglass.png')}/>
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    timer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 20
    }
})