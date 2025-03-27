import React, { useRef, useEffect } from "react";
import "../CSS/ProfileFeed.css";
import styled from "styled-components";
import { Send2 } from "iconsax-react";
import { Grid1 } from "iconsax-react";
import { VideoPlay } from "iconsax-react";
import { Home, SearchNormal, AddSquare, HeartAdd } from "iconsax-react";

// Center the entire content in the desktop view
const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: black; /* Full black background */

  @media (min-width: 768px) { 
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.div`
  background-color: #121212;
  color: #F3F3F3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  position: relative;
  padding-right: 1.8rem;
`;

const Username = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

const ResponsiveHeader = () => {
  return (
    <Header style={{ height: "60px" }}>
      <Username>_ralphedwards</Username>
      <button className="options-btn" style={{height: "60px", marginRight: "-25px"}}>
            <span className="material-symbols-outlined" style={{height: "29px"}}>more_horiz</span>      
          </button>
    </Header>
  );
};

const images = [
  "/p1.png",
  "/p2.png",
  "/p3.png",
  "/p4.png",
  "/p5.png",
  "/p1.png",
  "/p2.png",
  "/p3.png",
  "/p4.png",
  "/p5.png",
];

const ProfileStats = () => {
  return (
    <div className="combined-profile-stats-container">
      {/* Profile Image */}
      <div className="combined-profile-image-container">
        <div className="combined-profile-image">
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>

      {/* Stats Container */}
      <div className="combined-stats-container">
        {/* Posts */}
        <div className="combined-stat-item">
          <span className="combined-stat-number">120</span>
          <span className="combined-stat-label">Posts</span>
        </div>

        {/* Divider */}
        <div className="combined-divider"></div>

        {/* Followers */}
        <div className="combined-stat-item">
          <span className="combined-stat-number">540</span>
          <span className="combined-stat-label">Followers</span>
        </div>

        {/* Divider */}
        <div className="combined-divider"></div>

        {/* Circles */}
        <div className="combined-stat-item">
          <span className="combined-stat-number">432</span>
          <span className="combined-stat-label">Circles</span>
        </div>
      </div>
    </div>
  );
};

const BrandLogosCarousel = () => {
  const brandImages = [
    "/puma.png", // Replace with your image paths
    "/puma.png",
    "/puma.png",
    "/hm.png",
    "/hm.png",
    "/hm.png",
    "/hm.png",
    "/hm.png",
    "/skechers.png",
    "/skechers.png",
    "/puma.png", // Replace with your image paths
    "/puma.png",
    "/puma.png",
    "/hm.png",
    "/hm.png",
    "/hm.png",
    "/hm.png",
    "/hm.png",
    "/skechers.png",
    "/skechers.png",
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      // Removed wheel event listener to prevent horizontal scrolling
    }
  }, []);

  return (
    <div className="combined-brand-carousel-container" style={{position: "static"}}>
      <div className="combined-logo-carousel" ref={carouselRef}>
        {brandImages.map((image, index) => (
          <div className="combined-logo-circle" key={index}>
            <img
              src={image}
              alt={`Brand ${index + 1}`}
              className="brand-image"
            />
          </div>
        ))}
        <div className="arrow-container" style={{position: "absolute", right: "0"}}>
        <div className="combined-carousel-arrow">
          <div className="combined-arrow-down"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KarennnSavanaComponent = () => {
  return (
    <div className="karennn-savana-container">
      <div className="karennn-savana-name">Karennn Savana</div>
      <div className="karennn-savana-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ✨
      </div>
    </div>
  );
};

// Message Button Component
const MessageButton = () => {
  return (
    <div className="message-button-container">
      <button className="message-button">
        <span className="message-icon">
          <Send2 size="32" color="#2F2E2E" />
        </span>
        Message
      </button>
    </div>
  );
};

const TabBar = () => {
  return (
    <div className="tab-bar-container">
      <div className="tab-item active">
        <span className="tab-icon" style={{ marginBottom: "5px" }}>
          <Grid1 size="20" color="#E2E2E2" variant="Broken" />
        </span>
        Feed
      </div>
      <div className="tab-item">
        <span className="tab-icon" style={{ marginBottom: "5px" }}>
          <VideoPlay size="20" color="#838383" variant="Broken" /> 
        </span>
        Videos
      </div>
      <div className="tab-indicator"></div>
    </div>
  );
};

// Container that holds everything inside the UI
const ContentContainer = styled.div`
 background-color: #121212;
  max-width: 400px;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto auto auto auto auto 1fr auto;
  overflow: hidden;
`;

// Box Container (Only this will scroll)
const BoxesContainer = styled.div`
  padding: 0;
  background-color: #121212;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Grid to display the images
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  width: 100%;
`;

// Individual grid items
const GridItem = styled.div`
  background-color: #121212;
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.icon}><Home size="24" color="#9B9B9B" variant="Broken"/></div>
        <div style={styles.icon}><SearchNormal size="24" color="#9B9B9B" variant="Broken"/></div>
        <div style={styles.icon}><AddSquare size="24" color="#9B9B9B" variant="Broken"/></div>
        <div style={styles.icon}><HeartAdd size="24" color="#9B9B9B" variant="Broken"/></div>
        <div style={styles.profile}>
          <img src="/profile1.png" alt="Profile" style={styles.profileImage} />
        </div>
      </div>
      <div style={{width: '390px'}}>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#363636CC', // Dark background color
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100, // Ensure it's above other content
    width: '390px',
    height: '70px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '290.16px',
    height: '24px',
    top: '779px',
    left: '49.92px',
    marginLeft: '40px',
    paddingTop: '10px',
  },
  icon: {
    fontSize: '24px', // Adjust icon size
    color: '#B3B3B3', // Light grey icon color
  },
  profile: {
    width: '30px', // Adjust profile image size
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: "-6px"
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const CombinedComponent = () => {
  return (
    <div>
      <CenteredContainer>
      <ContentContainer>
      <ResponsiveHeader />
      <ProfileStats />
      <BrandLogosCarousel />
      <KarennnSavanaComponent />
      <MessageButton />
      <TabBar />
      <BoxesContainer>
        <GridContainer>
          {images.map((src, index) => (
            <GridItem key={index}>
              <BoxImage src={src} alt={`Box ${index + 1}`} />
            </GridItem>
          ))}
        </GridContainer>
      </BoxesContainer>
      <Footer />
      </ContentContainer>
      </CenteredContainer>
    </div>
  );
};

export default CombinedComponent;
