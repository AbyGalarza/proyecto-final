import React from "react";
import productos from "../../utils/CombosMock";
import Banner from "../Banner/Banner";
import CardListContainer from "../CardListContainer/CardListContainer";

const Home = ()=>{
    return(
        <div className="home-general-container">
            <Banner></Banner>
            <CardListContainer title={'Productos recomendados'} products={productos}/>
        </div>
    )
}

export default Home