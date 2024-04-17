import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../common/Header';


function Home({navigation}) {
    return (
        <View style={{flex:1,  backgroundColor:'white'}}>
          <Header name={'Home'} goback={false}/>
          <Text style={{fontSize: 14, color:'red'}}>Home Screen</Text>
            <Button
            title="Go to Notes"
            onPress={() => navigation.navigate('Notes')}
            />
        </View>
    );
  }

  export default Home;