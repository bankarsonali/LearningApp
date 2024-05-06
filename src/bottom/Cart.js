import {View, Text,StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React , {useState} from 'react';
import CartItem from '../common/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import { addToWishlist, removeFromCart } from '../redux/actions/Actions';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import Header from '../common/Header';


function Cart() {

  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  console.log("cartData ::", cartData)

  const renderItemSeparator = () => {
    return <View style={{ height: 48 }} />
  }


  return (
    <View style={{flex: 1, backgroundColor:'#FDFD96'}}>
      <Header title="Cart" />
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          ItemSeparatorComponent={renderItemSeparator()}
           style={{marginTop: 10}}
          renderItem={({item, index}) => {
            return (             
              <CartItem
                onAddWishlist={x => {
                  dispatch(addToWishlist(x));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            
            );
          }}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontWeight:'800', color:'black'}}>No Items Added in Cart</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{marginBottom: 80}}>
          <CommonButton
            bgColor={'green'}
            textColor={'#fff'}
            title={'Checkout'}
            onPress={() => {
              navigation.navigate('Checkout');
            }}
          />
        </View>
      ) : null}
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

export default Cart;