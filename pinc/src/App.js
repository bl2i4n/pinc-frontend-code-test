import React, { Component } from 'react';
import './App.css';

import { Navbar, Nav, NavItem, FormControl, Image, Button, Tabs, Tab, Glyphicon } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    <div>

    <Navbar className="">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">
            <Image className="img-size" src="./pinc_logo.png" circle />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav className="padme">
        <NavItem eventKey={1} href="#">
          <Glyphicon glyph="home" /> Feed
        </NavItem>
        <NavItem eventKey={2} href="#">
          <Glyphicon className=""/> Groups
        </NavItem>
        <NavItem eventKey={3} href="#">
          <Glyphicon glyph="bell" /> Activity
        </NavItem>
      </Nav>

      <Nav pullRight>
        <NavItem>
        <FormControl
            className="form-width"
            type="text"
            placeholder="Search"
          />
        </NavItem>
        <Nav>
        <NavItem>
          <Image className="pic" src="/profile_pic.png" />
        </NavItem>
        </Nav>
        <NavItem>
          <Button className="nav-button">Add Post</Button>
        </NavItem>
      </Nav>
    </Navbar>

    <div className="text-center">
      <Button bsStyle="btn btn-light" bsSize="large">
        <Image className="convo-size" src="/start.png" circle />
        Start a conversation
      </Button>
        <Tabs className="text-center" defaultActiveKey={1} id="uncontrolled-tab-example">
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

    </div>
    );
  }
}

export default App;
