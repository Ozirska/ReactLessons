import React from "react";

const Spinner = (styles) => {
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

export default Spinner;
