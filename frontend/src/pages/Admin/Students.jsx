import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from "../../styles/StudentsStyles";

const Students = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [newStudent, setNewStudent] = useState({
    name: "",
    registrationNumber: "",
    grade: "",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.registrationNumber && newStudent.grade) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/students",
          newStudent
        );
        setStudents([...students, response.data.student]);
        setNewStudent({ name: "", registrationNumber: "", grade: "" });
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };

  return (
    <StudentsContainer>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Content isSidebarOpen={isSidebarOpen}>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <AddStudentForm onSubmit={handleAddStudent}>
            <AddStudentInput
              type="text"
              placeholder="Enter student name"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <AddStudentInput
              type="text"
              placeholder="Enter registration number"
              value={newStudent.registrationNumber}
              onChange={(e) =>
                setNewStudent({
                  ...newStudent,
                  registrationNumber: e.target.value,
                })
              }
            />
            <AddStudentInput
              type="text"
              placeholder="Enter grade"
              value={newStudent.grade}
              onChange={(e) =>
                setNewStudent({ ...newStudent, grade: e.target.value })
              }
            />
            <AddStudentButton type="submit">Add Student</AddStudentButton>
          </AddStudentForm>
          <StudentList>
            {students.map((student) => (
              <StudentItem key={student.id}>
                {student.name} - {student.registrationNumber} - {student.grade}
              </StudentItem>
            ))}
          </StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
