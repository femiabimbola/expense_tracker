import React from "react";
import { Grid } from "@material-ui/core";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from "./styles";

const App = () => {

     const classes = useStyles();

    return (
        <div>
           < Grid container className = {classes.grid} spacing = {1} alignItems="center" justify = "center" styles ={{height: '100vh'}}> 
                <Grid items xs={12} sm={4}>
                     <Details title="Income"/>
                </Grid> 
                <Grid items xs={12} sm={3}>
                     < Main />
                </Grid>
                <Grid items xs={12} sm={4}>
                     <Details title = "Expense"/>
                </Grid>                  
           </Grid>
           <PushToTalkButtonContainer>
               <PushToTalkButton /> 
           </PushToTalkButtonContainer>
        </div>
    )
}

export default App;