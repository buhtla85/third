import * as React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Animal } from "./myTypes";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    }
}));


export const AnimalCard = (props: { animal: Animal }) => {
    const classes = useStyles(createStyles);
    const { animal } = props;
    const defaultString = "No data";
    const defaultDescription = `Sorry, there is no description for ${animal.name}. Please make sure to check info link below.`
    const defaultImg = "https://afmec.org/images/no-image-available-icon.jpg";

    const checkForPhoto = (arr: [{small: string, medium: string, large: string, full: string;}]) => {
        if (arr.length < 1) {
            return defaultImg;
        } else if (arr[0].large) {
            return arr[0].large;
        } else if (arr[0].medium) {
            return arr[0].medium;
        } else if (arr[0].small) {
            return arr[0].small;
        } else {
            return arr[0].full
        }
    }

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={checkForPhoto(animal.photos)} title="Image Title" />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">{animal.name}</Typography>
                        <Typography component="h5">Gender: {animal.gender === null ? defaultString : animal.gender}</Typography>
                        <Typography component="h5">Age: {animal.age === null ? defaultString : animal.age}</Typography>
                        <Typography noWrap component="p">{animal.description === null ? defaultDescription : animal.description}</Typography> 
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            <Link color="inherit" href={animal.url ? animal.url : "https://www.petfinder.com"} target="_blank">{animal.url ? "Info link" : "No link"}</Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}


