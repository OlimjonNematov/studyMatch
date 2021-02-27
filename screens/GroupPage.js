import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GroupInfo from "../app/components/GroupInfo";

var className = 'Class'

export default class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.topRectangle}>
                    <Text style={styles.topRectText}>
                        {className}
                    </Text>
                </View>
                <GroupInfo/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#274C77",
        justifyContent: "center",
        alignContent: 'center',
        padding: 40
    },
    topRectangle: {
        backgroundColor: "#2BB8E3",
        paddingVertical: 20,
        marginTop: 150
    },
    topRectText: {
        fontSize: 26,
        color: 'white',
        paddingHorizontal: 10,
        textAlign: 'left',
        fontWeight: '600'
    },
}); 