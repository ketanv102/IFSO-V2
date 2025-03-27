import React from "react";
import { ChevronLeft } from "lucide-react";




const UserInput = () => {
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
              <h3 className="h1-name">Add Username</h3>
            </div>
          </div>
        </div>

        <p className="Subtitle">Create a unique username for your profile</p>

        <div className="Name-Input">
         
          <input
            type="text"
            placeholder="Username"
            className="name-input"
          />
        </div>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default UserInput;