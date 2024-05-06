import {View, Text,StyleSheet, FlatList} from 'react-native';
import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';

import {
  addItemToCart,
  removeFromWishlist,
} from '../redux/actions/Actions';
import Header from '../common/Header';


function Wishlist() {

  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();

  console.log("CartData ====>", cartData);

  return (
    <View style={{flex: 1, backgroundColor:'#FDFD96'}}>
      <Header title='WishList'/>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              isWishlist={'swe'}
              item={item}
              onRemoveFromWishlist={() => {
                dispatch(removeFromWishlist(index));
              }}
              onAddToCart={x => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
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

export default Wishlist;