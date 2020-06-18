import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container} from '@material-ui/core';
import ProductCard from './ProductCard';

import Bakery from "../images/photo5-300x300.jpg";
import BestSeller from "../images/leto-cakes02152-300x300.jpg";
import CheeseCake from "../images/leto-cakes01163-300x300.jpg";

const useStyles = makeStyles({
    container: {
        // marginLeft: "2rem",
        // marginRight: "2rem",
    },
    thinText: {
        fontWeight: 'lighter',
    },
    underline: {
        display:'block',
        width:'100%',
        borderTop: '1px solid rgba(0,0,0, 0.5)',
        marginBottom: "1rem",
    },
});

function ProductList(){
    const classes = useStyles();
    return(
        <Container maxWidth="md">
            <h1 className={classes.thinText}>L'ETO Cake Selection</h1>
            <span className={classes.underline}></span>
            <div className={classes.container}>
            <Grid container spacing={8} >
                <ProductCard imageUrl={Bakery} name="Bakery"/>
                <ProductCard imageUrl={BestSeller} name="Best Seller"/>
                <ProductCard imageUrl={CheeseCake} name="Cheesecakes"/>
                <ProductCard imageUrl={Bakery} name="Bakery"/>
                <ProductCard imageUrl={BestSeller} name="Best Seller"/>
                <ProductCard imageUrl={CheeseCake} name="Cheesecakes"/>
                <ProductCard imageUrl={Bakery} name="Bakery"/>
                <ProductCard imageUrl={BestSeller} name="Best Seller"/>
                <ProductCard imageUrl={CheeseCake} name="Cheesecakes"/>
                <ProductCard imageUrl={Bakery} name="Bakery"/>
                <ProductCard imageUrl={BestSeller} name="Best Seller"/>
                <ProductCard imageUrl={CheeseCake} name="Cheesecakes"/>
            </Grid>
            </div>
            
        </Container>
    );
}

export default ProductList;