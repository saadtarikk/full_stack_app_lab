use bookings; 
db.dropDatabase()

db.reservations.insertMany([
    {
        name: "John Wick",
        email: "John@wick.com",
        checkedIn: false
    },
    {
        name: "Andy Ryan",
        email: "Andy@wick.com",
        checkedIn: true
    }
]);