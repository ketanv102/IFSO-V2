import React from "react";
import { Container, Button } from "react-bootstrap";
import Image1 from "../Short Posted/Images/Rectangle.png";
import { ArrowLeft2, More, Like1, Messages2, Send2 } from "iconsax-react";
import Image2 from "../Short Posted/Images/User Picture 2.png";

const Short_Posted = () => {
  return (
    <Container
      fluid
      className="p-0 text-dark d-flex flex-column"
      style={{ maxWidth: "425px" }}
    >
      <div className="position-relative vh-100">
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
              "linear-gradient(to bottom,rgb(0 0 0 / 83%) ,rgb(84 84 84 / 0%))",
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
        </div>
        <div className="position-absolute bottom-0 d-flex gap-2">
          <img src={Image2} className="mb-5 pb-4 ms-2" />
          <span className="text-white mt-1">_ralphedwards</span>
          <Button
            className="bg-white text-black ms-1 rounded-3"
            style={{ height: "fit-content" }}
          >
            Following
          </Button>
        </div>
        <div className="position-absolute bottom-0 mb-4 pb-3 ms-2">
          <span className="text-white">Peace✌️</span>
        </div>
        <div
          className="position-absolute bottom-0 start-0 w-100 d-flex align-items-center p-3"
          style={{
            zIndex: 10,
            background:
              "linear-gradient(to bottom,rgba(91 86 84 / 0%),rgb(37, 37, 37))",
          }}
        ></div>
        <div className="position-absolute bottom-0 d-flex flex-column mb-5 gap-4 end-0 pe-3">
          <Like1
            variant="Bold"
            color="#fff"
            style={{ height: "32px", width: "32px" }}
          />
          <Messages2
            variant="Broken"
            color="#fff"
            style={{ height: "32px", width: "32px" }}
          />
          <Send2
            variant="Broken"
            color="#fff"
            style={{ height: "32px", width: "32px" }}
          />
          <More color="#fff" style={{ height: "32px", width: "32px" }} />
        </div>
      </div>
    </Container>
  );
};

export default Short_Posted;
