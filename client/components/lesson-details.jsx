import React from 'react';
export default class LessonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: {}
    };
    this.getLessonDetails = this.getLessonDetails.bind(this);
  }

  componentDidMount() {
    this.getLessonDetails(this.props.lessonId);
  }

  getLessonDetails(lessonId) {
    fetch(`/api/lessons/${lessonId}`)
      .then(res => res.json())
      .then(lessonsObject => this.setState({ lesson: lessonsObject }))
      .catch(err => console.error(err));
  }

  render() {
    if (!this.props.enrollment) {
      return (
        <div className="h-75 p-2 row align-items-center">
          <div>
            <p className="open-sans h2 mb-5 text-info text-center">Oops, you&apos;re not in this class!</p>
            <p className="mb-5 lead text-secondary text-center ">You must be enrolled in the course to view this lesson.</p>
            <div className="text-center">
              <button
                className="btn btn-lg text-light btn-warning">Add Course
              </button>
            </div>

          </div>
        </div>
      );
    }
    return (
      <div className="h-100 p-2">
        <p className="open-sans h2 mb-5 text-info text-center">{this.state.lesson.heading}</p>
        <div className="mb-5 lead text-secondary">
          {this.state.lesson.body}
        </div>
      </div>
    );
  }
}
