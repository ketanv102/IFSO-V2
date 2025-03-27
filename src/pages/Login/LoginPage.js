import React, { useEffect, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Telephone } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requestOtp } from "../../features/auth/authSlice";
import "../../CSS/App.css";
import './LoginPage.css';
import logo from "../../Resourceas/Images/IFSO Logo SVG White 1.png";
import AuthFormContainer from "../../components/auth/AuthFormContainer";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthButton from "../../components/auth/AuthButton";

const LoginPage = ({ requestOtp, showLoginPage }) => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  const [mobileNumber, setMobileNumber] = useState("");

  const handleUserNameValidation = async (e) => {
    e.preventDefault();
    const userRole = role || "ifsoUser";
    await requestOtp({
      mobileNumber: `91${mobileNumber}`, role: userRole
    });
    navigate(`/OtpVerification?phone=${mobileNumber}`);
  };

  return (
    <>
    {showLoginPage && (
    <AuthFormContainer>
       <AuthHeader title="Welcome Back !" />

       <div className="w-100 d-flex flex-column align-items-center">

        {/* LOGIN FORM */}
          <Form
            onSubmit={handleUserNameValidation}
            className="w-100 d-flex flex-column align-items-center gap-4"
          >
            <Form.Group
              className="form-group mb-3 align-items-center"
            >
              <InputGroup>
                <InputGroup.Text className="border-0 text-white">
                  <Telephone />
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Mobile Number"
                  className="phone-input text-white border-0"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                  maxLength={10}
                />
              </InputGroup>
            </Form.Group>

            <AuthButton text="Login" />
          </Form>
          <div>
              <p className="text-center my-4 or-text">OR</p>
              <p className="text-center text-white">
                Login with Username & Password
              </p>
            </div>
        </div>

    </AuthFormContainer>
    )}
    </>
  )
};

const mapStateToProps = ({ auth }) => ({
  showLoginPage: auth.showLoginPage,
});

export default connect(mapStateToProps, { requestOtp })(LoginPage);