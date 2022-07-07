import React, { useState, useEffect } from "react"
import './CardListContainer.css'
import CardList from "../CardList/CardList"
import productos from "../../utils/CombosMock";

const CardListContainer = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    })
  }

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log("Falló la llamada.", err)
      })
      .finally(() => {
        console.log("Terminó la promesa.")
      })
  }, [])

  return (
    <>
      <CardList combos={products} />
    </>
  )
}

export default CardListContainer