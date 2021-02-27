import React from 'react';
import {Text,View, StyleSheet, SafeAreaView} from 'react-native';

const styles =StyleSheet.create({
   center: {
    flex: 1,
    backgroundColor: '#6096BA',
    alignItems: 'center',
    justifyContent: 'center',
   } 
   
})

const Greeting = (props) => {
    return (
        <SafeAreaView style ={styles.center}>
          <Text>Hello {props.name}!</Text>
        </SafeAreaView>
    );
}

const LotsOfGreetings = () => {
    return (
        <View style= {styles.center}>
        <Greeting name = 'Rexxar' />
        </View>

    );
}

export default LotsOfGreetings;