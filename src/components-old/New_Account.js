import React from 'react';
import { Facebook } from 'iconsax-react';
import { useNavigate } from "react-router-dom";

const New_Account = () => {
  const navigate = useNavigate();


  return (
    <div className="d-flex flex-column vh-100 px-3 bg-black" style={{ maxWidth: "400px", margin: "0 auto" }}>
      {/* Top Section - Text */}
      <div className="text-center  " style={{marginTop: "80px" }}>
        <h1 className="text-white fs-4 bold">Hello!</h1>
        <p className="text-white fs-6">
          Do you want to login with your Facebook account?
        </p>
      </div>

      {/* Spacer to push buttons lower */}
      <div className="flex-grow-1"></div>

      {/* Bottom Section - Buttons */}
      <div className="d-flex flex-column gap-3 mb-5">
        <button className="w-100  bg-white text-dark py-2 px-3 rounded-3 d-flex align-items-center justify-content-center gap-2 border-0">
          <Facebook size="24" color="blue" variant="Bold" />
          <span >Login With Facebook</span>
        </button>

        <button
      className="w-100 bg-white text-black  py-2 px-3 rounded-3 border-0 text-bold"
      onClick={() => navigate("/NewAccount_AddName")} // Navigates to the Add Name page
    >
      Start As Fresh
    </button>
      </div>
    </div>
  );
};

export default New_Account;
