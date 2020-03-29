import React from 'react';

export default class CourseSearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.setViewAndCourseId = this.setViewAndCourseId.bind(this);
  }

  setViewAndCourseId(viewName, courseId) {
    this.props.setView(viewName);
    this.props.setCourse(courseId);
  }

  render() {
    const courseId = this.props.courseId;
    const courseName = this.props.name;
    const courseDesc = this.props.courseDesc;
    const backPage = this.props.currentPage;
    return (
      <div className="col-12 card p-3 mb-1 text-white bg-warning">
        <div className="row">
          <div className="col-9">
            <div className="h4">
              {courseName}
            </div>
            <div className="text-dark desc">
              {courseDesc}
            </div>
          </div>
          <button
            onClick={() => {
              this.setViewAndCourseId('myLessons', courseId);
              this.props.setBackPage(backPage);
            }
            }
            type="button" className="btn btn-dark my-1"> INFO </button>
        </div>
      </div>
    );
  }
}
