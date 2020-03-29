import React from 'react';

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.setNextPage = this.setNextPage.bind(this);
  }

  setNextPage(viewName, courseId, backPage) {
    this.props.setView(viewName);
    this.props.setCourse(courseId);
    this.props.setBackPage(backPage);
  }

  render() {
    const courseName = this.props.name;
    const courseId = this.props.courseId;
    const backPage = this.props.currentPage;
    return (
      <div className="w-100 d-flex justify-content-center">
        <button
          onClick={() => { this.setNextPage('myLessons', courseId, backPage); }}
          className="w-100 btn-block btn-warning text-light h4 mb-3 rounded">
          {courseName}
        </button>
      </div>
    );
  }

}
