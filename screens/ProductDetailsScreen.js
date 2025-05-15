import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions} from 'react-native'
import React from 'react'
import products from '../data/products'
import { useSelector, useDispatch } from 'react-redux'
import { cartSlice } from '../store/cartSlice'

const ProductDetailsScreen = () => {
    const product = useSelector(state => state.products.selectedProduct);
    const dispatch = useDispatch();

    const {width} = useWindowDimensions();

    const addToCart = () => {
      dispatch(cartSlice.actions.addCartItem({product}))
    }

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>$ {product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* add to Cart button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>ADD To Cart</Text>
      </Pressable>
    </View>
  );
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: '600',
      marginVertical: 10,
    },

    price: {
      fontWeight: '600',
      fontSize: 18,
      letterSpacing: 2,
    },

    description: {
      marginVertical: 10,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: '400'
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