import React from 'react';
import {Typography, Container, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import cateringImage1 from '../images/Catering_1.jpg';

const useStyles = makeStyles((theme) =>({
    container: {
        marginTop: "3rem",
    },
}));

function Catering(){
    const classes = useStyles();

    
    return(
        <Container className={classes.container} maxWidth="lg">
            <Typography variant="h4"> <b>Get a taste of L'ETO catering</b> </Typography>
            <Typography variant="h5"> one of the best event catering companies in London </Typography>
            <br/>
            <Typography variant="body1"> Our maestro chef can create anything captured by your dream: from delightful assortments of incredibly tasty morsels that impress & inspire to large-scale culinary masterpieces tailored to the theme and ambiance of your very special requirements </Typography>

            <Grid container spacing={3} style={{marginTop: "3rem"}}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" align="left"> <b>L'ETO Catering</b> </Typography>
                    <br/>
                    <Typography variant="body1" align="justify">L’ETO Catering provides multiple types of services across the length and breadth of catering so you can expect to turn the most ordinary event in a talk of the town. The two guiding pillars of our catering experience that make us one of the best event catering companies in London rests on great food and A-class presentation, served with a million-dollar smile. </Typography>
                    <br/>
                    <Typography variant="body1" align="justify">As an event catering company in London, we serve private events and meetings, parties and weddings, private jet catering and also custom design cakes for a truly personalised memory. Superb cooking is always accompanied with great decoration, which is both subtle and elegant. For events, we adorn the venue with fresh flowers, special candles and some of the most elegant props and furniture to make every event into a special and memorable experience. Rest assured, our staff is a magical bundle of people who are capable of sophisticated presentations. Your guests will be all praises. </Typography>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper style={{
                        backgroundImage: "url(" +cateringImage1+ ")",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: "5px",
                        paddingTop: '70%',
                    }}>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} style={{backgroundColor: "rgb(147,114,151)"}}>
                    left
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography variant="h4" align="left"> <b>Finest Event Catering Company London</b> </Typography>
                    <br/>
                    <Typography variant="body1" align="justify">L’ETO Catering is an experience meant to gratify your every sense and open the gates to fine dining right at your place of demand. We serve events of all shapes and sizes and no party is too small or too big for us. Our food is ambrosia for our clients and we go to great lengths to make sure that everything is nothing short of perfect. </Typography>
                    <br/>
                    <Typography variant="body1" align="justify">As a well-established international brand, we have covered several important milestones in the catering industry since our humble beginnings in 2011. Blessed by our loyal customers across the globe who chose us as their preferred event catering company in London, we are creating happy new memories across 2 continents. If you have an event coming up and you want to surprise your guests with pleasure-seeking food, then look no further than L’ETO catering. </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}


export default Catering;