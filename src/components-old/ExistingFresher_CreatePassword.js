import React from 'react'
import { ChevronLeft,EyeOff } from "lucide-react";


const ExistingFresher_CreatePassword = () => {
  return (
    <div className="d-flex justify-content-center w-100">
    <div className="Pass-parent-container">
      <div className="Pass-header">
        <div className="d-flex align-items-center">
          <button className="pass-backword-button ">
            <ChevronLeft/> 
          </button>
          <div>
            <h3 className="Pass-h1-name">Add Date of Birth</h3>
          </div>
        </div>
      </div>  

      <p className="Pass-Subtitle">This won't be a part of your profile</p>

      <div className="pass-input-container">
        <div className="password-input">
          <input type="password" placeholder="Password" />
          <EyeOff  className="eye-icon" />
        </div>
        <div className="password-input">
          <input type="password" placeholder="Confirm Password" />
          <EyeOff className="eye-icon" />
        </div>
      </div>


      

      <div className="button-container ">
        <button className="Pass-skip-button px-8 py-2 rounded-lg">Skip</button>
        <button className="Pass-next-button px-10 py-10 rounded-lg">Next</button>
      </div>
    </div>
  </div>
  )
};

export default ExistingFresher_CreatePassword;
