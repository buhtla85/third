import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: "flex",
        justifyContent: "center"
    }
}));

export const Spinner = () => {
    const classes = useStyles(createStyles);
    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
};