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
      <div className="w-75 d-flex justify-content-center">
        <button
          onClick={() => this.setViewAndUser('loggedIn', userName, userId)}
          className="w-75 h-75 shadow btn btn-secondary btn-lg mb-3 open-sans">
          {userName}
        </button>
      </div>
    );
  }
}
