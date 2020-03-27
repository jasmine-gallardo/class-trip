import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  getHeaderContent() {
    switch (this.props.view) {
      case 'users':
      case 'loggedIn':
        console.log('logged in')
        return (
        <p className="m-auto text-light h4"><i className="fas fa-globe-americas"></i>
          <i className="fas fa-copyright ml-n1"></i><span className="mb-2">lassroom</span></p>
      )
      break;
      case 'myCourses':
        console.log('myCourses');
        return (
          <h2>My Courses</h2>
          )
      break;
      case 'myFieldTrips':
        console.log('myFieldTrips');
        return (
          <h2>My Field Trips</h2>
        )
    }
  }

  render() {
    const setHeaderView = this.props.setHeaderView;
    const view = this.props.view;
    const userName = this.props.userName;
    return (
      <header className="bg-secondary d-flex justify-content-center align-items-center text-light">
        {this.getHeaderContent()}
      </header>
    );
  }

}
