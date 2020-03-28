import React from 'react';
export default class LessonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: {}
    };
    this.getLessonDetials = this.getLessonDetials.bind(this);
  }

  componentDidMount() {
    this.getLessonDetials(this.props.lessonId);
  }

  getLessonDetials(lessonId) {
    fetch(`/api/lessons/${lessonId}`)
      .then(res => res.json())
      .then(lessonsObject => this.setState({ lesson: lessonsObject }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="bg-light h-100 p-2">
        <h2 className="mb-5">{this.state.lesson.heading}</h2>
        <div className="mb-5">
          {this.state.lesson.body}
        </div>
      </div>
    );
  }
}
