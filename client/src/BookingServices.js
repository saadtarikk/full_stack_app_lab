const baseURL =  'http://localhost:5000/api/reservations/'


export const getReservations = () => {
    return fetch(baseURL).then(res => res.json())
}


export const postReservations = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    }).then(res => res.json())
}

export const deleteReservation = (id) => {
    return fetch(baseURL + id, {
        method: 'Delete'
    })
}

export const updatedReservation = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}