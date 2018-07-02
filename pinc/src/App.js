import React, { Component } from 'react';
import './App.css';

import { Navbar, Nav, NavItem, FormControl, Image, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    <div>
    
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Pinc Logo</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Feed
        </NavItem>
        <NavItem eventKey={2} href="#">
          Groups
        </NavItem>
        <NavItem eventKey={3} href="#">
          Activity
        </NavItem>
        
        <NavItem pullRight>
        <FormControl
            type="text"
            placeholder="Enter text"
          />
        </NavItem>
        
        <NavItem pullRight>
          <Image src="/thumbnail.png" circle />
        </NavItem>
        
        <NavItem>
          <Button>Default</Button>
        </NavItem>
        
      </Nav>
    </Navbar>
    
    </div>
    );
  }
}

export default App;
