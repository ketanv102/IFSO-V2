import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ArrowDown2,
  HambergerMenu,
  Profile2User,
  House,
  Briefcase,
  Map1,
  Grid1,
  VideoPlay,
  Home,
  SearchNormal,
  AddSquare,
  HeartAdd,
} from "iconsax-react";

import Profile1 from "../Profile Feed(Multiple Account)/Images/Profile1.png";
import Image1 from "../Profile Feed(Multiple Account)/Images/image 1.png";
import Image2 from "../Profile Feed(Multiple Account)/Images/image2.png";
import Image3 from "../Profile Feed(Multiple Account)/Images/image3.png";
import Image4 from "../Profile Feed(Multiple Account)/Images/image4.png";
import Post1 from "../Profile Feed(Multiple Account)/Posts/Post 1.png";
import Post2 from "../Profile Feed(Multiple Account)/Posts/Post 2.png";
import Post3 from "../Profile Feed(Multiple Account)/Posts/Post 3.png";
import Post4 from "../Profile Feed(Multiple Account)/Posts/Post 4.png";
import Post5 from "../Profile Feed(Multiple Account)/Posts/Post 5.png";
import Post6 from "../Profile Feed(Multiple Account)/Posts/Post 6.png";
import Post7 from "../Profile Feed(Multiple Account)/Posts/Post 7.png";
import Post8 from "../Profile Feed(Multiple Account)/Posts/Post 8.png";
import Post9 from "../Profile Feed(Multiple Account)/Posts/Post 9.png";
import Rectangle from "../Profile Feed(Multiple Account)/Images/Rectangle.png";

const Image = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image1,
  Image2,
  Image3,
  Image4,
  Image1,
  Image2,
  Image3,
  Image4,
  Image1,
  Image2,
  Image3,
  Image4,
];

const Post = [
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
  Post4,
  Post5,
  Post6,
  Post7,
  Post8,
  Post9,
];

