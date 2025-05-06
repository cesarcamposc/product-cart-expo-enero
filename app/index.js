import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

export default function index() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      <ProductDetailsScreen />     
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
        
    },

})