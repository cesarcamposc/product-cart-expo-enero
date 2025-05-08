import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import CartListItem from '../components/CartListItem';

export default function index() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCartScreen/>    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
        
    },

})