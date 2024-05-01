import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import Header from '../common/Header';


function Notes({navigation}) {

      OnPressBack = () => {
        navigation.goBack()
      }

    return (
      <View style={{ flex: 1 }}>
        <Header name={'Notes'} goback={true} OnPressBack={OnPressBack}/>
        
      </View>
    );
  }

  export default Notes;
