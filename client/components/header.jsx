import React from 'react';

export default class Header extends React.Component {

  getHeaderContent() {
    switch (this.props.view) {
      case 'users':
      case 'loggedIn':
        return (
          <p className="m-auto text-light h4"><i className="fas fa-globe-americas"></i>
            <i className="fas fa-copyright ml-n1"></i><span className="mb-2">lassroom</span></p>
        );
      case 'searchCourses':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="fas fa-search fa-3x mr-3"></i>
            <p className="h2"> Search for Courses</p>
          </div>
        );
      case 'myCourses':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="far fa-bookmark fa-3x mr-3"></i>
            <p className="h2"> My Courses</p>
          </div>
        );
      case 'myFieldTrips':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="far fa-calendar-alt fa-3x mr-3"></i>
            <p className="h2"> My Field Trips</p>
          </div>
        );
      case 'planFieldTrip':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="far fa-clipboard fa-3x mr-3"></i>
            <p className="h2"> Plan Field Trip</p>
          </div>
        );
      case 'myLessons':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <div onClick={() => this.props.setView(this.props.backPage)}>
              <i
                className="fas fa-angle-left fa-3x mr-3"></i>
            </div>
            <p className="h2"> Lessons</p>
          </div>
        );
      case 'lessonDetails':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <div onClick={() => this.props.setView('myLessons')}>
              <i
                className="fas fa-angle-left fa-3x mr-3"></i>
            </div>
            <p className="h2"> Details</p>
          </div>
        );
    }
  }

  render() {
    return (
      <header className="bg-secondary d-flex justify-content-center align-items-center text-light">
        {this.getHeaderContent()}
      </header>
    );
  }

}
