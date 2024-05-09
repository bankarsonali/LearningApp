/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Platform
} from 'react-native';

import { Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/Navigators/AppNavigator';
import messaging from '@react-native-firebase/messaging';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';


function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log("In useEffect+++")
    getDeviceToken()

  },[]);

  const getDeviceToken = async() => {
    let token
    // if(Platform.OS === 'ios'){
    //   await messaging().registerDeviceForRemoteMessages();
    //   token = await messaging().getToken();
    // }else{
       token =  await messaging().getToken();
   // }
    
    console.warn(token)
    console.log("Token", token)
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived in forground mode!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


  return (
     <View style={{flex: 1}}>
       <Provider store={Store}>
       <AppNavigator />
       </Provider>
     </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  }
});

export default App;
