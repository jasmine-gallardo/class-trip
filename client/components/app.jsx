import React from 'react';
import UserList from './user-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'users' }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name) {
    this.setState({
      view: { name }
    });
  }

  render() {
    return (
      <div>
        <header className="bg-secondary d-flex justify-content-center">
          <p className="m-auto text-light h4">APP NAME</p>
        </header>
        <div className="component-body p-4 pt-5">
          <UserList setView={this.setView} />
        </div>
        <footer className="bg-secondary d-flex justify-content-between p-5"></footer>
      </div>
    );
  }
}
