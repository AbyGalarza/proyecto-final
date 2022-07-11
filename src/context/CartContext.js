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
    }

    const deleteProduct = (product) => {
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const cleanCartProducts = ()=>{
        setCartListItems([])
        setTotalPrice(0)
    }
    
    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        deleteProduct,
        cleanCartProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}