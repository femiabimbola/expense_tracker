import React from "react";
import { Grid } from "@material-ui/core";
import Details from './components/Details/Details'

const App = () => {
    return (
        <div>
           < Grid container spacing = {1} alignItems="center" justify = "center" styles ={{height: '100vh'}}> 
                <Grid items xs={12} sm={4}>
                     <Details />
                </Grid> 
                <Grid items xs={12} sm={4}>
                     The main
                </Grid>
                <Grid items xs={12} sm={4}>
                     <Details />
                </Grid>            
                
           </Grid>
        </div>
    )
}

export default App;