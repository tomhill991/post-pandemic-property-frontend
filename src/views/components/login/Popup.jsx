import {useState} from 'react'
import Login from './Login'

const Popup = props => {
    return (
        <div className="popup-wrapper open">
            <div className="popup-container">
                <span className="close-popup"></span>
                <div className="content">
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Popup