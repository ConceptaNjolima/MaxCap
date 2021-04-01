
import React from 'react';
import { Dimensions, Image, StyleSheet, Button, Alert, Text, View } from 'react-native';
import Btn from './Btn'
import {useNavigation} from '@react-navigation/native'

export default function Results({route,navigation}) {
  const {key,
  name,
  Currentcapacity,
  imageUrl,
  address,
  restrictions,
  covidZone,
  contactInformation}=route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.FoodImage} 

      source={{uri:imageUrl}} />
  

      <Text style={{fontSize:30,color:"#BF4E09", marginTop:50,marginBottom:3, marginLeft:5}}>{name}</Text>
      <Text style={{marginBottom:10,marginRight:5}}>{address}</Text>
      <Text style={{marginBottom:50,marginRight:5}}>Covid Zone: {covidZone}</Text>
      <Text style={{marginBottom:2,marginRight:130}}>Current Capacity: {Currentcapacity}</Text>
      <View style={{justifyContent:'center',marginRight:5}} >
        <Text style={{marginBottom:3,marginTop:10,fontStyle:'italic'}}>Area Restrictions</Text>
        <Text>* {restrictions[0]}</Text>
        <Text>* {restrictions[1]}</Text>
        <Text>* {restrictions[2]}</Text>
      </View>
      <Text style={{marginTop:50,marginRight:10,color:"#BF4E09"}}>Contact Us on:</Text>
      <Text style={{marginRight:10}}>{contactInformation}</Text>
      <Image style={{height:20,width:20, position:'absolute', top:580, left:180}} source={require('./assets/facebook.png')}></Image>
      <Image style={{height:20,width:20,top:580,left:220,position:'absolute'}} source={require('./assets/instagram.png')}></Image>
    
     
      
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
    height: 250,
    top: 0,
    
    
    

    
  },

});


