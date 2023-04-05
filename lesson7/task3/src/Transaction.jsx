import React from "react";
import moment from "moment";

const formatDate = (date) => moment(date).format("DD MMM");
const formatTime = (date) => moment(date).format("hh:mm");

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(new Date(time))}</span>
      <span className="transaction__time">{formatTime(new Date(time))}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate.toLocaleString("en-GB")}</span>
      <span className="transaction__amount">
        {amount.toLocaleString("en-GB")}
      </span>
    </li>
  );
};

export default Transaction;
