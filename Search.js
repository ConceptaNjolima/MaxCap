// import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/header'
import Restaurant from './components/restaurant'
import SearchBar from './components/searchBar'
import Filter from './components/filter'
import {restaurantData} from './API/database'

export default function Search() {
    
    const pressHandler=(key)=>{
        // To open the specific restaurant
        console.log(key);
    }
  return (
    <View style={styles.container}>
        {/* header */}
        <Header/>
        <View>
            {/* SearchBar */}
            <SearchBar/>
            <Filter/>
            <View style={styles.list}>
                <FlatList
                        data={restaurantData}
                        renderItem={({item})=>(
                        <Restaurant item={item}/>
                    
                        )}
                    />
            </View>
        </View>
     
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
  list:{
      marginTop:10,
      marginLeft:15,
  },
 
});
