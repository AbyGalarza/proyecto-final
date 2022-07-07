import React from "react";
import { Button } from "@mui/material";
import CartContext from '../../context/CartContext';
import { useContext } from "react";

const ButtonAdd = ({image, title, price, id})=>{
    const { addProductToCart } = useContext(CartContext)

    return(
        <Button className="button" onClick={()=>addProductToCart({image, title, price, id})}>Agregar al carrito</Button>
    )
}

export default ButtonAdd