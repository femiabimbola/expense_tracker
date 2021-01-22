import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles'

const Main = () => {

    const classes = useStyles()

    return (
        <Card className = { classes.root}>
            <CardHeader  title = "Expense Tracker" subheader = " Designed by Femi Abimbola"/>
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default Main