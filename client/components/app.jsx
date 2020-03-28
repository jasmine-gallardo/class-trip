import React from 'react';
import UserList from './user-list';
import Home from './home';
import UserCourses from './user-courses';
import SearchCourses from './search-courses';
import UserLessons from './user-lessons';
import UserFieldTrips from './user-field-trips';
import FieldTripForm from './field-trip-form';
import LessonDetails from './lesson-details';
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
      allFieldTrips: [],
      lessons: [],
      lessonId: null
    };
    this.getLessons = this.getLessons.bind(this);
    this.getFieldTrips = this.getFieldTrips.bind(this);
    this.addFieldTrip = this.addFieldTrip.bind(this);
    this.setView = this.setView.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setCourse = this.setCourse.bind(this);
    this.setLessons = this.setLessons.bind(this);
    this.setLessonId = this.setLessonId.bind(this);
    this.setFieldTrip = this.setFieldTrip.bind(this);
  }

  getLessons(courseId) {
    fetch(`/api/courses/${courseId}`)
      .then(res => res.json())
      .then(lessonsArray => this.setState({ lessons: lessonsArray }))
      .catch(err => console.error(err));
  }

  getFieldTrips(userId) {
    fetch(`/api/users_field_trips/${userId}`)
      .then(res => res.json())
      .then(fieldTripsArray => this.setState({ allFieldTrips: fieldTripsArray }))
      .catch(err => console.error(err));
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

  setView(name) {
    this.setState({
      view: { name }
    });
  }

  setUser(userName, userId) {
    this.setState({
      user: { userName, userId }
    });
  }

  setCourse(courseId) {
    this.setState({
      course: { courseId }
    });
  }

  setLessons(lessons) {
    this.setState({
      lessons: []
    });
  }

  setLessonId(lessonId) {
    this.setState({ lessonId });
  }

  setFieldTrip(fieldTripId) {
    this.setState({
      fieldTrip: { fieldTripId }
    });
  }

  render() {
    let view;
    switch (this.state.view.name) {
      case 'users': view =
        <UserList setView={this.setView} setUser={this.setUser}/>;
        break;
      case 'loggedIn': view =
        <Home setView={this.setView} userName={this.state.user.userName} userId={this.state.user.userId} />;
        break;
      case 'searchCourses': view =
        <SearchCourses setView={this.setView} setCourse={this.setCourse} userName={this.state.user.userName} userId={this.state.user.userId} />;
        break;
      case 'myCourses': view =
        <UserCourses setView={this.setView} setCourse={this.setCourse} userName={this.state.user.userName} userId={this.state.user.userId} />;
        break;
      case 'myLessons': view =
        <UserLessons setView={this.setView} setLessonId={this.setLessonId} getLessons={this.getLessons} lessons={this.state.lessons} courseId={this.state.course.courseId} userId={this.state.user.userId}/>;
        break;
      case 'myFieldTrips': view =
       <UserFieldTrips setView={this.setView} getFieldTrips={this.getFieldTrips} allFieldTrips={this.state.allFieldTrips} userName={this.state.user.userName} userId={this.state.user.userId}/>;
        break;
      case 'planFieldTrip': view =
        <FieldTripForm setView={this.setView} addFieldTrip={this.addFieldTrip} user={this.state.user}/>;
        break;
      case 'lessonDetails': view =
        <LessonDetails setView={this.setView} lessonId={this.state.lessonId}/>;
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
