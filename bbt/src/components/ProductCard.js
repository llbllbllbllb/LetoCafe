import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Typography, CardContent,CardMedia, Grid} from '@material-ui/core';


const useStyles = makeStyles({
    media: {
        height: "0",
        paddingTop: '100%',        
    },
    bold: {
        fontWeight: "bold",
    }
});

function ProductCard(props){
    const classes = useStyles();
    return(
        <Grid item xs={6} sm={4}>
            <Card>
                <CardMedia
                    className = {classes.media}
                    image={props.imageUrl}
                />
                <CardContent>
                    <Typography className={classes.bold}>
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        
    );

}

export default ProductCard;