import React from "react";

const Spiner = (styles) => {
  return (
    <span
      className="spinner"
      style={{
        width: `${styles.size}px`,
        display: styles.display ? "block" : "none",
      }}
    ></span>
  );
};

export default Spiner;
