import React from 'react';

export default class Header extends React.Component {

  getHeaderContent() {
    switch (this.props.view) {
      case 'users':
      case 'loggedIn':
        return (
          <p className="work-sans h2">ClassTrip</p>
        );
      case 'searchCourses':
        return (
          <div className="w-100 m-auto p-2 d-flex justify-content-center justify-content-between">
            <div onClick={() => this.props.setView('generalSearch')}>
              <i
                className="fas fa-angle-left fa-3x m-auto pl-3 col-2"></i>
            </div>
            <p className="h4 work-sans m-auto col-10"> Search for Courses</p>

          </div>
        );
      case 'myCourses':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="far fa-bookmark fa-2x mr-3"></i>
            <p className="h4 work-sans mb-0"> My Courses</p>
          </div>
        );
      case 'myFieldTrips':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="far fa-calendar-alt fa-2x mr-3"></i>
            <p className="h4 work-sans mb-0"> My Field Trips</p>
          </div>
        );
      case 'planFieldTrip':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="far fa-clipboard fa-2x mr-3"></i>
            <p className="h4 work-sans mb-0"> Plan Field Trip</p>
          </div>
        );
      case 'editFieldTrip':
        return (
          <div className="w-70 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="fas fa-edit fa-3x mr-3"></i>
            <p className="h2"> Edit Field Trip</p>
          </div>
        );
      case 'myLessons':
        return (
          <div className="w-100 m-auto p-2 d-flex justify-content-center justify-content-between row">
            <div onClick={() => this.props.setView(this.props.backPage)}>
              <i
                className="fas fa-angle-left fa-3x m-auto pl-3 col-2"></i>
            </div>
            <p className="h4 work-sans m-auto col-6"> Lessons</p>
          </div>
        );
      case 'lessonDetails':
        return (
          <div className="w-100 row m-auto p-2 d-flex justify-content-center justify-content-between">
            <div onClick={() => this.props.setView('myLessons')}>
              <i
                className="fas fa-angle-left fa-3x m-auto pl-3 col-2"></i>
            </div>
            <p className="h4 work-sans m-auto col-6"> Details</p>
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
