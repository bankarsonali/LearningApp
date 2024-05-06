import {View, Text,StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

function OrderSuccess() {

  const orders = useSelector(state => state.OrderReducer);
  console.log(orders);
  const route = useRoute();
  const navigation = useNavigation();

  console.log("OrderReducer",orders)

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={
          route.params.status == 'success'
            ? require('./images/check.png')
            : require('./images/failed.png')
        }
        style={{width: 50, height: 50}}
      />
      <Text style={{marginTop: 20, fontSize: 20}}>
        {route.params.status == 'success'
          ? 'Your Order Placed Sucessfully !'
          : 'Order Failed'}
      </Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.6,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
  
  }
})

export default OrderSuccess;