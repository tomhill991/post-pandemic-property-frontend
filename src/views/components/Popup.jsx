import LoginContent from './login/LoginContent'
import MakeAReservation from './MakeAReservation'

const Popup = props => {
    return (
        <>
        <div className={"popup-overlay" + (props.open ? " open" : "")}></div>
        <div className={"popup-wrapper" + (props.open ? " open" : "") + (props.makeAReservation ? " reservation": "")}>
            <div className="popup-container">
                <span className="close" onClick={() => props.closePopup()}></span>
                <div className="content">
                    {
                        props.loginPopup &&
                        <LoginContent openSignup={props.openSignup}/>
                    }
                    {
                        props.makeAReservation &&
                        <MakeAReservation bookings={props.bookings}/>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Popup