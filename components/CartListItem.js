import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../store/cartSlice'

const CartListItem = ({cartItem}) => {

    const dispatch = useDispatch();

    const increaseQuantity = () => {
        dispatch(cartSlice.actions.changeQuantity({
            productId : cartItem.product.id,
            amount : 1
        }))
    }

    const decreaseQuantity = () => {
        dispatch(cartSlice.actions.changeQuantity({
            productId : cartItem.product.id,
            amount : -1
        }))
    }
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:cartItem.product.image}}/>
        <View style={styles.contentContainer}>
            <Text style={styles.name}>Name : {cartItem.product.name} </Text>
            <Text style={styles.size}>Size : {cartItem.size} </Text>

            <View style={styles.footer}>
                <Feather
                name='minus-circle'
                size={25}
                color= '#BA12ED'
                onPress={decreaseQuantity} 
                />
                <Text style={styles.quantity}>{cartItem.quantity}</Text>
                <Feather
                name='plus-circle'
                size={25}
                color= '#BA12ED'
                onPress={increaseQuantity} 
                />
                <Text style={styles.itemTotal}>$ {cartItem.product.price * cartItem.quantity}</Text>

            </View>
        </View>
    </View>
  )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 20,
    },

    image: {
        width: '50%',
        aspectRatio: 1,
        borderRadius: 10,
    },

    contentContainer: {
        flex: 1,
        marginLeft: 15,
    },

    name: {
        fontWeight: '500',
        fontSize: 18
    },

    size: {
        fontSize: 18,
        fontWeight: '500'
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto'
    },

    quantity: {
        fontWeight: 'bold',
        color: 'purple',
        marginHorizontal: 10,
        fontSize: 18, 
    },

    itemTotal: {
        fontSize: 18,
        marginLeft: 'auto',
        fontWeight: '500'
    }

})