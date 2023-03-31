import React from "react";

const Logout = (func) => {
  return (
    <button
      style={{ display: func.display ? "block" : "none" }}
      className="logout btn"
      onClick={func.onLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
