import React from "react";

const Login = (func) => {
  return (
    <button
      style={{ display: func.display ? "block" : "none" }}
      className="login btn"
      onClick={func.onLogin}
    >
      Login
    </button>
  );
};

export default Login;
