import React, {useState}from 'react';
import { Alert, StyleSheet, View, FlatList, Text, Image,SafeAreaView,TextInput, Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input'
import { restaurantData } from './API/database';
import {Users} from './API/users'


const pressed=()=>{
    Alert.alert("Leaving MaxCap, Connecting to your POS system")
}
export default function RegisteredBusiness({navigation}) {
    const[count]=useState(0)
    return(
        <SafeAreaView>
            <ScrollView>
            
            <Text style={{position:'absolute', padding:10, fontSize:30, fontWeight:'bold', color:'white', width:450,height:65,textAlign:'center', backgroundColor: '#BF4E09'}}>Y.O. Ranch Steakhouse</Text>
            <TouchableOpacity onPress={pressed}>
                <Text style={{textAlign:'center', color:'#BF4E09', marginTop:100, fontSize:18}}>View my Connected POS system </Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center', top:60, fontSize:20}}>Update information manually</Text>
            <View>
                <Text style={{position:'absolute', top:125, left: 25, fontWeight: 'bold', fontSize: 25}}>Tables Available</Text>
                <TouchableOpacity style={{position:'absolute', top:120,right:150}}>
                    <NumericInput
                    type='up-down'
                    value={count}
                    totalHeight={40}
                    totalWidth={50}
                    iconSize={25}
                    maxValue={100}
                    minValue={0}
                    step={1}
                    upDownButtonsBackgroundColor='#BF4E09'
                    rounded={true}
                    />
                </TouchableOpacity>

            </View>
            <View>
                

            </View>
            <View style={{marginLeft:20}}>
                <Text style={{position:'absolute',top:275, fontWeight: 'bold', fontSize: 20, color: '#BF4E09', backgroundSize: 10}}>  Type               Party of 2           Party of 4          </Text>
             
            </View>
            <View>
                <Text style={{position:'absolute', top:190, left:90, fontWeight: 'bold', fontSize: 25}}>Capacity</Text>
                <TouchableOpacity style={{position:'absolute', top:190, right:150}}>
                    <NumericInput
                    type='up-down'
                    value={count}
                    totalHeight={40}
                    totalWidth={50}
                    iconSize={25}
                    maxValue={100}
                    minValue={0}
                    step={1}
                    upDownButtonsBackgroundColor='#BF4E09'
                    rounded={true}
                    />
                </TouchableOpacity>
                <Text style={{position:'absolute', fontWeight: 'bold', top:320, left:22, fontWeight: 'bold', fontSize: 17}}>Tables Available</Text>
                <TouchableOpacity style={{position:'absolute', top:310, left:170}}>
                    <NumericInput
                    type='up-down'
                    value={count}
                    totalHeight={40}
                    totalWidth={50}
                    iconSize={25}
                    maxValue={100}
                    minValue={0}
                    step={1}
                    upDownButtonsBackgroundColor='#BF4E09'
                    rounded={true}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute', top:310, left:300}}>
                    <NumericInput
                    type='up-down'
                    value={count}
                    totalHeight={40}
                    totalWidth={50}
                    iconSize={25}
                    maxValue={100}
                    minValue={0}
                    step={1}
                    upDownButtonsBackgroundColor='#BF4E09'
                    rounded={true}
                    />
                </TouchableOpacity>


            </View>
            <View >
                <Text style={{position:'absolute',top:400, left:20,fontSize:20,fontWeight:'bold',color: '#BF4E09', textAlign:'center',height: 40,width:400}}>
                    Reservation Requests
                </Text>
                <View>
                    <FlatList style={{position:'absolute', top:420, left:20, width:1000}}
                            data={Users}
                            renderItem={({item})=>(
                                <View>
                                    <Image style={{
                                        height:100,
                                        width:100,
                                        marginRight:40,
                                        borderRadius:5,
                                        marginTop:20
                                        }}
                                    source={{uri:item.profilePicture}}/>
                                    <View style={{position:'absolute',top:30, left:130}}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.table}</Text>
                                        <Text>{item.reservationTime}</Text>
                                        <Text>{item.reservationDate}</Text>
                                    </View>
                                   
                                    
                                </View>
                            )}
                        />
                </View>
        </View>
        <Image source={require('./assets/copyright.png')} style={{height:13,width:13, marginTop:810, marginLeft:55}}/>
            <Text style={{position:'relative', marginTop:-15, marginLeft:70, color:'grey'}}>
            All rights reserved by MaxCap Team at NSBE47</Text>
            
            </ScrollView>
        </SafeAreaView>
        )}