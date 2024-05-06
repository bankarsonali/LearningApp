import * as React from 'react';
import { View, Text , SafeAreaView, FlatList,TouchableOpacity} from 'react-native';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';

let addressList = [];

function MyAddress() {

  const navigation = useNavigation();

    return (
      <SafeAreaView style={{flex:1}}>
     <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '600', fontSize: 18, marginLeft: 15}}>
          My Address
        </Text>
        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.2,
            padding: 7,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('AddAdresses');
          }}>
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
       data={addressList}
       renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '100%',

                borderWidth: 0.2,
                borderColor: '#8e8e8e',
                alignSelf: 'center',

                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{marginLeft: 20}}>{'City: ' + item.city}</Text>
                <Text style={{marginLeft: 20}}>
                  {'Building: ' + item.building}
                </Text>
                <Text style={{marginLeft: 20, marginBottom: 10}}>
                  {'Pincode: ' + item.pincode}
                </Text>
              </View>
              <TouchableOpacity
                style={{borderWidth: 0.2, padding: 7, marginRight: 20}}
                onPress={() => {
                  // dispatch(deleteAddress(index));
                }}>
                <Text>Delete address</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      </View>
      </SafeAreaView>
    );
  }

  export default MyAddress;
