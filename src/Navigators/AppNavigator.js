import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Notes from '../screens/Notes';
import Header from '../common/Header';

const Stack = createNativeStackNavigator();


function AppNavigator(){

    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Notes" component={Notes} options={{headerShown: false}}/>
          <Stack.Screen name='Header' component={Header} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default AppNavigator;