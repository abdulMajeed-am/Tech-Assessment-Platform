import React, { useState, useEffect } from "react";
import "./Table.css"; // Include your CSS file for styling

const Table = ({ data }) => {
  const [sortedData, setSortedData] = useState([]); // State for sorted table data
  const [sortDirectionDate, setSortDirectionDate] = useState("desc"); // State for sorting date
  const [sortDirectionStatus, setSortDirectionStatus] = useState("asc"); // State for sorting status

  // Effect to update table data when `data` prop changes
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  // Sort table data by Date Assigned
  const sortByDate = () => {
    const newDirection = sortDirectionDate === "asc" ? "desc" : "asc";
    setSortDirectionDate(newDirection);

    const sorted = [...sortedData].sort((a, b) => {
      const dateA = new Date(a?.date_assigned);
      const dateB = new Date(b?.date_assigned);
      return newDirection === "asc" ? dateA - dateB : dateB - dateA;
    });
    setSortedData(sorted);
  };

  // Sort table data by Status
  const sortByStatus = () => {
    const newDirection = sortDirectionStatus === "asc" ? "desc" : "asc";
    setSortDirectionStatus(newDirection);

    const sorted = [...sortedData].sort((a, b) =>
      newDirection === "asc"
        ? a?.status.localeCompare(b?.status)
        : b?.status.localeCompare(a?.status)
    );
    setSortedData(sorted);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {/* Table Controls */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={sortByDate}>
          Sort by Date ({sortDirectionDate})
        </button>
        <button
          onClick={sortByStatus}
          style={{ marginLeft: "10px" }}
        >
          Sort by Status ({sortDirectionStatus})
        </button>
      </div>

      {/* Table Section */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Score</th>
            <th>Date Assigned</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((assessment) => (
            <tr key={assessment?.id || Math.random()}>
              <td>{assessment?.title || "No Title"}</td>
              <td>{assessment?.status || "No Status"}</td>
              <td>
                {assessment?.status === "Completed"
                  ? assessment?.score || "N/A"
                  : "N/A"}
              </td>
              <td>
                {assessment?.date_assigned
                  ? new Date(assessment?.date_assigned).toLocaleDateString()
                  : "No Date"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
