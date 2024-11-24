"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Table from "../components/Table";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCards";
import StartAssessmentModal from "../components/StartAssessmentModal"; // Import Modal component

export default function Home() {
  const [assessments, setAssessments] = useState([]); 
  const [totalAssessments, setTotalAssessments] = useState(0); 
  const [completedAssessments, setCompletedAssessments] = useState(0); 
  const [loading, setLoading] = useState(true); 
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  useEffect(() => {
    fetchAssessments();
  }, []); 

  const fetchAssessments = async () => {
    const { data, error } = await supabase.from("assessments").select("*");

    if (error) {
      console.error("Error fetching assessments:", error);
    } else {
      console.log("Fetched data:", data); 
      setAssessments(data);
      setTotalAssessments(data.length);
      setCompletedAssessments(
        data.filter((assessment) => assessment.status === "Completed").length
      );
    }
    setLoading(false); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleStartNewAssessment = () => {
    setShowModal(true); // Open the modal when button is clicked
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h2>Welcome to the Dashboard</h2>

      {/* Summary Cards Section */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <SummaryCard title="Total Assessments" value={totalAssessments} />
        <SummaryCard title="Completed Assessments" value={completedAssessments} />
      </div>

      {/* Button to Start New Assessment */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleStartNewAssessment}>Start New Assessment</button>
      </div>

      {/* Table displaying all assessments */}
      <Table data={assessments} />

      {/* Modal for Start New Assessment */}
      {showModal && <StartAssessmentModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
