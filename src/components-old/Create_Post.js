import React from "react";
import { Container, Form , Button  } from "react-bootstrap";
import {ArrowLeft2,Hashtag,Location,UserTag,Music,ShoppingBag,} from "iconsax-react";
import "../CSS/App.css";
import CreatePost_Img from "../Resourceas/Images/CreatePost_Img.png";


const Create_Post = () => {
  return (
    <Container
      fluid
      className="post-creation d-flex flex-column align-items-center text-white p-2 bg-black" 
      style={{height:"100vh", overflowY: "auto" ,scrollbarWidth:"none" }}
    >
    
      <div className="d-flex align-items-center  w-100">
        <button className="border-0 bg-secondary text-start mb-4" style={{borderRadius:"1rem"}}>
          <ArrowLeft2 size="30" color="white" />
        </button>
      </div>

    
      <div className="image-preview mb-4 w-100">
        <img src={CreatePost_Img} alt="Uploaded" className="rounded-4 w-100" />
      </div>

      <div className="w-100 d-flex flex-column position-relative bg-white text-black border-0 rounded-4 ">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Caption..."
          className="caption-input rounded-4 "
          style={{ resize: "none" }}
        />

      
        <div className="d-flex gap-3   p-3">
          <Hashtag size="20" color="Black" />
          <Location size="20" color="Black" variant="Broken" />
          <UserTag size="20" color="Black" variant="Broken" />
          <Music size="20" color="Black" variant="Broken" />
          <ShoppingBag size="20" color="Black" variant="Broken" />
        </div>
      </div>

      

     
      <div className="w-100 mt-4">
        {["Friends Circle", "Family Circle", "Work Circle", "Social Circle"].map((label, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center py-2">
            <span>{label}</span>
            <div className="rounded-pill bg-secondary" style={{ width: "40px", height: "20px" }}></div>
          </div>
        ))}
      </div>

      <div className="d-flex w-100 gap-3 mt-3">
        <Button variant="dark" className="w-50 py-2 rounde-2 border border-white">
          Save As Draft
        </Button>       
        <Button variant="light" className="w-50 py-2 rounded-2">
          Post
        </Button>
      </div>
    </Container>
  );
};

export default Create_Post;
