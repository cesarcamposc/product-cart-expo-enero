import { Image, FlatList,StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'
import { useNavigation } from '@react-navigation/native'

const ProductsScreen = ({navigation}) => {

  //const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable onPress={()=> navigation.navigate('Product Details')} style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
}

export default ProductsScreen

const styles = StyleSheet.create({
    
    itemContainer: {
      width: '50%',
      padding: 1,
    },

    image: {
        width: '100%',
        aspectRatio: 1
    }
})