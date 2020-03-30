import React from 'react';
import User from './user';

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
      <div className="h-100 m-auto justify-content-center">
        <div className="p-5 w-100 h-25 m-0 p-2 d-flex justify-content-center justify-content-between align-items-center">
          <p className="text-center h1 open-sans m-auto text-info pr-4">Log In</p>
        </div>
        <div className="h-50 d-flex flex-wrap justify-content-center">
          {
            this.state.users.map(user => {
              return (
                <User
                  key={user.userId}
                  userId={user.userId}
                  name={user.name}
                  setView={this.props.setView}
                  setUser={this.props.setUser}
                />
              );
            })
          }
        </div>
      </div>
    );
  }

}
