import React, { useState } from 'react'
import Header from '../../components/common/Header'
import Message from '../../components/chat/Message'
import messagesData from '../../constants/messageData'
import ChatInput from '../../components/chat/ChatInput'
import KebabOptions from '../../components/chat/KebabOptions'
import ReportOffcanvas from '../../components/chat/ReportOffcanvas'
import BlockOffcanvas from '../../components/chat/BlockOffcanvas'
import DeleteOffcanvas from '../../components/chat/DeleteOffcanvas'
import './ChatRoom.css'

const ChatRoom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const isModalOpen = showReport || showBlock || showDelete;
  return (
    <div className="vh-100 bg-black p-3 chat-room-container d-flex flex-column">
      <Header title='Chat Room' showVideCallBtn showVoiceCallBtn showKebab setMenuOpen={setIsMenuOpen} />

      <div
        className={`chat-content flex-grow-1 d-flex flex-column ${(isMenuOpen || isModalOpen) ? "background-blur" : ""
          }`}
      >
        <div className="flex-grow-1 overflow-auto w-100">
          <div className="d-flex flex-column gap-3">
            {
              messagesData.map((message, index) => {
                return (
                  <Message key={index} message={message} />
                )
              })
            }

          </div>
        </div>
        
      <ChatInput />
      </div>


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

export default ChatRoom