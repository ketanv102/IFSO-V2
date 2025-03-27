import { Briefcase, Global, Home2, Profile2User } from 'iconsax-react'
import React from 'react'
import { Button } from 'react-bootstrap'

const NotificationTabs = () => {
  return (
    <div className="d-flex gap-2 overflow-auto custom-scrollbar flex-nowrap notification-tabs">
      <Button variant="light" className="fw-semibold px-3 py-1 rounded-3 border">All</Button>
      <Button variant="dark" className="fw-semibold px-3 py-1 rounded-3 border d-flex align-items-center bg-transparent">
        <Profile2User size="18" className="me-1" /> Friends
      </Button>
      <Button variant="dark" className="fw-semibold px-3 py-1 rounded-3 border d-flex align-items-center bg-transparent">
        <Home2 size="18" className="me-1" /> Family
      </Button>
      <Button variant="dark" className="fw-semibold px-3 py-1 rounded-3 border d-flex align-items-center bg-transparent">
        <Briefcase size="18" className="me-1" /> Work
      </Button>
      <Button variant="dark" className="fw-semibold px-3 py-1 rounded-3 border d-flex align-items-center bg-transparent">
        <Global size="18" className="me-1" /> Social
      </Button>
    </div>
  )
}

export default NotificationTabs