import React from "react";
import { ArrowLeft2, Calendar } from "iconsax-react";
import { InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/App.css";
import { useNavigate } from "react-router-dom";
const NewAccount_DOB = () => {
  const navigate = useNavigate();
  
  return (
    <div
      className="vh-100 d-flex flex-column px-3 text-white bg-black"
      style={{ maxWidth: "400px", margin: " auto" }}
    >
      
      <div className="d-flex align-items-center mt-1">
        <button className="NewAccount_DOB-Arrow  border-0" onClick={() => navigate("/NewAccount_Username")}>
          <ArrowLeft2 size="35" color="black" />
        </button>
        <h4 className="fw-bold mt-2 " style={{ color: "white" }}>
          Add Date of Birth
        </h4>
      </div>

      
      <div className="mb-4">
        <p className="text-white mt-3" >
          This won’t be a part of your profile
        </p>
      </div>

      
      <div className="mb-5" style={{marginTop:"-1rem"}}>
        <InputGroup className="rounded-4">
          <Form.Control
            type="text"
            className="bg-white text-black border-0 py-3 px-3 rounded-start-4"
            placeholder="mm/dd/yyyy"
            style={{ outline: "none" }}
           
          />
          <InputGroup.Text className="bg-white border-0 text-black px-3 rounded-end-4">
            <Calendar size="20" color="black" />
          </InputGroup.Text>
        </InputGroup>
      </div>

      
      <div className="flex-grow-1"></div>

      
      <div className="d-flex justify-content-between  gap-2 bg-black" style={{marginBottom:"6rem"}}>
        <button className="w-50  bg-secondary text-black fw-semibold  rounded-4 border-0"  style={{ height:"3rem"}} >
          Skip
        </button>
        <button className="w-50 bg-white text-black fw-semibold  rounded-4 border-solid"  style={{ height:"3rem"}} onClick={() => navigate("/NewAccount_CreatePassword")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NewAccount_DOB;
