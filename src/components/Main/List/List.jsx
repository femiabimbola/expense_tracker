import React from 'react';
import { List as MUList, ListItem, ListItemAvatar, ListItemText,  } from '@material-ui/core';
import {Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from "@material-ui/core"

import useStyles from './styles'
 
const List = () => {
    const classes = useStyles();

    const transactions = [
        { id: 1,}
    ];

    return (
        <MUList dense= {false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={ transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>

                            </Avatar>
                        </ListItemAvatar>
                    </ListItem>
                </Slide>
            ))}
        </MUList>

    )
}

export default List