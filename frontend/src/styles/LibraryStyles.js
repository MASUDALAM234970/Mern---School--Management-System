import styled from "styled-components";

// Library Container
export const LibraryContainer = styled.div`
  display: flex;
  height: 80vh;
  overflow: hidden;
  margin: 20px;
`;

// Content
export const Content = styled.div`
  flex: 1;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "80px")};
  transition: margin-left 0.3s ease;
`;

// Title
export const Title = styled.h1`
  margin-bottom: 20px;
`;

// ✅ AddBookForm - Make sure this exists!
export const AddBookForm = styled.form`
  margin-bottom: 20px;
`;

// Form Group
export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

// Label
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

// Input
export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Button
export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Book List
export const BookList = styled.ul`
  list-style: none;
  padding: 0;
`;

// Book Item
export const BookItem = styled.li`
  margin-bottom: 10px;
`;

// Book Title
export const BookTitle = styled.span`
  font-weight: bold;
`;

// Book Author
export const BookAuthor = styled.span`
  margin-left: 10px;
`;

// Action Button
export const ActionButton = styled.button`
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 14px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

// Sidebar Container
export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
`;

// Search Bar - Ensure this exists if needed
export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;
export const LibraryHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;
export const BorrowButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
