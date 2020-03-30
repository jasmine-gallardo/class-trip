import React from 'react';

export default class CourseSearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lessons: [] };
    this.setNextPage = this.setNextPage.bind(this);
  }

  componentDidMount() {
    this.getLessons(this.props.courseId);
  }

  setNextPage(viewName, courseId, backPage) {
    this.props.setLessons(this.state.lessons);
    this.props.setCourse(courseId);
    this.props.setBackPage(backPage);
    this.props.setView(viewName);
  }

  getLessons(courseId) {
    fetch(`/api/courses/${courseId}`)
      .then(res => res.json())
      .then(lessonsArray => this.setState({ lessons: lessonsArray }))
      .catch(err => console.error(err));
  }

  render() {
    const courseId = this.props.courseId;
    const courseName = this.props.name;
    const courseDesc = this.props.courseDesc;
    const backPage = this.props.currentPage;
    return (
      <div className="col-12 card p-3 bg-light mb-2">
        <div className="row">
          <div className="col-9">
            <div className="h4 text-info">
              {courseName}
            </div>
            <div className="desc text-secondary">
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
