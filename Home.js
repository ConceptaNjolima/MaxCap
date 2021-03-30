// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState}from 'react';
import { StyleSheet, View, FlatList, Text, Image, Button, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
    return(
    <View>
        <Image
            source={require('./assets/MaxCap.png')}
            style = {styles.logo}
        />
        <TouchableOpacity>
            <Text style={styles.userbutton} onPress={()=>navigation.navigate("Search")}> User</Text>
            <Text style={styles.businessButton} onPress={()=>navigation.navigate("Business")}>I am a registered business</Text>
        </TouchableOpacity>
        <Image source={require('./assets/copyright.png')} style={{height:13,width:13, marginTop:185, marginLeft:55}}/>
        <Text style={{position:'absolute', marginTop:730, marginLeft:70, color:'grey'}}>All rights reserved by MaxCap Team at NSBE47</Text>
        
    </View>
 

    )

}
const styles = StyleSheet.create({
homebutton:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    

    
},
businessButton:{
    marginLeft: 132,
    fontStyle:'italic'
    

},
userbutton:{
    textAlign:'center',
    // backgroundColor:'coral',
    marginTop:-100,
    marginBottom:60,
    marginLeft:140,
    padding:12,
    width:150,
    height:50,
    color:'#BF4E09',
    fontWeight:'bold',
    fontSize:19,
    // backgroundColor:'#BF4E09',
    borderColor:'#BF4E09',
    borderWidth:2,
    borderStyle:'solid',
    borderRadius:10,
    overflow:'hidden'


},
logo: {
    marginTop: 120,
    height: 400,
    width: 300,
    marginLeft:75,
}
})