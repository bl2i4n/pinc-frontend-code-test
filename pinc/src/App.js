import React, { Component } from 'react';
import './App.css';

import { Navbar, Nav, NavItem, FormControl, Image, Button, Tabs, Tab } from 'react-bootstrap';

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
    
    <Button bsStyle="primary" bsSize="large">
      <Image src="/thumbnail.png" circle />
      Start a conversation
    </Button>
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Posts">
        Tab 1 content
      </Tab>
      <Tab eventKey={2} title="Polls">
        Tab 2 content
      </Tab>
    </Tabs>
    
    <h1>
    API CALL HERE
    </h1>
    
    </div>
    );
  }
}

export default App;
