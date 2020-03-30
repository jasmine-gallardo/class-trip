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
