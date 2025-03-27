import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Dating_ProfileCreated_Sucess() {
  const [show, setShow] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Button className="save-btn" onClick={() => setShow(true)}>
        Save
      </Button>

      <Modal show={show} centered className="custom-modal">
        <Modal.Body className="modal-body">
          <div className="heart-icon">💕</div>
          <h2 className="modal-title">Hurray!</h2>
          <p className="modal-text">
            Your Dating Profile Created Successfully.
          </p>
          <Button className="okay-btn" onClick={() => setShow(false)}>
            Okay
          </Button>
        </Modal.Body>
      </Modal>

      <style>{`
        .custom-modal .modal-content {
          background: #2a1a2e !important;
          border-radius: 10px;
          text-align: center;
          padding: 20px;
          color: white;
        }

        .heart-icon {
          font-size: 40px;
          color: #ff66b2;
          margin-bottom: 10px;
        }

        .modal-title {
          font-weight: bold;
          font-size: 22px;
        }

        .modal-text {
          color: #b0a8b9;
          margin-bottom: 20px;
        }

        .okay-btn {
          width: 100%;
          background: linear-gradient(to right, #ff5a5f, #d63384);
          border: none;
          padding: 12px;
          font-size: 18px;
          border-radius: 30px;
          color: white;
        }

        .okay-btn:hover {
          opacity: 0.9;
        }

        .save-btn {
          background: linear-gradient(to right, #ff5a5f, #d63384);
          border: none;
          padding: 10px 20px;
          font-size: 18px;
          border-radius: 30px;
          color: white;
        }

        .save-btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
