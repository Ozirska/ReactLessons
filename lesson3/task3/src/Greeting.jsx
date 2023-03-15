import React from "react";

const countYers = (date) => {
  let betweenDay = new Date().getDate() - date.getDate();
  let betweenMonth = new Date().getMonth() - date.getMonth();
  let betweenYear = new Date().getFullYear() - date.getFullYear();

  if (betweenDay < 0 || betweenMonth < 0) {
    return betweenYear - 1;
  }
  return betweenYear;
};

const Greeting = (props) => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I am{" "}
      {countYers(props.birthDate)} years old
    </div>
  );
};

export default Greeting;
