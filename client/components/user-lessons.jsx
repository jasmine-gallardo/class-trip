import React from 'react';

export default class UserLessons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: []
    };
    this.getLessons = this.getLessons.bind(this);
  }

  componentDidMount() {
    this.getLessons(this.props.courseId);

  }

  getLessons(courseId) {
    fetch(`/api/courses/${courseId}`)
      .then(res => res.json())
      .then(lessonsArray => this.setState({ lessons: lessonsArray }))
      .catch(err => console.error(err));
  }

  render() {
    if (!this.state.lessons[0]) {
      return <p>No lessons found for this course</p>;
    }
    return (
      <div className="h-75 d-flex flex-wrap justify-content-center">
        <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
          <i className="far fa-clipboard fa-3x"></i>
          <p className="h2">Lessons</p>
        </div>
        {
          this.state.lessons.map(lesson => {
            return (
              <Lesson
                key={lesson.lessonId}
                name={lesson.name}
                setView={this.props.setView}
              />
            );
          })
        }
      </div>
    );
  }
}

function Lesson(props) {
  const lessonName = props.name;
  return (
    <div className="w-100 d-flex justify-content-center">
      <button
        onClick={() => props.setView('lessonDetails', lessonName)}
        className="w-100 btn-block bg-info text-light h4 mb-3 rounded">
        {lessonName}
      </button>
    </div>
  );
}
