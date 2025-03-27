import React from "react";
import { ChevronLeft } from "lucide-react";




const NameInput = () => {
  return (
    <div className="d-flex justify-content-center w-100">
      <div className="parent-container">
        <div className="header">
          <div className="d-flex align-items-center">
            {/* <div> */}
              <button className="back-button">
                <ChevronLeft />
              </button>
            {/* </div> */}
            <div>
              <h3 className="h1-name">Add Your Name</h3>
            </div>
          </div>
        </div>

        <p className="Subtitle">Add Your Name So People Can Find You</p>

        <div className="Name-Input">
          <span className="icon">👤</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="name-input"
          />
        </div>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default NameInput;   