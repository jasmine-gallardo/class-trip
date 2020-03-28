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
      <div className="w-100 d-flex justify-content-center">
        <button
          onClick={() => this.setViewAndLessonId('lessonDetails', lessonId)}
          className="w-100 btn-block bg-info text-light h4 mb-3 rounded">
          {lessonName}
        </button>
      </div>
    );
  }
}
