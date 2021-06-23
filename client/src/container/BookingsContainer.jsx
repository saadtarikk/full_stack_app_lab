import React, {useState, useEffect} from 'react'
import { getReservations, deleteReservation } from '../BookingServices'
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'


const BookingsContainer = () => {

    const [bookings, setBookings] = useState([])


    useEffect(() => {
        getReservations()
        .then(
            (allBookings) => {
            setBookings(allBookings)
        })
    }, [])

    const addBooking = (booking) => {
        setBookings([...bookings, booking])
    }

    const deleteBooking = (id) => {
        const temp = bookings.map(booking => booking)
        const indexToDel = bookings.map(booking => booking._id).indexOf(id)
        temp.splice(indexToDel, 1)
        setBookings(temp)
    }

    const checkInBooking = (id) => {
        const temp = bookings.map(booking => booking)
        const indexToCheckIn = bookings.map(booking => booking._id).indexOf(id)
        // booking._id = id
        temp[indexToCheckIn].checkedIn = !temp[indexToCheckIn].checkedIn
        setBookings(temp)

    } 

    return (
        <div>
            <BookingForm addBooking={addBooking}/>
            <BookingList allBookings={bookings} deleteBooking={deleteBooking} checkInBooking={checkInBooking}/>
        </div>
    )
}

export default BookingsContainer
