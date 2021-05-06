import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const NavbarMenu = (props) => {

    const displayLinks = props.data.map((menu, index) => (
            <Nav.Link key={index}>
                <Link to={`/${menu.title}`}>{menu.title.toUpperCase()}</Link>
            </Nav.Link>
        )
    ) 

    return (
        <Navbar.Collapse>
            <Nav className="mr-auto">
                {displayLinks}
            </Nav>
        </Navbar.Collapse>
    )
}

export default NavbarMenu