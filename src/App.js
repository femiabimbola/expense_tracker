import React, {useRef, useEffect} from "react";
import { Grid } from "@material-ui/core";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from "./styles";

const App = () => {

     const classes = useStyles();
     const {SpeechState} = useSpeechContext();
     useEffect(() => {

     }, []);

    return (
        <div>
           < Grid container className = {classes.grid} spacing = {1} alignItems="center" justify = "center" styles ={{height: '100vh'}}> 
                <Grid items xs={12} sm={4} className = {classes.mobile}>
                     <Details title="Income"/>
                </Grid> 
                <Grid items xs={12} sm={3} className = {classes.main}>
                     < Main />
                </Grid>
                <Grid items xs={12} sm={4} className = {classes.desktop}>
                     <Details title="Income"/>
                </Grid>
                <Grid items xs={12} sm={4} className={classes.last}>
                     <Details title = "Expense"/>
                </Grid>                  
           </Grid>
           <PushToTalkButtonContainer>
               <PushToTalkButton /> 
               <ErrorPanel />
           </PushToTalkButtonContainer>
        </div>
    )
}

export default App;