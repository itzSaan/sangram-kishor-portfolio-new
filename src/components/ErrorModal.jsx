import React from "react";

const ErrorModal = ({ modalOpen, setModalOpen }) => {
  return (
    modalOpen && (
      <div className="card-wrapper">
        <div className="card error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="124"
            height="124"
            className="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>

          <p className="cardHeading">Oh, Snap!</p>
          <p className="cardDescription">
            Something went wrong.
            <br /> Please try again!
          </p>

          <div className="buttonContainer">
            <button onClick={() => setModalOpen(prev => prev = false)} className="acceptButton">Try Again</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ErrorModal;
