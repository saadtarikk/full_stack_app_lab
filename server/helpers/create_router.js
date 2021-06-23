const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function(collection) {


    const router = express.Router();

    const errorHandle = function(err, res){
        console.error(err)
        console.log('********* HI SAAD **********')
        return res.status(500).json({status: 500, error: err})
    }
    //Index 
    router.get('/', (req, res) => {
        collection.find().toArray()
        .then(docs => res.json(docs))
        .catch((err) => {
            // res = errorHandle(err, res)
            console.error(err)
            
            res.status(500)
            res.json({status: 500, error: err})
        })
    })

    //Show specific item
    router.get('/:id', (req, res) => {
        const id = req.params.id
        collection.findOne({_id: ObjectID(id)})
        .then(doc => res.json(doc))
        .catch((err) => {
            res = errorHandle(err)
        })
    })

    //POST 
    router.post('/', (req, res) => {
        collection.insertOne(req.body)
        .then(doc => res.json(doc.ops[0]))
        .catch((err) => {
            res = errorHandle(err)
        })
    })

    //Delete
    router.delete('/:id', (req, res) => {
        const id = req.params.id
        collection.deleteOne({_id: ObjectID(id)})
        .then(doc => res.json(doc))
        .catch((err) => {res = errorHandle(err)})
        
    })

    //Update 
    router.put('/:id', (req, res) => {
        const id = req.params.id
        const updatedReservation = req.body
        collection.updateOne({_id: ObjectID(id)}, {$set: updatedReservation} )
        .then(doc => res.json(doc))
        .catch((err) => {res = errorHandle(err)
        })
    })

    return router;

}

module.exports = createRouter