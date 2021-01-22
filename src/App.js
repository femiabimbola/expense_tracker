import React from "react";
import { Grid } from "@material-ui/core";
import Details from './components/Details/Details';

import useStyles from "./styles";

const App = () => {

     const classes = useStyles();

    return (
        <div>
           < Grid container className = {classes.grid} spacing = {1} alignItems="center" justify = "center" styles ={{height: '100vh'}}> 
                <Grid items xs={12} sm={4}>
                     <Details title="Income"/>
                </Grid> 
                <Grid items xs={12} sm={4}>
                     The main
                </Grid>
                <Grid items xs={12} sm={4}>
                     <Details title = "Expense"/>
                </Grid>            
                
           </Grid>
        </div>
    )
}

export default App;