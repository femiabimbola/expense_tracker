import React, {useContext} from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from "../../context/context";
import useStyles from './styles'
import Form from './Form/Form';
import List from './List/List';

const Main = () => {

    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className = { classes.root}>
            <CardHeader  title = "Expense Tracker" subheader = " Designed by Femi Abimbola"/>
            <CardContent>
                <Typography align = "center" variant = "h6"> Total balance is ${balance} </Typography>
                <Typography variant="subtitle2" styles = {{ lineHeight : '1.5em', marginTop: '20px'}}>
                    { /* Info Card */}
                    Try to say soemthing
                </Typography>
                <Divider />
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}> 
                <Grid container spacing = {2}>
                    <Grid item xs = {12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main