import { Trash } from 'iconsax-react'
import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import './DeleteOffcanvas.css'

const DeleteOffcanvas = ({showDelete, setShowDelete}) => {
  return (
    <Offcanvas
    show={showDelete}
    onHide={() => setShowDelete(false)}
    placement="bottom"
    className="delete-offcanvas"
  >
    <Offcanvas.Body
      className="text-center text-white rounded-top-4"
    >
     <spane className="bg-white d-flex  rounded-4 m-auto dragger"></spane>
      <div className="mt-4 mb-4">
        <Trash variant="Bold" size="40" color="#dc3545" />
        <h5 className="mt-2 fw-bold">Delete Chat</h5>
        <p className='description'>
          Are you sure you want to delete chat with
          <br /> <strong>Ralph Edwards </strong>?
        </p>
        <div className="mt-4 d-flex gap-2 justify-content-center cancel-btn">
          <Button
            variant="outline-light"
            className="rounded-4 border border-secondary-subtle fw-bold"
            onClick={() => setShowDelete(false)}
          >
            Cancel
          </Button>
          <Button
            variant="light"
            className="rounded-4 border-0 fw-bold delete-btn"
            style={{
              width: "174px",
              height: "48px",
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default DeleteOffcanvas