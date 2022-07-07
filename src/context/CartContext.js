import React, { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children})=>{
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product)=>{
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
        setTotalPrice(totalPrice + product.price)
        return setCartListItems(cartListItems => [...cartListItems, product])
    }
        console.log("producto en carrito")
    }

    const deleteProduct = (product) => {
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
    }
    
    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}