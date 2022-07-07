import React from "react";
import CardItem from '../Card/Card';
import { Grid } from '@mui/material';

const CardList = ({ combos }) => {

    return (
        <>
            <Grid container>
                {
                    combos.map(({title, price, image, id, stock}) => {
                        return (
                            <Grid item md={4} key={id}>
                                <CardItem title={title} price={price} image={image} id={id} stock={stock}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default CardList