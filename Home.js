// import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, View, FlatList, Text, Image, Button} from 'react-native';

export default function Home({navigation}) {
    return(
    <View>
        <Image
            source={require('./assets/MaxCap.png')}
            style = {styles.logo}
        />
        <View>
        <Button style={styles.userbutton}title='I am a user' onPress={()=>navigation.navigate("Search")}></Button>
        <Button title='I am a business' ></Button>
            
        </View>

        
    </View>
 

    )

}
const styles = StyleSheet.create({
homebutton:{
    flex:3,
    flexDirection:'row',
    justifyContent:'space-evenly',
    

    
},
businessButton:{
    marginRight: 400,
    backgroundColor:'red'

},
userbutton:{
    marginRight: 400,
    backgroundColor:'red'

},
logo: {
    marginTop: 170,
    height: 400,
    width: 300,
    marginLeft:80,
}
})