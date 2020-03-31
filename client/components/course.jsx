import React from 'react';

export default class Course extends React.Component {
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
    const courseName = this.props.name;
    const courseId = this.props.courseId;
    const backPage = this.props.currentPage;
    return (
      <div className="col-12 card p-3 mb-2 bg-light shadow-sm">
        <div className="row my-auto">
          <div className="col-9 py-3 pl-4">
            <div className="h4 open-sans mb-0 text-secondary">
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
