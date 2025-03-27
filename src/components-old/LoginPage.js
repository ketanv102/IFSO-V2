import React, { useEffect, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Telephone } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requestOtp } from "../../src/features/auth/authSlice";
import "../CSS/App.css";
import logo from "../Resourceas/Images/IFSO Logo SVG White 1.png";

const LoginPage = ({ requestOtp, showLoginPage }) => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    if (role) {
      requestOtp({ mobileNumber: `91${mobileNumber} ` });
    }
  }, [requestOtp]);

  const handleUserNameValidation = async (e) => {
    e.preventDefault();
    const userRole = role || "ifsoUser";
    await requestOtp({
      mobileNumber: `91${mobileNumber}`, role: userRole
    });
    navigate("/OtpVerification?phone=${mobileNumber}");
  };

  return (
    <>
      {showLoginPage && (
        <div className="d-flex flex-column justify-content-evenly vh-100 bg-black text-white">
          <div className="text-center mb-4">
            <img src={logo} alt="Logo" style={{ width: "60px" }} />
            <h2 className="mt-3">Welcome Back !</h2>
          </div>

          <div className="w-100 d-flex flex-column align-items-center">
            <Form
              onSubmit={handleUserNameValidation}
              className="w-100 d-flex flex-column align-items-center"
            >
              <Form.Group
                className="mb-3"
                style={{ width: "358px", height: "55px", gap: "24px" }}
              >
                <InputGroup>
                  <InputGroup.Text className="bg-dark border-0 text-white">
                    <Telephone />
                  </InputGroup.Text>
                  <Form.Control
                    type="tel"
                    placeholder="Mobile Number"
                    className="bg-dark text-white border-0"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    maxLength={10}
                    style={{ height: "55px" }}
                  />
                </InputGroup>
              </Form.Group>

              <Button
                type="submit"
                className="bg-secondary border-0"
                style={{
                  width: "358px",
                  height: "48px",
                  borderRadius: "12px",
                  padding: "12px 24px",
                }}
              >
                Login
              </Button>
            </Form>

            <div>
              <p className="text-center my-3">OR</p>
              <p className="text-center text-white">
                Login with Username & Password
              </p>
            </div>
          </div>

          {/* Signup Link */}
          {/* <p className="text-center">
            Don't have an account?{" "}
            <span className="text-white fw-bold">Create</span>
          </p> */}
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  showLoginPage: auth.showLoginPage,
});

export default connect(mapStateToProps, { requestOtp })(LoginPage);