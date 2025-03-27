import React from "react";
// import '../../CSS/App.css';
import './StartPage.css';
import Proflie from '../../Resourceas/Images/Profile.jpg';



const StartPage = () => {
    return (
       <div className="Existing-container bg-black">
        <div className="Existing-content position-relative ">
        <div className="Profile-image">
            <img src={Proflie} alt="Profile" className="Profile"/>
            <samp className="Uplode-Image">Uplode Image</samp>
        </div>

        <h2 className="User-name text-light fw-500 mt-2">Ralph Edwards</h2>

        <div className="Welcome-message">
            <h1 className="Welcome-title text-light">Hello Ralph !</h1>
            <p className="welcome-text">
                Do you want to continue with your bigtam account?
            </p>
        </div>

        <div className="button-container position-absolute d-flex flex-column gap-2">
          <button className="continue-btn bg-white text-black fw-500">Continue</button>
          <button className="start-fresh-btn continue-btn text-light fw-500">Start As Fresh</button>
        </div>

        </div>
       </div> 
    )
}



export default StartPage;
