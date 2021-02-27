import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function HomeScreen({navigation}){
    const pressHandler=()=>{
        navigation.navigate('Test')
    }
    return(
    <View>
        <Text>Home PAGE</Text>
        <Button title="go to test" onPress={pressHandler}/>
    </View>
    );
}
