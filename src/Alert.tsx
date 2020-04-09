import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: "100%"
    }
}));

interface messageProp {
    msg: string
}

export const AlertMsg = (props: messageProp) => {
    const classes = useStyles(createStyles);
    return (
        <div style={{margin: "0 auto", width: "50%"}}>
            <div className={classes.root}>
                <Alert severity="error">{props.msg}</Alert>
            </div>
        </div>
    )
};