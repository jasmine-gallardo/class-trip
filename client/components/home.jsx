import React from 'react';

export default class Home extends React.Component {

  componentDidMount() {
    this.props.getFieldTrips(this.props.userId);
  }

  render() {
    const userName = this.props.userName;
    return (
      <div className="h-100">
        <div className="w-100 m-auto p-2 d-flex justify-content-center">
          {/* <i className="fas fa-user fa-3x text-info"></i> */}
          <p className="display-4 ml-2 mb-4 text-info">{userName}</p>
        </div>
        <p className="w-75 h4 m-auto ">Search</p>
        <div className=" general h-25 mt-3 text-center">
          <button
            onClick={() => this.props.setView('searchCourses')}
            className="w-75 btn-lg btn-light shadow m-2" type="submit">Courses</button>
          <button
            onClick={() => this.props.setView('fieldTrips')}
            className="w-75 btn-lg btn-light shadow m-2">Field Trips</button>
        </div>
        <p className="w-75 h4 m-auto ">Me</p>
        <div className="h-50 mt-3 text-center">
          <div>
            <button
              onClick={() => this.props.setView('myCourses')}
              className="w-75 btn-lg btn-light shadow m-2" type="submit">My Courses</button>
          </div>
          <div>
            <button
              onClick={() => this.props.setView('myFieldTrips')}
              className="w-75 btn-lg btn-light shadow m-2" type="submit">My Field Trips</button>
          </div>
        </div>
      </div>
    );
  }
}
