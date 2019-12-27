import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Animal } from "./myTypes";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    card: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%"
    }, 
    root: {
        flexGrow: 1
    }
});


export const AnimalCard = (props: {pet: Animal}) => {
    const { pet } = props;
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image={pet.photos[0].medium} title="Contemplative Reptile"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{pet.name}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">{pet.description}</Typography>
                                </CardContent>
                        </CardActionArea>
                    </Card> 
                </Grid>
            </Grid>
        </div>
    )
};