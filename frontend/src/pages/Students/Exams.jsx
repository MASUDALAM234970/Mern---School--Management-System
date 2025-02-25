import React, { useRef } from "react";
import Sidebar from "./Sidebar";
import { Bar } from "react-chartjs-2";
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from "../../styles/ExamStyles";

// Import necessary components from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExamSection = () => {
  const chartRef = useRef(null);

  // Sample exam results data
  const examResultsData = {
    subjects: ["Math", "Science", "English", "History"],
    results: [80, 75, 90, 85], // Sample results out of 100
  };

  // Bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: "Exam Results",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: 1,
        hoverBackgroundColor: "#0056b3",
        hoverBorderColor: "#0056b3",
        data: examResultsData.results,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows us to manually control height
    scales: {
      y: {
        type: "linear", // Use linear scale for the Y-axis
        beginAtZero: true,
        max: 100, // Restrict the max score to 100
        ticks: {
          stepSize: 10, // Ensure evenly spaced values
        },
      },
    },
    plugins: {
      legend: {
        position: "top", // Move legend to avoid chart taking too much space
      },
    },
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultsData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {examResultsData.results[index]}%</ExamResult>
            </div>
          ))}
          <ExamChartContainer style={{ height: "300px", width: "100%" }}>
            <Bar ref={chartRef} data={barChartData} options={chartOptions} />
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
};

export default ExamSection;
