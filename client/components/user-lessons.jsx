import React from 'react';
import LessonButton from './lesson-button';

export default class UserLessons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollment: null
    };
  }

  componentDidMount() {
    this.getEnrollment(this.props.userId, this.props.courseId);
  }

  getEnrollment(user, course) {
    fetch(`/api/users_courses/${user}/${course}`)
      .then(res => res.json())
      .then(enrollmentArray => {
        if (!enrollmentArray[0]) {
          this.setState({ enrollment: false }, this.props.getLessons(this.props.courseId));
        } else {
          this.setState({ enrollment: true }, this.props.getLessons(this.props.courseId));
        }
      }
      );
  }

  render() {
    if (!this.props.lessons[0]) {
      return <p>No lessons found for this course</p>;
    }
    if (!this.state.enrollment) {
      return (
        <div className="h-75 d-flex flex-wrap justify-content-center">
          <button
            className="btn-block btn-danger mx-5 mt-n2">Take course
          </button>
          <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
            <i className="far fa-clipboard fa-3x"></i>
            <p className="h2">Lessons</p>
          </div>
          {
            this.props.lessons.map(lesson => {
              return (
                <LessonButton
                  key={lesson.lessonId}
                  lessonId={lesson.lessonId}
                  name={lesson.name}
                  setView={this.props.setView}
                  setLessonId={this.props.setLessonId}
                />
              );
            })
          }
        </div>
      );
    }
    return (
      <div className="h-75 d-flex flex-wrap justify-content-center">
        <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
          <i className="far fa-clipboard fa-3x"></i>
          <p className="h2">Lessons</p>
        </div>
        {
          this.props.lessons.map(lesson => {
            return (
              <LessonButton
                key={lesson.lessonId}
                lessonId={lesson.lessonId}
                name={lesson.name}
                setView={this.props.setView}
                setLessonId={this.props.setLessonId}
              />
            );
          })
        }
      </div>
    );
  }
}
