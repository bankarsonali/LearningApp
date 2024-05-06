import {View, Text} from 'react-native';
import React from 'react';
import Header from '../common/Header';

const Search = () => {
  return (
    <>
      <Header title="Search" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FDFD96'}}>
          <Text style={{fontSize: 16, fontWeight:'bold', color:'black'}}>Search</Text>
        </View>
    </>
  );
};

export default Search;