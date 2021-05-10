import React, { useState, useEffect } from "react"
import { NavLink, Link, useLocation } from 'react-router-dom'

import Popup from './login/Popup.jsx'

const Header = props => {
    const [active, setActive] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(props.isUserLoggedIn)
    const [open, setOpen] = useState(false)
    const [openSignup, setOpenSignup] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if(location.pathname)
            setOpen(false)
    }, [location, open])

    const toggleActive = () => {
        if(active) 
            setActive(false)
        else 
            setActive(true)
    }

    const logout = () => {
        
    }

    const closePopup = () => {
        setOpen(false)
        setOpenSignup(false)
    }

  return (
    <>
    <header>
      <Link className="logo" to="/"></Link>
      <nav className={active ? ' show' : ''}>
        <div className="container">
          <ul>
            <li><NavLink onClick={() => toggleActive()} activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink onClick={() => toggleActive()} activeClassName="active" to="/properties">Properties</NavLink></li>
            <li><NavLink onClick={() => toggleActive()} activeClassName="active" to="/about">About us</NavLink></li>
            <li><NavLink onClick={() => toggleActive()} activeClassName="active" to="/contact">Contact us</NavLink></li>
            <li><NavLink onClick={() => toggleActive()} activeClassName="active" to="/privacy">Privacy policy</NavLink></li>
          </ul>
          {
            !isUserLoggedIn ?
            <>
          <ul>
            <li><span onClick={() => setOpen(true)}>Login</span></li>
            <li><span onClick={() => {setOpenSignup(true); setOpen(true)}}>Sign up</span></li>
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

    <Popup open={open} closePopup={closePopup} openSignup={openSignup}/>
    </>
  )
}

export default Header