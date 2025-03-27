import React from "react";
import styled from "styled-components";

const images = [
  "/post1.png",
  "/post2.png",
  "/post3.png",
  "/post4.png",
  "/post5.png",
  "/post6.png",
  "/post7.png",
  "/post8.png",
  "/post9.png",
  "/post6.png",
  "/post4.png",
  "/post5.png",
];

const Header = () => {
  return (
    <CenteredContainer>
      <ContentContainer>
        <HeaderContainer>
          <SearchBar>
            <SearchInput type="text" placeholder="" />
            <SearchButton>
              <SearchIcon src="/search-normal.png" alt="Search" />
            </SearchButton>
          </SearchBar>
          <NavbarWrapper>
          <NavbarContainer>
            <Navbar>
              <NavItem active>Roam</NavItem>
              <NavItem>People</NavItem>
              <NavItem>Tags</NavItem>
              <NavItem>Brands</NavItem>
              <NavItem>Videos</NavItem>
            </Navbar>
            </NavbarContainer>
          </NavbarWrapper>
        </HeaderContainer>

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
    </CenteredContainer>
  );
};

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

// Container that holds everything inside the UI
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111;
  width: 100%;
  max-width: 400px; /* Ensures mobile-like UI */
  height: 100vh; /* Takes full height */
`;

// Fixed Header Section
const HeaderContainer = styled.div`
  background-color: #111;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Search Bar
const SearchBar = styled.div`
  background-color: #1e1e1e;
  border-radius: 12.84px;
  padding: 16px;
  display: flex;
  width: 358px;
  max-width: 800px;
  margin-bottom: 15px;
  height: 50px;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
  font-weight: 300;
  flex-grow: 1;
  padding-right: 10px;
  font-family: "Poppins", sans-serif;
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 50px;
  margin-top: 0px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* Enables horizontal scrolling */
  white-space: nowrap;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
   &::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Chrome/Safari */
  }
`;

// Navbar Wrapper (Ensures no horizontal scroll)
const NavbarWrapper = styled.div`
  width: 100%;
  overflow: hidden; /* Hides any scrollbar */
`;

// Navbar
const Navbar = styled.nav`
  display: flex;
  white-space: nowrap;
  justify-content: start;
  width: 100%;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none; /* Hides scrollbar in Firefox */
  -ms-overflow-style: none; /* Hides scrollbar in IE & Edge */
  display: flex;
  min-width: 600px; /* Ensure items overflow */
  gap: 8px;

  &::-webkit-scrollbar {
    display: none; /* Hides scrollbar in Chrome & Safari */
  }
`;

// Navbar Items
const NavItem = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 10px;
  font-weight: 300;
  border-radius: 5px;
  background-color: #1E1E1E;
  height: 23px;
  width: 65.2px;
  padding: 4px 12px;
  font-family: 'Poppins', sans-serif;

  ${({ active }) =>
    active &&
    `
     background-color: #121212;
     border: 1px solid #fff;
     box-shadow: 0px 0px 4px rgba(250, 244, 244, 0.94);
    `}
`;

// Box Container (Only this will scroll)
const BoxesContainer = styled.div`
  padding: 0;
  background-color: #121212;
  overflow-y: auto;
  flex-grow: 1;
  max-height: calc(100vh - 133px); /* Ensures Navbar is fixed */
  max-width: 400px; /* Matches mobile view */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Chrome/Safari */
  }
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
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  &:nth-child(1) {
    grid-row: span 2;
  }
  &:nth-child(5) {
    grid-row: span 2;
  }
  &:nth-child(7) {
    grid-row: span 2;
  }
  &:nth-child(12) {
    grid-row: span 2;
  }
`;

const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export default Header;
