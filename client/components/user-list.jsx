import React from 'react';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('/api/users')
      .then(res => res.json())
      .then(usersArray => this.setState({ users: usersArray }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <div className="h-75 d-flex flex-wrap justify-content-center">
          <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="fas fa-user fa-3x"></i>
            <p className="h2">Log In</p>
          </div>
        </div>
      </div>
    );
  }

}
