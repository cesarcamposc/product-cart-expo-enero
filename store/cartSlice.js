import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    delivery : 10,
    freeDeliveryFrom : 200,  
};

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addCartItem : (state, action) => {
            const newProduct = action.payload.product;
            const cartItem = state.items.find((item) => item.product.id === newProduct.id)
            if(cartItem){
                cartItem.quantity += 1
            }else {
                state.items.push({product : newProduct, quantity: 1})
            }          
        },
        
        changeQuantity : (state, action) => {
            const {productId, amount} = action.payload;
            const cartItem = state.items.find((item)=> item.product.id === productId);
            if (cartItem){
                cartItem.quantity += amount;
            }
            if(cartItem.quantity <= 0){
                state.items = state.items.filter((item)=> item !== cartItem )
            }
        },
    }
});

export const selectNumberItem = (state) => state.cart.items.length; 

export const selectSubtotal = (state) => state.cart.items.reduce((sum, cartItem )=> sum + cartItem.product.price * cartItem.quantity, 0 )

