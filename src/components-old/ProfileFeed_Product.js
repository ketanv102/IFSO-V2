import React from "react";
import "../CSS/ProfileFeed_Product.css";
import styled from "styled-components";

const images = ["/frame1.png", "/frame2.png", "/frame3.png", "/frame1.png"];

const Container = styled.div`
  background-color: #121212; // Dark background, adjust as needed
  color: #f3f3f3;
  padding: 20px;
  padding-top: 15px;
  font-family: sans-serif; // Or your preferred font
  width: 100%; // Take full width
  box-sizing: border-box; // Include padding in width calculation

  @media (min-width: 768px) {
    max-width: 600px; // Limit width on larger screens
    margin: 0 auto; // Center on larger screens
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  width: 107px;
  height: 28px;
  gap: 4px;
`;

const Logo = styled.img`
  width: 28px; // Adjust size as needed
  height: 28px; // Adjust size as needed
  border-radius: 38px; // Make it circular (if needed)
  padding: 2px;
  gap: 4px;
  background: #363636;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin: 0;
  font-color: #f3f3f3;
  width: 75px;
  height: 21px;
`;

const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #f3f3f3;
  width: 358px;
  height: 23px;
  margin: 0;
  padding-bottom: 30px;
`;

const Features = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
  width: 358px;
  height: 100px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #b1b0b0;
`;

const FeatureItem = styled.li`
  margin-bottom: 5px;

  &::marker {
    font-size: 0.7em; /* Adjust as needed */
  }
`;

// Container that holds everything inside the UI
const ContentContainer = styled.div`
  background-color: #121212;
  max-width: 375.2px;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto auto auto auto auto 1fr auto;
`;

// Box Container (Only this will scroll)
const BoxesContainer = styled.div`
  width: 375.2px;
  top: 485px;
  padding: 0;
  background-color: #121212;
  overflow-y: auto;
  flex-grow: 1;
  max-height: calc(100vh - 133px); /* Ensures Navbar is fixed */
  max-width: 375.2px; /* Matches mobile view */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Chrome/Safari */
  }
`;

// Grid to display the images
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  width: 100%;
`;

// Individual grid items
const GridItem = styled.div`
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; // Ensure equal width for all grid items
`;


const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ResponsiveHeader = () => {
  return (
    <div className="chat-header">
      <div>
        <button
          className="back-btn"
          style={{ position: "relative", top: "-4px" }}
        >
          <span className="back-icon material-symbols-outlined">
            keyboard_arrow_left
          </span>
        </button>
      </div>
    </div>
  );
};

const ImageContainer = () => {
  return (
    <div className="image-container">
      <img src="/Shoe.png" alt="Sample" className="image" />
    </div>
  );
};

const TextContainer = () => {
  return (
    <Container style={{ width: "375.2px" }}>
      <Header>
        <Logo src="logo.png" alt="Logo" />
        <Title>Skechers</Title>
      </Header>
      <Subtitle>TRES-AIR UNO - VISION-AIRY SLIP-INS</Subtitle>
      <p
        style={{
          paddingLeft: "0px",
          paddingBottom: "5px",
          margin: "0",
          width: "358px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          fontSize: "13px",
          color: "#B1B0B0",
        }}
      >
        Key Features
      </p>
      <Features>
        <FeatureItem>Integrated Slip-ins</FeatureItem>
        <FeatureItem>Visible Air Bag for Cushion and Support</FeatureItem>
        <FeatureItem>Sleek closed mesh upper</FeatureItem>
        <FeatureItem>Air-cooled Memory Foam.</FeatureItem>
      </Features>
    </Container>
  );
};

const CombinedComponent = () => {
  return (
    <div>
      <ContentContainer>
        <ResponsiveHeader />
        <ImageContainer />
        <TextContainer />
        <BoxesContainer>
          <GridContainer>
            {images.map((src, index) => (
              <GridItem key={index}>
                <BoxImage src={src} alt={`Box ${index + 1}`} />
              </GridItem>
            ))}
          </GridContainer>
        </BoxesContainer>
      </ContentContainer>
    </div>
  );
};

export default CombinedComponent;
