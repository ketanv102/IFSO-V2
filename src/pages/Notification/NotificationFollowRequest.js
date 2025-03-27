import React from 'react';
import notifications from '../../constants/notificationFollowReqData';
import { Button } from 'react-bootstrap';
import Ovel from "../../Resourceas/Images/Oval.png";
import Header from '../../components/common/Header';
import './NotificationFollowRequest.css';

const NotificationFollowRequest = () => {
  const [showAccept, setShowAccept] = React.useState(false);
  return (
    <div className="vh-100 bg-black overflow-y-auto notification-follow-request">
      <Header title='Notifications' showKebab />

      <div className="notification-block mt-3">

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
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default NotificationFollowRequest