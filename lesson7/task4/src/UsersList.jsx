import React, { Component } from "react";
import User from "./User.jsx";
import Pagination from "./Pagination.jsx";

class UsersList extends Component {
  state = {
    currentPage: 1,
    userArr: [],
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    let index = this.state.currentPage - 1;
    while (this.props.users.length)
      this.state.userArr.push(this.props.users.splice(0, 3));

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          page={this.state.currentPage}
          length={this.state.userArr.length}
        />

        <ul className="users">
          {this.state.userArr[index].map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
