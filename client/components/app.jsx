import React from 'react';
import UserList from './user-list';
import Home from './home';
import UserCourses from './user-courses';
import UserLessons from './user-lessons';
import UserFieldTrips from './user-field-trips';
import FieldTripForm from './field-trip-form';
import Header from './header';
// import Navbar from './navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'users' },
      headerView: { name: 'appLogo' },
      user: { userName: '', userId: null },
      course: { courseId: null },
      fieldTrip: { fieldTripId: null },
      allFieldTrips: []
    };
    this.setView = this.setView.bind(this);
    this.addFieldTrip = this.addFieldTrip.bind(this);
    this.getEnrollment = this.getEnrollment.bind(this);
  }

  getEnrollment(user, course) {
    fetch(`/api/users_courses/${user}/${course}`)
      .then(res => res.json())
      .then(enrollmentArray => {
        if (!enrollmentArray[0]) {
          this.setState({ enrollment: false }, this.getLessons(this.props.courseId));
        } else {
          this.setState({ enrollment: true }, this.getLessons(this.props.courseId));
        }
      }
      );
  }

  addFieldTrip(newFieldTrip) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFieldTrip)
    };
    fetch('/api/field_trips', req)
      .then(res => res.json())
      .then(newFieldTrip => {
        const updatedFieldTripsArray = this.state.allFieldTrips.concat(newFieldTrip);
        this.setState({ allFieldTrips: updatedFieldTripsArray });
      })
      .catch(err => console.error(err));
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
        break;
      case 'planFieldTrip': view =
        <FieldTripForm setView={this.setView} addFieldTrip={this.addFieldTrip} user={this.state.user}/>;
    }
    return (
      <div>
        <Header setView={this.setView} view={this.state.view.name} getEnrollment={this.state.getEnrollment}/>
        <div className="component-body p-4 pt-5">
          {view}
        </div>
        <footer className="bg-secondary d-flex justify-content-between p-5"></footer>
      </div>
    );
  }
}
