import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BsGraphUp,
  BsPeople,
  BsPerson,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsCalendarEvent,
} from "react-icons/bs";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
  height: 100%;
  background-color: #2c3e50; /* Dark blue background */
  color: white;
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 60px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: ${({ isOpen }) => (isOpen ? "24px" : "18px")};
  font-weight: bold;
  text-align: center;
  transition: font-size 0.3s ease;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e; /* Darker border */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #34495e; /* Darker background on hover */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: ${({ isOpen }) => (isOpen ? "10px" : "0px")};
  transition: margin-left 0.3s ease;
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? "50px" : "30px")};
  height: auto;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #34495e; /* Darker background */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader isOpen={isOpen}>
        <Logo isOpen={isOpen} src={"../assets/bg1.png"} alt="Logo" />
      </SidebarHeader>
      <SidebarHeader>Teacher</SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />
          </SidebarIcon>
          <StyledLink to="/teacher/dashboard" isOpen={isOpen}>
            Dashboard
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          <StyledLink to="/teacher/classes" isOpen={isOpen}>
            Classes
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          <StyledLink to="/teacher/students" isOpen={isOpen}>
            Students
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPerson />
          </SidebarIcon>
          <StyledLink to="/teacher/teachers" isOpen={isOpen}>
            Teachers
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          <StyledLink to="/teacher/assignments" isOpen={isOpen}>
            Assignments
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/teacher/exams" isOpen={isOpen}>
            Exams
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          <StyledLink to="/teacher/performance" isOpen={isOpen}>
            Performance
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          <StyledLink to="/teacher/attendance" isOpen={isOpen}>
            Attendance
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          <StyledLink to="/teacher/communication" isOpen={isOpen}>
            Announcement
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendarEvent />
          </SidebarIcon>
          <StyledLink to="/teacher/events" isOpen={isOpen}>
            Events & Calendar
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          <StyledLink to="/teacher/settings" isOpen={isOpen}>
            Settings & Profile
          </StyledLink>
        </SidebarNavItem>
      </SidebarNav>
      <ToggleButton onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
