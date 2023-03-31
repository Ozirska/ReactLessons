import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spiner from "./Spiner.jsx";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      log: true,
      displaySpiner: false,
      displayBtn: true,
    };
  }

  clickBtn() {
    this.setState({
      displaySpiner: true,
      displayBtn: false,
    });
    setTimeout(() => {
      this.setState((prevState) => ({
        log: !prevState.log,
        displaySpiner: false,
        displayBtn: true,
      }));
    }, 2000);
  }

  render() {
    return (
      <div>
        <Spiner display={this.state.displaySpiner} size={40} />
        {this.state.log ? (
          <Login
            display={this.state.displayBtn}
            onLogin={() => this.clickBtn()}
          />
        ) : (
          <Logout
            display={this.state.displayBtn}
            onLogout={() => this.clickBtn()}
          />
        )}
      </div>
    );
  }
}

export default Auth;
