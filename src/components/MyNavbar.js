import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav} from "react-bootstrap";

const Navbar = () => {

    const {user} = useContext(Context)

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navbar;