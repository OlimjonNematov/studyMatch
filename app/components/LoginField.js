import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class LoginField extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor="black"
                    style={styles.textbox}
                    autoCapitalize='none'
                    autoCompleteType='username'
                    returnKeyType='next'>
                </TextInput>

                <TextInput
                    placeholder="Password"
                    placeholderTextColor='black'
                    style={styles.textbox}
                    secureTextEntry='true'
                    returnKeyType="go">
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
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

