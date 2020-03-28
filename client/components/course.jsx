import React from 'react';

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.setViewAndCourseId = this.setViewAndCourseId.bind(this);
  }

  setViewAndCourseId(viewName, courseId) {
    this.props.setView(viewName);
    this.props.setCourse(courseId);
  }

  render() {
    const courseName = this.props.name;
    const courseId = this.props.courseId;
    return (
      <div className="w-100 d-flex justify-content-center">
        <button
          onClick={() => this.setViewAndCourseId('myLessons', courseId)}
          className="w-100 btn-block btn-warning text-light h4 mb-3 rounded">
          {courseName}
        </button>
      </div>
    );
  }

}
