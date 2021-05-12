import React, { useState, useEffect, useMemo } from "react";
import { useParams, useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment'
import API from '../../services/api'
import Popup from './Popup'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';

const MakeAReservation = props => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [noOfGuests, setNoOfGuests] = useState(1)
    const [canSelectEndDate, setCanSelectEndDate] = useState(false)
    const [open, setOpen] = useState(false)
    const params = useParams()
    const history = useHistory()
    const disabledDates = useMemo(() => [],[])

    const handlePopup = () => {
        if(open)
            setOpen(false)
        else
            setOpen(true)
    }

    const handleSubmit = (startDate, endDate, noOfGuests) => {
        let obj = {}
        obj['date_start'] = moment(startDate).format('YYYY-MM-DD')
        obj['date_end'] = moment(endDate).format('YYYY-MM-DD')
        obj['no_of_guests'] = parseInt(noOfGuests)

        if(props.loginState.loggedIn) {
            API.create(`properties/${params.id}/bookings`, obj).then(res => {
                toast.success('Booking complete!')
                props.closePopup()
                history.push('/profile')
                console.log(res)
            }).catch(err => {
                toast.error(err.response.data.messages[0])
            })
        } else {
            toast.error('You need to login before making this booking')
            handlePopup()
        }
    }

    useEffect(() => {
        for (const i in props.bookings) {
            const booking = props.bookings[i]
            let startDate = moment(booking.date_start, 'YYYY-MM-DD');
            disabledDates.push(new Date(startDate));          
            while(!startDate.isSame(booking.date_end)){
                startDate = startDate.add(1, 'days');
                disabledDates.push(new Date(startDate));
            } 
        }
    }, [props.bookings, disabledDates])

    return (
        <>
            <h2>Check availability</h2>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit(startDate, endDate, noOfGuests)}}>
                <div className="dates">
                    <div className="field datepicker">
                        <label>Check in</label>
                        <DatePicker 
                            selected={startDate} 
                            onChange={date => {setStartDate(date); setCanSelectEndDate(true)}}
                            dateFormat="yyyy-MM-dd"
                            selectsStart
                            minDate={new Date()}
                            startDate={startDate}
                            endDate={endDate}
                            excludeDates={disabledDates}
                            popperModifiers={{
                                preventOverflow: {
                                enabled: true,
                                },
                            }}
                        />
                    </div>

                    <div className="field datepicker">
                        <label>Check out</label>
                        <DatePicker 
                            selected={endDate} 
                            readOnly={!canSelectEndDate}
                            onChange={date => setEndDate(date)} 
                            dateFormat="yyyy-MM-dd"
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date(moment(startDate, 'YYYY-MM-DD').add(1, 'days'))}
                            excludeDates={disabledDates}
                            popperModifiers={{
                                preventOverflow: {
                                enabled: true,
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="field">
                    <label>No of guests</label>
                    <select name="no_of_guests" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} required>
                    {
                        [...Array(props.maxGuests)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                    }
                    </select>
                </div>

                <div className="field">
                    <button className="button">Book dates</button>
                </div>
            </form>

            <Popup loginPopup open={open} closePopup={handlePopup}/>
        </>
    );
};

function mapStateToProps(state) {
    return {
       loginState: state.login
    };
}

export default connect(
    mapStateToProps
)(MakeAReservation)