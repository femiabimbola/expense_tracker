import React from 'react';
import { Snackback } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from './styles'

const CustomizedSnackbar = ({ open, setOpen }) => {
    const classes = useStyles()
    const handleClose = (event, reason ) => {
        if( reason === "clickaway") return;
        setOpen(false);
    }

    return (
      <div className={classes.root}>
          <Snackback
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open = {true}
            autoHideDuration={3000}
            onClose={handleClose}>

              <MuiAlert 
                onClose={handleClose} severity='success' 
                elevation={6} variant = "filled" >
                  Transaction successfully created  
              </MuiAlert>

          </Snackback>
      </div>
    )
}

export default CustomizedSnackbar;