import React from 'react'
// Components
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from './NavbarComponents/NavbarBrand'
import NavbarMenu from './NavbarComponents/NavbarMenu'
//Data 

const SiteNavbar = (props) => (

  <Navbar bg="light" expand="lg">
    {NavbarBrand}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <NavbarMenu data={props.data}/>
  </Navbar>

)

export default SiteNavbar