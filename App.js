// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Search';
import Home from './Home';
import Results from './Results'
import RegisteredBusiness from './Business'

import {enableScreens} from 'react-native-screens'
enableScreens();

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "react-native-screens/native-stack"
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Results" component={Results} />
                <Stack.Screen name="Business" component={RegisteredBusiness} />
            </Stack.Navigator>
        </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
