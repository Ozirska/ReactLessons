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
      My name is {props.user.firstName} {props.user.lastName}. I am{" "}
      {countYers(props.user.birthDate)} years old
    </div>
  );
};

export default Greeting;
