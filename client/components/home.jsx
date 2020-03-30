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
          <p className="h1 open-sans ml-2 mt-4 mb-4 text-info pl-0">Hey, {userName}</p>
        </div>
        <div className="row flex-column pt-1">
          <div className="col my-3">
            <p className="h4 text-secondary">What are you studying today?</p>
            <p className="lead">View courses you&apos;re enrolled in.</p>
            <div className="col-12 card p-3 mb-2 bg-light shadow-sm">
              <div className="row my-auto">
                <div className="col-9 py-3 pl-4">
                  <div className="h4 open-sans mb-0 text-info">
                    My Courses
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center col-3">
                  <button
                    onClick={() => this.props.setView('myCourses')}
                    type="button" className="btn btn-dark my-1">&gt;</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <p className="h4 text-secondary">Got any field trips planned?</p>
            <p className="lead">View field trips you&apos;ve RSVP&apos;d to.</p>
            <div className="col-12 card p-3 mb-2 bg-light shadow-sm">
              <div className="row my-auto">
                <div className="col-9 py-3 pl-4">
                  <div className="h4 open-sans mb-0 text-info">
                    My Field Trips
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center col-3">
                  <button
                    onClick={() => this.props.setView('myFieldTrips')}
                    type="button" className="btn btn-dark my-1">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
