import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GetProfileByID } from "../../features/constant/api";
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  ArrowLeft2,
  Profile,
  SearchNormal,
  Notification,
  More,
  ShieldCross,
  ShieldSlash,
  Trash,
} from "iconsax-react";
import Image from "../Chat More Details/Image/Ellipse 2.png";
import Post1 from "../Chat More Details/Image/Post 1.png";
import Post2 from "../Chat More Details/Image/Post 2.png";
import Post3 from "../Chat More Details/Image/Post 3.png";
import Post4 from "../Chat More Details/Image/Post 4.png";
import Post5 from "../Chat More Details/Image/Post 5.png";
import Post6 from "../Chat More Details/Image/Post 6.png";
import Post7 from "../Chat More Details/Image/Post 7.png";
import Post8 from "../Chat More Details/Image/Post 8.png";
import Post9 from "../Chat More Details/Image/Post 9.png";
import Video1 from "../Chat More Details/Video/Video1.mp4";
import Video2 from "../Chat More Details/Video/Video2.mp4";

const Media = [
  { type: "image", src: Post1 },
  { type: "video", src: Video1 },
  { type: "image", src: Post2 },
  { type: "video", src: Video2 },
  // Post3,
  // Post4,
  // Post5,
  // Post6,
  // Post7,
  // Post8,
  // Post9,
  // Post1,
  // Post2,
  // Post3,
  // Post4,
  // Post5,
  // Post6,
  // Post7,
  // Post8,
  // Post9,

];

const Chat_More_Details = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [content, setContent] = useState();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJJRCI6NjMzLCJVc2VyVVVJRCI6IjdhNjQxYmQwLWYyODMtMTFlZi1hMGQ3LWE2M2NhYmI0M2I2MSIsIlJvbGVJRCI6IkVtcGxveWVyIiwicmVnaXN0cmF0aW9uU3RlcCI6MH0sImlhdCI6MTc0MDczOTQ4MCwiZXhwIjoxNzQwOTk4NjgwfQ.76sIA1_NiIuFFBOylFoaHr2fRrJaskw1XtN6v5qBlpQ";
  const ID = 265;
  let navigate = useNavigate()

  useEffect(() => {
    console.log("useEffect");
    const getByID = async () => {
      const response = await GetProfileByID({ authToken: token, ID: ID });
      console.log("response:", response.data);
      setUserInfo(response.data);
      setContent(response.content);
    };
    getByID();
  }, []);

  console.log("userInfo:", userInfo);
  console.log("content:", content);

  // const handleProfile = async (e) => {
  //   console.log("handleProfile")
  //   e.preventDefault();
  //   const response = await GetProfileByID({authToken: ''})
  //   console.log(response);
  // }

  return (
    <div className="chat-detail-container">
      <Container
        fluid
        className="p-3 bg-black text-dark d-flex flex-column"
      // style={{ maxWidth: "425px" }}
      // style={{ height: "100%", width: "100%" }}
      >
        {/* <div class="container"> */}
        <Row className="p-2 align-items-center mb-3">
          <Col xs="auto">
            <Button
              onClick={() => navigate("/RoamSearch")}
              variant="light"
              className="text-dark border-0 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "36px", height: "36px" }}
            >
              <ArrowLeft2
                size="20"
                color="#000"
                style={{ width: "24px", height: "24px" }}
              />
            </Button>
          </Col>
        </Row>
        {/* </div> */}
        <div className="d-flex flex-column align-items-center chat-more gap-3">
          <img
            src={userInfo?.Image}
            className="rounded-circle"
            style={{ width: "4rem", height: "4rem", objectFit: "cover" }}
            alt="User"
          />
          <h5 className="mb-0 text-truncate text-white">
            {userInfo?.FullName}
          </h5>
        </div>

        <Col
          xs="auto"
          className="d-flex justify-content-between align-self-center mt-4 text-white"
          style={{ width: "240px" }}
        >
          <div className="d-flex flex-column align-items-center ">
            <Profile size="24" className=" d-md-block" color="#fff" />
            <label className="mt-1" style={{ fontSize: "15px" }}>
              Profile
            </label>
          </div>
          <div className="d-flex flex-column align-items-center">
            <SearchNormal size="24" color="#fff" />
            <label className="mt-1" style={{ fontSize: "15px" }}>
              Search
            </label>
          </div>

          <div className="d-flex flex-column align-items-center">
            <Notification size="24" color="#fff" className="cursor-pointer" />
            <label className="mt-1" style={{ fontSize: "15px" }}>
              Mute
            </label>
          </div>

          <div className="d-flex flex-column align-items-center">
            <More
              size="24"
              color="#fff"
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="menu-box1">
                <div className="menu-triangle1"></div>
                <div className="menu-item1">
                  <ShieldCross size="20" color="#fff" variant="Broken" />
                  <span>Report</span>
                </div>
                <div className="menu-item1">
                  <ShieldSlash size="20" color="#fff" variant="Broken" />
                  <span>Block</span>
                </div>
                <div className="menu-item1 text-danger">
                  <Trash size="20" color="#dc3545" variant="Broken" />
                  <span>Delete Chat</span>
                </div>
              </div>
            )}
            <label className="mt-1" style={{ fontSize: "15px" }}>
              More
            </label>
          </div>
        </Col>
        <div
          className="pt-0 pb-0 mt-2"
          style={{ marginLeft: "-4px", marginRight: "-4px" }}
        >
          <div class="row">
            {Media.map((media, index) => (
              <div key={index} class="col-4 mb-0 p-0">
                {media.type === "image" ? (
                  <img
                    src={media.src}
                    alt={`image ${index + 1}`}
                    // style={{ objectFit: "cover" }}
                    width="100%"
                  />
                ) : (
                  <video width="100%" controls>
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Chat_More_Details;
