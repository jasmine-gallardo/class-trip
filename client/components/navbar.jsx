import React from 'react';

export default class Navbar extends React.Component {

  render() {
    return (
      <footer className="bg-secondary d-flex align-items-center justify-content-between p-4">
        <div onClick={() => this.props.setView('loggedIn')}>
          <i
            className="fas fa-home fa-2x"></i>
        </div>
        <div onClick={() => this.props.setView('planFieldTrip')}>
          <i
            className="far fa-clipboard fa-2x"></i>
        </div>
      </footer>

    );
  }
}
