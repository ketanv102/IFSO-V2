import React from "react";
import {
  Call,
  Microphone2,
  VolumeHigh,
  Video,
  More,
  ArrowLeft2,
} from "iconsax-react";
import Image1 from "../Chat Video/Image/Image1.png";
import Image2 from "../Chat Video/Image/Image2.png";
import { Col, Row, Button, Container } from "react-bootstrap";

const Chat_Video = () => {
  return (
    <div className="chat-video-container">
      <Container
        
        className="p-0 text-dark d-flex flex-column"
        style={{ height: "100vh", maxWidth: "425px" }}
      >
      

        <div className="position-relative " style={{height:"100vh"}}>
        <img
          src={Image1}
          alt="Background"
          className="img-fluid position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
          <div
            className="position-absolute top-0 start-0 w-100 d-flex align-items-center p-3"
            style={{
              zIndex: 10,
              background:
                "linear-gradient(to bottom,rgb(0 0 0),rgb(84 84 84 / 0%))",
            }}
          >
            <Button
              variant=""
              className="text-light border-0 rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "rgb(12 13 14 / 76%)",
              }}
            >
              <ArrowLeft2 size="20" color="#fff" />
            </Button>
            <h5 className="mb-0 text-light ms-3 flex-grow-1 text-start">
              Ralph Edwards
            </h5>
            <More size="24" color="#fff" className="cursor-pointer" />
          </div>

          {/* Floating Video (Small) */}
          <div className="position-absolute end-0">
            <img
              src={Image2}
              alt="Mini Video"
              className="rounded img-fluid"
              style={{
                width: "110px",
                height: "164px",
                marginTop: "4.5rem",
                marginRight: "18px",
              }}
            />
          </div>

          <div
            className="position-absolute bottom-0 start-0 w-100 d-flex align-items-center p-3"
            style={{
              zIndex: 10,
              background:
                "linear-gradient(to bottom,rgba(91 86 84 / 0%),rgb(15, 15, 15))",
            }}
          >
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
              <div
                className="d-flex p-3 rounded-pill gap-3"
                style={{ backgroundColor: "rgb(12 13 14 / 76%)" }}
              >
                <button className="btn btn-dark rounded-pill">
                  <More size="24" color="white" />
                </button>
                <button className="btn btn-dark rounded-pill">
                  <Microphone2 size="24" color="white" variant="Broken" />
                </button>
                <button className="btn btn-dark rounded-pill">
                  <VolumeHigh size="24" color="white" variant="Bold" />
                </button>
                <button className="btn btn-dark rounded-pill">
                  <Video size="24" color="white" variant="Broken" />
                </button>
                <button className="btn btn-danger rounded-circle">
                  <Call
                    size="24"
                    color="white"
                    style={{ transform: "rotate(-225deg)" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Chat_Video;