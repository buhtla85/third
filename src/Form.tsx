import * as React from "react";
import { petFinderJson, Animal } from "./myTypes";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { headers } from "../sensitive";
import { AnimalCard } from "./AnimalCard";


// 1. headers: Headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Your API Token here' });
// 2. options: RequestOptions = new RequestOptions({ headers: this.headers });

// 3. fetch(url, { headers }).then(response => response.json()).then(data => console.log(data));

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 220,
        },
        selectEmpty: {
            marginTop: theme.spacing(2)
        }
    })
);

export const Form = () => {
    const classes = useStyles(createStyles);
    const [type, setType] = React.useState("");
    const [postCode, setPostCode] = React.useState("");
    const [animals, setAnimals] = React.useState([]);
    const [errMsg, setErrorMsg] = React.useState("");

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value);
        console.log(type);
    };

    const handlePostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostCode(event.target.value as string);
        console.log(postCode);
    };

    const getAnimals = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch(`https://api.petfinder.com/v2/animals?type=${type}&location=${postCode}`, {headers});
        const data: petFinderJson = await response.json();
        setAnimals(data.animals);
        console.log(data.animals)
    }

    return (
        <React.Fragment>
            <form action="" onSubmit={getAnimals}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="animal_type" htmlFor="type">Animal Type</InputLabel>
                        <Select labelId="animal_type" id="type" name="type" value={type} onChange={handleTypeChange}>
                            <MenuItem value={"dog"}>Dog</MenuItem>
                            <MenuItem value={"cat"}>Cat</MenuItem>
                            <MenuItem value={"bird"}>Bird</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField required id="postCode" label="Postcode" value={postCode} placeholder="Enter a US postcode" onChange={handlePostChange}/>
                    </FormControl>
                <div style={{textAlign: 'center', paddingTop: "1rem"}}>
                    <Button variant="outlined" color="primary" type="submit">Search</Button>
                </div> 
            </form>
            {animals.map((animal: Animal) => (
                <AnimalCard pet={animal} />
            )        
        )}
        </React.Fragment>
    )
}



// handleChange = input => e => {
//     this.setState({ [input]: e.target.value });
// };