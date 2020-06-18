import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import {isMobile} from 'react-device-detect';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Grid, Badge, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/navbar.css";

// icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListIcon from '@material-ui/icons/List';

import orderCakeBanner from '../images/navbarbg.jpg';
import cateringBanner from '../images/catering_banner.jpg';
import contactBanner from '../images/contact_banner.jpg';

import mainBanner1 from '../images/main_banner_1.jpg';
import mainBanner2 from '../images/main_banner_2.jpg';
import mainBanner3 from '../images/main_banner_3.jpg';

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }


const useStyles = makeStyles((theme) =>({
    appbar: {
        backgroundImage : 'url(' + orderCakeBanner + ')',
        backgroundColor : 'rgb(147,114,151)',
        backgroundRepeat : 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '15rem',
        width: '100vw',
        transition: "all 1s ease-in-out",
        WebkitTransition: "all 1s ease-in-out",
        
    },
    container: {
        marginTop: "3rem",
        marginLeft: "5vw",
        marginRight: "5vw",
    },
    logo: {
        fontWeight: "bold",

    },
    navItems: {
        display: "flex",
    },
    navItem: {
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        textTransform: 'none',
        textDecoration: "none",
        
    },
    underline: {
        display:'block',
        width:'100%',
        borderTop: '3px solid rgba(255,255,255, 0.5)',
        marginTop: "2rem",
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'inline',
        },
    },
    sectionMobile: {
        display: 'inline',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    selectedTag: {
        borderBottom: '2px solid white',
    },

    caterSlogan: {
        width: "90vw",
        [theme.breakpoints.up('md')]: {
            width: "50vw",
        }
    }
}));


