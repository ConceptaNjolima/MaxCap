// Acknowledgements:
// FreePik: For the Search Icon image used in teh Search Bar
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Dimensions, StyleSheet, View , Text,Image, TouchableOpacity} from 'react-native';

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height



export default function SearchBar() {
    return(
        <SafeAreaView style={styles.header_safe_area}>
            <View style={styles.header}>
                <View style={styles.innerHeader}>
                    <View style={styles.search_icon_box}>
                        <TouchableOpacity>
                        <Image 
                        source={require('../assets/searchIcon.png')}
                        style={styles.searchIcon}/>
                        </TouchableOpacity>
                        
                    </View>
              
                </View>
            </View>
        </SafeAreaView>
    
    )}
    const styles=StyleSheet.create({
        header_safe_area:{
            zIndex:1000,
        },
        header:{
            height:50,
            paddingHorizontal:16,

        },
        innerHeader:{
            flex:1,
            overflow:'hidden',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            position:'relative',
        },
        search_icon_box:{
            width:400,
            height:50,
            borderRadius:40,
            borderColor:'coral',
            borderWidth:2,
            borderStyle:'solid',
            borderRadius:10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        },
        searchIcon:{
            marginLeft:350,
            width:20,
            height:20,
        },
    })

