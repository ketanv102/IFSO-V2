import React, { useState } from "react";
import Post1 from "../Chat More Details/Image/Post 1.png";
import Post2 from "../Chat More Details/Image/Post 2.png";
import Post3 from "../Chat More Details/Image/Post 3.png";
import Post4 from "../Chat More Details/Image/Post 4.png";
import Post5 from "../Chat More Details/Image/Post 5.png";
import Post6 from "../Chat More Details/Image/Post 6.png";
import Post7 from "../Chat More Details/Image/Post 7.png";
import Post8 from "../Chat More Details/Image/Post 8.png";
import Post9 from "../Chat More Details/Image/Post 9.png";
import { Container, Button } from "react-bootstrap";
import { ArrowLeft2, TickCircle } from "iconsax-react";

const Posts = [
  Post1,
  Post2,
  Post3,
  Post4,
  Post5,
  Post6,
  Post7,
  Post8,
  Post9,
  Post1,
  Post2,
  Post3,
];

const Content_Selection = () => {
  const [selectMode, setSelectMode] = useState([]);

  const handleImageClick = (post) => {
    // In multi-select mode, toggle selection
    setSelectMode((prev) =>
      prev.includes(post) ? prev.filter((img) => img !== post) : [...prev, post]
    );
  };

  return (
    <Container
      fluid
      className="p-0 bg-black text-dark d-flex flex-column"
      style={{ height: "100vh", maxWidth: "425px" }}
    >
      <div
        className="d-flex justify-content-start align-items-center ms-4"
        style={{ height: "3.5rem" }}
      >
        <Button
          variant="dark"
          className="text-dark border-0 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "36px", height: "36px" }}
        >
          <ArrowLeft2
            size="20"
            color="#fff"
            style={{ width: "24px", height: "24px" }}
          />
        </Button>
        <span className="text-white ms-3">
          Select to show on Dating Profile
        </span>
      </div>
      <div className="container-fluid d-flex flex-row flex-wrap position-relative m-0 p-0 mt-4">
        {Posts.map((post, index) => (
          <div
            key={index}
            className="col-4 mb-0 p-0 "
            style={{ width: "33%", position: "relative" }}
          >
            <img
              src={post}
              alt={`Post ${index + 1}`}
              width="100%"
              onClick={() => handleImageClick(post)}
              style={{
                cursor: "pointer",
                // border: selectMode.includes(post) ? "3px solid blue" : "none",
              }}
            />
            {selectMode.includes(post) && (
              <div
                className="position-absolute d-flex align-items-center justify-content-center selected-badge"
                style={{
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#fff",
                  borderRadius: "90%",
                  //   color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  top: "5px",
                  left: "7rem",
                  //   boxShadow: "0px 0px 5px 2px",
                }}
              >
                <TickCircle size="16" variant="Bold" color="#0b80fc" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="position-absolute bottom-0 mb-4 d-flex justify-content-center gap-3 w-100 btn-responsive">
        <Button size="lg" variant="secondary" style={{width: "173px"}} >
          Reset
        </Button>
        <Button size="lg" variant="light"style={{width: "173px"}} >
          Save
        </Button>
      </div>
    </Container>
  );
};

export default Content_Selection;
