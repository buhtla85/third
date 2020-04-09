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
import {apiKey, apiSecret} from "../sensitive";

interface IStateForm {
    loading: boolean,
    errMsg: string,
    animalsArr: Animal[], 
    breed: string,
    postCode: string, 
    isError: boolean
}

interface petFinderResponseToken {
    token_type: string,
    expires_in: number,
    access_token: string
}

const fetchToken = async () => {
    const hitServer = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    const response: petFinderResponseToken = await hitServer.json();
    console.log(response.access_token);
    window.localStorage.setItem("token", response.access_token);
}


export class Form extends React.Component <{}, IStateForm> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            errMsg: "",
            animalsArr: [],
            breed: "",
            postCode: "",
            isError: false
        }
    }

    componentDidMount() {
        if (window.localStorage.length === 0) {
            fetchToken();
        }
    };

    handleDropDownChange = (e: React.ChangeEvent<HTMLSelectElement>) => this.setState({breed: e.target.value});

    handleInputPostCode = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({postCode: e.target.value});

    fetchAnimals = async () => {
        this.setState({loading: true});
        const token = window.localStorage.getItem("token")
        const hitServer = await fetch(`https://api.petfinder.com/v2/animals?type=${this.state.breed}&location=${this.state.postCode}`, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
                "Authorization": `Bearer ${token}`
            }
        });
        
        const response: petFinderJson = await hitServer.json(); //response.animals is array of animal objects and you have to store it in the state array
    
        if (hitServer.status === 401) {
            fetchToken();
            this.setState({loading: false, errMsg: "Access to server stoped. Please enter your values again in a few seconds...", isError: true});
            setTimeout(() => {
                this.setState({errMsg: "", isError: false})
            }, 5000); //there is a lot of repeating here... make a function!
        } else if (hitServer.status === 400) {
            this.setState({loading: false, errMsg: "Your request contains invalid parameters. Please enter valid values.", isError: true});
            setTimeout(() => {
                this.setState({errMsg: "", isError: false})
            }, 5000);
        } else if (hitServer.status > 401 && hitServer.status < 600) {
            this.setState({loading: false, errMsg: "Your request contains invalid parameters. Please enter valid values.", isError: true});
            setTimeout(() => {
                this.setState({errMsg: "", isError: false})
            }, 5000);
        } else {
            this.setState({loading: false, animalsArr: response.animals});
            console.log(response)
        }
    }
    
    render() {
        return (
            <>
            {this.state.isError ? <AlertMsg msg={this.state.errMsg} /> : ""}
            <Container maxWidth="sm">
                <div style={{marginTop: "4rem"}}>
                    <form action="" onSubmit={e => e.preventDefault() as any || this.fetchAnimals()}>
                        <Grid container spacing={3} justify="center">
                            <Grid item>
                                <FormControl style={{minWidth: 182}}>
                                    <InputLabel id="demo-simple-select-outlined-label">Breed</InputLabel>
                                        <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={this.state.breed} onChange={this.handleDropDownChange}>
                                            <MenuItem value="dog">Dog</MenuItem>
                                            <MenuItem value="cat">Cat</MenuItem>
                                            <MenuItem value="bird">Bird</MenuItem>
                                        </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl style={{minWidth: 120}}>
                                    <TextField required type="text" id="standard-basic" label="US postcode" placeholder="Enter a US postcode" value={this.state.postCode} onChange={this.handleInputPostCode}/>
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
                         { this.state.animalsArr.map((animal: Animal, idx: number) => {
                             return (
                                <div key={idx}>
                                    <AnimalCard animal={animal}/>
                                </div>
                                )
                         }) }
                    </Grid>
            </Container>
            </>
        )
    }
};



// handleChange = input => e => {
//     this.setState({ [input]: e.target.value });
// };