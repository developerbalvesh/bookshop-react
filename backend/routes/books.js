const express = require("express");
const Book = require("../models/bookModel");
const {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook
} = require("../controllers/bookController");

const router = express.Router();

// get all books
router.get("/", getBooks);

// get a single book
router.get("/:id", getBook);

// POST a book
router.post("/", createBook);

// DELETE a book
router.delete("/:id", deleteBook);

// UPDATE a book
router.patch("/:id", updateBook);

module.exports = router;
