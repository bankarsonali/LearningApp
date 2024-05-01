import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Main = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    
     <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Notes')}
     >
        <Text>Go to Next</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    width: '40%',
    // height:'10%',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    paddingVertical: 10,
    backgroundColor:'#6495ED',
    marginTop:10
  }
})

export default Main;