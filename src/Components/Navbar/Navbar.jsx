import React from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo"></div>
      <img src={logo} alt=""/>
      <p>Shopper</p>
    </div>
  )
}

export default Navbar
