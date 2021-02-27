import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import LoginField from '../components/LoginField';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.background}>
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
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: "#274C77"
    }
}); 

