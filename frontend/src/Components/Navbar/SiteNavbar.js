import React from 'react'
// Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'

function SiteNavbar (){

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hanyu Shuiping Kaoshi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
            <NavDropdown title="Levels" id="basic-nav-dropdown">
              <NavDropdown.Item>
               <Link to="/hsk1">
                HSK - Level 1
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default SiteNavbar