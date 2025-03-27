import { Button } from "react-bootstrap";
import './AuthButton.css';

const AuthButton = ({ text}) => {
  return (
    <Button
      type="submit"
      className="border-0 login-btn"
    >
      {text}
    </Button>
  );
};

export default AuthButton;
