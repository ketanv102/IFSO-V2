import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/CreateProduct.css";
import styled from "styled-components";
import { GetBrands } from "../features/constant/api";
const Data = [
  {
    name: "H & M",
    message: "123k Followers",
    profilePic: "/img1.png",
  },
  {
    name: "PUMA",
    message: "123k Followers",
    profilePic: "/img2.png",
  },
  {
    name: "Skechers",
    message: "123k Followers",
    profilePic: "/img3.png",
  },
  {
    name: "Levi's",
    message: "123k Followers",
    profilePic: "/img4.png",
  },
];

const MessageItem = styled.div`
  padding: 20px;
  margin-bottom: 0px;
  width: 100%;
  max-width: 600px;
  height: 58px;
  display: flex;
  align-items: center;
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 5px;
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
`;

const ProfilePictureContainer = styled.div`
  // New container!
  position: relative; // Important for absolute positioning of the badge
  margin-right: 0px; // Space between image and content
`;

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  // min-width: 60px;
  // min-height: 58px;
  border-radius: 10px;
  margin-right: 2px;
  margin-left: 6px;
  object-fit: cover; // Ensure the image covers the circle

  @media (min-width: 0px) {
    margin-right: 20px;
  }
`;

const SmallerProfilePicture = styled(ProfilePicture)`
  width: 40px;
  height: 38px;
  min-width: 40px;
  min-height: 38px;
  border-radius: 10px;
  margin-right: 12px;
  object-fit: cover; // Ensure the image covers the circle
  margin-left: 3px;

  @media (min-width: 0px) {
    margin-right: 20px;
  }
`;

const MessageContent = styled.div`
  flex-grow: 1;
  max-width: calc(100% - 100px);
  margin-right: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -10px;
  flex-shrink: 0;
  min-width: 220px; /* Ensures it does not shrink */
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SecondMessageContent = styled.div`
  flex-grow: 1;
  max-width: calc(100% - 100px);
  margin-right: 14px;
  margin-left: -20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  min-width: 220px; /* Ensures it does not shrink */
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin-left: 0px;
`;

const StyledContainer = styled(Container)`
  overflow-y: hidden; /* Remove outer vertical scroll */
  padding: 15px; // Remove container padding if needed
  height: 100vh; // Make container take full viewport height
  display: flex;
  flex-direction: column;
  min-width: 375px; /* Set to match your design */
  max-width: 400px; /* Matches desktop width */
  width: 100%; /* Prevent resizing */
  margin: 0 auto;
`;

const MessagesList = styled.div`
  overflow-y: auto; /* Enable scrolling within the message list */
  flex-grow: 1; /* Allow message list to take up available space */
  height: 0; /* Initially set height to zero */
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000000;
  min-width: 375px; /* Set to match your design */
  max-width: 600px; /* Matches desktop width */
  width: 100%; /* Prevent resizing */
`;

const SearchBar = () => {

  const [brandsList, setBrandsList] = useState();
  const [title, setTitle] = useState();
  const Title = "Mamaearth";
  const ID = 4;

  useEffect(() => {
    console.log('useEffect');
    const getBrands = async () => {
      const response = await GetBrands({ title: Title, ID: ID });
      console.log("response:", response.Data);
      setBrandsList(response.Data);
      setTitle(response.title);
    };
    getBrands();
  }, []);

  console.log("brandslist:", brandsList);
  console.log("title:", title);

  return (
    <CenteredContainer>
      <ContentContainer>
        <StyledContainer fluid className="search-container">
          <div
            className="chat-header"
            style={{ position: "relative", top: "2px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                className="back-btn"
                style={{ position: "relative", top: "-4px" }}
              >
                <span className="back-icon material-symbols-outlined">
                  keyboard_arrow_left
                </span>
              </button>
              <p style={{ marginTop: "10px" }}>Product</p>
            </div>
          </div>
          <InputGroup
            className="search-bar"
            style={{ marginTop: "-10px", marginBottom: "20px" }}
          >
            <InputGroup.Text className="search-icon" style={{ border: "none" }}>
              <img
                src="search-normal.png"
                alt="Search"
                className="search-img"
              />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search Brand"
              className="search-input"
            />
          </InputGroup>

          <MessagesList className="messages-list" style={{ backgroundColor: 'grey' }}>
            {brandsList?.map((brands, index) => (
              <MessageItem key={index}>
                <ProfilePictureContainer
                // style={
                //   brands?.Image === "/img2.png"
                //     ? { marginLeft: "-1px"}
                //     : {}
                // }
                >

                  <ProfilePicture src={brands?.Image} alt="Profile" />
                </ProfilePictureContainer>

                {/* Close the container */}
                {index === 1 ? (
                  <SecondMessageContent>
                    <UserName>{brands?.Title}</UserName>
                    <MessageText>{brands?.Description}</MessageText>
                  </SecondMessageContent>
                ) : (
                  <MessageContent>
                    <UserName>{brands?.Title}</UserName>
                    <MessageText>{brands?.Description}</MessageText>
                  </MessageContent>
                )}
              </MessageItem>
            ))}
          </MessagesList>
        </StyledContainer>
      </ContentContainer>
    </CenteredContainer>
  );
};

export default SearchBar;
