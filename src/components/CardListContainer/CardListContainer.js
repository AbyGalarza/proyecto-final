import React, { useState, useEffect } from "react"
import './CardListContainer.css'
import CardList from "../CardList/CardList"
//import productos from "../../utils/CombosMock";
import db from '../../utils/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore';

const CardListContainer = () => {
  const [products, setProducts] = useState([])

  async function getProducts() {
    const productosCol = collection(db, 'productos');
    const productosSnapshot = await getDocs(productosCol);
    const productosList = productosSnapshot.docs.map(doc => {
        let producto = doc.data()
        producto.id = doc.id
        return producto
    });
    return productosList;
  }

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log("Falló la llamada.", err)
      })
  }, [])

  return (
    <>
      <CardList productos={products} />
    </>
  )
}

export default CardListContainer