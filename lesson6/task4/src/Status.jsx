import React, { Component } from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

const Status = (props) => {
  return (
    <div className="status">{props.isOnline ? <Online /> : <Offline />}</div>
  );
};

export default Status;
