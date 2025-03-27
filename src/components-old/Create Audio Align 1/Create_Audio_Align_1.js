import React from "react";
import { Container, Button } from "react-bootstrap";
import Rectangle4 from "../Create Audio Align 1/Images/Rectangle 4.png";
import Frame1 from "../Create Audio Align 1/Images/Frame1.png";
import Frame2 from "../Create Audio Align 1/Images/Frame2.png";
import Frame3 from "../Create Audio Align 1/Images/Frame3.png";
import Rectangle from "../Create Audio Align 1/Images/Rectangle.png";
import { PlayCircle } from "iconsax-react";
const Create_Audio_Align_1 = () => {
  return (
    <Container
      fluid
      className="p-0 text-dark d-flex flex-column"
      style={{ maxWidth: "425px" }}
    >
      <div className="position-relative vh-100">
        <img
          src={Rectangle4}
          alt="Background"
          className="img-fluid top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div
          className="position-absolute top-0 start-0 w-100 d-flex align-items-center p-3"
          style={{
            zIndex: 10,
            background:
              "linear-gradient(to bottom,rgb(0 0 0 / 83%) ,rgb(84 84 84 / 0%))",
          }}
        ></div>
        <div className="position-absolute w-100 d-flex justify-content-between p-3 top-0 mt-3">
          <span className="fs-6 fw-semibold text-white">Change Audio</span>
          <Button variant="light" size="sm" className="fw-bold rounded-3">
            Done
          </Button>
        </div>
      </div>
      <div
        className="position-absolute start-50 translate-middle-x d-flex gap-2"
        style={{ top: "67%" }}
      >
        <img src={Frame1} />
        <img src={Frame2} />
        <img src={Frame3} />
      </div>
      <div
        className="position-absolute start-50 translate-middle-x"
        style={{ top: "73%" }}
      >
        <img src={Rectangle} />
        <div
          className="d-flex justify-content-around"
          style={{ marginTop: "-5rem" }}
        >
          <PlayCircle size="32" color="#fff" variant="Bold" />
        </div>
      </div>
      <div className="position-absolute start-50 translate-middle-x text-center text-white" style={{top: "89%"}}>
        <span className="fw-bold ">NBA 2K update April 11, 2022 @NBA 2K Fan</span><br/>
        <span className="fw-normal">By John Doe</span>
      </div>
    </Container>
  );
};

export default Create_Audio_Align_1;
