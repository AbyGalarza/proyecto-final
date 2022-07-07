import React, { useState } from "react";
import { Button } from "@mui/material";
import './CardDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const CardDetail = ({ data }) => {
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const addToCart = ()=>{
        console.log("se agregó:", data)
        console.log("cantidad:", cantidad)
    }

    return (
        <div className="card-item-detail">
            <img className="card-item-img" src={`../${data.image}`} alt="products-img" />
            <h2>{data.title}</h2>
            <span>$ {data.price}</span>
            {!showButton ?
            <ItemCount actualizarCantidad={setCantidad} setShowButton={setShowButton}/>
            :
            <Button variant="outlined">
                <Link to='/cart'>Checkout</Link>
            </Button>}
        </div >
    )
}

export default CardDetail