function Navbar(){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [desktopSelectedTag, setDesktopSelectedTag] = React.useState(null);
    const [mainBannerImgIdx, setMainBannerImgIdx] = React.useState(Math.floor(Math.random() * 3));

    useEffect(()=>{
        const pathList = ["/order-cakes","/catering","/custom-cakes","/contact"];
        if(pathList.indexOf(window.location.pathname) === -1){
            setDesktopSelectedTag(null);
        }
        else{
            setDesktopSelectedTag(pathList.indexOf(window.location.pathname));
        }
        

    },[]);


    useInterval(() => {
        if(desktopSelectedTag === null && !isMobile){
            setMainBannerImgIdx((mainBannerImgIdx+1)%mainBannerList.length);
            console.log(mainBannerImgIdx);
        }
    }, 6000);


    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'mobile-more-id';
    const classes = useStyles();

    const bannerList = ['url('+orderCakeBanner+')','linear-gradient(to bottom, rgba(117, 19, 93, 0.4), rgba(245, 246, 252, 0.2)), url('+cateringBanner+')', "linear-gradient(to bottom, rgba(117, 19, 93, 0.4), rgba(245, 246, 252, 0.2))",'url('+contactBanner+')'];
    const bannerHeight = ["15rem", "40rem", "15rem", "30rem"];
    const mainBannerHeight = "100vh";
    const lin_grad = 'linear-gradient(to bottom, rgba(117, 19, 93, 0.2), rgba(245, 246, 252, 0.1)),';
    const mainBannerList = ['url('+mainBanner1+')','url('+mainBanner2+')','url('+mainBanner3+')'];



    const handleMobileMenuClose = (idx,event) => {
        setDesktopSelectedTag(idx);
        setAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={() => handleMobileMenuClose(desktopSelectedTag)}
        >   
            <Link to="/order-cakes" style={{ textDecoration: 'none', color: 'black'}}>
                <MenuItem onClick={() => handleMobileMenuClose(0)}>Order Cake</MenuItem>
            </Link>

            <Link to="/catering" style={{ textDecoration: 'none' , color: 'black'}}>
                <MenuItem onClick={() => handleMobileMenuClose(1)}>Catering</MenuItem>
            </Link>

            <Link to="/custom-cakes" style={{ textDecoration: 'none' , color: 'black'}}>
                <MenuItem onClick={() => handleMobileMenuClose(2)}>Custom Cakes</MenuItem>
            </Link>

            <Link to="/contact" style={{ textDecoration: 'none' , color: 'black'}}>
                <MenuItem onClick={() => handleMobileMenuClose(3)}>Contact</MenuItem>
            </Link>

        </Menu>
    );
    return(
        <>
        <AppBar position="static" className={classes.appbar} elevation={0} style={{backgroundImage:desktopSelectedTag===null ?  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),"+mainBannerList[mainBannerImgIdx]:bannerList[desktopSelectedTag], height: desktopSelectedTag===null ? mainBannerHeight : bannerHeight[desktopSelectedTag]}}>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="baseline"
                    className={classes.container}
                >
                    <Grid item>
                        <Link to="/" style={{ textDecoration: 'none', color: "white"}} onClick={() => {setDesktopSelectedTag(null)}}>
                            <Typography variant="h4" className={classes.logo}>
                                L ' E T O
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item className={classes.navItems, classes.sectionDesktop}>

                        <Link to="/order-cakes" style={{ textDecoration: 'none' }} onClick={() => {setDesktopSelectedTag(0)}}>
                            <Button>
                                <Typography variant="subtitle1" display="inline" className={classes.navItem+" "+(desktopSelectedTag===0 && classes.selectedTag)}>
                                    Order Cake
                                </Typography>
                            </Button>
                        </Link>


                        
                        <Link to="/catering" style={{ textDecoration: 'none' }} onClick={() => {setDesktopSelectedTag(1)}}>
                            <Button>
                                <Typography variant="subtitle1" display="inline" className={classes.navItem+" "+(desktopSelectedTag===1 && classes.selectedTag)}>
                                Catering
                                </Typography>
                            </Button>
                        </Link>
                    

                        <Link to="/custom-cakes" style={{ textDecoration: 'none' }} onClick={() => {setDesktopSelectedTag(2)}}>
                            <Button>
                                <Typography variant="subtitle1" display="inline" className={classes.navItem+" "+(desktopSelectedTag===2 && classes.selectedTag)}>
                                    Custom Cakes
                                </Typography>
                            </Button>   
                        </Link>


                        <Link to="/contact" style={{ textDecoration: 'none' }} onClick={() => {setDesktopSelectedTag(3)}}>
                            <Button>
                                <Typography variant="subtitle1" display="inline" className={classes.navItem+" "+(desktopSelectedTag===3 && classes.selectedTag)}>
                                    Contact
                                </Typography>
                            </Button>
                        </Link>

                        

                    </Grid>

                    <Grid item>
                        
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menuMobile"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            className={classes.sectionMobile}>
                            <ListIcon />
                        </IconButton>

                        <IconButton edge="start" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </IconButton>

                        <IconButton edge="start" color="inherit">
                            <AccountCircle />
                        </IconButton>

                    </Grid>
                    <span className={classes.underline}></span>
                </Grid>                 
            </Toolbar>
            <div style={{display: "flex",
                    alignItems: "center",
                    justifyContent: "center",}}>
                <Button 
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{width: "15rem", 
                        marginTop:"8rem", 
                        backgroundColor:"white", 
                        color: "black", 
                        fontWeight: "bold", 
                        textTransform: "none", 
                        boxShadow: "none", 
                        display: desktopSelectedTag===3 ? "inline" : "none"}}
                    >
                        Contact us
                </Button>

                <Paper 
                    elevation={0}
                    style={{
                        marginTop: "8rem",
                        height: "10rem",
                        justifyContent: "center",
                        alignItems: "center",
                        display: desktopSelectedTag===1 ? "flex" : "none",
                        transition: "all 0.5s ease",
                        backgroundColor: "rgba(255,255,255,0.8)"
                    }}
                    className={classes.caterSlogan}>
                    <Typography>
                        <b>L'ETO CATERING</b>
                        <br/>
                        Sensational & bespoke as you want it to be…
                        <br/>
                        From private events to weddings and private jets catering,
                        <br/>
                        we bring you the best of L'ETO experience wherever you may be.

                    </Typography>
                </Paper>

                <Grid container style={{
                        marginTop: "8rem",
                        height: "10rem",
                        justifyContent: "center",
                        alignItems: "center",
                        display: desktopSelectedTag===null ? "flex" : "none",
                        transition: "all 0.5s ease",
                    }}>
                    <Typography variant="h4" style={{fontFamily:"'Playfair Display', serif", letterSpacing:"3px"}}>
                        <br/>
                        CUISINE & CAKES BEYOND THE
                        <br/>
                        BOUNDARIES OF TASTE
                        <br/>
                        

                    </Typography>
                </Grid>

            </div>

            
        </AppBar>
        {renderMenu}
        </>
    );
}

export default Navbar;