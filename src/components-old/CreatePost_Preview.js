import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import {ArrowLeft2,Hashtag,Location,UserTag,Music,ShoppingBag,CloseCircle,} from "iconsax-react";
import "../CSS/App.css";
import CreatePost_Img from "../Resourceas/Images/CreatePost_Img.png";

const CreatePost_Preview = () => {
  return (
    <Container
      fluid
      className="post-creation d-flex flex-column align-items-center text-white p-2 bg-black"
      style={{height:"100vh", overflowY: "auto",scrollbarWidth:"none"  }}
    >
      <div className="d-flex align-items-center w-100">
        <button
          className="border-0 bg-secondary text-start mb-4"
          style={{ borderRadius: "1rem" }}
        >
          <ArrowLeft2 size="30" color="white" />
        </button>
      </div>

      <div className="image-preview mb-4 w-100">
        <img src={CreatePost_Img} alt="Uploaded" className="rounded-4 w-100" />
      </div>

      {/* <div className="w-100 mb-3 position-relative">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="SLEEP. BARK. REPEAT. 🐾
          #pets #indianpets"
          className="caption-input bg-secondary  border-0 rounded-4 p-3 pe-5"
          style={{ resize: "none", paddingBottom: "2.5rem",  }}
        /> */}
        <div className="w-100 d-flex flex-column position-relative bg-white text-black border-0 rounded-4 ">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="SLEEP. BARK. REPEAT. 🐾
          #pets #indianpets"
                  className="caption-input rounded-4 "
                  style={{ resize: "none" }}
                />

        <div
          className="d-flex gap-3  bottom-0 start-0 w-100 p-2"
          style={{ paddingLeft: "10px" }}
        >
          <Hashtag size="20" color="Black" />
          <Location size="20" color="Black" variant="Broken" />
          <UserTag size="20" color="Black" variant="Broken" />
          <Music size="20" color="Black" variant="Broken" />
          <ShoppingBag size="20" color="Black" variant="Broken" />
        </div>
      </div>

      <div className="w-100">
  
  <div className="d-flex align-items-center gap-2 mb-2" style={{marginTop:"1rem"}}>
    <Location size="20" color="white" variant="Broken" />
    <div
      className="bg-secondary text-white rounded-4 d-flex align-items-center px-2 py-2"
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      }}
    >
      Stockton, New Hampshire
      <CloseCircle size="18" color="white" className="ms-2" variant="Broken" />
    </div>
  </div>

  
  <div className="d-flex align-items-start gap-2 mb-2">
    <UserTag size="20" color="white" className="mt-1" variant="Broken" />
    <div className="d-flex flex-wrap gap-2">
      <div
        className="bg-secondary text-white rounded-4 d-flex align-items-center px-3 py-2"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Theresa Webb
        <CloseCircle size="18" color="white" className="ms-2" variant="Broken" />
      </div>
      <div
        className="bg-secondary text-white rounded-4 d-flex align-items-center px-3 py-2"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Devon Lane
        <CloseCircle size="18" color="white" className="ms-2" variant="Broken" />
      </div>
      <div
        className="bg-secondary text-white rounded-4 d-flex align-items-center px-3 py-2"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        +3
      </div>
    </div>
  </div>

  
  <div className="d-flex align-items-center gap-2 mb-2">
    <Music size="20" color="white" variant="Broken" />
    <div
      className="bg-secondary text-white rounded-4 d-flex align-items-center px-3 py-2 w-40"
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
        marginLeft: "-5px"
      }}
    >
      Live ARK+Début,Best Music Mix Remix...
      <CloseCircle size="20" color="white" className="ms-2" variant="Broken" />
    </div>
  </div>
</div>

      <div className="w-100 mt-4">
        {[
          "Friends Circle",
          "Family Circle",
          "Work Circle",
          "Social Circle",
        ].map((label, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center py-2"
          >
            <span>{label}</span>
            <div
              className="rounded-4 bg-secondary"
              style={{ width: "40px", height: "20px" }}
            ></div>
          </div>
        ))}
      </div>

      <div className="d-flex w-100 gap-3 mt-3">
        <Button
          variant="dark"
          className="w-50 py-2 rounded-2 border border-white"
        >
          Save As Draft
        </Button>
        <Button variant="light" className="w-50 py-2 rounded-2">
          Post
        </Button>
      </div>
    </Container>
  );
};

export default CreatePost_Preview;
