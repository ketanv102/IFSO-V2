  import React from "react";
  import { ArrowLeft2, ArrowRight2, Profile2User, Home2, Briefcase, Global } from "iconsax-react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { Button } from "react-bootstrap";
  import ProfilePic from "../Resourceas/Images/Notification Oval.png";
  import NotifiToday from "../Resourceas/Images/NotifiToday.png";
  import thmb from "../Resourceas/Images/thmb.png";
  import { useNavigate } from "react-router-dom";

  const todayNotifications = [
    {
      id: 1,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />, 
      action: "liked your photo.",
      time: "1h",
      image: ProfilePic,
    },
    {
      id: 2,
      user: "Wade Warren",
      category: "Friend",
      icon: <Profile2User size="16" color="gray" />,
      action: "liked your photo.",
      time: "1h",
      image: ProfilePic,
    },
    {
      id: 3,
      user: "Jenny Wilson",
      category: "Friend",
      icon: <Profile2User size="16" color="gray" />,
      action: "liked your photo.",
      time: "1h",
      image: ProfilePic,
    },
  ];

  const yesterdayNotifications = [
    {
      id: 4,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 5,
      user: "Karenne ",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 6,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 7,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 8,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 9,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 10,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 11,
      user: "Karenne",
      category: "Family",   
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 12,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 13,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },
    {
      id: 13,
      user: "Karenne",
      category: "Family",
      icon: <Home2 size="16" color="gray" />,
      action: "liked your photo.",
      time: "Yesterday",
      image: ProfilePic,
    },


  ];

  const Notifications = () => {
     const navigate = useNavigate();
    return (
      <div>
        <div className="p-3 bg-secondery container custom-scrollbar bg-black" style={{height:"100vh", overflowY: "auto"}}>
        
          <div className="d-flex align-items-center mb-3" style={{ paddingLeft: "12px", paddingTop: "7px" }}>
            <button className="Notifications-Arrow">
              <ArrowLeft2 size="40" color="black" />
            </button>
            <h4 className="fw-bold mb-0 text-white">Notifications</h4>
            <button className="border-0 bg-transparent ms-auto fs-5 fw-bold">
              •••
            </button>
          </div>

          
          <div className="d-flex align-items-center p-2 mb-3 rounded-3 bg-light shadow-sm  me-2 d-block me-md-1    ms-2 d-block ms-md-1"  onClick={() => navigate("/Notifications_FollowRequest")}>
            <img src={ProfilePic} alt="Profile" className="rounded-circle border-solid me-1" width="32" height="32" style={{ objectFit: "cover" }} />
            <div className="flex-grow-1">
              <span className="fw-bold d-block text-black" style={{ textAlign: "left" , color:"red" }}>Follow Requests</span>
              <p className="text-secondary small mb-0 bold" style={{ fontSize: "12px", textAlign: "left", fontWeight: "600" }}>
                Simon Jones + 123 requested to follow you.
              </p>
            </div>
            <ArrowRight2 size="20" color="black" />
          </div>

        
          <div className="d-flex gap-2 overflow-auto custom-scrollbar flex-nowrap">
            <Button variant="light" className="fw-semibold px-3 py-1 rounded-4 border">All</Button>
            <Button variant="dark" className="fw-semibold px-3 py-1 rounded-4 border d-flex align-items-center">
              <Profile2User size="18" className="me-1" /> Friends
            </Button>
            <Button variant="dark" className="fw-semibold px-3 py-1 rounded-4 border d-flex align-items-center">
              <Home2 size="18" className="me-1" /> Family
            </Button>
            <Button variant="dark" className="fw-semibold px-3 py-1 rounded-4 border d-flex align-items-center">
              <Briefcase size="18" className="me-1" /> Work
            </Button>
            <Button variant="dark" className="fw-semibold px-3 py-1 rounded-4 border d-flex align-items-center">
              <Global size="18" className="me-1" /> Social
            </Button>
          </div>





          
          <h6 className="text-bold mt-4 mb-2 align-self-start text-white" style={{ marginRight: "19rem" }}>Today</h6>
          {todayNotifications.map((item) => (
            <div key={item.id} className="d-flex align-items-center justify-content-between gap-2 mb-3 text-white">
              <img src={NotifiToday} alt={item.user} className="rounded-circle" style={{ width: "40px", height: "40px" }} />
              <div className="d-flex justify-content-start flex-column w-100">
                <p className="mb-0 align-self-start" ><strong>{item.user}</strong> {item.action}</p>
                <span className="text-light d-flex align-items-center gap-1 " style={{ fontSize: "12px" ,  }}>
                  {item.icon} 
                  {item.category} • {item.time}
                </span>
              </div>
              <img src={thmb} alt="Thumbnail" className="rounded" style={{ width: "40px", height: "40px" }} />
            </div>
          ))}

        
          <h6 className="text-bold mt-4 mb-2 align-self-start text-white" style={{ marginRight: "19rem" }}>Yesterday</h6>
          {yesterdayNotifications.map((item) => (
            <div key={item.id} className="d-flex align-items-center gap-2 mb-3 text-white">
              <img src={item.image} alt={item.user} className="rounded-circle" style={{ width: "40px", height: "40px" }} />
              <div className="d-flex justify-content-start flex-column w-100">
                <p className="mb-0 align-self-start" ><strong>{item.user}</strong> {item.action}</p>
                <span className="text-light d-flex align-items-center gap-1" style={{ fontSize: "12px" }}>
                  {item.icon}
                  {item.category} • {item.time}
                </span>
              </div>
              <img src={thmb} alt="Thumbnail" className="rounded" style={{ width: "40px", height: "40px" }} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Notifications;
