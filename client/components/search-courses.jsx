import React from 'react';

export default class SearchCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryName: '',
      courses: []
    };
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleGetCourses = this.handleGetCourses.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    fetch('/api/categories')
      .then(res => res.json())
      .then(categoriesArray =>
        this.setState({
          categories: categoriesArray
        }))
      .catch(err => console.error(err));
  }

  handleChangeSelect(event) {
    this.setState({
      categoryName: event.target.value
    });
    if (event.target.value) {
      this.handleGetCourses(event.target.value);
    }
  }

  handleGetCourses(categoryName) {
    fetch('/api/courseCategories/' + categoryName)
      .then(res =>
        res.json())
      .then(coursesArray => {
        this.setState({
          courses: coursesArray
        });
      })
      .catch(err => console.error(err));
  }

  handleReset() {
    this.setState({
      categories: [],
      categoryName: '',
      courses: []
    });
  }

  render() {
    return (
      <div className=" d-flex flex-column">
        <div className="mb-3" id="for-cat-search" >
          <label htmlFor="search-cat">Search by Category:</label>
          <input onSelect={this.handleChangeSelect} className="search-box mr-3"
            list="categories" id="cat-search" name="category-search" />
          <button
            className="p-1"
            onClick={this.handleReset}
            id="clear-select" type="button">
              Reset</button>
          <datalist id="categories" >
            {this.state.categories.map((cat, key) => {
              return (
                <option key={cat.categoryId} value={cat.categoryName} >
                  {cat.categoryName} </option>);
            })}
          </datalist>
        </div>
        <div className="mb-1">Category: {this.state.categoryName}</div>
        {this.state.courses.map((course, key) => {
          return (
            <Result
              key={course.courseId}
              courses={this.state.courses}
              name={course.name}
              courseDesc={course.description}
              courseId={course.courseId}
              userName={this.props.userName}
              userId={this.props.userId}
              setView={this.props.setView}
            />
          );
        })}
      </div >
    );
  }
}

function Result(props) {
  const userName = props.userName;
  const userId = props.userId;
  const courseId = props.courseId;
  const courseName = props.name;
  const courseDesc = props.courseDesc;
  return (
    <div className="col-12 card p-3 mb-1 text-white bg-warning">
      <div className="row">
        <div className="col-9">
          <div className="h4">
            {courseName}
          </div>
          <div className="text-dark desc">
            {courseDesc}
          </div>
        </div>
        <button
          onClick={() => props.setView('myLessons', userName, userId, courseId)}
          type="button" className="btn btn-dark my-1"> INFO </button>
      </div>
    </div>
  );
}
