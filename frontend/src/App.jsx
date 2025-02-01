import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home.jsx";
import ChooseUser from "./components/ChooseUser.jsx";
import TeacherSignIn from "./components/TeacherSignIn.jsx";
import StudentSignIn from "./components/StudentSignIn.jsx";
import AdminSignIn from "./components/AdminSignIn.jsx";
import AdminRegister from "./components/AdminRegister.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        <Route path="/admin-signIn" element={<AdminSignIn />} />
        <Route path="/student-signIn" element={<StudentSignIn />} />
        <Route path="/teacher-signIn" element={<TeacherSignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
