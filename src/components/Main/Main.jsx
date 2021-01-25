import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles'

const Main = () => {

    const classes = useStyles()

    return (
        <Card className = { classes.root}>
            <CardHeader  title = "Expense Tracker" subheader = " Designed by Femi Abimbola"/>
            <CardContent>
                <Typography align = "center" variant = "h5"> Total balance is ₦1000 </Typography>
                <Typography variant="subtitle1" styles = {{ lineHeight : '1.5em', marginTop: '20px'}}>
                    { /* Info Card */}
                    Try to say soemthing
                </Typography>
                <Divider />
                 {/* form */}
            </CardContent>
            <CardContent className={classes.CardContent}> 
                <Grid container spacing = {2}>
                    <Grid item xs = {12}>
                        {/* { List } */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main