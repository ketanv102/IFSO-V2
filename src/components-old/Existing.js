import React from "react";
import '../CSS/App.css';
import Proflie from '../Resourceas/Images/Profile.jpg';



const Existing = () => {
    return (
       <div className="Existing-container">
        <div className="Existing-content position-relative ">
        <div className="Profile-image">
            <img src={Proflie} alt="Profile" className="Profile"/>
            <samp className="Uplode-Image">Uplode Image</samp>
        </div>

        <h2 className="User-name">Ralph Edwards</h2>

        <div className="Welcome-message">
            <h1 className="Welcome-title">Hello Ralph!</h1>
            <p className="welcome-text">
                Do you want to continue with your bigtam account?
            </p>
        </div>

        <div className="button-container position-absolute">
          <button className="continue-btn">Continue</button>
          <button className="continue-btn">Start As Fresh</button>
        </div>

        </div>
       </div> 
    )
}



export default Existing;
