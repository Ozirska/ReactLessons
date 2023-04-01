import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
  state = {
    log: true,
    displaySpiner: false,
    displayBtn: true,
  };

  clickBtn() {
    this.setState({
      displaySpiner: true,
      displayBtn: false,
    });
    setTimeout(() => {
      this.setState({
        log: true,
        displaySpiner: false,
        displayBtn: true,
      });
    }, 2000);
  }
  clickBtnOut() {
    this.setState({
      log: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.log ? (
          <>
            <Spinner display={this.state.displaySpiner} size={40} />
            <Login
              display={this.state.displayBtn}
              onLogin={() => this.clickBtn()}
            />
          </>
        ) : (
          <Logout
            display={this.state.displayBtn}
            onLogout={() => this.clickBtnOut()}
          />
        )}
      </div>
    );
  }
}

export default Auth;
