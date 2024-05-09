import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import React,{ useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'

function  Main(){

  const navigation = useNavigation();

  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  const [counter, setCounter] = useState(0);

  // incrementCounter = () => {
  //   console.log("incrementCounter")
  //   setCounter(counter + 1);

  // }

  // decrementCounter = () => {
  //   console.log("decrementCounter")
  //   setCounter(counter - 1);

  // }

  return (

    <View style={{flex: 1, justifyContent:'center', alignItems:'center',}}>
     
     <TouchableOpacity 
      style={styles.button}
      onPress={() => dispatch(incrementCounter())}
     >
        <Text style={{color: 'white', fontWeight:'bold', fontSize: 16}}>Increment</Text>
     </TouchableOpacity>
     <Text style={{marginTop:10,fontSize: 16, color: 'red', fontWeight:'bold'}}>{counter}</Text>
     <TouchableOpacity 
      style={styles.button}
      onPress={() => dispatch(decrementCounter())}
     >
        <Text style={{color: 'white', fontWeight:'bold', fontSize: 16}}>Decrement</Text>
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
    marginTop:10,
   borderRadius: 10
  }
})

export default Main;