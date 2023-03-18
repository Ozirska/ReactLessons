import React from "react";

// const GoodButton = () => (
//   <button className="fancy-button" onClick={() => alert("Good job!")}>
//     Click me!
//   </button>
// );

class GoodButton extends React.Component {
  handleClick(e) {
    // console.log(e.target.textContent);
    alert("Good job!");
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
