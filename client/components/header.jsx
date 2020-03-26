import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentPage = this.props.currentPage;
    const setView = this.props.setView;
    return (
        <header className="bg-secondary d-flex justify-content-center">
        <p className="m-auto text-light h4"><i className="fas fa-globe-americas"></i>
          <i className="fas fa-copyright ml-n1"></i><span className="mb-2">lassroom</span></p>
        </header>
    )
  }


}
