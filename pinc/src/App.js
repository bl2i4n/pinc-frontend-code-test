import React, { Component } from 'react';
import './App.css';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
      </Nav>
    </Navbar>
    
    </div>
    );
  }
}

export default App;
