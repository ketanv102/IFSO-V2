import React from 'react';
import { ChevronLeft,  CalendarDays } from "lucide-react";

const ExistingFresher_DOB = () => {
  return (
    <div className="d-flex justify-content-center w-100">
      <div className="DOB-parent-container">
        <div className="DBO-header">
          <div className="d-flex align-items-center">
            <button className="DOB-back-button">
              <ChevronLeft />
            </button>
            <div>
              <h3 className="DOB-h1-name">Add Date of Birth</h3>
            </div>
          </div>
        </div>

        <p className="DOB-Subtitle">This won't be a part of your profile</p>

        <div className="DOB-Input">
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            className="date-input"
          />
          <CalendarDays className="calendar-icon" />
        </div>

        <div className="button-container ">
          <button className="skip-button px-8 py-2 rounded-lg">Skip</button>
          <button className="DOB-next-button px-10 py-10 rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ExistingFresher_DOB;