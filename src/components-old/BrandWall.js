import React from "react";
import "../CSS/BrandWall.css";
import styled from "styled-components";
import { Eye, EyeSlash } from "iconsax-react";
import { ArrowLeft2 } from "iconsax-react";

const ResponsiveHeader = () => {
  const brands = [
    {
      name: "Puma",
      logo: "puma-logo.png",
      status: <Eye size="20" color="#E2E2E2" />,
    },
    {
      name: "H&M",
      logo: "hm-logo.png",
      status: <Eye size="20" color="#E2E2E2" />,
    },
    {
      name: "Skechers",
      logo: "skechers-logo.png",
      status: <Eye size="20" color="#E2E2E2" />,
    },
    {
      name: "Levi's",
      logo: "levis-logo.png",
      status: <Eye size="20" color="#E2E2E2" />,
    },
    {
      name: "Puma",
      logo: "puma-logo.png",
      status: <EyeSlash size="20" color="#E2E2E2" />,
    },
    {
      name: "Snitch",
      logo: "snitch-logo.png",
      status: <Eye size="20" color="#E2E2E2" />,
    },
    {
      name: "Levi's",
      logo: "levis-logo.png",
      status: <EyeSlash size="20" color="#E2E2E2" />,
    },
    {
      name: "Puma",
      logo: "puma-logo.png",
      status: <Eye size="20" color="#E2E2E2" />,
    },
    {
      name: "Snitch",
      logo: "snitch-logo.png",
      status: <Eye size="20" color="#E2E2E2" />,
    },
  ];

  // Center the entire content in the desktop view
  const CenteredContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background-color: black; /* Full black background */

    @media (min-width: 3000px) {
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
    max-width: 375.2px; /* Ensures mobile-like UI */
    height: 100vh; /* Takes full height */
  `;

  return (
    <CenteredContainer>
      <ContentContainer>
        <div className="chat-header" style={{ marginBottom: "7px" }}>
          <div style={{ gap: "0px" }}>
            <button
              className="back-btn"
              style={{ position: "relative", top: "-20px" }}
            >
              <span className="back-icon material-symbols-outlined" style={{marginLeft: "8px"}}>
                <ArrowLeft2 size="17" color="#F3F3F3" />
              </span>
            </button>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                marginBottom: "2px",
                marginLeft: "-2px",
              }}
            >
              Brand Wall
            </p>
          </div>
        </div>
        <div className="container">
          {brands.map((brand, index) => (
            <div className="brand-item" key={index}>
              <div className="logo-container">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
              <div className="name-status">
                <div className="brand-name">{brand.name}</div>
                <div className="status">
                  {brand.status === "slash" ? (
                    <div className="slash"></div>
                  ) : (
                    brand.status
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </CenteredContainer>
  );
};

export default ResponsiveHeader;
