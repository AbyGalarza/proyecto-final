import React from "react";
import CardDetail from "../CardDetail/CardDetail";
import productos from "../../utils/CombosMock";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CardDetailContainer = ()=>{
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const navigate = useNavigate()

    const GetItem = ()=>{
        return new Promise ((resolve, reject)=>{
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        })
    }

    useEffect(()=>{
        // GetItem()
        // .then((res)=>{
        //     console.log("respuesta g", res)
        //     setProducto(res)
        // })
        setProducto(ProductFilter)
        if(ProductFilter === undefined){
            navigate('/notFound')
        }
    }, [])

    const ProductFilter = productos.find( (product)=>{
        return product.id == id
    })

    return(
        <>
        <CardDetail data={producto}/>
        </>
    )
}

export default CardDetailContainer