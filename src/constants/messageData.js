const messagesData = [
  {
    text: "Hey, how's it going?",
    senderId: "user123",
    senderName: "John Doe",
    senderAvatar: "https://link-to-avatar.com/avatar1.jpg",
    timestamp: "2025-03-24T10:00:00Z",
    status: "read", 
    isCurrentUser: false, // current or counter party user's message
    messageType: "text"
  },
  {
    text: "I'm doing great, currently traveling to Paris. thanks for asking!",
    senderId: "user456",
    senderName: "Jane Smith",
    senderAvatar: "https://link-to-avatar.com/avatar2.jpg",
    timestamp: "2025-03-24T10:02:00Z",
    status: "sent",
    isCurrentUser: true,
    messageType: "text"
  },
  {
    text: "Check out this picture!",
    senderId: "user123",
    senderName: "John Doe",
    senderAvatar: "https://link-to-avatar.com/avatar1.jpg",
    timestamp: "2025-03-24T10:05:00Z",
    status: "delivered",
    isCurrentUser: false,
    messageType: "image",
    imageUrl: "https://picsum.photos/200/300"
  }
];

export default messagesData;