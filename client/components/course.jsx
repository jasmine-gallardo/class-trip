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
      <div className="col-12 card p-3 mb-1 bg-light">
        <div className="row my-auto">
          <div className="col-9 py-3 pl-5">
            <div className="h4 open-sans mb-0">
              {courseName}
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center col-3">
            <button
              onClick={() => this.setNextPage('myLessons', courseId, backPage)}
              type="button" className="btn btn-info my-1 ">&gt;</button>
          </div>
        </div>
      </div>
    );
  }

}
