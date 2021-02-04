import React from 'react';
import { List as MUList, ListItem, ListItemAvatar, ListItemText,  } from '@material-ui/core';
import {Avatar, ListItemSecondaryAction, IconButton, Slide, } from '@material-ui/core';
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from './styles'
 
const List = () => {
    const classes = useStyles();

    const transactions = [
        { id: 1, type: "Income", category: "Salary", amount:50, date: new Date().toDateString()},
        { id: 2, type: "Expense", category: "Woman", amount:250, date: new Date().toDateString()},
        { id: 3, type: "Income", category: "Salary", amount:250, date: new Date().toDateString()}
    ];

    return (
        <MUList dense= {false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary = { transaction.category} secondary ={`₦${transaction.amoun} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUList>

    )
}

export default List