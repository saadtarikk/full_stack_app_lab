import React from 'react'

const BookingElement = ({booking, handleDelete, handleCheckIn}) => {
    return (
        <li>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>Checked In:{String(booking.checkedIn)}</p>

            <button onClick={() => handleCheckIn(booking)}>Check In</button>
            <button onClick={() => handleDelete(booking)}>🗑</button>
        </li>
    )
}

export default BookingElement
