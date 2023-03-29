import React, { Component } from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

const Status = (props) => {
  return (
    <div className="status">{props.isOnline ? <Online /> : <Offline />}</div>
  );
};

// class Status extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { isOnline: props.status };
//   }

//   render() {
//     return (
//       <div className="status">
//         {this.state.isOnline ? <Online /> : <Offline />}
//       </div>
//     );
//   }
// }

export default Status;
