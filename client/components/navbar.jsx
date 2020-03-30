import React from 'react';

export default class Navbar extends React.Component {
  getHomeClass() {
    if (this.props.view === 'users' || this.props.view === 'loggedIn') {
      return 'hidden';
    }
  }

  getSearchClass() {
    if (this.props.view === 'generalSearch' || this.props.view === 'users') {
      return 'd-none';
    }
  }

  getPlanClass() {
    if (this.props.view === 'planFieldTrip' || this.props.view === 'users') {
      return 'd-none';
    }
  }

  getLogoutClass() {
    if (this.props.view !== 'loggedIn') {
      return 'd-none';
    }
  }

  render() {
    return (
      <footer className="bg-secondary d-flex align-items-center justify-content-between p-3 text-light">
        <div className={this.getLogoutClass()} onClick={() => this.props.setView('users')}>
          <i
            className="fas fa-users-cog fa-3x"></i>
        </div>
        <div className={this.getHomeClass()} onClick={() => this.props.setView('loggedIn')}>
          <i
            className="fas fa-home fa-3x"></i>
        </div>
        <div className={this.getSearchClass()} onClick={() => this.props.setView('generalSearch')}>
          <i
            className="fas fa-search fa-3x"></i>
        </div>
        <div className={this.getPlanClass()} onClick={() => this.props.setView('planFieldTrip')}>
          <i
            className="far fa-clipboard fa-3x"></i>
        </div>
      </footer>

    );
  }
}
