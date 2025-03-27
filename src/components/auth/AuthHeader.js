import logo from "../../Resourceas/Images/IFSO Logo SVG White 1.png";
import './AuthHeader.css';

const AuthHeader = ({ title }) => {
  return (
    <div className="auth-header text-center mb-4">
      <img src={logo} alt="Logo" />
      <h2 className="mt-3">{title}</h2>
    </div>
  );
};

export default AuthHeader;
