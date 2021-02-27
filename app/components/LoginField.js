import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.center}>
                <TextInput 
                placeholder="Username"
                placeholderTextColor="black"
                style={styles.textbox}>
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: "#274C77"
    },
    textbox: {
        height: 40,
        backgroundColor: 'lightgrey',
        color: 'black',
        paddingHorizontal: 10,
        alignItems: "center",
        marginBottom: 30
    },
}); 

