import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/header'
import Restaurant from './components/restaurant'
import SearchBar from './components/searchBar'
import Filter from './components/filter'

export default function Search() {
    const[restaurants]=useState([
        {key:'1',name:'MacDonalds', image:'../assets/mcdonalds.jpg', proximity:'2.5 miles away'},
        {key:'2',name:'StarBucks', image:'../assets/mcdonalds.jpg', proximity:'0.5 miles away'},
        {key:'3',name:'Taco Bell', image:'../assets/mcdonalds.jpg',proximity:'1.5 miles away'},
        {key:'4',name:'MacDonalds', image:'../assets/mcdonalds.jpg', proximity:'20.5 miles away'},
        {key:'5',name:'MacDonalds', image:'../assets/mcdonalds.jpg', proximity:'0.5 miles away'},
        {key:'6',name:'MacDonalds', image:'../assets/mcdonalds.jpg', proximity:'0.5 miles away'},
        {key:'7',name:'MacDonalds', image:'../assets/mcdonalds.jpg', proximity:'0.5 miles away'},
        {key:'8',name:'MacDonalds', image:'../assets/mcdonalds.jpg', proximity:'0.5 miles away'},
    ])
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
                        data={restaurants}
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
    marginTop:25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
      marginTop:10,
      marginLeft:15,
  },
 
});
