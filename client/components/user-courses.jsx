import React from 'react';

export default class UserCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
    this.getCourses = this.getCourses.bind(this);
  }

  componentDidMount() {
    console.log('user-courses this.props:', this.props);
    this.getCourses(this.props.userId);
  }

  getCourses(userId) {
    fetch(`/api/users_courses/${userId}`)
      .then(res => res.json())
      .then(coursesArray => this.setState({ courses: coursesArray }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="h-75 d-flex flex-wrap justify-content-center">
        <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
          {/* <i className="far fa-bookmark fa-3x"></i>
          <p className="h2">Courses</p> */}
        </div>
        {
          this.state.courses.map(course => {
            return (
              <Course
                key={course.courseId}
                name={course.name}
                userName={this.props.userName}
                userId={this.props.userId}
                courseId={course.courseId}
                setView={this.props.setView}
              />
            );
          })
        }
      </div>
    );
  }
}

function Course(props) {
  const userName = props.userName;
  const userId = props.userId;
  const courseId = props.courseId;
  const courseName = props.name;

  return (
    <div className="w-100 d-flex justify-content-center">
      <button
        onClick={() => props.setView('myLessons', userName, userId, courseId)}
        className="w-100 btn-block btn-warning text-light h4 mb-3 rounded">
        {courseName}
      </button>
    </div>
  );
}
