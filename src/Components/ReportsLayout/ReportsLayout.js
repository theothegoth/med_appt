import React, { useState } from "react";
import "./ReportsLayout.css";
const ReportsLayout = () => {
  // Sample data for the reports (you can replace it with actual data)
  const reportsData = [
    { id: 1, doctorName: "Dr. Smith", doctorSpeciality: "Cardiologist" },
    { id: 2, doctorName: "Dr. Johnson", doctorSpeciality: "Dermatologist" },
    // Add more reports as needed
  ];

  const handleViewReport = (reportId) => {
    // Handle logic for viewing the report
    console.log(`Viewing report ${reportId}`);
  };

  const handleDownloadReport = (reportId) => {
    // Handle logic for downloading the report
    console.log(`Downloading report ${reportId}`);
  };

  return (
    <div className="reports-card">
      <h2>Your Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.doctorName}</td>
              <td>{report.doctorSpeciality}</td>
              <td>
                <button onClick={() => handleViewReport(report.id)}>
                  View Report
                </button>
              </td>
              <td>
                <button onClick={() => handleDownloadReport(report.id)}>
                  Download Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
