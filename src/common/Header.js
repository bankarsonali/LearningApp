import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextBase, StyleSheet ,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function Header(props) {
    // console.log("props", props)
    return (
          <View style={{...styles.header, marginTop :  Platform.OS === 'ios' ? '10%' : 0}}>
            {props.goback ? 
               <View>
                 <TouchableOpacity
                  style={{}}
                  onPress={() => props.OnPressBack()}
                 >
                   <Icon name="long-arrow-left" size={20} color="black" />
                 </TouchableOpacity>
                </View>
                :
                <View>
                </View>
             } 
            <Text style={{fontSize: 18, color:'black',fontWeight:'700', marginLeft: 15}}>{props.name}</Text>
            
          </View>
    );
  }

  const styles = StyleSheet.create({
    header : {
        backgroundColor:'white',
        height: '8%',
        width: '100%',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#c6cbef',
        flexDirection:'row'
    }
  })
  export default Header;