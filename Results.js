import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Button, Alert, Text, View } from 'react-native';
import Btn from './Btn'

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.FoodImage} 

      source={{ uri: "https://i.imgur.com/TkIrScD.png" }} />
  

      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Btn text='Request a Reservation' 
      
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },


  FoodImage: {
    position: 'absolute',
    width: 475, 
    height: 159,
    top: 0,
    
    
    

    
  },

});


