import React from 'react';
import UserList from './user-list';
import Home from './home';
import UserCourses from './user-courses';
import UserLessons from './user-lessons';
import UserFieldTrips from './user-field-trips';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'users' },
      user: { userName: '', userId: null },
      course: { courseId: null },
      fieldTrip: { fieldTripId: null }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, userName, userId, courseId, fieldTripId) {
    this.setState({
      view: { name },
      user: { userName, userId },
      course: { courseId },
      fieldTrip: { fieldTripId }
    });
  }

  render() {
    let view;
    switch (this.state.view.name) {
      case 'users': view =
        <UserList setView={this.setView} />;
        break;
      case 'loggedIn': view =
        <Home setView={this.setView} userName={this.state.user.userName} userId={this.state.user.userId} />;
        break;
      case 'myCourses': view =
        <UserCourses setView={this.setView} userName={this.state.user.userName} userId={this.state.user.userId} />;
        break;
      case 'myLessons': view =
        <UserLessons setView={this.setView} courseId={this.state.course.courseId} userId={this.state.user.userId}/>;
        break;
      case 'myFieldTrips': view =
        <UserFieldTrips setView={this.setView} userName={this.state.user.userName} userId={this.state.user.userId} courseId={this.state.course.courseId}/>;
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
