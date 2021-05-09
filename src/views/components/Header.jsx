import React, { useState } from "react"
import { Link } from 'react-router-dom'

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
    <header>
      <Link className="logo" to="/"></Link>
      <nav className={active ? ' show' : ''}>
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
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
  )
}

export default Header