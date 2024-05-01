import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Notes from '../screens/Notes';


const Stack = createNativeStackNavigator();



function AppNavigator(){

    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Notes" component={Notes} options={{headerShown: false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;