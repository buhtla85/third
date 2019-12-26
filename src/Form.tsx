import * as React from "react";
import { petFinderJson } from "./myTypes";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { headers } from "../sensitive";


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
    const [location, setLocation] = React.useState("");
    const [animals, setAnimals] = React.useState([]);

    const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => setType(event.target.value as string);

    const handleLocationChange = (event: React.ChangeEvent<{ value: unknown }>) => setLocation(event.target.value as string);

    // const getAnimals = async () => {
    //     const response = await fetch(`https://api.petfinder.com/v2/animals?type=bird&page=2`, {headers});
    //     const data: petFinderJson = await response.json();
    //     setAnimals(data.animals);
    //     console.log(data.animals)
    // }

    // React.useEffect(() => {
    //     getAnimals();
    // }, []);

    return (
        <React.Fragment>
            <form>
                <FormControl className={classes.formControl}>
                    <InputLabel id="animal_type">Animal Type</InputLabel>
                        <Select id="type" name="type" value={type} onChange={handleTypeChange} >
                            <MenuItem value={"dog"}>Dog</MenuItem>
                            <MenuItem value={"cat"}>Cat</MenuItem>
                            <MenuItem value={"bird"}>Bird</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField required id="location" label="Required" value={location} placeholder="Enter a US city" name="location" onChange={handleLocationChange}/>
                    </FormControl>
                <div style={{textAlign: 'center', paddingTop: "1rem"}}>
                    <Button variant="outlined" color="primary" type="submit">Search</Button>
                </div> 
            </form>
        </React.Fragment>
    )
}



// handleChange = input => e => {
//     this.setState({ [input]: e.target.value });
// };