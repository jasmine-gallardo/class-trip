import React from 'react';

export default class LessonButton extends React.Component {
  constructor(props) {
    super(props);
    this.setViewAndLessonId = this.setViewAndLessonId.bind(this);
  }

  setViewAndLessonId(viewName, lessonId) {
    this.props.setView(viewName);
    this.props.setLessonId(lessonId);
  }

  render() {
    const lessonName = this.props.name;
    const lessonId = this.props.lessonId;
    return (
      <div className="col-12 card p-3 mb-2 bg-info shadow-sm">
        <div className="row my-auto">
          <div className="col-9 py-3 pl-4">
            <div className="h4 open-sans mb-0 text-light">
              {lessonName}
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center col-3">
            <button
              onClick={() => this.setViewAndLessonId('lessonDetails', lessonId)}
              type="button" className="btn btn-dark my-1">&gt;</button>
          </div>
        </div>
      </div>
    );
  }
}
