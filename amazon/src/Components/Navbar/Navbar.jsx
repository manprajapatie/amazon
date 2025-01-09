import React from 'react'
import './Navbar.css'
import Navbarbelt from './Navbarbelt/Navbarbelt'
import NavbarBanner from './NavbarBanner/NavbarBanner'

function Navbar() {
  return (
    <div className='navbar'>
        <Navbarbelt />
        <NavbarBanner/>
    </div>
  )
}

export default Navbar
