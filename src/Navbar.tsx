import * as React from "react";
import {createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PetsIcon from '@material-ui/icons/Pets';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        icon: {
            marginRight: theme.spacing(2),
          }
    })
);

export const Navbar = () => {
    const classes = useStyles(createStyles);

    return (
        <AppBar position="relative">
            <Toolbar>
                <PetsIcon className={classes.icon}/>
                <Typography variant="h6" color="inherit" noWrap>
                    Adopt a Pet 
                </Typography>
            </Toolbar>
        </AppBar>
    )
}