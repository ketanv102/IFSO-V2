
const AuthFormContainer = ({ children }) => {
  return (
    <div className="auth-form-container d-flex flex-column vh-100 bg-black text-white">
      {children}
    </div>
  );
};

export default AuthFormContainer;
