import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import Header from '../common/Header';


function Notes({navigation}) {
    return (
      <View style={{ flex: 1, backgroundColor:'white' }}>
        <Header name={'Notes'} goback={true}/>
        <Text style={{fontSize: 14, color:'red'}}>Notes Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.goBack()}
            />
      </View>
    );
  }

  export default Notes;