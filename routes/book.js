const express = require('express')
const router = express.Router()
const Book = require('../models/book')


router.get('/', async(req,res) => {
    // res.send('testing')
    try{
        const books = await Book.find()
        res.json(books)
 }catch(err){
     res.send('Error123' + err)
 }
})

router.get('/:id', async(req,res) => {
 try{
        const book = await Book.findById(req.params.id)
        res.json(book)
 }catch(err){
     res.send('Error123' + err)
 }
})


router.post('/', async(req,res) => {
    // res.send('testing')
 const alpha = new Book({
     name: req.body.name,
        number: req.body.number
 })
//res.send(alpha)
 try{
     const a1 =  await alpha.save() 
     res.json(a1)
 }catch(err){
     res.send('post error')
 }
})
router.patch('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        book.number = req.body.number
        const a1 = await book.save()
        res.json(a1)   
    }catch(err){
        res.send('Error123')
    }

})


module.exports = router