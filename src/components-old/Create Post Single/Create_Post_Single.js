import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Image1 from "../Create Post Single/Image/Image1.png";
import {
  ArrowDown2,
  Layer,
  Camera,
  Home,
  SearchNormal,
  AddSquare,
  HeartAdd,
} from "iconsax-react-native";
import Post1 from "../Chat More Details/Image/Post 1.png";
import Post2 from "../Chat More Details/Image/Post 2.png";
import Post3 from "../Chat More Details/Image/Post 3.png";
import Post4 from "../Chat More Details/Image/Post 4.png";
import Post5 from "../Chat More Details/Image/Post 5.png";
import Post6 from "../Chat More Details/Image/Post 6.png";
import Post7 from "../Chat More Details/Image/Post 7.png";
import Post8 from "../Chat More Details/Image/Post 8.png";
import Post9 from "../Chat More Details/Image/Post 9.png";
import Rectangle from "../Create Post Single/Image/Rectangle.png";
import Background from "../Create Post Single/Image/Rectangle 1.png";
import Carousel from "react-bootstrap/Carousel";

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

const Create_Post_Single = () => {
  const [selectMode, setSelectMode] = useState([]);
  const [multiSelectMode, setMultiSelectMode] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);

  // Function to handle image selection
  const handleImageClick = (post) => {
    if (multiSelectMode) {
      // In multi-select mode, toggle selection
      setSelectMode((prev) =>
        prev.includes(post)
          ? prev.filter((img) => img !== post)
          : [...prev, post]
      );
    } else {
      // In single-select mode, just set as the only selected image and show carousel
      setSelectMode([]);
      setShowCarousel(false);
    }
  };

  // Function to toggle multi-select mode
   const handleToggleMode = () => {
    setMultiSelectMode((prev) => !prev);
    // If images are selected, keep the carousel open
    setShowCarousel(true);
  };



  return (
    <div
      className="container-fluid p-0 text-dark d-flex flex-column bg-black"
      // style={{ maxWidth: "425px"}}
    >
      <div
        className="d-flex flex-row justify-content-between flex-wrap align-content-around p-2"
        style={{ height: "4rem" }}
      >
        <h5 className="mb-0 text-truncate mt-2 text-start text-white fw-semibold">
          Create Post
        </h5>
        <button className="bg-white text-primary fw-bolder border border-0 rounded-3 p-2"  >
          Next
        </button>
      </div>
      <div className="position-relative">
        {showCarousel && selectMode.length > 0 ? (
          <Carousel controls={false} indicators={false}>
            {selectMode.map((post, index) => (
              <Carousel.Item key={index}>
                <img 
                  src={post} 
                  className="d-block w-100 rounded-5 p-3" 
                  alt={`Selected ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <img
            src={Image1}
            className="card-img-top"
            style={{ objectFit: "cover" }}
            alt="Single Image"
          />
        )}

        <div className="w-100 d-flex flex-row justify-content-between position-absolute bottom-0 px-2">
          <div
            className="rounded-4 mb-3"
            style={{
              left: "6px",
              backgroundColor: "#434343",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
          >
            <Button
              className="text-white bg-transparent border border-0"
              style={{ bottom: "15px" }}
            >
              Recent
            </Button>
            <ArrowDown2 size="24" color="#fff" variant="Broken" />
          </div>
          <div className="d-flex gap-3 mb-1">
            <div
              className="rounded-4"
              style={{
                marginBottom: "1rem",
                left: "6px",
                backgroundColor: multiSelectMode ? "#ffffff" : "#434343",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={handleToggleMode}
            >
              <Layer
                size="24"
                variant="Bold"
                className={`border border-0 ${
                  multiSelectMode ? "text-black" : "text-white"
                }`}
                // onClick={handleToggleMode}
              />
            </div>
            <div
              className="rounded-4"
              style={{
                marginBottom: "1rem",
                left: "6px",
                backgroundColor: "#434343",
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              <Camera
                size="24"
                variant="Broken"
                className="text-white border border-0 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex flex-row flex-wrap position-relative m-0 p-0 ">
        {Posts.map((post, index) => (
          <div
            key={index}
            className="col-4 mb-0 p-0"
            style={{ width: "25%", position: "relative" }}
          >
            <img
              src={post}
              alt={`Post ${index + 1}`}
              width="100%"
              onClick={() => handleImageClick(post)}
              style={{ 
                cursor: "pointer", 
                border: selectMode.includes(post) ? "3px solid blue" : "none",
              }}
            />
            {selectMode.includes(post) && (
              <div
                className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center"
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "rgba(0, 123, 255, 0.8)",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  top: "5px",
                  marginLeft: "5rem",
                  boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                {selectMode.indexOf(post) + 1}
              </div>
            )}
          </div>
        ))}
        <div className="w-100 d-flex flex-row justify-content-evenly position-absolute bottom-0 gap-2">
          <div
            className="rounded-pill"
            style={{
              marginBottom: "1rem",
              backgroundColor: "#434343",
              borderRadius: "5px",
              padding: "7px 0px",
            }}
          >
            <Button
              className="text-white bg-transparent border border-0"
              style={{ bottom: "15px" }}
            >
              Moments
            </Button>
          </div>
          <div
            className="rounded-pill border border-info"
            style={{
              marginBottom: "1rem",
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "7px 10px",
            }}
          >
            <Button
              className="text-white bg-transparent border border-0"
              style={{ bottom: "15px" }}
            >
              Post
            </Button>
          </div>
          <div
            className="rounded-pill"
            style={{
              marginBottom: "1rem",
              backgroundColor: "#434343",
              borderRadius: "5px",
              padding: "7px 0px",
            }}
          >
            <Button
              className="text-white bg-transparent border border-0"
              style={{ bottom: "15px" }}
            >
              Shorts
            </Button>
          </div>
          <div
            className="rounded-pill"
            style={{
              marginBottom: "1rem",
              backgroundColor: "#434343",
              borderRadius: "5px",
              padding: "7px 0px",
            }}
          >
            <Button
              className="text-white bg-transparent border border-0"
              style={{ bottom: "15px" }}
            >
              Products
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div
          className="d-flex flex-row justify-content-evenly pt-4 text-secondary bg-light.bg-gradient w-100"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            height: "84px",
            backgroundSize: "Cover",
          }}
        >
          <Home />
          <SearchNormal />
          <AddSquare variant="Bold" />
          <HeartAdd />
          <img src={Rectangle} height={24} width={24} />
        </div>
      </div>
    </div>
  );
};

export default Create_Post_Single;