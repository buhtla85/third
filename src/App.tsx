import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Navbar } from "./Navbar";
import { Form } from "./Form";

export class App extends React.Component {

    componentDidMount() {
        if (typeof window !== 'undefined') {
            console.log(localStorage.length);
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