const Profile_Feed_Multiple_Account = () => {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <Container
      fluid
      className="bg-black text-white d-flex flex-column p-3 p-md-4"
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold">_ralphedwards</span>
          <ArrowDown2 variant="Broken" />
        </div>
        <HambergerMenu variant="Broken" />
      </div>

      <div className="d-flex justify-content-center align-items-center bg-black my-4">
        <div className="glowing-border w-100" style={{ height: "2px" }}></div>
      </div>

      <Row className="mt-1 align-items-center">
        <Col xs={4} md={3} lg={2}>
          <div
            className="border border-secondary rounded-circle p-1 d-flex align-items-center justify-content-center"
            style={{ aspectRatio: "1/1", maxWidth: "120px", margin: "0 auto" }}
          >
            <img
              src={Profile1}
              className="rounded-circle w-100 h-100"
              style={{ objectFit: "cover" }}
              alt="Profile"
            />
          </div>
        </Col>
        <Col xs={8} md={9} lg={10}>
          <div className="d-flex justify-content-between align-items-center rounded p-2">
            <div className="text-center">
              <h5 className="mb-0 fw-bold">120</h5>
              <small>Posts</small>
            </div>
            <div className="border-end border-secondary h-75 d-none d-sm-block"></div>
            <div className="text-center">
              <h5 className="mb-0 fw-bold">540</h5>
              <small>Followers</small>
            </div>
            <div className="border-end border-secondary h-75 d-none d-sm-block"></div>
            <div className="text-center">
              <h5 className="mb-0 fw-bold">4</h5>
              <small>Circles</small>
            </div>
          </div>
        </Col>
      </Row>

      <div className="position-relative mt-3">
        <div className="d-flex flex-row overflow-auto gap-3 pb-2">
          {Image.map((img, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-center border border-secondary rounded-circle"
              style={{
                width: "55px",
                height: "55px",
                flex: "0 0 auto",
                padding: "5px",
              
              }}
            >
              <img
                src={img}
                alt={`Story ${index + 1}`}
                className="rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "contain" ,}}
              />
            </div>
          ))}
        </div>
        <div className="position-absolute end-0 top-0 bottom-0 d-flex align-items-center">
          <div
            className="bg-secondary d-flex justify-content-center align-items-center rounded-start-4"
            style={{ width: "40px", height: "55px" }}
          >
            <ArrowDown2 size="24" className="text-white" />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h2 className="fs-4 fs-md-2">Karennn Savana</h2>
        <span className="fs-6">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <br className="d-block d-md-none" />
          adipiscing elit. ✨
        </span>
      </div>

      <Row className="mt-4 gy-2">
        <Col xs={3} className="text-center">
          <div className="d-flex flex-column align-items-center">
            <div
              className="d-flex justify-content-center align-items-center border border-secondary rounded-circle bg-white mb-2"
              style={{
                width: "55px",
                height: "55px",
                maxWidth: "100%",
                aspectRatio: "1/1",
              }}
            >
              <Profile2User size="30" color="#000" variant="Broken" />
            </div>
            <label className="text-white small">Friends</label>
          </div>
        </Col>
        <Col xs={3} className="text-center">
          <div className="d-flex flex-column align-items-center">
            <div
              className="d-flex justify-content-center align-items-center border border-secondary rounded-circle mb-2"
              style={{
                width: "55px",
                height: "55px",
                maxWidth: "100%",
                aspectRatio: "1/1",
              }}
            >
              <House size="30" color="#9B9B9B" />
            </div>
            <label className="text-secondary small">Family</label>
          </div>
        </Col>
        <Col xs={3} className="text-center">
          <div className="d-flex flex-column align-items-center">
            <div
              className="d-flex justify-content-center align-items-center border border-secondary rounded-circle mb-2"
              style={{
                width: "55px",
                height: "55px",
                maxWidth: "100%",
                aspectRatio: "1/1",
              }}
            >
              <Briefcase size="30" color="#9B9B9B" variant="Broken" />
            </div>
            <label className="text-secondary small">Work</label>
          </div>
        </Col>
        <Col xs={3} className="text-center">
          <div className="d-flex flex-column align-items-center">
            <div
              className="d-flex justify-content-center align-items-center border border-secondary rounded-circle mb-2"
              style={{
                width: "55px",
                height: "55px",
                maxWidth: "100%",
                aspectRatio: "1/1",
              }}
            >
              <Map1 size="30" color="#9B9B9B" />
            </div>
            <label className="text-secondary small">Social</label>
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-around mt-4 gap-5">
        <div className="d-flex align-items-center gap-2">
          <Grid1 size="28" color="#E2E2E2" variant="Broken" />
          <label className="fs-6 fs-md-5">Feed</label>
        </div>
        <div className="d-flex align-items-center gap-2">
          <VideoPlay size="28" color="#9B9B9B" />
          <label className="fs-6 fs-md-5">Videos</label>
        </div>
      </div>

      <Row className="g-1 mt-3 p-0">
        {Post.map((post, index) => (
          <Col
            key={index}
            xs={4}
            sm={4}
            md={3}
            lg={2}
            className="position-relative"
          >
            <img
              src={post}
              alt={`Post ${index + 1}`}
              className="w-100"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
            
              <VideoPlay
                className="position-absolute top-0 end-0 m-1"
                size="20"
                color="white"
                variant="Bold"
              />
            
          </Col>
        ))}
      </Row>


      <div
        className="position-fixed bottom-0 start-0 d-flex justify-content-around align-items-center w-100 px-3 py-4"
        style={{
          height: "84px",
          backgroundColor: "#363636CC",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          // clipPath: polygon(6% 0% 9% 21% 18% 21% 21% 0% 100% 0% 100% 100% 0% 100% 0 0)"
          
        }}
      >
       
      <div
        className={`icon-container ${activeTab === 'home' ? 'curved-tab' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <Home color={activeTab === 'home' ? "#E2E2E2" : "#9B9B9B"} size="28" />
      </div>
      <div
        className={`icon-container ${activeTab === 'search' ? 'curved-tab' : ''}`}
        onClick={() => setActiveTab('search')}
      >
        <SearchNormal color={activeTab === 'search' ? "#E2E2E2" : "#9B9B9B"} size="28" />
      </div>
      <div
        className={`icon-container ${activeTab === 'add' ? 'curved-tab' : ''}`}
        onClick={() => setActiveTab('add')}
      >
        <AddSquare color={activeTab === 'add' ? "#E2E2E2" : "#9B9B9B"} size="28" />
      </div>
      <div
        className={`icon-container ${activeTab === 'heart' ? 'curved-tab' : ''}`}
        onClick={() => setActiveTab('heart')}
      >
        <HeartAdd color={activeTab === 'heart' ? "#E2E2E2" : "#9B9B9B"} size="28" />
      </div>
      <div
        className={`icon-container ${activeTab === 'profile' ? 'curved-tab' : ''}`}
        // onClick={() => setActiveTab('profile')}
      >
        <img
          src={Rectangle}
          alt="User"
          style={{
            height: "1.8rem",
            borderRadius: "50%",
            border: "2px solid white",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
    </Container>
  );
};

export default Profile_Feed_Multiple_Account;

