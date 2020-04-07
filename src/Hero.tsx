import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const Hero = () => {    
    return (
        <>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Find A Pet</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ea accusantium repellat sunt, dolore eum inventore in, officia temporibus reprehenderit commodi dolorum eius fugit vero, dicta natus accusamus pariatur officiis!</Typography>
            </Container>
        </>
    )
};