import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function TextLinkExample() {
  return (
    <div style={{backgroundColor: "#FF9843"}}>
    <Navbar style={{backgroundColor: "#FF9843"}} >
      <Container>
        <Navbar.Brand href="/films"> MOVIES</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="/create">
            ADD MOVIE 
          </Navbar.Brand >
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default TextLinkExample;