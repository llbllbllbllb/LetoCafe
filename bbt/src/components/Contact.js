import React, {useState} from 'react';


import { makeStyles ,withStyles} from '@material-ui/core/styles';
import {Typography,Button, Container, Grid, Paper, TextField, Select, MenuItem, InputLabel, FormControl, FormControlLabel, Checkbox} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    container: {
        marginTop: "3rem",
    },
    input: {
        margin: "1rem",
        width: "100%",
    },
    formContainer: {
        marginTop: "3rem",

    },
    blackinput: {
        color: "white",
        borderWidth: "1px",
        borderColor: "white !important"
    },

}));

const CssTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
        },
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);

function Contact(){
    const classes = useStyles();
    const [regarding, setRegarding] = useState("General");
    const handleChange = (event) => {
        setRegarding(event.target.value);
    };

    return(
        <>
        <Container className={classes.container} maxWidth="lg">
            <Typography variant="h4"> We would love to hear from you! </Typography>
            <Typography variant="h6"> Get it touch for a sweet hello & more info on all delicious things at L'ETO 😋 </Typography>
            <Container maxWidth="sm">
                <form className={classes.formContainer} noValidate autoComplete="off">
                    <Grid container justify="space-between" >
                        <Grid item xs={12} sm={6} >
                            <TextField id="name" label="Name" style={{width:"90%"}}/>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField id="email" label="Email" style={{width:"90%"}}/>
                        </Grid>
                    </Grid>
                    <FormControl className={classes.input}>
                        <InputLabel id="select-label">Regarding</InputLabel>
                        <Select
                            labelId="select-label"
                            id="regarding-select"
                            value={regarding}
                            onChange={handleChange}
                            label="Regarding"
                            >
                            <MenuItem value={"General"}>General</MenuItem>
                            <MenuItem value={"Catering"}>Catering</MenuItem>
                            <MenuItem value={"Custom Cakes"}>Custom Cakes</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                        placeholder="Message"
                        className={classes.input}
                    />
                    <TextField className={classes.input} id="phone" label="Phone Number" />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="default" />}
                        label="By using this form you agree with the storage and handling of your data by this website"
                        labelPlacement="end"
                        className={classes.input}
                        style={{textAlign: "start", color: "rgb(127,127,127)"}}
                    />
                    <Button
                        style={{marginTop:"1rem", fontWeight:"bold", marginBottom:"5rem"}}
                        variant="outlined"
                        >
                        Send Message
                    </Button>



                </form>
            </Container>

        </Container>
        <Container style={{backgroundColor:"black", color:"white"}} maxWidth={false} >
            <br/>
            <Typography variant="h4" style={{marginTop:"3rem"}}> Join Our Mailing List </Typography>
            <br/>
            <Typography variant="h6"> Get the sweetest updates and fabulous news straight to your inbox! </Typography>
            <br/>
            <br/>
            <form className={classes.formContainer} noValidate autoComplete="off">
                <Grid container justify="space-between" >
                    <Grid item xs={12} sm={6} >
                        <CssTextField id="subscribe-name" label="Name" InputProps={{className: classes.blackinput}} InputLabelProps={{style: { color: 'white' },}} style={{borderBottom: "1px solid white"}}/>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <CssTextField id="subscribe-email" label="Email" InputProps={{className: classes.blackinput}} InputLabelProps={{style: { color: 'white' },}}/>
                    </Grid>
                </Grid>
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            
        </Container>
        </>
        
    );
}


export default Contact;