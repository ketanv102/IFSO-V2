import React, { useState } from "react";
import {
  ArrowLeft2,
  Add,
  Profile2User,
  House,
  Briefcase,
  Map1,
} from "iconsax-react";
import "../CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ovel from "../Resourceas/Images/Oval.png";
import { img, Button, Offcanvas } from "react-bootstrap";
import Rectangle from "../components-old/Images/Rectangle.png";
import { right } from "@popperjs/core";
import { useNavigate } from "react-router-dom";
import '../CSS/Notification_FollowRequest.css'


const notifications = [
  { id: 1, name: "Karenne", time: "1h" },
  { id: 2, name: "Karenne", time: "1h" },
  { id: 3, name: "Karenne", time: "1h" },
  { id: 4, name: "Karenne", time: "1h" },
  { id: 5, name: "Karenne", time: "1h" },
  { id: 6, name: "Karenne", time: "1h" },
  { id: 7, name: "Karenne", time: "1h" },
  { id: 8, name: "Karenne", time: "1h" },
  { id: 9, name: "Karenne", time: "1h" },
  { id: 10, name: "Karenne", time: "1h" },
  { id: 11, name: "Karenne", time: "1h" },
];

const Notifications_FollowRequest = () => {
  const [showAccept, setShowAccept] = useState(false);
  const navigate = useNavigate();

  return (

    <div className="bg-black " style={{ margin: "0 auto", height: "100vh", overflowY: "auto", scrollbarWidth: "none" }}>
      <div className="d-flex align-items-center mb-3 mt-3 d-block d-md-none px-3">
        <button className="Notifications-Arrow" onClick={() => navigate("/Notifications")}>
          <ArrowLeft2 size="35" color="black" />
        </button>
        <h6 className="fw-semibold mb-0 text-white">Notifications</h6>

        <button className="border-0 bg-transparent ms-auto  fs-5 fw-semibold text-light">
          •••
        </button>
      </div>

      <div className="notification-block">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="d-flex align-items-center justify-content-between px-3 py-2 mb-2 gap-2"
          >
            <img
              alt="avatar"
              src={Ovel}
              roundedCircle
              width="40"
              height="40"
            />

            <div className="text-start text-light">
              <p class='notification-message mb-0'>
                <span className="fw-semibold"> {notification.name}</span> requested to
                follow you.
                <span className="text-white">{notification.time}</span>
              </p>
            </div>

            <div className="d-flex w-40 gap-1">
              <Button
                variant="light"
                className="cta-button fw-semibold px-2 py-1 rounded-3"
                onClick={() => {
                  setShowAccept(true);
                }}
              >
                Accept
              </Button>
              <Button variant="dark" className="cta-button fw-semibold px-2 py-1 rounded-3"
                onClick={() => {
                  setShowAccept(true);
                }}
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Offcanvas
        show={showAccept}
        onHide={() => setShowAccept(false)}
        placement="bottom"
        className="report-offcanvas"
      >
        <Offcanvas.Body
          className="text-center text-white rounded-top-4"
          style={{ marginTop: "-9rem", backgroundColor: " #262626", scrollbarWidth: "none" }}
        >
          <spane className="bg-white d-flex  rounded-4 m-auto" style={{ width: "13%", height: "4px" }}>

          </spane>
          <div className="mt-3 position-relative">
            <p className="text-start text-secondary">
              Select a circle you want to add :
            </p>
            <div className="d-flex align-items-center text-white p-3 rounded">
              <img
                src={Rectangle}
                alt="Profile"
                className="rounded-circle border border-2 border-primary"
                width="40"
                height="40"
              />
              <div className="ms-3 text-start">
                <h6 className="-bold">Wade Warren</h6>
                <p className="mb-0 text-secondary small">
                  200 Posts | 121k Followers
                </p>
              </div>

              {/* <div className="mt-4 d-flex gap-2 justify-content-center">
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
            </div> */}
            </div>
            <hr className="mt-1" />
            <div className="d-flex flex-row gap-4 mt-5">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-pill border border-secondary-subtle d-flex justify-content-center align-items-center mb-2"
                  style={{ height: "3rem", width: "3rem" }}
                >
                  <Add
                    variant="Broken"
                    size="24"
                    color="#9B9B9B"
                    className="mt-1"
                  />
                </div>
                <label className="text-secondary small">Create</label>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-pill border border-secondary-subtle d-flex justify-content-center align-items-center mb-2"
                  style={{ height: "3rem", width: "3rem" }}
                >
                  <Profile2User
                    size="24"
                    color="#9B9B9B"
                    variant="Broken"
                    className="mt-1"
                  />
                </div>
                <label className="text-secondary small">Friends</label>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-pill border border-secondary-subtle d-flex justify-content-center align-items-center mb-2"
                  style={{ height: "3rem", width: "3rem" }}
                >
                  <House
                    size="24"
                    color="#9B9B9B"
                    variant="Broken"
                    className="mt-1"
                  />
                </div>
                <label className="text-secondary small">Family</label>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-pill border border-secondary-subtle d-flex justify-content-center align-items-center mb-2"
                  style={{ height: "3rem", width: "3rem" }}
                >
                  <Briefcase
                    size="24"
                    color="#9B9B9B"
                    variant="Broken"
                    className="mt-1"
                  />
                </div>
                <label className="text-secondary small">Work</label>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-pill border border-secondary-subtle d-flex justify-content-center align-items-center mb-2"
                  style={{ height: "3rem", width: "3rem" }}
                >
                  <Map1
                    size="24"
                    color="#9B9B9B"
                    variant="Broken"
                    className="mt-1"
                  />
                </div>
                <label className="text-secondary small">Social</label>
              </div>
            </div>

            <div className="d-flex gap-2 justify-content-center mt-4">
              <Button
                variant="outline-light"
                className="rounded-4 border border-secondary-subtle fw-bold"
                onClick={() => setShowAccept(false)}
                style={{ width: "174px", height: "48px" }}
              >
                Reject
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
                Accept
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Notifications_FollowRequest;
