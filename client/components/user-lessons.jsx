import React from 'react';
import LessonButton from './lesson-button';

export default class UserLessons extends React.Component {

  handleClick() {
    const userCourse = {
      userId: this.props.userId,
      courseId: this.props.courseId
    };
    this.props.addUserCourse(userCourse);
    this.props.setView('myCourses');
  }

  render() {
    if (!this.props.lessons[0]) {
      return <p>No lessons found for this course</p>;
    }
    if (!this.props.enrollment) {
      return (
        <div className="d-flex flex-column justify-content-center">
          <button
            onClick={() => this.handleClick()}
            className="btn btn-lg text-light btn-warning mx-5 mb-4">
              Add Course
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
