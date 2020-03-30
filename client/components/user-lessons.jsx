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
        <div className="d-flex flex-column justify-content-center">
          <button
            className="btn btn-lg text-light btn-warning mx-5 mb-4">Add Course
          </button>
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
      <div className="d-flex flex-column justify-content-center">
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
