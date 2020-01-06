import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Navbar } from "./Navbar";
import { Form } from "./Form";

export const App = () => {
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
