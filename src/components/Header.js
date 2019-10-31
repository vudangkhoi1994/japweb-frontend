import React from "react"
import './Header.css'
// import logo from '../logo.png'
import Navbar from './Navbar'

function Header () {
    return(
        <header className="app-header">
            {/* <img src={logo} className="header-logo" alt="logo"/> */}
            <Navbar />
        </header>
    )
}

export default Header
