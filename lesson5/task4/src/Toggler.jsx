import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.isToggleOn ? "On" : "Off"}
      </div>
    );
  }
}

export default Toggler;
