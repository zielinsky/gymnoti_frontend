import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';


const Clock = ({textStyle, clockStyle}) => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            if(sec == 59){
                setSec(0)
                if(min == 59){
                    setMin(0)
                    setHour(hour + 1)
                }else{
                    setMin(min + 1)
                }
            }else{
                setSec(sec + 1)
            }
        }, 1000);
        return () => true;
    }, [sec]);

    return (
        <View style={[styles.clock, clockStyle]}>
            <Text style={textStyle}>{hour <= 9 ? '0' : ''}{hour}:{min <= 9 ? '0' : ''}{min}:{sec <= 9 ? '0' : ''}{sec}</Text>
        </View>
    )
}

export default Clock

const styles = StyleSheet.create({
    clock:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
})