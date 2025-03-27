import {   ShieldCross, ShieldSlash, Trash, } from 'iconsax-react';
import React from 'react'

const KebabOptions = ({ isMenuOpen, setMenuOpen, setShowReport, setShowDelete, setShowBlock }) => {
  return (
    <>
      {isMenuOpen && (
        <div className="menu-box">
          <div className="menu-triangle"></div>
          <div
            className="menu-item"
            onClick={() => {
              setMenuOpen(false);
              setShowReport(true);
            }}
          >
            <ShieldCross size="20" color="#fff" variant="Broken" />
            <span>Report</span>
          </div>
          <div
            className="menu-item"
            onClick={() => {
              setMenuOpen(false);
              setShowBlock(true);
            }}
          >
            <ShieldSlash size="20" color="#fff" variant="Broken" />
            <span>Block</span>
          </div>
          <div
            className="menu-item text-danger"
            onClick={() => {
              setMenuOpen(false);
              setShowDelete(true);
            }}
          >
            <Trash size="20" color="#dc3545" variant="Broken" />
            <span>Delete Chat</span>
          </div>
        </div>
      )}
    </>
  )
}

export default KebabOptions