import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting.jsx";

const rootElement = document.querySelector("#root");

const userInfo = {
  firstName: "John",
  lastName: "Doe",
  birthDate: new Date("2019-06-01T11:32:19.566Z"),
};

ReactDOM.render(<Greeting user={userInfo} />, rootElement);
