import {useState, useEffect} from 'react'
import Login from './Login'
import Register from './Register'

const LoginContent = props => {
    const [selected, setSelected] = useState('login')
    
    useEffect(() => {
        if(props.openSignup)
            setSelected('register')
        else
            setSelected('login')
    }, [props.openSignup])

    return (
        <>
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
        </>
    )
}

export default LoginContent