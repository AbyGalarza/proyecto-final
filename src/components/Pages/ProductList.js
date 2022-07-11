import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../CardList/CardList";
import { collection, getDocs } from 'firebase/firestore';
import db from "../../utils/FirebaseConfig";

const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {
        setProducts([])
        getProductsFirebase()
            .then((response) => {
                filterByCategory(response)
            })
    }, [category])

    async function getProductsFirebase() {
        const productosCol = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc => {
            let producto = doc.data()
            producto.id = doc.id
            return producto
        });
        return productosList;
      }

      const filterByCategory = (array) => {
        return array.map((item) => {
            if (item.category == category) {
                return setProducts(products => [...products, item])
            }
        })
    }

    return (
        <div className="general-container">
            <>
                <CardList productos={products} />
            </>
        </div>
    )
}

export default ProductList