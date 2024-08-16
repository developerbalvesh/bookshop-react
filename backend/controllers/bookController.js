const Book = require("../models/bookModel");
const mongoose = require("mongoose");

// get all books

const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(books);
};

// get a single book

const getBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(book);
};

// create a new book

const createBook = async (req, res) => {
  // res.json({msg: "POST / Create book"})
  const { title, author, description, bookPrize } = req.body;
  try {
    const book = await Book.create({ title, author, description, bookPrize });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a book

const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  const book = await Book.findByIdAndDelete({ _id: id });

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.status(200).json(book);
};

// update a book

const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const book = await Book.findByIdAndUpdate({ _id:id }, { ...req.body });

  res.status(200).json(book)
};

module.exports = { createBook, getBooks, getBook, deleteBook, updateBook };
