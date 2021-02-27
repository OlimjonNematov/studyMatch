import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import LoginField from '../components/LoginField';

export default class LoginScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.background}
            behavior="padding">
                <Text style={styles.loginText}>
                    Login
                </Text>
                <LoginField/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#274C77",
        justifyContent: "center",
        alignContent: 'center',
        padding: 20
    },
    loginText: {
        paddingBottom: 100,
        fontWeight: 'bold',
        fontSize: 48,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white', 
    },
    buttonContainer: {
        backgroundColor: "#2BB8E3",
        paddingVertical: 40
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '800',
        fontSize: 28
    }
}); 

