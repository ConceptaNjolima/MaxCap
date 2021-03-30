import React, {useState}from 'react';
import { StyleSheet, View, FlatList, Text, Image, Button, TouchableOpacity} from 'react-native';

export default function RegisteredBusiness({navigation}) {
    return(
        <View>
        <Text style={{textAlign:'center', color:'#BF4E09', marginTop:300}}>Registered Business Page Coming Soon</Text>
        <Image source={require('./assets/copyright.png')} style={{height:13,width:13, marginTop:415, marginLeft:55}}/>
        <Text style={{position:'absolute', marginTop:730, marginLeft:70, color:'grey'}}>All rights reserved by MaxCap Team at NSBE47</Text>
        </View>
        )}