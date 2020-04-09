import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Form } from "./Form";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";

const Copyright = (): JSX.Element => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
                <Link color="inherit" href="https://www.petfinder.com/" target="_blank">Powered by Petfinder</Link>{' '}
                    {new Date().getFullYear()}
                        {'.'}
        </Typography>
    );
} 

const useStyles = makeStyles((theme: Theme) => createStyles({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

export const App = () => {
    const classes = useStyles(createStyles);
        return (
            <React.Fragment>
                <CssBaseline />
                <Navbar />
                    <main>
                        <div className={classes.heroContent}>
                            <Hero />
                        </div>
                        <Form />
                    </main>
                    <footer className={classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>Practice Project</Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Something here to give the footer a purpose!</Typography>
                        <Copyright />
                    </footer>
            </React.Fragment>
        )
    }

