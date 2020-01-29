import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, } from 'react-bootstrap';


export default function Menu(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                
                <Navbar.Brand href="#home">Luis G Azevedo</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Contato</Nav.Link>
                <Nav.Link href="#pricing">Serviços/Portfólio</Nav.Link>
                </Nav>
                
            </Navbar>
        </>
    );
}