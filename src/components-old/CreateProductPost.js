import React from "react";
import { Form, Button, InputGroup, Container, Dropdown } from "react-bootstrap";
import { Link2, ArrowLeft2, VideoPlay } from "iconsax-react";
import ProductPost from "../Resourceas/Images/ProductPost.png";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateProductPost = () => {
  return (
    <Container
      className=" d-flex flex-column align-items-center"
      style={{
        maxWidth: "380px",
        background: "black",
        color: "black",
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth:"none"
      }}
    >
      
      <div className="w-100 d-flex mb-3 ">
       <button className="NewAccount_Password-Arrow border-0" >
                 <ArrowLeft2 size="35" color="black" />
               </button>
      </div>

      
      <div className="position-relative mb-3" style={{ width: "100%" }}>
        <VideoPlay
          size="32"
          color="white"
          variant="Bold"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            borderRadius: "50%",
            padding: "5px",
          }}
        />
        <img
          src={ProductPost}
          alt="Preview"
          style={{
            width: "100%",
            maxWidth: "358px",
            height: "403px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

    
      <Form style={{ width: "100%", maxWidth: "358px" }}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Description"
            style={{
              backgroundColor: "white",
              border: "none",
              color: "black",
              borderRadius: "8px",
              padding: "12px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="#Tags"
            style={{
              backgroundColor: "white",
              border: "none",
              color: "black",
              borderRadius: "8px",
              padding: "12px",
            }}
          />
        </Form.Group>

        
        <Form.Group className="mb-3">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Product Link"
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
                borderRadius: "8px 0px 0px 8px",
                padding: "12px",
              }}
            />
            <InputGroup.Text
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
                borderRadius: "0px 8px 8px 0px",
                padding: "12px",
              }}
            >
              <Link2 size="18" color="black" />
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>

        
        <Dropdown className="w-100 mb-3">
          <Dropdown.Toggle
            className="w-100 text-start bg-light"
            style={{
              backgroundColor: "light",
              border: "none",
              color: "black",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            Content Type
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            <Dropdown.Item>Affiliate</Dropdown.Item>
            <Dropdown.Item>Content Sell</Dropdown.Item>
            <Dropdown.Item>Partnership</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        
        <div className="d-flex justify-content-between gap-2 mb-3">
          <Button
            className="w-100"
            style={{
              backgroundColor: "White",
              border: "none",
              color: "black",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            Affiliate
          </Button>
          <Button
            className="w-100"
            style={{
              backgroundColor: "White",
              border: "none",
              color: "black",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            Content Sell
          </Button>
          <Button
            className="w-100"
            style={{
              backgroundColor: "White",
              border: "none",
              color: "black",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            Partnership
          </Button>
        </div>

        
        <div className="d-flex gap-3">
          <Button
            className="w-50"
            style={{
              backgroundColor: "White",
              border: "none",
              color: "black",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            Cancel
          </Button>
          <Button
            className="w-50"
            disabled
            style={{
              backgroundColor: "white",
              border: "none",
              color: "#777",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default CreateProductPost;
