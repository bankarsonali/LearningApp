import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextBase, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function Header(props) {
    console.log("props", props)
    return (
          <View style={styles.header}>
            <Text style={{fontSize: 14, color:'black', marginLeft:10}}>{props.name}</Text>
            {props.goback ? 
               <View>
                 <TouchableOpacity>
                 <Icon name="rocket" size={30} color="#900" />
                 </TouchableOpacity>
                </View>
                :
                <View>
                </View>
             } 
          </View>
    );
  }

  const styles = StyleSheet.create({
    header : {
        backgroundColor:'white',
        height: '10%',
        width: '100%'
    }
  })
  export default Header;