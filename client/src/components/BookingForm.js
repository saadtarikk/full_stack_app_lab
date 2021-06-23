import React, {useState} from 'react'
import { postReservations, deleteReservation } from '../BookingServices'

const BookingForm = ({addBooking}) => {
    const [formData, setFormData] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        postReservations(formData).then((data) => {
            addBooking(data);
        })
    }

    const onChange = (event) => {
        
        formData[event.target.id] = event.target.value
        if(event.target.hasOwnProperty('checked')){
            console.log("Has checked")
            formData[event.target.id] = event.target.checked
        }
        else{
        formData[event.target.id] = event.target.value}
        setFormData(formData)

    }

    return (
        <form className="booking-form" onSubmit={handleSubmit} method="post">

            <label htmlFor="name">Name:</label>
            <input onChange={onChange} type="text" id="name" required/>

            <label htmlFor="name">Email:</label>
            <input onChange={onChange} type="email" id="email" required/>

            <label htmlFor="name">Checked In:</label>
            <input onChange={onChange} type="checkbox" id="checkedIn"/>

            <input type="submit" value="Save" id="save"/>
            
        </form>
    )
}

export default BookingForm
