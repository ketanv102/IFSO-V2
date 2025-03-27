import React from 'react'
import './Message.css'

const Message = ({message, menuOpen}) => {
  return (
  <div
    className={`message-item d-flex flex-column h-auto ${message.isCurrentUser ? 'message-item-self align-self-end rounded-top-4 rounded-start-4' : 'align-self-start bg-grayshade rounded-end-4 rounded-bottom-4'} p-3 text-light`}
  >
    <p className="mb-0 fs-6">
      {message.text}
    </p>
  </div>
  )
}

export default Message