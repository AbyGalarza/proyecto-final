import React from "react";
import { useEffect, useState } from "react";
import productos from "../../utils/CombosMock";
import { useParams } from "react-router-dom";
import CardList from "../CardList/CardList";
import { collection, getDocs } from 'firebase/firestore';
import db from "../../utils/FirebaseConfig";

const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {
        setProducts([])
        getProducts()
            .then((response) => {
                filterByCategory(response)
            })
    }, [category])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(productos)
        })
    }

    useEffect( () => {

        setProducts([])
        console.log()
        getProductsFirebase()
        .then((productos)=>{
            console.log("Productos", productos)
            category ? filterByCategory(productos, category) : setProducts(productos)
        })


    }, [category])

    const getProductsFirebase = async () => {
        const productSnapshot = await getDocs(collection(db, "productos"))
        const productList = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        console.log("ProductList",productList)
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
                <CardList combos={products} />
            </>
        </div>
    )
}

export default ProductList