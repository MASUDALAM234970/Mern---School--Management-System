import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  LibraryContainer,
  Content,
  Title,
  AddBookForm,
  FormGroup,
  Label,
  Input,
  Button,
  BookList,
  BookItem,
  BookTitle,
  BookAuthor,
  ActionButton,
  SearchBar, // ✅ Added SearchBar import
} from "../../styles/LibraryStyles";

const Library = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // ✅ Sidebar toggle state
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Search state

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/library/getall"
      );
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/library",
        {
          bookname: book.title,
          author: book.author,
        }
      );

      if (response.data.success) {
        // ✅ Check API response
        setBooks([...books, response.data.book]);
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleBookPick = async (bookId, studentId) => {
    // Implement logic to record when a student picks a book
  };

  const handleBookReturn = async (bookId, studentId) => {
    // Implement logic to mark when a student returns a book
  };

  // ✅ Filter books based on search input
  const filteredBooks = books.filter(
    (book) =>
      book.bookname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <LibraryContainer>
      {/* ✅ Pass Sidebar State */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Content isSidebarOpen={isSidebarOpen}>
        <Title>Library Management</Title>

        {/* ✅ Added Search Bar */}
        <SearchBar
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Add Book Form */}
        <AddBookForm
          onSubmit={(e) => {
            e.preventDefault();
            const book = {
              title: e.target.title.value,
              author: e.target.author.value,
            };
            addBook(book);
            e.target.reset();
          }}
        >
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor="title">Title:</Label>
            <Input type="text" id="title" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="author">Author:</Label>
            <Input type="text" id="author" required />
          </FormGroup>
          <Button type="submit">Add Book</Button>
        </AddBookForm>

        {/* Book List */}
        <h2>Books</h2>
        <BookList>
          {filteredBooks.map((book) => (
            <BookItem key={book._id}>
              <BookTitle>{book.bookname}</BookTitle>
              <BookAuthor>by {book.author}</BookAuthor>
              <ActionButton
                onClick={() => handleBookPick(book._id, "student123")}
              >
                Pick
              </ActionButton>
              <ActionButton
                onClick={() => handleBookReturn(book._id, "student123")}
              >
                Return
              </ActionButton>
            </BookItem>
          ))}
        </BookList>
      </Content>
    </LibraryContainer>
  );
};

export default Library;
