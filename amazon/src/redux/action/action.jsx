import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART, CLEAR_CART } from "../actiontype";

export const addToCart = (item) => ({
    type : ADD_TO_CART,
    payload : item
})

export const removeFromCart = (itemId) => ({
    type : REMOVE_FROM_CART,
    payload : itemId
})

export const updateCartQuantity = (itemId, quantity) => ({
    type : REMOVE_FROM_CART,
    payload : {itemId, quantity}
})

export const clearCart = (itemId, quantity) => ({
    type : CLEAR_CART,
    
})

