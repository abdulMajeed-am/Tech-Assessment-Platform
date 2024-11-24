// components/StartAssessmentModal.js
import React from "react";

const StartAssessmentModal = ({ onClose }) => {
  return (
    <div style={modalOverlayStyles}>
      <div style={modalStyles}>
        <h2>Starting New Assessment</h2>
        <p>This is a dummy assessment start message. The actual logic will go here.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Modal overlay and style
const modalOverlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  textAlign: "center",
};

export default StartAssessmentModal;
