import React from 'react'
import { deleteReservation, updatedReservation } from '../BookingServices'
import BookingElement from './BookingElement'


const BookingList = ({allBookings, deleteBooking, checkInBooking}) => {


    const handleDelete = (id) => {
        deleteReservation(id).then(() => {
            deleteBooking(id)
        })
    }

    const handleCheckIn = (booking) => {
        let temp = {
            "name": booking.name,
            "email": booking.email,
            "checkedIn": !booking.checkedIn
                }
        // booking.checkedIn = !booking.checkedIn
        // console.log(`handleCheckIn: ${booking}`);
        // updatedReservation(booking._id, booking)
        // .then(() => {
        //     checkInBooking(booking._id, booking)
        // })
        updatedReservation(booking._id, temp)
        .then(() => {
            checkInBooking(booking._id, temp)
        })
    }
    const bookingListItems = allBookings.map((booking) => {
        return <BookingElement booking={booking} key={booking._id} handleDelete={handleDelete} handleCheckIn={handleCheckIn}/>
    })

    

    return (
        <ul>
            {bookingListItems}
        </ul>
    )
}

export default BookingList
