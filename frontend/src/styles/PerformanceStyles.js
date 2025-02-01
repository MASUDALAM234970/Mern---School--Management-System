import styled from "styled-components";

export const PerformanceContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "80px")};
  transition: margin-left 0.3s ease;
  padding: 20px;
`;

export const PerformanceContent = styled.div`
  padding: 20px;
`;

export const PerformanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SchoolPerformance = styled.div`
  margin-bottom: 20px;
`;

export const IndividualPerformance = styled.div``;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
`;

export const PerformanceInfo = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const PerformanceGraphContainer = styled.div`
  margin-bottom: 20px;
`;

export const TotalMarks = styled.div`
  font-weight: bold;
`;
