const express = require('express')
const router=express.Router()
const {getAllBooks,getBookById,createBook,updateBook,deleteBook}=require('../controller/bookController')

// Retrieve all books
router.get('/',getAllBooks);

// Retrieve a specific book by ID
router.get('/:id', getBookById);

// Create a new book
router.post('/books', createBook);

// Update a book by ID
router.put('/:id', updateBook);

// Delete a book by ID
router.delete('/:id', deleteBook);

module.exports = router;