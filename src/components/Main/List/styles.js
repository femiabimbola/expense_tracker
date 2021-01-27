import { makeStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    avatarIncome: {
        color:'#fff',
        backgroundColor: green[500],
    },
    avatarExpense: {
        color: theme.getContrastText(red[500]),
        backgroundColor:red[500],
    },
    list:{
        maxHeigh: '150px',
        overflow: 'auto',
    }
}))