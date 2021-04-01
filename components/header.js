// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Header() {
    return(
        <View style={styles.header}>
            <Image
                source={require('../assets/MaxCap.png')}
                style = {styles.logo}
            />
            
        </View>
    )
}
const styles=StyleSheet.create({
header:{
    height:100,
    marginTop:160,
   
    // backgroundColor:'red',

},
logo:{
    height:250,
    marginTop:5,
    
    
}
})