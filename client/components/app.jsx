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
      headerView: {name: 'appLogo'},
      user: { userName: '', userId: null },
      course: { courseId: null },
      fieldTrip: { fieldTripId: null },
      allFieldTrips: []
    };
    this.setView = this.setView.bind(this);
    this.setHeaderView = this.setHeaderView.bind(this);
    this.addFieldTrip = this.addFieldTrip.bind(this);
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

  setHeaderView(name) {
    this.setState({
      headerView: { name }
    })
  }

  render() {
    let view;
    let headerView;
    switch (this.state.view.name) {
      case 'users': view =
        <UserList setView={this.setView} />;
        headerView =
        <Header view={'users'} />
        break;
      case 'loggedIn': view =
        <Home setView={this.setView} userName={this.state.user.userName} userId={this.state.user.userId} />;
        headerView =
        <Header view={'loggedIn'} />
        break;
      case 'myCourses': view =
        <UserCourses setView={this.setView} userName={this.state.user.userName} userId={this.state.user.userId} />;
        headerView =
        <Header view={'myCourses'}/>
        break;
      case 'myLessons': view =
        <UserLessons setView={this.setView} courseId={this.state.course.courseId} userId={this.state.user.userId}/>;
        break;
      case 'myFieldTrips': view =
        <UserFieldTrips setView={this.setView} userName={this.state.user.userName} userId={this.state.user.userId} courseId={this.state.course.courseId}/>;
        headerView =
        <Header view={'myFieldTrips'} />
        break;
      case 'planFieldTrip': view =
        <FieldTripForm setView={this.setView} addFieldTrip={this.addFieldTrip} user={this.state.user}/>;
    }
    return (
      <div>
        {/* <header className="bg-secondary d-flex justify-content-center">
          <p className="m-auto text-light h4">APP NAME</p>
        </header> */}
        {/* <Header setView={this.setView} /> */}
        {headerView}
        <div className="component-body p-4 pt-5">
          {view}
        </div>
        <footer className="bg-secondary d-flex justify-content-between p-5"></footer>
      </div>
    );
  }
}
