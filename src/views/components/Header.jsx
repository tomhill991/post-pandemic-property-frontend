import React, { useState } from "react"
import { NavLink, Link } from 'react-router-dom'

import Popup from './login/Popup.jsx'

const Header = props => {
  const [active, setActive] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(props.isUserLoggedIn)

  const toggleActive = () => {
    if(active) 
      setActive(false)
    else 
      setActive(true)
  }
  const logout = () => {
    
  }

  return (
    <>
    <header>
      <Link className="logo" to="/"></Link>
      <nav className={active ? ' show' : ''}>
        <div className="container">
          <ul>
            <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/properties">Properties</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">About us</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact">Contact us</NavLink></li>
            <li><NavLink activeClassName="active" to="/privacy">Privacy policy</NavLink></li>
          </ul>
          {
            !isUserLoggedIn ?
            <>
          <ul>
            <li><span>Login</span></li>
            <li><span>Sign up</span></li>
          </ul>
            </>
            :
            <>
            <ul>
              <li><span><img className="user-profile" src="/user-solid.svg" alt="user profile"/></span></li>
              <li><span onClick={() => logout()}>Logout</span></li>
            </ul>
            </>
          }
          <span className="close" onClick={() => toggleActive()}></span>
        </div>
      </nav>
      <div className="burger-menu">
        <button onClick={() => toggleActive()} className="hamburger hamburger--collapse" type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
      </div>
    </header>

    <Popup />
    </>
  )
}

export default Header