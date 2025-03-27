import { ShieldSlash } from 'iconsax-react'
import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import './BlockOffcanvas.css'

const BlockOffcanvas = ({showBlock, setShowBlock}) => {
  return (
    <Offcanvas
    show={showBlock}
    onHide={() => setShowBlock(false)}
    placement="bottom"
    className="block-offcanvas"
  >
    <Offcanvas.Body
      className="text-center text-white rounded-top-4"
    >
       <spane className="bg-white d-flex  rounded-4 m-auto dragger"></spane>
     
      <div className="mt-4 mb-4">
        <ShieldSlash variant="Bold" size="40" color="#9B9B9B" />
        <h5 className="mt-2 fw-bold">Block</h5>
        <p className='description'>
          Are you sure you want to block <strong>Ralph Edwards </strong>?
        </p>
        <div className="mt-4 d-flex gap-2 justify-content-center cancel-btn">
          <Button
            variant="outline-light"
            className="rounded-4 border border-secondary-subtle fw-bold"
            onClick={() => setShowBlock(false)}
          >
            Cancel
          </Button>
          <Button
            variant="light"
            className="rounded-4 border-0 fw-bold block-btn"
          >
            Block
          </Button>
        </div>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default BlockOffcanvas