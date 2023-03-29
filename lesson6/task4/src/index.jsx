import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Status from "./Status.jsx";

const rootElem = document.querySelector("#root");

ReactDOM.render(<Status status={false} />, rootElem);