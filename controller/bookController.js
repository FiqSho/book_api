const Book = require('../model/book');

// Retrieve all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve books' });
    }
};

// Retrieve a specific book by ID
exports.getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve book' });
    }
};

// Create a new book
exports.createBook = async (req, res) => {
    const { title, author, description, publishedYear } = req.body;
    try {
        const book = await Book.create({ title, author, description, publishedYear });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, description, publishedYear } = req.body;
    try {
      const book = await Book.findByIdAndUpdate(
        id,
        { title, author, description, publishedYear },
        { new: true }
      );
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update book' });
    }
  };

  // Delete a book by ID
exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Book.findByIdAndDelete(id);
      if (book) {
        res.json({ message: 'Book deleted successfully' });
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete book' });
    }
  };
