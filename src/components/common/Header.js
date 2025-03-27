import { ChevronLeft } from 'lucide-react'
import React from 'react'
import './Header.css'
import { Call, Edit, More, Video } from 'iconsax-react'

const Header = ({title, showVideCallBtn, showVoiceCallBtn, showEditBtn, showKebab, setMenuOpen }) => {
  return (
    <div className="header-wrapper">
      <div className="header justify-content-between p-3">
        <div className="d-flex align-items-center header-left">
          <button className="back-button">
            <ChevronLeft />
          </button>
          <div>
            <h3 className="h1-name text-light fs-6 fw-normal mb-0">{title}</h3>
          </div>
        </div>
        <div className="header-right options-btn d-flex align-items-center gap-3">
          {showVideCallBtn && (
            <div className="video-call-btn">
            <button className="options-btn">
                <span className="material-symbols-outlined"><Video size="24" color="#E2E2E2" variant="Broken"/></span>
              </button>
            </div>
          )}
          {showVoiceCallBtn && (
            <div className="voice-call-btn">
              <button className="options-btn">
                <span className="material-symbols-outlined"><Call size="24" color="#E2E2E2" variant="Broken"/></span>
              </button>
            </div>
          )}
          {showEditBtn && (
            <div className="edit-btn">
              <button className="options-btn">
                <span className="material-symbols-outlined"><Edit size="24" color="#E2E2E2" variant="Broken"/></span>
              </button>
            </div>
          )}
          {showKebab && (
            <div className="kebab-btn">
            <button className="options-btn" onClick={() => setMenuOpen((prev) => !prev)}>
              <span className="material-symbols-outlined"><More size="24" color="#F3F3F3"/></span>
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header