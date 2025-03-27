// OtpVerification.jsx
import React, { useEffect, useState, useRef } from "react";
import "../CSS/App.css";
import { connect } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import { validateOtp, backToLogin, registerUser } from "../../src/features/auth/authSlice";


const OtpVerification = ({ showVerifyOtpForm, validateOtp }) => {
  console.log('showVerifyOtpForm :', showVerifyOtpForm)
  let navigate = useNavigate()
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [searchParams] = useSearchParams();
  const phone = searchParams.get('phone');
  console.log('phone: ', phone)

  const inputRefs = useRef([]);

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if available
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (/^\d{6}$/.test(pastedData)) {
      pastedData.split("").forEach((char, index) => {
        if (inputRefs.current[index]) {
          inputRefs.current[index].value = char;
        }
      });

      inputRefs.current[3]?.focus();
    }
  };


  const handleOtpValidation = async (e) => {
    e.preventDefault();
    console.log("handleOtpValidation function running");

    const enteredOtp = otp.join(""); // Convert OTP array to a string
    console.log("Entered OTP:", enteredOtp); // This should now log the correct OTP

    if (enteredOtp.length < 6) {
      return;
    }

    try {
      const response = await validateOtp({ mobileNumber: `91${phone}`, otp: enteredOtp });
      console.log("API Response:", response.data);
      navigate('/chat_more_details');
    } catch (error) {
      console.error("Error verifying OTP:", error);

    }
  };

  console.log('otp: ', otp)
  return (
    <>
      <form onSubmit={handleOtpValidation} >
        <div className="OtpPage" >
          <h2 className="Message">Enter the code we sent to +91 {phone}</h2>

          <div className="otp-container">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste} // Attach paste event
              />
            ))}
          </div>

          <div className="otp-actions">
            <span className="change-number" onClick={() => navigate("/LoginPage")}>Change Number</span>
            <span className="resend-timer">Resend in <strong>00:23</strong></span>
          </div>
          <button className="Otp-button" type="submit" onClick={() => navigate("/chat_more_details")}>Next</button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = ({ state, auth }) => {
  console.log('state: ', state)
  const { showVerifyOtpForm, validateOtp } = auth

  return { showVerifyOtpForm, validateOtp }
}

const mapDispatchToProps = {
  validateOtp
}

export default connect(mapStateToProps, mapDispatchToProps)(OtpVerification)