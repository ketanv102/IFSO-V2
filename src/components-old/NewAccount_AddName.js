import React from "react";
import { ArrowLeft2, User } from "iconsax-react";
import { InputGroup, Form } from "react-bootstrap";
import "../CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



const NewAccount_AddName = () => {
   const navigate = useNavigate();
  
  return (
    <div
      className="vh-100 d-flex flex-column px-4 text-white bg-black" 
      style={{ maxWidth: "400px", margin: "0 auto" }}
      
    >
      
      <div className="d-flex align-items-center mt-1">
        <button className="Arrow" onClick={() => navigate("/New_Account")}>
          <ArrowLeft2 size="35" color="black" />
        </button>
        <h4 className="fw-bold mt-2 " style={{ color: "white" }}>
          Add Your Name
        </h4>
      </div>

      
      <div className="mb-4">
        <p className="text-white  mt-3" style={{ marginRight: "45px" }}>
          Add your name so people can find you
        </p>
      </div>

      <div className="mb-4" style={{ marginTop: "-1rem" }}>
        <InputGroup className="bg-white rounded-5 border-none">
          <InputGroup.Text
            className="bg-white border-0 text-white"
            style={{ borderRadius: "1rem", textDecoration: "none" }}
          >
            <User size="20" color="black" />
          </InputGroup.Text>
          <Form.Control
            type="text"
            className="bg-white text-white border-0 py-3"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
            placeholder="Enter your name "
          />
        </InputGroup>
      </div>

      {/* Spacer to push the button to the bottom */}
      <div className="flex-grow-1"></div>

      {/* Next Button */}
      <button className="w-100 bg-light text-Dark fw-semibold py-3 rounded-4 border-0 mb-4" onClick={() => navigate("/NewAccount_UserName")} style={{marginBottom:"6rem"}}>
        Next
      </button>
    </div>
  );
};

export default NewAccount_AddName;
