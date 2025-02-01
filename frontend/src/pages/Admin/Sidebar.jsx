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

// Import image properly
import bg1 from "../../assets/bg1.png";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
  height: 100%;
  background-color: #2c3e50;
  color: white;
  overflow-x: hidden;
  overflow-y: auto;
  transition: width 0.3s ease;
  z-index: 100;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? "50px" : "40px")};
  height: auto;
  transition: width 0.3s ease;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e;
  }
`;

const SidebarIcon = styled.div`
  font-size: 20px;
  margin-right: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  transition: margin 0.3s ease;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  flex-grow: 1;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transition: opacity 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: #34495e;
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
      <SidebarHeader>
        <Logo src={bg1} alt="Logo" isOpen={isOpen} />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsGraphUp />
          </SidebarIcon>
          <StyledLink to="/admin/dashboard" isOpen={isOpen}>
            Dashboard
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsPeople />
          </SidebarIcon>
          <StyledLink to="/admin/classes" isOpen={isOpen}>
            Classes
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsPerson />
          </SidebarIcon>
          <StyledLink to="/admin/students" isOpen={isOpen}>
            Students
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsPerson />
          </SidebarIcon>
          <StyledLink to="/admin/teachers" isOpen={isOpen}>
            Teachers
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsFileText />
          </SidebarIcon>
          <StyledLink to="/admin/assignments" isOpen={isOpen}>
            Assignments
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/admin/exams" isOpen={isOpen}>
            Exams
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsGraphDown />
          </SidebarIcon>
          <StyledLink to="/admin/performance" isOpen={isOpen}>
            Performance
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsCalendar />
          </SidebarIcon>
          <StyledLink to="/admin/attendance" isOpen={isOpen}>
            Attendance
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsChatDots />
          </SidebarIcon>
          <StyledLink to="/admin/communication" isOpen={isOpen}>
            Announcement
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsCalendarEvent />
          </SidebarIcon>
          <StyledLink to="/admin/events" isOpen={isOpen}>
            Events & Calendar
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/admin/library" isOpen={isOpen}>
            Library
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon isOpen={isOpen}>
            <BsGear />
          </SidebarIcon>
          <StyledLink to="/admin/settings" isOpen={isOpen}>
            Settings & Profile
          </StyledLink>
        </SidebarNavItem>
      </SidebarNav>
      <ToggleButton onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▶</ToggleIcon>
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
