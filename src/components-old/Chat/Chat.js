import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Offcanvas,
} from "react-bootstrap";
import {
  ArrowLeft2,
  Video,
  Call,
  More,
  Paperclip,
  Send2,
  ShieldCross,
  ShieldSlash,
  Trash,
} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import '../../CSS/Chat.css'
const Chat = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/chat_more_details");
  };

  const handleVideoCall = () => {
    navigate("/chat_video");
  };

  const handleAudioCall = () => {
    navigate("/Chat_Audio");
  };
  return (
    <div className="chat-container">
      <Container
        fluid
        className="p-3 bg-white text-dark d-flex flex-column"
        style={{ height: "100vh", maxWidth: "425px" }}
      >
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            <Button
              variant="dark"
              className="text-light border-0 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "36px", height: "36px" }}
              onClick={() => navigate("/Messages")}
            >
              <ArrowLeft2
                size="20"
                color="#fff"
                style={{ width: "24px", height: "24px" }}
              />
            </Button>
          </Col>
          <Col>
            <h5 className="mb-0 text-truncate" onClick={handleProfile}>
              Ralph Edwards
            </h5>
          </Col>
          <Col xs="auto" className="d-flex gap-3 postion-relative">
            <Video
              size="24"
              className=" d-md-block"
              color="#000"
              variant="Broken"
              onClick={handleVideoCall}
            />
            <Call
              size="24"
              color="#000"
              variant="Broken"
              onClick={handleAudioCall}
            />
            <More
              size="24"
              color="#000"
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />

            {menuOpen && (
              <div className="menu-box">
                <div className="menu-triangle"></div>
                <div
                  className="menu-item"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowReport(true);
                  }}
                >
                  <ShieldCross size="20" color="#fff" variant="Broken" />
                  <span>Report</span>
                </div>
                <div
                  className="menu-item"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowBlock(true);
                  }}
                >
                  <ShieldSlash size="20" color="#fff" variant="Broken" />
                  <span>Block</span>
                </div>
                <div
                  className="menu-item text-danger"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDelete(true);
                  }}
                >
                  <Trash size="20" color="#dc3545" variant="Broken" />
                  <span>Delete Chat</span>
                </div>
              </div>
            )}
          </Col>
        </Row>

        <div
          className={`chat-content flex-grow-1 d-flex flex-column ${
            menuOpen ? "blur-background" : ""
          }`}
        >
          <div className="flex-grow-1 overflow-auto px-2">
            <div className="d-flex flex-column">
              <div
                className="message-item d-flex flex-column align-self-start p-3 mb-2 bg-secondary text-light rounded-end-4 rounded-bottom-4"
              >
                <p className="mb-0 fs-6">
                  Nunc aliquam hendrerit tincidunt cursus molestie commodo
                  semper suscipit amet. Id a nunc in rhoncus lobortis.
                </p>
              </div>

              <div
                className="message-item message-item-self d-flex flex-column align-self-end p-3 mb-2 text-light rounded-top-4 rounded-start-4"
              >
                <p className="mb-0 fs-6">Lorem ipsum dolor sit amet consectetur.</p>
              </div>

              <div
                className="message-item d-flex flex-column align-self-start p-3 mb-2 bg-secondary text-light rounded-end-4 rounded-bottom-4"
              >
                <p className="mb-0 fs-6">
                  Nunc aliquam hendrerit tincidunt cursus molestie commodo
                  semper suscipit amet. Id a nunc in rhoncus lobortis.
                </p>
              </div>

              <div
                className="message-item message-item-self d-flex flex-column align-self-end p-3 mb-2 text-light rounded-top-4 rounded-start-4"
              >
                <p className="mb-0 fs-6">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>

          <Row className="mt-3">
            <Col>
              <InputGroup
                className="bg-secondary message-input"
              >
                <InputGroup.Text className="bg-dark text-light border-0">
                  <Paperclip size="24" color="#fff" variant="Broken" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Type here..."
                  className="bg-dark border-0 px-3 text-white"
                  style={{ color: "white" }}
                />
                <InputGroup.Text className="bg-dark text-white border-0">
                  <Send2 size="24" color="#fff" variant="Broken" />
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </div>

        <Offcanvas
          show={showReport}
          onHide={() => setShowReport(false)}
          placement="bottom"
          className="report-offcanvas"
        >
          <Offcanvas.Body
            className="text-center text-white rounded-top-4"
            style={{ marginTop: "-8rem", backgroundColor: " #262626" }}
          >
            <spane
              className="bg-white d-flex  rounded-4 m-auto"
              style={{ width: "13%", height: "4px" }}
            ></spane>
            <div className="mt-3">
              <ShieldCross variant="Bold" size="40" color="#9B9B9B" />
              <h5 className="mt-2 fw-bold">Report</h5>
              <p style={{ fontSize: "14px" }}>
                Are you sure you want to report <strong>Ralph Edwards</strong>?
              </p>

              <Form.Select
                type="text"
                placeholder="Select Reason"
                color="#fff"
                className="mb-3 text-light border-0"
                style={{ backgroundColor: " #1E1E1E" }}
              >
                {/* <option>Select Reason</option> */}
                {/* <option>Spam</option>
                <option>Harassment</option>
                <option>Fake Profile</option>
                <option>Inappropriate Content</option> */}
              </Form.Select>
              <div className="mt-4 d-flex gap-2 justify-content-center">
                <Button
                  variant="outline-light"
                  className="rounded-4 border border-secondary-subtle"
                  onClick={() => setShowReport(false)}
                  style={{ width: "174px", height: "48px" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="light"
                  className="rounded-4 border-0 fw-bold"
                  style={{
                    width: "174px",
                    height: "48px",
                    backgroundColor: "#545454",
                  }}
                >
                  Report
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas
          show={showBlock}
          onHide={() => setShowBlock(false)}
          placement="bottom"
          className="report-offcanvas"
        >
          <Offcanvas.Body
            className="text-center text-white rounded-top-4"
            style={{ marginTop: "-3rem", backgroundColor: " #262626" }}
          >
             <spane className="bg-white d-flex  rounded-4 m-auto"style={{ width: "13%", height: "4px" }}></spane>
           
            <div className="mt-3">
              <ShieldSlash variant="Bold" size="40" color="#9B9B9B" />
              <h5 className="mt-2 fw-bold">Block</h5>
              <p style={{ fontSize: "14px" }}>
                Are you sure you want to block <strong>Ralph Edwards</strong>?
              </p>
              <div className="mt-4 d-flex gap-2 justify-content-center">
                <Button
                  variant="outline-light"
                  className="rounded-4 border border-secondary-subtle fw-bold"
                  onClick={() => setShowBlock(false)}
                  style={{ width: "174px", height: "48px" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="light"
                  className="rounded-4 border-0 fw-bold"
                  style={{
                    width: "174px",
                    height: "48px",
                    backgroundColor: "#fff",
                  }}
                >
                  Block
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas
          show={showDelete}
          onHide={() => setShowDelete(false)}
          placement="bottom"
          className="report-offcanvas"
        >
          <Offcanvas.Body
            className="text-center text-white rounded-top-4"
            style={{ marginTop: "-5rem", backgroundColor: " #262626" }}
          >
           <spane className="bg-white d-flex  rounded-4 m-auto"style={{ width: "13%", height: "4px" }}></spane>
            <div className="mt-3">
              <Trash variant="Bold" size="40" color="#dc3545" />
              <h5 className="mt-2 fw-bold">Delete Chat</h5>
              <p style={{ fontSize: "14px" }}>
                Are you sure you want to delete chat with
                <br /> <strong>Ralph Edwards</strong>?
              </p>
              <div className="mt-4 d-flex gap-2 justify-content-center">
                <Button
                  variant="outline-light"
                  className="rounded-4 border border-secondary-subtle fw-bold"
                  onClick={() => setShowDelete(false)}
                  style={{ width: "174px", height: "48px" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="light"
                  className="rounded-4 border-0 fw-bold"
                  style={{
                    width: "174px",
                    height: "48px",
                    backgroundColor: "#fff",
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </div>
  );
};

export default Chat;
