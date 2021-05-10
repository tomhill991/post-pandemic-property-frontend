import React, { useState, useEffect } from "react"
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom'

import Popup from './login/Popup.jsx'
import { connect } from 'react-redux'
import { logout, login } from '../../redux';
import User from '../../services/user.jsx'

const Header = props => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const [openSignup, setOpenSignup] = useState(false)
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        if(location.pathname)
            setOpen(false)
    }, [location])

    useEffect(() => {
        if(props.loginState)
            closePopup(true)
    }, [props.loginState])

    const toggleActive = () => {
        if(active) 
            setActive(false)
        else 
            setActive(true)
    }

    const logout = () => {
        User.logout()
        props.logout()
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
            !props.loginState.loggedIn ?
            <>
          <ul>
            <li><span className="link" onClick={() => setOpen(true)}>Login</span></li>
            <li><span className="link" onClick={() => {setOpenSignup(true); setOpen(true)}}>Sign up</span></li>
          </ul>
            </>
            :
            <>
            <ul>
              <li><span><img onClick={() => {toggleActive(); history.push('/profile')}} className="user-profile link" src="../../assets/images/user-solid.svg" alt="user profile"/></span></li>
              <li><span className="link" onClick={() => logout()}>Logout</span></li>
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

function mapStateToProps(state) {
    return {
       loginState: state.login
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
		logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Header)