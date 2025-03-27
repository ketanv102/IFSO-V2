import React from "react";
import { Plus } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Grid1 } from "iconsax-react-native";

const DatingProfile = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen  text-black
     px-4"
    >
      <p
        className="text-center text-lg font-light ms-2"
        style={{ marginTop: "209px" }}
      >
        <Grid1 size="32" color="grey" variant="Bold" />
        <br></br>
        <span>
          {" "}
          Time to craft your ultimate dating profile— <br />
          let’s make it irresistible!{" "}
        </span>

        <span role="img" aria-label="fire">
          🔥
        </span>
      </p>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "7vh" }}
      >
        <button
          className="btn btn-primary px-4 py-2"
          style={{
            background: "linear-gradient(to right, #EA5050, #AC28A8)",
            border: "none",
            borderRadius: "9px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          <i className="bi bi-plus-lg me-2"></i> {/* Bootstrap icon for "+" */}+
          Create Profile
        </button>
      </div>
    </div>
  );
};

export default DatingProfile;
