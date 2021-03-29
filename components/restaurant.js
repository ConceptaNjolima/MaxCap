import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';


export default function Restaurant({item}) {
    return(
        <TouchableOpacity style={styles.item}>
              <Image 
                source={require('../assets/mcdonalds.jpg')}
                style={styles.restaurantImage}/>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.proximity}</Text>
                </View>
            
          
        </TouchableOpacity>
    )}

    const styles=StyleSheet.create({
        item:{
            flex:1,
            flexDirection:'row',
            marginTop:24,
            padding:16,
            borderColor:'grey',
            borderWidth:1,
            borderStyle:'solid',
            borderRadius:10,
            fontSize:24,
            width:400,
            height:135,
      
        },
        restaurantImage:{
            height:100,
            width:100,
            marginRight:40,
            borderRadius:5,
            

        },
    })