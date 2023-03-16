import { Component } from "react";
import React from "react";
import "./clock.scss";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: props.offset,
      time: new Date(),
    };

    //do Not
    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(this.state.offset),
      });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">
          {new Date(this.state.time).toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Clock;
