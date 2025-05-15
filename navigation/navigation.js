import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import { FontAwesome6 } from '@expo/vector-icons';
import { selectNumberItem } from '../store/cartSlice';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const navigation = () => {
  const numberOfItems = useSelector(selectNumberItem);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable onPress={()=>navigation.navigate('Shopping Cart')} style={{ flexDirection: 'row'}}>
              <FontAwesome6 name="cart-shopping" size={20} color="purple" />
              <Text style={{marginLeft: 5, fontWeight: '600', fontSize: 18}}>{numberOfItems}</Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="Shopping Cart" component={ShoppingCartScreen} />
    </Stack.Navigator>
  );
}

export default navigation

const styles = StyleSheet.create({})