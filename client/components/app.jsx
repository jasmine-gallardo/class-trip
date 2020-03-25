import React from 'react';
import UserList from './user-list';
import Home from './home';
import UserCourses from './user-courses';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'users' },
      user: { userName: '' },
      userId: { userId: '' }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, userName, userId) {
    this.setState({
      view: { name },
      user: { userName },
      userId: { userId }
    });
  }

  render() {
    let view;
    switch (this.state.view.name) {
      case 'users': view =
        <UserList setView={this.setView} />;
        break;
      case 'loggedIn': view =
        <Home setView={this.setView} userName={this.state.user.userName} userId={this.state.userId.userId}/>;
        break;
      case 'myCourses': view =
        <UserCourses setView={this.setView} userId={this.state.userId.userId}/>;
        break;
    }
    return (
      <div>
        <header className="bg-secondary d-flex justify-content-center">
          <p className="m-auto text-light h4">APP NAME</p>
        </header>
        <div className="component-body p-4 pt-5">
          {view}
        </div>
        <footer className="bg-secondary d-flex justify-content-between p-5"></footer>
      </div>
    );
  }
}
