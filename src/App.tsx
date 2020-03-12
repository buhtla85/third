import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Navbar } from "./Navbar";
import { Form } from "./Form";
import {apiKey, apiSecret} from "../sensitive";

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


export class App extends React.Component {
    state = {};

    componentDidMount() {
        if (window.localStorage.length === 0) {
            fetchToken();
        }
    }

    fetchAnimals = async () => {
        let errMsg = "";
        const token = window.localStorage.getItem("token")
        const hitServer = await fetch("https://api.petfinder.com/v2/animals?type=dog&page=2", {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
                "Authorization": `Bearer ${token}`
            }
        });
        const response = await hitServer.json();
    
        if (hitServer.status === 401) {
            fetchToken();
            errMsg = "Access to server stoped. Please enter your values again in a few seconds...";
            setTimeout(() => {
                errMsg = ""
            });
        } else if (hitServer.status === 400) {
            errMsg = "Your request contains invalid parameters. Please enter valid values.";
            setTimeout(() => {
                errMsg = ""
            });
            console.log(errMsg)
        } else if (hitServer.status > 401 && hitServer.status < 600) {
            errMsg = "Your request contains invalid parameters. Please enter valid values.";
            setTimeout(() => {
                errMsg = ""
            });
        } else {
            console.log(response)
        }
    }
    
    render(){
        return(
            <div>
                hello there
                <button type="button" onClick={this.fetchAnimals} >Fetch!</button>
            </div>
        )
    }
}
