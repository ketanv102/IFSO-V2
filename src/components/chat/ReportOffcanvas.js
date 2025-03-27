import { ShieldCross } from 'iconsax-react'
import React from 'react'
import { Button, Form, Offcanvas } from 'react-bootstrap'
import './ReportOffcanvas.css'

const ReportOffcanvas = ({ showReport, setShowReport }) => {
  return (
    <Offcanvas
      show={showReport}
      onHide={() => setShowReport(false)}
      placement="bottom"
      className="report-offcanvas"
    >
      <Offcanvas.Body
        className="text-center text-white rounded-top-4"
      >
        <span
          className="bg-white d-flex  rounded-4 m-auto dragger"
        ></span>
        <div className="mt-4 mb-4">
          <ShieldCross variant="Bold" size="40" color="#9B9B9B" />
          <h5 className="mt-2 fw-bold">Report</h5>
          <p className='description'>
            Are you sure you want to report <strong>Ralph Edwards</strong>?
          </p>

          <Form.Select
            type="text"
            placeholder="Select Reason"
            color="#fff"
            className="mb-3 text-light border-0"
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
              className="rounded-4 border border-secondary-subtle cancel-btn"
              onClick={() => setShowReport(false)}
              style={{ width: "174px", height: "48px" }}
            >
              Cancel
            </Button>
            <Button
              variant="light"
              className="rounded-4 border-0 fw-bold report-btn"
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
  )
}

export default ReportOffcanvas