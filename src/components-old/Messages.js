import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Messages.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

 
import { Edit, More, SearchNormal1, ArrowLeft2 } from 'iconsax-react';

const data = [
  {
    name: "Ralph Edwards",
    message: "Lorem ipsum dolor sit amet consectetur. Viverra...",
    time: "3m ago",
    verified: true,
    profilePic: "/pic1.png",
  },
  {
    name: "Savannah Nguyen",
    message: "Lorem ipsum dolor sit amet consectetur. Sit in di...",
    time: "3m ago",
    verified: false,
    profilePic: "/pic2.png",
  },
  {
    name: "Theresa Webb",
    message: "Lorem ipsum dolor sit amet consectetur. Augue...",
    time: "3m ago",
    verified: true,
    profilePic: "/pic3.png",
  },
  {
    name: "Brooklyn Simmons",
    message: "Lorem ipsum dolor sit amet consectetur. Viverra...",
    time: "3m ago",
    verified: true,
    profilePic: "/pic4.png",
  },
  {
    name: "Floyd Miles",
    message: "Lorem ipsum dolor sit amet consectetur. Sit in di...",
    time: "3m ago",
    verified: false,
    profilePic: "/pic5.png",
  },
  {
    name: "Arlene McCoy",
    message: "Lorem ipsum dolor sit amet consectetur. Augue.....",
    time: "3m ago",
    verified: true,
    profilePic: "/pic6.png",
  },
  {
    name: "Kathryn Murphy",
    message: "Lorem ipsum dolor sit amet consectetur. Viverra...",
    time: "3m ago",
    verified: true,
    profilePic: "/pic7.png",
  },
  {
    name: "Eleanor Pena",
    message: "Lorem ipsum dolor sit amet consectetur. Sit in di...",
    time: "3m ago",
    verified: false,
    profilePic: "/pic8.png",
  },
  {
    name: "Cody Fisher",
    message: "Lorem ipsum dolor sit amet consectetur. Augue...",
    time: "3m ago",
    verified: true,
    profilePic: "/pic9.png",
  },
];

