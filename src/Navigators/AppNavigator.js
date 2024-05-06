import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Splash from '../screens/Splash';
import MyAddress from '../screens/MyAddress';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Checkout from '../screens/Checkout';
import AddAdresses from '../screens/AddAdresses';
import OrderSuccess from '../OrderSuccess';
import Orders from '../screens/Orders';


const Stack = createNativeStackNavigator();



function AppNavigator(){

    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
          <Stack.Screen name="MyAddress" component={MyAddress} options={{headerShown: false}}/>
          <Stack.Screen name="AddAdresses" component={AddAdresses} options={{headerShown: false}}/>
          <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false}}/>
          <Stack.Screen name="OrderSuccess" component={OrderSuccess} options={{headerShown: false}}/>
          <Stack.Screen name="Orders" component={Orders} options={{headerShown: false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;