import { ArrowRight2 } from 'iconsax-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './FollowRequest.css'

const FollowRequest = ({ProfilePic}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center p-2 mb-3 rounded-3 shadow-sm d-block me-md-1 d-block ms-md-1 follow-req-btn" onClick={() => navigate("/notification-follow-request")}>
      <img src={ProfilePic} alt="Profile" className="rounded-circle border-solid me-1" width="32" height="32" style={{ objectFit: "cover" }} />
      <div className="flex-grow-1">
        <span className="fw-500 d-block text-white heading text-start">Follow Requests</span>
        <p className="text-secondary small mb-0 bold description">
          Simon Jones + 123 requested to follow you.
        </p>
      </div>
      <ArrowRight2 size="20" color="white"/>
    </div>
  )
}

export default FollowRequest