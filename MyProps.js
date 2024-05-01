import {View, Text} from 'react-native';
import React from 'react';

const MyProps = ({name}) => {
  return(
    <View>
        <Text>{name}</Text>
        <MyProps name={'Sonali'}/>
    </View>
  )
}

export default MyProps;