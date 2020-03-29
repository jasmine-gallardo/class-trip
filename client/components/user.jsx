import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.setViewAndUser = this.setViewAndUser.bind(this);
  }

  setViewAndUser(viewName, userName, userId) {
    this.props.setView(viewName);
    this.props.setUser(userName, userId);
  }

  render() {
    const userName = this.props.name;
    const userId = this.props.userId;
    return (
      <div className="w-50 h-25 mb-5 d-flex justify-content-center align-items-center m-auto">
        <button
          onClick={() => this.setViewAndUser('loggedIn', userName, userId)}
          className="user-button w-100 h-75 shadow-sm btn btn-lg btn-info mb-3 open-sans">
          {userName}
        </button>
      </div>
    );
  }
}
