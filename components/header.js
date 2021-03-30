// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                MaxCap
            </Text>
            
        </View>
    )
}
const styles=StyleSheet.create({
header:{
    height:100,
    marginTop:70,
    // backgroundColor:'red',

},
title:{
    height:80,
    paddingTop:60,
    color:'coral',
    fontFamily:''
}
})