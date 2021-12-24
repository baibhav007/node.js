const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/crudDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('die...')
})

app.use(express.json())

const bookRouter = require('./routes/book')
app.use('/book',bookRouter)

app.listen(9000, () => {
    console.log('Server started')
})