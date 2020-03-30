import React from 'react';
import UserList from './user-list';
import Home from './home';
import UserCourses from './user-courses';
import SearchCourses from './search-courses';
import UserLessons from './user-lessons';
import UserFieldTrips from './user-field-trips';
import FieldTripForm from './field-trip-form';
import EditFieldTrip from './edit-field-trip';
import LessonDetails from './lesson-details';
import Header from './header';
import Navbar from './navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'editFieldTrip' },
      user: { userName: '', userId: null },
      course: { courseId: null },
      fieldTrip: { fieldTripId: null },
      allFieldTrips: [],
      lessons: [],
      lessonId: null,
      backPage: null
    };
    this.getLessons = this.getLessons.bind(this);
    this.getFieldTrips = this.getFieldTrips.bind(this);
    this.addFieldTrip = this.addFieldTrip.bind(this);
    this.updateFieldTrip = this.updateFieldTrip.bind(this);
    this.setView = this.setView.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setCourse = this.setCourse.bind(this);
    this.setLessons = this.setLessons.bind(this);
    this.setLessonId = this.setLessonId.bind(this);
    this.setFieldTrip = this.setFieldTrip.bind(this);
    this.setBackPage = this.setBackPage.bind(this);
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

  updateFieldTrip(fieldTripId) {
    const newestFTArray = [...this.state.allFieldTrips];
    console.log('all', this.state.allFieldTrips);
    const req = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFieldTrip)
    };
    fetch(`/api/editFieldTrips/${fieldTripId}`, req)
      .then(res => res.json())
      .then(updatedFieldTrip => {
        const ftIndex = newestFTArray.findIndex(element => element.id === fieldTripId);
        newestFTArray.splice(ftIndex, 1, updatedFieldTrip);
        this.setState({ allFieldTrips: newestFTArray });
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

  setBackPage(backPage) {
    this.setState({ backPage });
  }

  render() {
    let view;
    switch (this.state.view.name) {
      case 'users': view =
        <UserList setView={this.setView} setUser={this.setUser}/>;
        break;
      case 'loggedIn': view =
        <Home setView={this.setView} getFieldTrips={this.getFieldTrips} userName={this.state.user.userName} userId={this.state.user.userId} />;
        break;
      case 'searchCourses': view =
        <SearchCourses setBackPage={this.setBackPage} setView={this.setView} setCourse={this.setCourse} userName={this.state.user.userName} userId={this.state.user.userId} />;
        break;
      case 'myCourses': view =
        <UserCourses setBackPage={this.setBackPage} setView={this.setView} setCourse={this.setCourse} userName={this.state.user.userName} userId={this.state.user.userId} />;
        break;
      case 'myLessons': view =
        <UserLessons setView={this.setView} setLessonId={this.setLessonId} getLessons={this.getLessons} lessons={this.state.lessons} courseId={this.state.course.courseId} userId={this.state.user.userId}/>;
        break;
      case 'myFieldTrips': view =
       <UserFieldTrips setView={this.setView} getFieldTrips={this.getFieldTrips} fieldTrips={this.state.allFieldTrips} userName={this.state.user.userName} userId={this.state.user.userId}/>;
        break;
      case 'planFieldTrip': view =
        <FieldTripForm setView={this.setView} addFieldTrip={this.addFieldTrip} user={this.state.user}/>;
        break;
      case 'editFieldTrip': view =
        <EditFieldTrip setView={this.setView} user={this.state.user} updateFieldTrip={this.updateFieldTrip} fieldTripId={this.state.fieldTrip.fieldTripId} />;
        break;
      case 'lessonDetails': view =
        <LessonDetails setView={this.setView} lessonId={this.state.lessonId}/>;
    }
    return (
      <div>
        <Header setView={this.setView} view={this.state.view.name} backPage={this.state.backPage} />
        <div className="component-body p-4 pt-5 overflow-auto">
          {view}
        </div>
        <Navbar setView={this.setView} view={this.state.view.name} />
      </div>
    );
  }
}
