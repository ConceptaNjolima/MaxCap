import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert} from 'react-native';
const pressed = () => {
    Alert.alert("Requestig Reservation")
}

export default function Btn({text, onPress}){
    return(
        <TouchableOpacity onPress={pressed}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position:"relative",
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#BF4E09",
        top: 70
    


    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',


    }
})