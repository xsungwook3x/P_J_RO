import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(){
    
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand href="#home">P에서J로</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/todo">Todo</Nav.Link>
                <Nav.Link href="/routine">Routine</Nav.Link>
                
            </Nav>
        </Container>
        </Navbar>
    )
}

export default Header;