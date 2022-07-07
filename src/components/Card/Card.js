import React, { useContext } from "react";
import './Card.css';
import Card from "@mui/material/Card";
import { useState } from "react";
import Modal from "../Modal/Modal";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import ButtonAdd from "../ButtonAdd/ButtonAdd";

const CardItem = ({image, title, price, id}) => {
    const { addProductToCart } = useContext(CartContext)

    const [open, setOpen] = useState(false)
    console.log(id)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent className="card-content">
                    <div className="card">
                        <img src={`/${image}`} alt="Combo1" />
                        <h2>{title}</h2>
                        <p>${price}</p>
                        <div className="item-count">
                            <ItemCount/>
                            <Button className="button" onClick={()=>addProductToCart({image, title, price, id})}>Agregar al carrito</Button>
                        </div>
                        <Button className="button">
                        <Link className="btn-dtl" to={`/product/${id}`}>Detalle</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Modal handleClose={handleClose} open={open}>
                <h2>Detalle</h2>
            </Modal>
        </>
    )
}

export default CardItem