import React, { useState } from "react";

const Dating_View = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#222",
        color: "white",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          fontSize: "2em",
          fontWeight: "bold",
        }}
      ></div>

      <div
        style={{
          width: "80%",
          maxWidth: "400px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div
            onClick={toggleSwitch}
            style={{
              width: "60px",
              height: "30px",
              borderRadius: "15px",
              backgroundColor: isToggled ? "#4CAF50" : "#888",
              position: "relative",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
                top: "3px",
                left: isToggled ? "32px" : "3px",
                transition: "left 0.3s",
              }}
            />
          </div>
        </div>

        <p style={{ fontSize: "1.2em" }}>
          {isToggled
            ? "Dating feature is ON! ❤️"
            : "Flip the toggle to turn on the dating feature—"}
          <br />
          totally private, just for you!{" "}
          <span role="img" aria-label="lock">
            🔒
          </span>
        </p>
      </div>
    </div>
  );
};

export default Dating_View;
