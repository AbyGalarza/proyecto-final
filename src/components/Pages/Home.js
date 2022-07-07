import React from "react";
import productos from "../../utils/CombosMock";
import Banner from "../Banner/Banner";
import CardListContainer from "../CardListContainer/CardListContainer";
import './Home.css';

const Home = ()=>{
    return(
        <div className="home-general-container">
            <Banner></Banner>
            <h1>Todos nuestros productos</h1>
            <CardListContainer title={'Productos recomendados'} products={productos}/>
        </div>
    )
}

export default Home