import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//firbase
import apiKeys from "./constants/apikeys";



export default class App extends React.Component{

  // constructor (props){
  //   super(props);
  //   this.state={isLoadingComplete: false};
    
  //   //initialize firbase
  //   if(!firebase.apps.length){firebase.initializeApp(ApiKeys.firebaseConfig);}
  // }
  render(){
    return (
      <View style={styles.container}>
        <Text>hello!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
