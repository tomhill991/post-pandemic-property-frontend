import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment'

const MakeAReservation = props => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [canSelectEndDate, setCanSelectEndDate] = useState(false)
    const disabledDates = []

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
            <div className="dates">
                <div className="field datepicker">
                    <p>Check in</p>
                    <DatePicker 
                        selected={startDate} 
                        onChange={date => {setStartDate(date); setCanSelectEndDate(true)}}
                        dateFormat="yyyy-MM-dd"
                        selectsStart
                        minDate={new Date()}
                        startDate={startDate}
                        endDate={endDate}
                        excludeDates={disabledDates}
                    />
                </div>

                <div className="field datepicker">
                    <p>Check out</p>
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
                    />
                </div>
            </div>

            <div className="field">
                <select name="no_of_guests"></select>
            </div>
        </>
    );
};


export default MakeAReservation