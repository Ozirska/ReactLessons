import React, { Component } from "react";

const CORAl = "coral";
const AQUA = "aqua";
const BISQUE = "bisque";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  hoverColor(color) {
    this.setState({
      text: color,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            style={{ backgroundColor: CORAl }}
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.hoverColor("Coral")}
            onMouseLeave={() => this.hoverColor("")}
          ></button>
          <button
            style={{ backgroundColor: AQUA }}
            className="picker__button picker__button_aqua"
            onMouseEnter={() => {
              this.hoverColor("Aqua");
            }}
            onMouseLeave={() => {
              this.hoverColor("");
            }}
          ></button>
          <button
            style={{ backgroundColor: BISQUE }}
            className="picker__button picker__button_bisque"
            onMouseEnter={() => {
              this.hoverColor("Bisque");
            }}
            onMouseLeave={() => {
              this.hoverColor("");
            }}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
