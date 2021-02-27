import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import MainNav from "./screens/mainNav"
import HomeScreen  from "./screens/home"

function App (){
  return(
   <MainNav></MainNav>
  );
  
}
export default App;