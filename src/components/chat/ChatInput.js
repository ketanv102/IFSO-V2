import React from 'react'
import {
  Row,
  Col,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  Paperclip,
  Send2,
} from "iconsax-react";
import './ChatInput.css'

const ChatInput = () => {
  return (
    <Row className="mt-3">
    <Col>
      <InputGroup
        className="message-input rounded-end-3"
      >
        <InputGroup.Text className="bg-dark text-light border-0 rounded-start-5">
          <Paperclip size="24" color="#fff" variant="Broken" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Type here..."
          className="bg-dark border-0 px-3 text-white"
          style={{ color: "white" }}
        />
        <InputGroup.Text className="bg-dark text-white border-0 rounded-end-5">
          <Send2 size="24" color="#fff" variant="Broken" />
        </InputGroup.Text>
      </InputGroup>
    </Col>
  </Row>
  )
}

export default ChatInput