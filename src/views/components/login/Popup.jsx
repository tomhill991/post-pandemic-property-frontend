import {useState, useEffect} from 'react'
import Login from './Login'
import Register from './Register'

const Popup = props => {
    const [selected, setSelected] = useState(props.selected)

    useEffect(() => {
        if(props.openSignup)
            setSelected('register')
        else
            setSelected('login')
    }, [props.openSignup])

    return (
        <div className={"popup-wrapper" + (props.open ? " open" : "")}>
            <div className="popup-container">
                <span className="close" onClick={() => props.closePopup()}></span>
                <div className="content">
                    <div className="tabs">
                        <div className="tab" onClick={() => setSelected('login')}>Login</div>
                        <div className="tab" onClick={() => setSelected('register')}>Register</div>
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