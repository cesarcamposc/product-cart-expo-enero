import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartScreen = () => {
  return (
    <FlatList
    data={cart}
    renderItem={({item})=> <CartListItem cartItem = {item} />}
    />
  );
}

export default ShoppingCartScreen

const styles = StyleSheet.create({})