const MessageItem = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 3000px;
  height: 61px;
  display: flex;
  align-items: center;
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 5px;
  border-bottom: 0.5px solid #2c2a32;
  transition: transform 0.2s ease;
  overflow: hidden;

  & > * {
    flex: 0 0 auto;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: 3000px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProfilePictureContainer = styled.div`
  // New container!
  position: relative; // Important for absolute positioning of the badge
  margin-right: 0px; // Space between image and content
`;

const ProfilePicture = styled.img`
  width: 55px;
  height: 55px;
  min-width: 55px;
  min-height: 55px;
  border-radius: 10px;
  margin-right: 2px;
  object-fit: cover; // Ensure the image covers the circle

  @media (min-width: 3000px) {
    margin-right: 20px;
  }
`;

const SmallerProfilePicture = styled(ProfilePicture)`
  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;
  border-radius: 10px;
  margin-right: 12px;
  object-fit: cover; // Ensure the image covers the circle

  @media (min-width: 3000px) {
    margin-right: 20px;
  }
`;

const GreenBadge = styled.div`
  position: absolute;
  top: 0px; // Adjust as needed for overlap
  right: 11px; // Adjust as needed for overlap
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #44cf73;
  border: 1px solid #121212; // Optional white border
`;

const MessageContent = styled.div`
  flex-grow: 1;
  max-width: 3000px;
  margin-right: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  @media (min-width: 3000px) {
    flex-grow: 1;
    max-width: none;
  }
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  text-align: left;
  width: 100%;
  padding-bottom: 3px;
`;

const MessageText = styled.p`
  margin: 5px 0 0;
  font-size: 10px;
  color: #838383;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  width: 100%;
`;

const TimeVerifiedContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack time and verified icon vertically
  align-items: flex-end; // Align to the right
  margin-left: auto; // Push to the right edge
  height: 40px; // Set a fixed height to maintain consistent spacing
  justify-content: space-between; // Distribute space between time and verified icon
`;

const MessageTime = styled.span`
  font-size: 10px;
  color: #838383;
  text-align: right;
  width: 49px; // Or whatever fixed width you need
`;

const Verified = styled.span`
  color: #4caf50;
  display: flex; // Needed for alignment within Verified
  align-items: center; // Vertically center the icon
  justify-content: flex-end; // Align icon to right within Verified
`;

const VerifiedIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 7px;
`;

const StyledContainer = styled(Container)`
  overflow-y: hidden; /* Remove outer vertical scroll */
  padding: 15px; // Remove container padding if needed
  height: 100vh; // Make container take full viewport height
  display: flex;
  flex-direction: column;
`;

const MessagesList = styled.div`
  overflow-y: auto; /* Enable scrolling within the message list */
  flex-grow: 1; /* Allow message list to take up available space */
  height: 0; /* Initially set height to zero */
`;

const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer fluid className="search-container">
      <div className="chat-header" style={{ position: "relative", top: "2px", marginBottom: "18px", backgroundColor: "#000" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "none" }}>
          <button
            className="back-btn"
            style={{ position: "relative", top: "-4px" }}
          >
            <span
              className="back-icon material-symbols-outlined"
              style={{ marginTop: "0px", marginLeft: "0px", marginRight: "0px", marginBottom: "0px" }}
            >
             <ArrowLeft2 size="17" color="#F3F3F3"/>
            </span>
          </button>
          <h5>Chats</h5>
        </div>
        <div
          className="button-container custom-button-container" // Added custom-button-container class
          style={{
            position: "relative",
            top: "-5px",
            gap: "0px",
            marginRight: "0px",
            width: "202px",
          }}
        >
          <button className="options-btn">
            <span className="material-symbols-outlined"><Edit size="24" color="#E2E2E2" variant="Broken"/></span>
          </button>
          <button className="options-btn">
                 <span className="material-symbols-outlined"><More size="24" color="#F3F3F3"/></span>  
          </button>
        </div>
      </div>
      <InputGroup className="search-bar" style={{ marginBottom: "0px" }}>
        <InputGroup.Text className="search-icon" style={{ border: "none" }}>
        <SearchNormal1 size="20" color="#9B9B9B" variant="Broken"/>
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search user"
          className="search-input"
        />
      </InputGroup>

      <div className="message-header">
        <div className="primary-messages">Primary Messages</div>
        <div className="requests">Requests</div>
      </div>

      <MessagesList className="messages-list">
        {data.map((item, index) => (
          <MessageItem key={index}>
            <ProfilePictureContainer>
              {" "}
              {/* Wrap the image */}
              {/* Conditionally render the smaller profile picture */}
              {index === 1 || index === 4 || index === 7 ? (
                <SmallerProfilePicture src={item.profilePic} alt="Profile" />
              ) : (
                <ProfilePicture src={item.profilePic} alt="Profile" />
              )}
              {/* Conditionally render the badge */}
              {(index === 1 || index === 4 || index === 7) && <GreenBadge />}
            </ProfilePictureContainer>{" "}
            {/* Close the container */}
            <MessageContent onClick={() => navigate("/Chat")} >
              <UserName>{item.name}</UserName>
              <MessageText>{item.message}</MessageText>
            </MessageContent>
            <TimeVerifiedContainer>
              <MessageTime>{item.time}</MessageTime>
              {item.verified && (
                <Verified>
                  {/* Conditionally render different verified icons */}
                  {index === 3 || index === 6 ? ( // 4th and 7th items (0-indexed)
                    <VerifiedIcon src="/grey tick-circle.png" alt="Verified" />
                  ) : (
                    <VerifiedIcon src="/tick-circle.png" alt="Verified" />
                  )}
                </Verified>
              )}
            </TimeVerifiedContainer>
          </MessageItem>
        ))}
      </MessagesList>
    </StyledContainer>
  );
};

export default SearchBar;
