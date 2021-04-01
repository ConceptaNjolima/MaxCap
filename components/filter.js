// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Header() {
return(
<View style={styles.subHeader}>
    <TouchableOpacity>
        <Text>Sort by</Text>
    </TouchableOpacity>
</View>

)}
const styles=StyleSheet.create({
subHeader:{
    marginTop:20,
    marginLeft:340,
    color:'grey',
    
    
},

})