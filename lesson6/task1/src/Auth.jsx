import React, { Component } from "react";
import Greeting from "./Greeting.jsx";
import Logout from "./Logout.jsx";
import Login from "./Login.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    // const button = this.state.isLoggedIn ? (
    //   <button className="btn logout" onClick={this.handleLogin}>
    //     Logout
    //   </button>
    // ) : (
    //   <button className="btn login" onClick={this.handleLogout}>
    //     Login
    //   </button>
    // );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.handleLogin} />
          ) : (
            <Login onLogin={this.handleLogout} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
