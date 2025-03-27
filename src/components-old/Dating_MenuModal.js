import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaUser, FaLock, FaTrash, FaEllipsisV } from "react-icons/fa";

const MenuModal = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="position-relative">
      <button
        className="btn btn-dark rounded-circle"
        onClick={() => setShow(true)}
      >
        <FaEllipsisV />
      </button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="bg-dark text-white rounded-4 p-4">
          <h5 className="fw-bold mb-3">Menu</h5>

          <div className="d-flex align-items-center gap-3 p-2 rounded hover-effect">
            <FaUser />
            <span>Profile</span>
          </div>

          <div className="d-flex align-items-center gap-3 p-2 rounded hover-effect">
            <FaLock />
            <span>Manage Privacy</span>
          </div>

          <div className="d-flex align-items-center gap-3 p-2 rounded text-danger hover-effect">
            <FaTrash />
            <span>Delete Dating Profile</span>
          </div>
        </Modal.Body>
      </Modal>

      <style>
        {`
          .hover-effect:hover {
            background-color: rgba(255, 255, 255, 0.1);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default MenuModal;
