import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
//navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import MainNav from "./screens/mainNav"
import Navigator  from "./screens/mainNav"

function App (){
  return (<Navigator/>);
}
export default App;