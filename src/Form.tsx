import * as React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid"
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AnimalCard } from "./AnimalCard";
import { Spinner } from "./Spinner";
import { AlertMsg } from "./Alert";
import { petFinderJson, Animal } from "./myTypes";

interface IStateForm {
    loading: boolean,
    errMsg: "",
    animalsArr: Animal[]
}


export class Form extends React.Component {
    state = {loading: false};
    render() {
        return (
            <>
            <AlertMsg />
            <Container maxWidth="sm">
                <div style={{marginTop: "4rem"}}>
                    <form action="">
                        <Grid container spacing={3} justify="center">
                            <Grid item>
                                <FormControl style={{minWidth: 120}}>
                                    <InputLabel id="demo-simple-select-outlined-label">Breed</InputLabel>
                                        <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value="">
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl style={{minWidth: 120}}>
                                    <TextField required  id="standard-basic" label="US postcode" placeholder="Enter a US postcode"/>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" type="submit" style={{marginTop: "0.8rem"}}>Search</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            <Container maxWidth="md" style={{paddingTop: "7rem", paddingBottom: "7rem"}}>
                {this.state.loading ? <Spinner /> : ""}
                    <Grid container spacing={4}>
                    
                        {/* This is where the map() should be inserted */}
                    </Grid>
            </Container>
            </>
        )
    }
}





// handleChange = input => e => {
//     this.setState({ [input]: e.target.value });
// };