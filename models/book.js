const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book',bookSchema)