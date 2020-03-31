import React from 'react';
import Course from './course';

export default class UserCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center">
        <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
        </div>
        {
          this.props.allCourses.map(course => {
            return (
              <Course
                key={course.courseId}
                name={course.name}
                userName={this.props.userName}
                userId={this.props.userId}
                courseId={course.courseId}
                setView={this.props.setView}
                setCourse={this.props.setCourse}
                setBackPage={this.props.setBackPage}
                currentPage='myCourses'
                getLessons={this.props.getLessons}
                setLessons={this.props.setLessons}
                setEnrollment={this.props.setEnrollment}
              />
            );
          })
        }
      </div>
    );
  }
}
