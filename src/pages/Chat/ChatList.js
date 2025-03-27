import React from 'react'
import Header from '../../components/common/Header'
import Search from '../../components/common/Search'
import './ChatList.css'
import { Button } from 'react-bootstrap';
import data from '../../constants/chatData';
import { useNavigate } from "react-router-dom";


const ChatList = () => {

  const navigate = useNavigate();

  return (
    <div className="vh-100 bg-black p-3 chat-list-container">
      <Header title='Chats' showEditBtn showKebab/>
      <Search placeholder='Search User'/>

      {/* CHAT LIST */}
      <div className="message-header">
        <div className="primary-messages">Primary Messages</div>
        <Button className="requests bg-transparent text-white border-none p-0">Requests</Button>
      </div>

      {/* CHATS */}
      <div className=" chat-list">
        <div  className="chats">
          {data.map((item, index) => (
            <div key={index} className='chat-item'>
            <div className="profile-picture-container">
              {/* Conditionally render the smaller profile picture */}
              <img
                src={item.profilePic}
                alt="Profile"
                className={index === 1 || index === 4 || index === 7 ? 'smaller-profile-picture' : 'profile-picture'}
              />
              {/* Conditionally render the badge */}
              {(index === 1 || index === 4 || index === 7) && <div className="green-badge"></div>}
            </div>
              {/* Close the container */}
              <div className='chat-content' onClick={() => navigate("/Chat")} >
                <div className='username'>{item.name}</div>
                <div className='chat-text'>{item.message}</div>
              </div>
              <div className='time-verified-container'>
                <div className='chat-time'>{item.time}</div>
                {item.verified && (
                  <div className='verified'>
                    {/* Conditionally render different verified icons */}
                    {index === 3 || index === 6 ? ( // 4th and 7th items (0-indexed)
                      <img className='verified-icon' src="/grey tick-circle.png" alt="Verified" />
                    ) : (
                      <img className='verified-icon' src="/tick-circle.png" alt="Verified" />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatList