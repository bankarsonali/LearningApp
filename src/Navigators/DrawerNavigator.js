import React from 'react';
import {View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Main from '../screens/Main';
import Notes from '../screens/Notes';

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
            <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {
                  backgroundColor: '#c6cbef',
                  width: 240,
                },
              }}>
                <Drawer.Screen
                    name="Main"
                    component={Main}
                    options={{headerShown: true}}
                />
            </Drawer.Navigator>
    );
  };

  export default DrawerNavigator;