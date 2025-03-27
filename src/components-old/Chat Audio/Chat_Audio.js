import React from "react";
import { Button, Container } from "react-bootstrap";
import {
  ArrowLeft2,
  More,
  Call,
  Microphone2,
  VolumeHigh,
  Video,
} from "iconsax-react";
import Image1 from "../Chat Audio/Image/Image1.png";

const Chat_Audio = () => {
  return (
    <div className="chat-audio-container">
      <Container
        fluid
        className="p-3 text-dark d-flex flex-column bg-dark"
        style={{ height: "100vh", maxWidth: "425px" }}
      >
        <div className="position-relative vh-100">
          <div className="position-absolute top-0 start-0 w-100 d-flex align-items-center p-1">
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

          <div className="ms-5 ps-5" 
          style={{ marginTop: "21rem" }}>
            <img src={Image1} />
          </div>

          <div className="position-absolute bottom-0 start-0 w-100 d-flex align-items-center p-3">
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
              <div
                className="d-flex p-3 rounded-pill gap-3"
                style={{ backgroundColor: "rgb(23 23 23 / 76%)" }}
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

export default Chat_Audio;
