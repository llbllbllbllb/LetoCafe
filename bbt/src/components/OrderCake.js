import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: "1rem",
        height: "50vh",
        background: '#FFE1D2',

    },
});


function OrderCake(){
    const classes = useStyles();
    return(
        <>        
        <Paper variant="outlined" className={classes.root}>
            <h1>Banner</h1>
        </Paper>
        </>

    );
}


export default OrderCake;