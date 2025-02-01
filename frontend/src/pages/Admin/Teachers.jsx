import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
} from "../../styles/TeachersStyles";

const Teachers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
    experience: "",
  });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if (newTeacher.name && newTeacher.subject && newTeacher.experience) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/teachers",
          newTeacher
        );
        setTeachers([...teachers, response.data.teacher]);
        setNewTeacher({ name: "", subject: "", experience: "" });
      } catch (error) {
        console.error("Error adding teacher:", error);
      }
    }
  };

  return (
    <TeachersContainer>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Content isSidebarOpen={isSidebarOpen}>
        <TeachersContent>
          <TeachersHeader>Teachers</TeachersHeader>
          <AddTeacherForm onSubmit={handleAddTeacher}>
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher name"
              value={newTeacher.name}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, name: e.target.value })
              }
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter subject"
              value={newTeacher.subject}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, subject: e.target.value })
              }
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter experience (years)"
              value={newTeacher.experience}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, experience: e.target.value })
              }
            />
            <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
          </AddTeacherForm>
          <TeacherList>
            {teachers.map((teacher) => (
              <TeacherItem key={teacher.id}>
                {teacher.name} - {teacher.subject} - {teacher.experience} years
              </TeacherItem>
            ))}
          </TeacherList>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default Teachers;
