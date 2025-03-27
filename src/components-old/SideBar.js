import React from "react";
import { ListGroup } from "react-bootstrap";
import {Home, SearchNormal1, Message, Notification, Add, ProfileCircle,} from "iconsax-react";
import "../CSS/App.css";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <ListGroup variant="flush">
        <ListGroup.Item className="sidebar-item">
          <Home size="24" variant="Outline" className="icon" /> Home
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          <SearchNormal1 size="24" variant="Outline" className="icon" /> Search
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          <Message size="24" variant="Outline" className="icon" /> Message
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          <Notification size="24" variant="Outline" className="icon" /> Notifications
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          <Add size="24" variant="Outline" className="icon" /> Create
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-item">
          <ProfileCircle size="24" variant="Outline" className="icon" /> Profile
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
