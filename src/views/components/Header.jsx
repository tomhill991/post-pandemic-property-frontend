import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
        </ul>

    )
}

export default Header