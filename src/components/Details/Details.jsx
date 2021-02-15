import React from 'react';
import { Card , CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTrasanctions from '../../useTransactions';

import useStyles from './styles'

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chaerData } = useTrasanctions(title);

    return (
       <Card className={ title === 'Income' ? classes.income : classes.expense}>
           <CardHeader title= {title} />
           <CardContent>
               <Typography variant ="h5"> ₦1,000 </Typography>
               {/* < Doughnut data = "data" /> */}
           </CardContent>
       </Card> 

    )
}

export default Details;