import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { headers } from "../sensitive";
import { Navbar } from "./Navbar";
import { Form } from "./Form";

// 1. headers: Headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Your API Token here' });
// 2. options: RequestOptions = new RequestOptions({ headers: this.headers });

// 3. fetch(url, { headers }).then(response => response.json()).then(data => console.log(data));


export const App = () => {

    // async componentDidMount() {
    //     const hitApi = await fetch(`https://api.petfinder.com/v2/animals?type=bird&page=2`, {headers});
    //     const response = await hitApi.json();
    //     console.log(response);
    // }
    return (
        <React.Fragment>
            <Navbar />
                <CssBaseline />
                    <Container maxWidth="sm">
                        <Form />
                    </Container>
        </React.Fragment>
    )
}
