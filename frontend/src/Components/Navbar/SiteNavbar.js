import React from 'react'
// Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'
//Data 
import RevisionDropdown from './DropdownData'

function SiteNavbar (){

  const dropdownItems = RevisionDropdown.map((item) => {
    const itemLink = "/hsk" + item

    return (
      <NavDropdown.Item>
        <Link to={itemLink}>
          HSK - Level {item}
        </Link>
     </NavDropdown.Item>
    )
  })

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
            <NavDropdown title="Revision" id="basic-nav-dropdown">
              {dropdownItems}
            </NavDropdown>
            <NavDropdown title="Levels" id="basic-nav-dropdown">
              {dropdownItems}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default SiteNavbar