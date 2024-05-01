import  React, {useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../common/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerNavigator from '../Navigators/DrawerNavigator';

function Home({navigation}) {

    return (
          <DrawerNavigator />          
    );
  }

  const styles = StyleSheet.create({
    
  })
  export default Home;