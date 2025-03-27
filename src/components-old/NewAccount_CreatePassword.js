import React from "react";
import { ArrowLeft2, EyeSlash } from "iconsax-react";
import { InputGroup, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/App.css";
import { useNavigate } from "react-router-dom";


const NewAccount_CreatePassword = () => {
  const navigate = useNavigate();
  return (
    <div
      className="vh-100 d-flex flex-column px-3 text-white  bg-black "
      style={{ maxWidth: "400px", margin: " auto" }}
    >
     
      <div className="d-flex align-items-center mt-1">
        <button className="NewAccount_Password-Arrow border-0" onClick={() => navigate("/NewAccount_DOB")}>
          <ArrowLeft2 size="35" color="black" />
        </button>
        <h4 className="fw-bold mt-2 " style={{ color: "white" }}>
          Create Password
        </h4>
      </div>

      
      <div className="mb-2">
        <p className="text-white mt-3">
          You need to create a password to keep your
        </p>
        <p className="text-white" style={{ marginTop: "-1rem", }}>
          secure.
        </p>
      </div>

    
      <div className="mb-3">
        <InputGroup className="rounded-4">
          <Form.Control
            type="password"
            className="bg-white text-bold border-0 py-3 px-3 rounded-start-4"
            placeholder="Password"
           
          />
          <InputGroup.Text className="bg-white border-0 text-white px-3 rounded-end-4">
          <EyeSlash size="30" color="#332D2D"/>
          </InputGroup.Text>
        </InputGroup>
      </div>

      
      <div className="mb-4">
        <InputGroup className="rounded-4">
          <Form.Control
            type="password"
            className="bg-white text-black border-0 py-3 px-3 rounded-start-4"
            placeholder="Confirm Password"
            style={{ outline: "none" }}
            
          />
          <InputGroup.Text className="bg-white border-0 text-black px-3 rounded-end-4">
          <EyeSlash size="30" color="#332D2D"/>
          </InputGroup.Text>
        </InputGroup>
      </div>


      <div className="flex-grow-1"></div>

    
      <div className="d-flex justify-content-between  gap-2" style={{marginBottom:"6rem"}}>
        <button className="w-50 bg-secondary text-white fw-semibold py-3 rounded-4 border-0" style={{ height:"3rem"}}>
          Skip
        </button>
        <button className="w-50 bg-white text-black fw-semibold py-3 rounded-4 border-solid"  style={{ height:"3rem"}}>
          Next
        </button>
      </div>
    </div>
    
  );
};

export default NewAccount_CreatePassword;
