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
      <div
        onClick={() => this.setViewAndUser('loggedIn', userName, userId)}
        className="w-100 card p-1 mb-4 ml-5 mr-5 bg-secondary shadow-sm">
        <div className="m-auto">
          <div className="user-login open-sans mb-0 text-light text-center">
            {userName}
          </div>
        </div>
      </div>
    );
  }
}
