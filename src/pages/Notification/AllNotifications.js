import React from 'react'
import { todayNotifications, yesterdayNotifications } from '../../constants/notificationData';
import NotifiToday from "../../Resourceas/Images/NotifiToday.png";
import thmb from "../../Resourceas/Images/thmb.png";
import Header from '../../components/common/Header';
import FollowRequest from '../../components/notification/FollowRequest';
import ProfilePic from "../../Resourceas/Images/Notification Oval.png";
import KebabOptions from '../../components/chat/KebabOptions';
import ReportOffcanvas from '../../components/chat/ReportOffcanvas';
import BlockOffcanvas from '../../components/chat/BlockOffcanvas';
import DeleteOffcanvas from '../../components/chat/DeleteOffcanvas';
import NotificationTabs from '../../components/notification/NotificationTabs';
import './AllNotifications.css';  

const AllNotifications = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showReport, setShowReport] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);
  const [showBlock, setShowBlock] = React.useState(false);

  const allNotifications = [...todayNotifications, ...yesterdayNotifications];

  allNotifications.sort((a, b) => (a.time < b.time ? 1 : -1));

   // Function to render notifications based on time
   const renderNotifications = (timeGroup) => {
    return allNotifications
      .filter((item) => item.time === timeGroup)
      .map((item) => (
        <div key={item.id} className="d-flex align-items-center justify-content-between gap-2 mb-3 text-white">
          <img src={NotifiToday} alt={item.user} className="rounded-circle" style={{ width: "40px", height: "40px" }} />
          <div className="d-flex justify-content-start flex-column w-100">
            <p className="mb-0 align-self-start"><strong>{item.user}</strong> {item.action}</p>
            <span className="text-light d-flex align-items-center gap-1" style={{ fontSize: "12px" }}>
              {item.icon}
              {item.category} • {item.time}
            </span>
          </div>
          <img src={thmb} alt="Thumbnail" className="rounded" style={{ width: "40px", height: "40px" }} />
        </div>
      ));
  };

  return (
    <div className="all-notifications vh-100 bg-black p-3 overflow-y-auto custom-scrollbar">

    <Header title='Notifications' showKebab setMenuOpen={setIsMenuOpen}/>

    {/* Follow Request */}
    <FollowRequest ProfilePic={ProfilePic}/>

    {/* tabs */}
    <NotificationTabs />
    
    <div className="notification-list">

     {/* Render Today's Notifications */}
     {allNotifications.some((item) => item.time === "1h") && (
        <>
          <h6 className="text-bold mt-4 mb-2 align-self-start text-white" style={{ marginRight: "19rem" }}>Today</h6>
          {renderNotifications("1h")}
        </>
      )}

      {allNotifications.some((item) => item.time === "Yesterday") && (
        <>
          <h6 className="text-bold mt-4 mb-2 align-self-start text-white" style={{ marginRight: "19rem" }}>Yesterday</h6>
          {renderNotifications("Yesterday")}
        </>
      )}

    </div>

      {/* menus */}
      <KebabOptions 
        isMenuOpen={isMenuOpen} 
        setMenuOpen={setIsMenuOpen} 
        setShowReport={setShowReport} 
        setShowDelete={setShowDelete}
        setShowBlock={setShowBlock}
      />

    <ReportOffcanvas showReport={showReport} setShowReport={setShowReport} />
    <BlockOffcanvas showBlock={showBlock} setShowBlock={setShowBlock} />
    <DeleteOffcanvas showDelete={showDelete} setShowDelete={setShowDelete}/>

    </div>
  )
}

export default AllNotifications