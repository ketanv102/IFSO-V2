// OtpVerification.jsx
import React, { useState, useRef, useEffect } from "react";
import "../../CSS/App.css";
import "./OtpVerification.css";
import { connect } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import { validateOtp } from "../../features/auth/authSlice";
import { Col, Row } from "react-bootstrap";


const OtpVerification = ({ showVerifyOtpForm, validateOtp }) => {
  console.log('showVerifyOtpForm :', showVerifyOtpForm)
  let navigate = useNavigate()
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [searchParams] = useSearchParams();
  const phone = searchParams.get('phone');
  const inputRefs = useRef([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   inputRefs.current[0]?.focus();
  // }, []);

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

    if (error && otp.some(val => val !== "")) {
      setError(null);
    }
  };

  const handleKeyDown = (index, e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  
    if (error && otp[index] === "") {
      setError(null);
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

  const enteredOtp = otp.join("");// Convert OTP array to a string
    console.log("Type of OTP:", typeof enteredOtp);

    if (enteredOtp.length < 4) {
      setError("OTP must be 4 digits");
      return;
    }

    try {
      const response = await validateOtp({ mobileNumber: `91${phone}`, otp: enteredOtp });
      console.log("API Response:", response.data);
      navigate('/chat_more_details');
    } catch (error) {
      console.error("Incorrect OTP:", error);
      setError("Incorrect OTP. Please try again.");
    }
  };

  const getInputClass = (index) => {
    return error ? "otp-input text-danger-custom" : "otp-input text-light";
  };

  const isButtonDisabled = otp.some((o) => o === "")

  console.log('otp: ', otp)
  return (
    <>
      <form onSubmit={handleOtpValidation} >
        <div className="OtpPage bg-black p-3" >
          <div className="otp-block">
            <p className="Message text-light w-100 text-start">Enter the code we sent to +91 {phone}</p>

            <Row className="justify-content-center">
              {[0, 1, 2, 3].map((index) => (
                <Col xs={3} key={index} className="otp-col d-flex justify-content-center">
                  <input
                    type="text"
                    maxLength="1"
                    className={getInputClass(index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    inputMode="numeric"
                  />
                </Col>
              ))}
            </Row>

            {error && <div className="error-message text-danger-custom w-100 text-end pt-1">{error}</div>}
          </div>

          <div className="cta-block">
            <div className="otp-actions px-0">
              <span className="change-number fw-500" onClick={() => navigate("/LoginPage")}>Change Number</span>
              <span className="resend-timer text-light">Resend in <span className="fw-500">00:23</span></span>
            </div>
            <button className="Otp-button" type="submit" disabled={isButtonDisabled}>Next</button>
          </div>
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