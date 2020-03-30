import React from 'react';

export default class CourseSearchResult extends React.Component {
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
    const courseId = this.props.courseId;
    const courseName = this.props.name;
    const courseDesc = this.props.courseDesc;
    const backPage = this.props.currentPage;
    return (
      <div className="col-12 card p-3 mb-1 bg-lightm mb-2">
        <div className="row">
          <div className="col-9">
            <div className="h4">
              {courseName}
            </div>
            <div className="desc">
              {courseDesc}
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center">
            <button
              onClick={() => this.setNextPage('myLessons', courseId, backPage)}
              type="button" className="btn btn-dark my-1 "> INFO </button>
          </div>
        </div>
      </div>
    );
  }
}
