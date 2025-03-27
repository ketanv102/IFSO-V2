import React from "react";
import { ArrowLeft2 } from "iconsax-react";
import "../CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const NewAccount_Username = () => {
   const navigate = useNavigate();
  return (
    <div
      className="vh-100 d-flex flex-column px-4 text-white bg-black" 
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
    
      <div className="d-flex align-items-center mt-1">
        <button className="User-Arrow" onClick={() => navigate("/NewAccount_AddName")}>
          <ArrowLeft2 size="35" color="black" />
        </button>
        <h4 className="fw-bold mt-2" style={{ color: "white" }}>
          Add Your Username
        </h4>
      </div>

      
      <div className="mb-4">
        <p className="text-light mt-3" style={{}}>
          Choose a unique username for your account
        </p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="w-100  bg-white text-black border-0 py-3 rounded-4 px-3 " style={{marginTop:"-1rem"}}
         
          placeholder="Enter your username  "
        />
      </div>

      
      <div className="flex-grow-1"></div>

  <button className="w-100 bg-light text-dark fw-semibold py-3 rounded-4 border-0 "   onClick={() => navigate("/NewAccount_DOB")} style={{marginBottom:"5rem"}}>
        Next
      </button>
    </div>
  );
};

export default NewAccount_Username;
