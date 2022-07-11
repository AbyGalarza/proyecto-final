import React, { useState, useContext } from "react";
import './CardDetail.css';
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import CartContext from "../../context/CartContext";


const CardDetail = ({ data }) => {
    const { addProductToCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    
    return (
        <div className="card-item-detail">
            <img className="card-item-img" src={`../${data.image}`} alt="products-img" />
            <h2>{data.title}</h2>
            <span>$ {data.price}</span>
            <ButtonAdd/>
        </div>
    )
}

export default CardDetail