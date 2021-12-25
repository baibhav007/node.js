const express = require('express')
const router = express.Router()
const Book = require('../models/book')


router.get('/', async(req,res) => {
    // res.send('testing')
    try{
        const books = await Book.find()
        res.json(books)
 }catch(err){
     res.send('Error' + err)
 }
})

router.get('/:id', async(req,res) => {
 try{
        const book = await Book.findById(req.params.id)
        res.json(book)
 }catch(err){
     res.send('Get Error' + err)
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
     res.send('Post Error')
 }
})
router.patch('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        book.number = req.body.number
        const a1 = await book.save()
        res.json(a1)   
    }catch(err){
        res.send('Patch Error')
    }
    try{
        const book = await Book.findById(req.params.id) 
        book.name = req.body.name
        const a1 = await book.save()
        res.json(a1)   
    }catch(err){
        res.send('Patch Error')
    }

})
router.delete('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        const a1 = await book.delete()
        res.json(a1)   
    }catch(err){
        res.send('Delete Error')
    }
})

module.exports = router