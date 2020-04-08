import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: "100%"
    }
}));

export const AlertMsg = () => {
    const classes = useStyles(createStyles);
    return (
        <div style={{margin: "0 auto", width: "50%"}}>
            <div className={classes.root}>
                <Alert severity="error">This is an error alert — check it out!</Alert>
            </div>
        </div>
    )
};