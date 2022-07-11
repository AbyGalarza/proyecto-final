import React from "react";
import CardDetail from "../CardDetail/CardDetail";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Firebase
import { doc, getDoc } from 'firebase/firestore';
import db from '../../utils/FirebaseConfig'

const CardDetailContainer = ()=>{
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const navigate = useNavigate()

    async function GetItem() {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("doc:", docSnap.data())
            let producto = docSnap.data();
            producto.id = docSnap.id
            setProducto(producto)
        } else {
            console.log("No such document!");
        }
    }



    useEffect(()=>{
        GetItem()
        // .then((res)=>{
        //     console.log("respuesta g", res)
        //     setProducto(res)
        // })
        // setProducto(ProductFilter)
        // if(ProductFilter === undefined){
        //     navigate('/notFound')
        // }
    }, [])

    // const ProductFilter = productos.find( (product)=>{
    //     return product.id == id
    // })

    return(
        <>
        <CardDetail data={producto}/>
        </>
    )
}

export default CardDetailContainer