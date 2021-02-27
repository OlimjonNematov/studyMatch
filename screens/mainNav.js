import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from "./home";
import TestScreen from "./test2"
import LoginScreen from "../app/screens/LoginScreen"
const Stack = createStackNavigator();

function MainNav(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn">
                {/* ##############      ADD COMPONENTS HERE     ####### */}
                <Stack.Screen name = "Home" component ={HomeScreen}/>
                <Stack.Screen name = "Test" component ={TestScreen}/>
                <Stack.Screen name = "LogIn" component ={LoginScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
            
    );
    
}

export default MainNav;
