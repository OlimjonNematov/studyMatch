import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from "./home";


const Stack = createStackNavigator();

function MainNav(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* ##############      ADD COMPONENTS HERE     ####### */}
                <Stack.Screen name = "home" component ={HomeScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
    
}

export default MainNav;
