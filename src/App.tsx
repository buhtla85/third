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

let body = "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}"

const fetchToken = async () => {
    const hitServer = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    const response: petFinderResponseToken = await hitServer.json();
    console.log(response.access_token)
    //window.localStorage.setItem("token", response.access_token)
}

export class App extends React.Component {

    componentDidMount() {
        if(window.localStorage.length === 0) {
            console.log("empty")
        }
    }
    render(){
        return(
            <div>
                hello there
            </div>
        )
    }
}
