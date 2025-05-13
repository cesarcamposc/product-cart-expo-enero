import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartTotals = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>510.00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10.00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>520.00 US$</Text>
    </View>
  </View>
);

const ShoppingCartScreen = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />

      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>CHECKOUT</Text>
      </Pressable>
    </>
  );
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
  totalsContainer: {
    paddingTop: 20,
    margin: 20,
    borderColor: 'purple',
    borderTopWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text:{
    fontSize: 18,
  },
  textBold: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 25,
    borderRadius: 50,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
})