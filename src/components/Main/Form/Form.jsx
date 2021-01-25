import React from "react";
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

import useStyles from './styles';

const Form = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align = "center" variant = "subtitle2" gutterBottom >
                         Enter the words you want to
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel> Type</InputLabel>
                        <Select>
                            <MenuItem value = 'Income'> Income </MenuItem>
                            <MenuItem value = 'Expense'> Expense </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs = {6}>
                    <FormControl fullWidth>
                        <InputLabel> Category</InputLabel>
                        <select>
                            <MenuItem value = "business"> Business </MenuItem>
                        </select>
                        
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

export default Form