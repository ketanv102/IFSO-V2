import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CloseCircle } from "iconsax-react";

import { ArrowLeft2 } from "iconsax-react-native";

export default function Dating_AddBio() {
  return (
    <div
      className=" vh-100 px-3 py-2"
      style={{ backgroundColor: "", color: "black " }}
    >
      <div className="d-flex align-items-center ">
        <button
          className="btn btn-link text-white bg-dark;
 rounded-pill"
        >
          <ArrowLeft2 size="16" color="white" />
        </button>
        <h5 className="mb-0 mx-2">Add Username</h5>
      </div>

      <div
        className="progress mb-1"
        style={{ height: "4px", background: "#333", marginTop: "" }}
      >
        <div
          className="progress-bar"
          style={{
            width: "100%",
            background: "linear-gradient(to right, #EA5050, #AC28A8)",
          }}
        ></div>
      </div>

      <Form.Group className="mb-1">
        <Form.Label
          className="fw-light text-start d-block"
          style={{ marginTop: "" }}
        >
          Describe yourself in 4 words
        </Form.Label>

        <Form.Control
          type="text"
          placeholder="Music |"
          className="bg-dark text-light border-0 p-3 rounded-3"
          style={{ fontSize: "16px" }}
        />
      </Form.Group>

      <div className="d-flex gap-2 " style={{ marginTop: "" }}>
        <span
          className="badge bg-secondary py-2 px-3 "
          style={{ borderRadius: "9px", height: "30px" }}
        >
          Travelling <CloseCircle size="20" color="white" />
        </span>
        <span
          className="badge bg-secondary py-2 px-3 rounded-pill"
          style={{ borderRadius: "9px", height: "30px" }}
        >
          Pet Parent <CloseCircle size="20" color="white" />
        </span>
      </div>

      <Form.Group className="mb-2" style={{ marginTop: "" }}>
        <Form.Label className="fw-light text-start d-block">
          Location
        </Form.Label>
        <div className="position-relative d-flex justify-content-between ">
          <Form.Control
            type="text"
            value="Pune, MH"
            readOnly
            className="bg-dark text-light border-0 p-3 rounded-3"
            style={{ fontSize: "16px" }}
          />
          <CloseCircle
            className="mt-2 "
            size="20"
            color="white"
            style={{ marginLeft: "" }}
          />
          <button className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-light">
            <i className="bi bi-x"></i>
          </button>
        </div>
      </Form.Group>

      <Form.Group className="mb-3" style={{ marginTop: "" }}>
        <Form.Label className="fw-light text-start d-block">Bio</Form.Label>
        <div className="position-relative d-flex justify-content-between">
          <Form.Control
            as="textarea"
            rows={3}
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ✨"
            className="bg-dark text-light border-0 p-3 rounded-3"
            style={{ fontSize: "16px", height: "4.9rem" }}
          />
          <CloseCircle
            className="mt-2 "
            size="20"
            color="white"
            style={{ marginLeft: "" }}
          />
          <button className="btn btn-link position-absolute end-0 top-0 mt-2 me-2 text-light">
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className="text-end text-black mt-1">240/500</div>
      </Form.Group>

      <div
        className="d-flex justify-content-between align-items-center mb-3 "
        style={{ marginTop: "" }}
      >
        <span className="fw-light">Allow 1st Message</span>
        <Form.Check type="switch" id="allow-message" />
      </div>

      <div className="d-flex align-items-end" style={{ height: "18rem" }}>
        <Button
          className="w-100 text-white fw-bold"
          style={{
            background: "linear-gradient(90deg, #FF4E50, #8F00FF)",
            border: "none",
            padding: "12px 0",
            fontSize: "16px",
            borderRadius: "9px",
            height: "3rem",
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
