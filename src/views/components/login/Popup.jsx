import {useState} from 'react'
import Login from './Login'
import Register from './Register'

const Popup = props => {
    const [selected, setSelected] = useState('login')
    return (
        <div className="popup-wrapper open">
            <div className="popup-container">
                <span className="close-popup"></span>
                <div className="content">
                    <div className="tabs">
                        <div className="tab" onClick={() => setSelected('login')}>Login</div>
                        <div className="register" onClick={() => setSelected('register')}>Register</div>
                    </div> 
                    {   
                        selected === 'login' &&
                        <Login />
                    }
                    {
                        selected === 'register' &&
                        <Register />
                    }
                </div>
            </div>
        </div>
    )
}

export default Popup